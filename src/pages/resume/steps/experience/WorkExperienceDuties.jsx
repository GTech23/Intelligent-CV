import { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import ResultCard from "../../../../components/ui/ResultCard";
import { useNavigate } from "react-router-dom";
import { useResume } from "../../../../context/ResumeContext";
import useQuery from "../../../../hooks/UseQuery";

const RawQuillEditor = ({ value, onChange }) => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            [{ list: "bullet" }],
            ["clean"],
          ],
        },
        placeholder: "Add responsibilities as bullet points...",
      });

      if (value) quillRef.current.root.innerHTML = value;

      quillRef.current.on("text-change", () =>
        onChange(quillRef.current.root.innerHTML)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // mount only

  useEffect(() => {
    if (quillRef.current && value !== quillRef.current.root.innerHTML) {
      quillRef.current.root.innerHTML = value || "";
    }
  }, [value]);

  return <div ref={editorRef} />;
};

const arrayToUlHtml = (arr = []) =>
  !arr || arr.length === 0
    ? ""
    : `<ul>${arr.map((s) => `<li>${escapeHtml(String(s))}</li>`).join("")}</ul>`;

const escapeHtml = (unsafe) =>
  unsafe
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const TOAST_DURATION = 2000;

const WorkExperienceDuties = () => {
  const { formData, setFormData } = useResume();
  const navigate = useNavigate();
  const query = useQuery();

  const experiences = formData.experience || [];
  const expIndexParam = parseInt(query.get("expIndex"), 10);
  const index = Number.isFinite(expIndexParam)
    ? expIndexParam
    : experiences.length - 1;

  const current = experiences[index] || {};

  const [editorValue, setEditorValue] = useState("");
  const [suggestions, setSuggestions] = useState([]); // array of strings
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [toast, setToast] = useState(null);
  const [usedSet, setUsedSet] = useState(new Set()); // tracks clicked suggestions (grayed out)

  // load initial content from responsibilities
  useEffect(() => {
    const cur = (formData.experience || [])[index] || {};
    if (Array.isArray(cur.responsibilities) && cur.responsibilities.length > 0) {
      setEditorValue(arrayToUlHtml(cur.responsibilities));
    } else {
      setEditorValue("");
    }
  }, [formData, index]);

  // fetch suggestions
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchSuggestions() {
      setError(null);
      setLoading(true);

      try {
        const res = await fetch(
          "https://intelligent-cv-backend.onrender.com/api/ai/",
          {
            method: "POST",
            signal,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ jobTitle: current?.position || "" }),
          }
        );

        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        const data = await res.json();

        // Normalize response into array of strings
        let items = [];
        if (Array.isArray(data)) items = data;
        else if (Array.isArray(data.duties)) items = data.duties;
        else if (Array.isArray(data.suggestions)) items = data.suggestions;
        else if (Array.isArray(data.results)) items = data.results;
        else if (Array.isArray(data.items)) items = data.items;
        else if (data && typeof data === "object") {
          const possible =
            data.text ||
            data.duty ||
            data.description ||
            data.title ||
            data[0]; // fallback
          if (typeof possible === "string") items = [possible];
        }

        items = items.map((it) =>
          typeof it === "string" ? it : JSON.stringify(it)
        );

        setSuggestions(items);
        // reset usedSet when suggestions change
        setUsedSet(new Set());
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Failed to fetch suggestions");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchSuggestions();
    return () => controller.abort();
  }, [current?.position]);

  const handleBack = () => {
    query.delete("duty");
    query.delete("expIndex");
    navigate(`?${query.toString()}`);
  };

  const handleSaveNext = () => {
    const container = document.createElement("div");
    container.innerHTML = editorValue || "";
    const items = Array.from(container.querySelectorAll("li")).map((li) =>
      li.textContent.trim()
    );

    setFormData((prev) => {
      const prevExp = prev.experience || [];
      const updated = prevExp.map((e, i) =>
        i === index ? { ...e, responsibilities: items } : e
      );
      return { ...prev, experience: updated };
    });

    query.delete("duty");
    query.delete("expIndex");
    query.delete("add_experience");
    navigate(`?${query.toString()}`);
  };

  const insertSuggestion = (text) => {
    const container = document.createElement("div");
    container.innerHTML = editorValue || "";
    let ul = container.querySelector("ul");
    if (!ul) {
      ul = document.createElement("ul");
      container.appendChild(ul);
    }
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
    setEditorValue(container.innerHTML);
  };

  const handleSuggestionClick = async (text) => {
    // if already used, do nothing
    if (usedSet.has(text)) return;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }

      insertSuggestion(text);

      // mark used (gray out)
      setUsedSet((prev) => {
        const next = new Set(prev);
        next.add(text);
        return next;
      });

      setToast("Copied to Clipboard");
      setTimeout(() => setToast(null), TOAST_DURATION);
    } catch (err) {
      setToast("Failed to copy");
      setTimeout(() => setToast(null), TOAST_DURATION);
    }
  };

  if (index < 0 || index >= experiences.length) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <p className="text-red-500 font-semibold">Invalid experience selected.</p>
        <button
          onClick={() => {
            query.delete("duty");
            query.delete("expIndex");
            navigate(`?${query.toString()}`);
          }}
          className="mt-4 px-4 py-2 border rounded"
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-700">
          Let's list your responsibilities
        </h1>
        <p>Start with bullet points (suggestions on the right).</p>
      </div>

      <p className="my-3 font-bold">
        {experiences[index]?.position || "Untitled Role"} |{" "}
        {experiences[index]?.company || "Company"}
      </p>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <RawQuillEditor value={editorValue} onChange={setEditorValue} />
        </div>

        <div className="overflow-y-auto mt-12 max-h-[450px] h-full space-y-2 lg:mt-0">
          {/* Spinner / loading */}
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
              <div className="text-sm text-gray-600">Fetching suggestions…</div>
            </div>
          )}

          {error && (
            <div className="p-4 text-sm text-red-500">Failed to load: {error}</div>
          )}

          {!loading && !error && suggestions.length === 0 && (
            <div className="p-4 text-sm text-gray-600">No suggestions found.</div>
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
          onClick={handleBack}
          className="py-3 rounded-2xl px-9 border cursor-pointer border-gray-400 font-bold"
        >
          Back
        </button>
        <button
          onClick={handleSaveNext}
          className="py-3 bg-orange-400 rounded-2xl text-white px-9 border font-bold"
        >
          Save & Next
        </button>
      </div>

      {/* Toast */}
      <div
        aria-live="polite"
        className="fixed bottom-8 right-8 z-50"
        style={{ pointerEvents: "none" }}
      >
        {toast && (
          <div
            className="inline-block px-4 py-2 rounded shadow-lg bg-black text-white"
            style={{ pointerEvents: "auto" }}
          >
            {toast}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkExperienceDuties;
