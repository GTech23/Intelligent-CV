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
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [skills, setSkills] = useState([]);
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

  const insertSkills = (skill) => {
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

  const fetchSkill = async () => {
    setError(null);
    setLoading(true);
    try {
          const res = await fetch("https://intelligent-cv-backend.onrender.com/api/ai/skills", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              jobTitle: formData?.personal?.title || "",
            }),
          });

          if (!res.ok) throw new Error(`Request failed (${res.status})`);
          const data = await res.json();
          const items = data.skills || [];
          setSkills(items)
    } catch (err) {
      setError(err.message || "Failed to fetch suggestions");
      console.error(err.message)
    } finally {
      setLoading(false);
    }
  };

 useEffect(() => { 
    fetchSkill();

  }, [])


  return (
    <div className="">
      <div className="max-w-5xl mx-auto w-full">
        <h1 className="text-2xl font-bold text-gray-700 sm:text-4xl">Skills</h1>
        <p>
          You're on a roll. Let's find relevant skills for the job you're
          applying for. Listing 6-10 skills is best.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-6 sm:grid-cols-2">
      
          <div>
            <RawQuillEditor value={editorValue} onChange={setEditorValue} />
          </div>

          {/* Suggestions */}
          <div className="space-y-2 overflow-y-auto max-h-[400px] mt-8 sm:mt-0">
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
              <div className="text-sm text-gray-600">Generating suggestions…</div>
            </div>
          )}

          {error && <div className="p-4 text-sm text-red-500">Error: {error}</div>}

          {!loading && !error && skills.length === 0 && (
            <div className="p-4 text-sm text-gray-600">No skill found.</div>
          )}

            {skills.map((skill, index) => (
              <ResultCard
                key={index}
              
                handleClick={() => insertSkills(skill)}
                
              >{skill}</ResultCard>
            ))}
          </div>
        </div>

       
      </div>
       {/* Buttons section */}
        <div className="flex items-center justify-between my-18 w-full">
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
  );
};

export default SkillStep;
