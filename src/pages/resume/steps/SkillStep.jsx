import { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useResume } from "../../../context/ResumeContext";
import { useNavigate } from "react-router-dom";
import ResultCard from "../../../components/ui/ResultCard"; 

const RawQuillEditor = ({ value, onChange }) => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [["bold", "italic"], [{ list: "bullet" }], ["clean"]],
        },
        placeholder: "List your skills as bullet points...",
      });

      if (value) quillRef.current.root.innerHTML = value;

      quillRef.current.on("text-change", () => {
        onChange(quillRef.current.root.innerHTML);
      });
    }
  }, [value, onChange]);

  useEffect(() => {
    if (quillRef.current && value !== quillRef.current.root.innerHTML) {
      quillRef.current.root.innerHTML = value || "";
    }
  }, [value]);

  return <div ref={editorRef} />;
};

const arrayToUlHtml = (arr = []) =>
  arr && arr.length
    ? `<ul>${arr.map((s) => `<li>${s}</li>`).join("")}</ul>`
    : "";

const SkillStep = () => {
  const { formData, setFormData } = useResume();
  const navigate = useNavigate();

  const [editorValue, setEditorValue] = useState("");

 
  useEffect(() => {
    if (formData.skills && formData.skills.length > 0) {
      setEditorValue(arrayToUlHtml(formData.skills));
    } else {
      setEditorValue("");
    }
  }, [formData.skills]);

  const handleSave = () => {
    const container = document.createElement("div");
    container.innerHTML = editorValue || "";
    const items = Array.from(container.querySelectorAll("li")).map((li) =>
      li.textContent.trim()
    );

    setFormData((prev) => ({
      ...prev,
      skills: items,
    }));

    navigate("/dashboard/app/personalize/summary");
  };

  const insertSuggestion = (skill) => {
    const container = document.createElement("div");
    container.innerHTML = editorValue || "";
    let ul = container.querySelector("ul");
    if (!ul) {
      ul = document.createElement("ul");
      container.appendChild(ul);
    }
    const li = document.createElement("li");
    li.textContent = skill;
    ul.appendChild(li);
    setEditorValue(container.innerHTML);
  };

  return (
    <div className="flex gap-8">
      <div className="max-w-5xl mx-auto w-full">
        <h1 className="text-4xl font-bold text-gray-700">Skills</h1>
        <p>
          You're on a roll. Let's find relevant skills for the job you're
          applying for. Listing 6-10 skills is best.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-6 sm:grid-cols-2">
          {/* Quill editor */}
          <div>
            <RawQuillEditor value={editorValue} onChange={setEditorValue} />
          </div>

          {/* Suggestions */}
          <div className="space-y-2 overflow-y-auto max-h-[400px] mt-8 sm:mt-0">
            {["React", "Node.js", "Project Management"].map((s, i) => (
              <ResultCard key={i} onClick={() => insertSuggestion(s)}>
                {s}
              </ResultCard>
            ))}
          </div>
        </div>

        {/* Buttons section */}
        <div className="flex items-center justify-between mt-18 w-full">
          <button
            onClick={() => navigate(-1)}
            type="button"
            className="py-3 px-9 border border-gray-400 rounded-2xl font-bold text-gray-700 hover:bg-gray-100"
          >
            Back
          </button>
          <button
            onClick={handleSave}
            type="button"
            className="py-3 px-9 cursor-pointer bg-orange-400 text-white rounded-2xl font-bold hover:bg-orange-500"
          >
            Save & Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillStep;
