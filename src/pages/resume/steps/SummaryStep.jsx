import { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import ResultCard from "../../../components/ui/ResultCard";
import { useResume } from "../../../context/ResumeContext";
import { useNavigate } from "react-router-dom";

const RawQuillEditor = ({ value, onChange }) => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            ["bold", "italic", "underline"],
            [{ list: "bullet" }],
            ["clean"],
          ],
        },
        placeholder: "Add, edit, and write here.",
      });

      if (value) {
        quillRef.current.setText(value);
      }

      quillRef.current.on("text-change", (delta, oldDelta, source) => {
        if (source === "user") {
          const plain = quillRef.current.getText();
          onChange(plain);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (quillRef.current) {
      const currentContent = quillRef.current.getText();
      const isDifferent =
        value !== currentContent && value + "\n" !== currentContent;

      if (isDifferent) {
        quillRef.current.setText(value || "");
      }
    }
  }, [value]);

  return <div ref={editorRef} />;
};

const TOAST_DURATION = 2000;

const SummaryStep = () => {
  const { formData, setFormData } = useResume();
  const navigate = useNavigate();

  const [editorValue, setEditorValue] = useState(
    formData?.personal?.summary || ""
  );
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [usedSet, setUsedSet] = useState(new Set());

  useEffect(() => {
    const s = formData?.personal?.summary || "";
    setEditorValue(s);
  }, [formData?.personal?.summary]);

  const handleSummaryChange = (plainText) => {
    setEditorValue(plainText);
    setFormData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        summary: plainText,
      },
    }));
  };

  const normalize = (data) => {
    if (!data) return [];
    if (Array.isArray(data))
      return data.map((it) => (typeof it === "string" ? it : String(it)));
    if (Array.isArray(data.suggestions)) return data.suggestions.map(String);
    if (Array.isArray(data.results)) return data.results.map(String);
    if (Array.isArray(data.duties)) return data.duties.map(String);
    if (data && typeof data === "object") {
      const possible =
        data.text ||
        data.suggestion ||
        data.summary ||
        data.description ||
        data.title;
      if (typeof possible === "string") return [possible];
    }
    return [];
  };

  const fetchSuggestions = async (opts = { replace: false }) => {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(
        "https://intelligent-cv-backend.onrender.com/api/ai/summary",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            // provide context for summary generation if useful
            jobTitle: formData?.personal?.title || "",
          }),
        }
      );

      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      const data = await res.json();
      const items = normalize(data.objectives);

      setSuggestions((prev) => {
        if (opts.replace) return items;
        const setPrev = new Set(prev);
        const merged = [...prev];
        items.forEach((it) => {
          if (!setPrev.has(it)) {
            setPrev.add(it);
            merged.push(it);
          }
        });
        return merged;
      });

      if (opts.replace) setUsedSet(new Set());
    } catch (err) {
      setError(err.message || "Failed to fetch suggestions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSuggestions({ replace: true });
  }, []);

  const insertSuggestion = (text) => {
    setEditorValue((prev) => {
      const joined =
        prev && prev.trim().length > 0 ? `${prev}\n\n${text}` : text;
      // update formData to keep summary synced
      setFormData((prevState) => ({
        ...prevState,
        personal: {
          ...prevState.personal,
          summary: joined,
        },
      }));
      return joined;
    });
  };

  const handleSuggestionClick = async (text) => {
    if (usedSet.has(text)) return;

    try {
      insertSuggestion(text);

      setUsedSet((prev) => {
        const next = new Set(prev);
        next.add(text);
        return next;
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-2 text-gray-700 sm:text-4xl">
            Professional Summary
          </h1>
          <p>
            This section will usually be one of the first things a hiring
            manager reads. It tells them, “Here's who I am, and here's what I
            can do for your company”.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <RawQuillEditor value={editorValue} onChange={handleSummaryChange} />
        </div>

        <div className="overflow-y-auto mt-8 max-h-[450px] h-full space-y-2">
          {loading && (
            <div className="flex items-center gap-3 p-4">
              <div
                aria-hidden
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  border: "3px solid rgba(0,0,0,0.15)",
                  borderTopColor: "rgba(0,0,0,0.6)",
                  animation: "spin 1s linear infinite",
                }}
              />
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              <div className="text-sm text-gray-600">
                Generating suggestions…
              </div>
            </div>
          )}

          {error && (
            <div className="p-4 text-sm text-red-500">Error: {error}</div>
          )}

          {!loading && !error && suggestions.length === 0 && (
            <div className="p-4 text-sm text-gray-600">
              No suggestions found.
            </div>
          )}

          {!loading &&
            !error &&
            suggestions.map((s, i) => {
              const used = usedSet.has(s);
              return (
                <div
                  key={i}
                  className={`transition-opacity duration-200 ${
                    used ? "opacity-40 pointer-events-none" : ""
                  }`}
                >
                  <ResultCard handleClick={() => handleSuggestionClick(s)}>
                    {s}
                  </ResultCard>
                </div>
              );
            })}
        </div>
      </div>

      <div className="col-span-1 flex items-center my-4 py-8 justify-between">
        <button
          onClick={() => navigate(-1)}
          className="py-3 rounded-2xl px-9 border cursor-pointer border-gray-400 font-bold"
        >
          Back
        </button>
        <button
          onClick={() => navigate("/dashboard/app/personalize/reference")}
          type="button"
          className="py-3 bg-orange-400 rounded-2xl border-transparent cursor-pointer text-white px-9 border-1 font-bold"
        >
          Save & Next
        </button>
      </div>
    </div>
  );
};

export default SummaryStep;
