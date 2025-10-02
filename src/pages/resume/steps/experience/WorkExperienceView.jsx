import { FaPlus, FaTrash, FaPencil } from "react-icons/fa6";
import useQuery from "../../../../hooks/UseQuery";
import { useNavigate } from "react-router-dom";
import { useResume } from "../../../../context/ResumeContext";
import WorkExperienceForm from "./WorkExperienceForm";
import WorkExperienceDuties from "./WorkExperienceDuties";

const WorkExperienceView = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useResume();
  const query = useQuery();

  const experiences = formData.experience || [];

  // Keep original indices while filtering empty entries for display
  const visible = experiences
    .map((exp, idx) => ({ exp, idx }))
    .filter(({ exp }) => {
      if (!exp) return false;
      // treat responsibilities as meaningful content too
      const hasField = Object.values(exp).some(
        (v) => v && v.toString().trim() !== ""
      );
      const hasDuties =
        Array.isArray(exp.responsibilities) && exp.responsibilities.length > 0;
      return hasField || hasDuties;
    });

  const showForm =
    query.get("add_experience") === "true" || query.has("expIndex");
  const showDuty = query.get("duty") === "responsibilities";

  const handleDeleteExperience = (originalIndex) => {
    const updated = [...(formData.experience || [])];
    updated.splice(originalIndex, 1);
    setFormData((prev) => ({ ...prev, experience: updated }));
  };

  const redirectToForm = () => {
    // compute new index synchronously
    const newIndex = (formData.experience || []).length;
    const blank = {
      position: "",
      company: "",
      city: "",
      country: "",
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
      responsibilities: [],
      responsibilitiesHtml: "",
    };

    setFormData((prev) => ({
      ...prev,
      experience: [...(prev.experience || []), blank],
    }));

    query.set("add_experience", "true");
    query.set("expIndex", String(newIndex));
    navigate(`?${query.toString()}`);
  };

  return (
    <>
      {showDuty ? (
        <WorkExperienceDuties />
      ) : showForm ? (
        <WorkExperienceForm />
      ) : (
        <div className="max-w-5xl w-full mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-gray-700">
            Review your work experience
          </h1>
          <p>Edit, update, or add new roles to complete your resume.</p>

          {visible.length === 0 && (
            <div className="border-1 bg-[#EFF1E4] border-dotted min-h-50 rounded-2xl my-4 flex items-center justify-center">
              <button
                onClick={redirectToForm}
                className="flex gap-2 items-center font-bold text-md cursor-pointer hover:underline"
              >
                <FaPlus />
                Add experience
              </button>
            </div>
          )}

          {visible.map(({ exp, idx }) => (
            <div key={idx} className="p-4 bg-white rounded-lg min-h-50 mt-8">
              <div className="flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-8">
                    <p className="text-blue-600 font-bold bg-blue-100 p-3 rounded-full w-10 h-10 flex items-center justify-center">
                      {idx + 1}
                    </p>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-4">
                        <p className="font-bold">{exp.position}</p>
                        <p>| {exp.company}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="text-sm">
                          {exp.city}, {exp.country}
                        </p>
                        <p className="text-sm">
                          | {exp.startMonth} {exp.startYear} - {exp.endMonth}{" "}
                          {exp.endYear}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 justify-between">
                    <button
                      onClick={() => {
                        query.set("expIndex", String(idx));
                        navigate(`?${query.toString()}`);
                      }}
                      className="flex items-center font-bold border-zinc-400 gap-3 cursor-pointer p-2 border rounded-md"
                    >
                      <FaPencil />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteExperience(idx)}
                      className="flex items-center font-bold border-zinc-400 gap-3 cursor-pointer p-3 border rounded-full"
                    >
                      <FaTrash className="text-red-500" />
                    </button>
                  </div>
                </div>

                <div className="my-3 bg-[#f8f9fb] p-4">
                  <span className="font-semibold text-gray-600">
                    Job description
                  </span>
                  <ul className="list-disc list-inside">
                    {exp.responsibilities && exp.responsibilities.length > 0 ? (
                      exp.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))
                    ) : (
                      <li className="text-gray-500 italic">
                        No description provided.
                      </li>
                    )}
                  </ul>

                  <button
                    onClick={() => {
                      query.set("duty", "responsibilities");
                      query.set("expIndex", String(idx));
                      navigate(`?${query.toString()}`);
                    }}
                    className="mt-2 text-blue-500 font-bold hover:underline"
                  >
                    {exp.responsibilities?.length > 0
                      ? "Edit responsibilities"
                      : "Add responsibilities"}
                  </button>
                </div>
              </div>

              <button
                onClick={redirectToForm}
                className="flex gap-2 items-center font-bold text-md cursor-pointer hover:underline mt-4"
              >
                <FaPlus />
                Add another experience
              </button>
            </div>
          ))}

          <div className="flex items-center justify-between my-3">
            <button
              onClick={() => navigate(-1)}
              type="button"
              className="py-3 bg-white rounded-2xl px-9 border cursor-pointer border-gray-400 font-bold"
            >
              Back
            </button>
            <button
              type="button"
              className="py-3 bg-orange-400 rounded-2xl border-transparent cursor-pointer text-white px-9 font-bold"
            >
              Save & Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkExperienceView;
