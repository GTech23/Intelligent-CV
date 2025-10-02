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

      quillRef.current.on("text-change", () => {
        onChange(quillRef.current.root.innerHTML);
      });
    }
  }, []);

  useEffect(() => {
    if (quillRef.current && value !== quillRef.current.root.innerHTML) {
      quillRef.current.root.innerHTML = value || "";
    }
  }, [value]);

  return <div ref={editorRef} />;
};

// Convert array of strings → <ul><li>…</li></ul>
const arrayToUlHtml = (arr = []) => {
  if (!arr || arr.length === 0) return "";
  return `<ul>${arr
    .map((s) => `<li>${escapeHtml(String(s))}</li>`)
    .join("")}</ul>`;
};

const escapeHtml = (unsafe) =>
  unsafe
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

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

  // load initial content from responsibilities array
  useEffect(() => {
    const cur = (formData.experience || [])[index] || {};
    if (
      Array.isArray(cur.responsibilities) &&
      cur.responsibilities.length > 0
    ) {
      setEditorValue(arrayToUlHtml(cur.responsibilities));
    } else {
      setEditorValue("");
    }
  }, [formData, index]);

  const handleBack = () => {
    query.delete("duty");
    query.delete("expIndex");
    navigate(`?${query.toString()}`);
  };

  const handleSaveNext = () => {
    // Parse only <li> from editorValue
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

  if (index < 0 || index >= experiences.length) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <p className="text-red-500 font-semibold">
          Invalid experience selected.
        </p>
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

      <div className="grid grid-cols-2 gap-8">
        <div>
          <RawQuillEditor value={editorValue} onChange={setEditorValue} />
        </div>

        <div className="overflow-y-auto max-h-[450px] h-full space-y-2">
          {[
            "Developed API integrations using Node.js and Express to connect backend services.",
            "Implemented automated testing with Jest and Mocha.",
            "Optimized server-side performance with caching.",
          ].map((s, i) => (
            <ResultCard key={i} onClick={() => insertSuggestion(s)}>
              {s}
            </ResultCard>
          ))}
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
    </div>
  );
};

export default WorkExperienceDuties;
