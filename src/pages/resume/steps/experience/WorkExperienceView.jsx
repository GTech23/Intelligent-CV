import { FaPlus, FaTrash, FaPencil } from "react-icons/fa6";
import useQuery from "../../../../hooks/UseQuery";
import { useNavigate } from "react-router-dom";
import { useResume } from "../../../../context/ResumeContext";
import WorkExperienceForm from "./WorkExperienceForm";
const WorkExperienceView = () => {
  const navigate = useNavigate();
  const { formData } = useResume();
  const workExperience = formData.experience || [];
  const query = useQuery();
  const showForm = query.get("add_reference") === "true";
  const redirectToForm = () => {
    query.set("add_experience", "true");
    navigate(`?${query.toString()}`);
  };
  return (
    <>
      {showForm ? (
        <WorkExperienceForm />
      ) : (
        <div className="max-w-5xl  w-full mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-gray-700">
            Review your work experience
          </h1>
          <p>Edit, update, or add new roles to complete your resume.</p>

          {formData.education.length === 0 && (
            <div className="border-1 bg-[#EFF1E4] border-dotted min-h-50 rounded-2xl my-4 flex items-center justify-center">
              <button
                onClick={redirectToForm}
                className="flex gap-2 items-center font-bold text-md cursor-pointer hover:underline"
              >
                <FaPlus />
                Add education
              </button>
            </div>
          )}
          {workExperience.length > 0 &&
            workExperience.map((exp, index) => {
              return (
                <div
                  key={index}
                  className="p-4 bg-white rounded-lg min-h-50 mt-8"
                >
                  <div className="flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-8">
                        <p className="text-blue-600 font-bold bg-blue-100 p-3 rounded-full w-10 h-10 flex items-center justify-center">
                          {index + 1}
                        </p>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-4">
                            <p className="font-bold">{exp.position} </p>
                            <p>| {exp.company}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <p className="text-sm">
                              {exp.city}, {exp.country}
                            </p>
                            <p className="text-sm">
                              | {exp.startMonth} {exp.startYear} -{" "}
                              {exp.endMonth} {exp.endYear}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 justify-between">
                        <button className="flex items-center font-bold border-zinc-400 gap-3 cursor-pointer p-2 border rounded-md">
                          <FaPencil />
                          Edit
                        </button>
                        <button className="flex  items-center font-bold border-zinc-400 gap-3 cursor-pointer p-3 border rounded-full">
                          <FaTrash className="text-red-500" />
                        </button>
                      </div>
                    </div>

                    <div className="my-3 bg-[#f8f9fb] p-4">
                      <span className="font-semibold text-gray-600">
                        Job description
                      </span>
                      <ul className="list-disc list-inside">
                        {exp.responsibilities.map((duty, index) => (
                          <li key={index} className="text-sm text-gray-700">
                            {duty}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          <button
            onClick={redirectToForm}
            className="flex gap-2 items-center font-bold text-md cursor-pointer hover:underline mt-4"
          >
            <FaPlus />
            Add another experience
          </button>
          <div className="flex items-center justify-between my-3">
            <button
              onClick={() => navigate(-1)}
              type="button"
              className="py-3  bg-white rounded-2xl px-9 border-1 cursor-pointer border-gray-400 font-bold "
            >
              Back
            </button>
            <button
              type="button"
              className="py-3 bg-orange-400 rounded-2xl border-transparent cursor-pointer text-white px-9 border-1  font-bold "
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
