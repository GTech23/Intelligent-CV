import { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import ResultCard from "../../../components/ui/ResultCard";
import { useResume } from "../../../context/ResumeContext";

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
        placeholder: "Add, edit, and write here.",
      });

      quillRef.current.root.innerHTML = value || "";

      quillRef.current.on("text-change", () => {
        const textContent = quillRef.current.root.textContent;
        onChange(textContent);
      });
    }
  }, [onChange, value]);

  useEffect(() => {
    if (quillRef.current && value !== quillRef.current.root.innerHTML) {
      quillRef.current.root.innerHTML = value || "";
    }
  }, [value]);

  return <div ref={editorRef} />;
};

const SummaryStep = () => {
  const { formData, setFormData } = useResume();

  const handleSummaryChange = (newSummary) => {
    setFormData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        summary: newSummary,
      },
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-700">
          Professional Summary
        </h1>
        <p>
          This section will usually be one of the first things a hiring manager
          reads. It tells them, “Here's who I am, and here's what I can do for
          your company”.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <RawQuillEditor
            value={formData.personal.summary || ""}
            onChange={handleSummaryChange}
          />
        </div>

        <div className="overflow-y-auto max-h-[450px] h-full">
          <ResultCard>
            Seeking to utilize excellent communication, interpersonal, and
            organizational skills to complete tasks. Reliable with a good work
            ethic and the ability to quickly adapt to new tasks and
            environments.
          </ResultCard>
          <ResultCard>
            Highly motivated and detail-oriented professional with expertise in
            data analysis, project management, and process improvement. Adept at
            troubleshooting and resolving complex issues. Skilled in developing
            and implementing innovative strategies to reduce costs and increase
            efficiency.
          </ResultCard>
          <ResultCard>
            Adaptable professional with [Number] years of work experience and
            proven knowledge of leadership, problem-solving, and prioritization.
            Aiming to leverage my abilities to successfully fill the [Job Title]
            role at your company.
          </ResultCard>
        </div>
      </div>

      <div className="col-span-1 flex items-center my-4 py-8 justify-between">
        <button className="py-3 rounded-2xl px-9 border-1 cursor-pointer border-gray-400 font-bold">
          Back
        </button>
        <button className="py-3 bg-orange-400 rounded-2xl border-transparent cursor-pointer text-white px-9 border-1 font-bold">
          Save & Next
        </button>
      </div>
    </div>
  );
};

export default SummaryStep;
