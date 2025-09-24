import { FaPlus, FaTrash, FaPencil } from "react-icons/fa6";
import useQuery from "../../../../hooks/UseQuery";
import { useNavigate } from "react-router-dom";
import { useResume } from "../../../../context/ResumeContext";

const WorkExperienceView = () => {
  const navigate = useNavigate();
  const { formData } = useResume();
  const workExperience = formData.experience;
  console.log(workExperience.length);
  const query = useQuery();
  const redirectToForm = () => {
    query.set("add_experience", "true");
    navigate(`?${query.toString()}`);
  };
  return (
    <>
      <div className="max-w-5xl  w-full mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-700">
          Review your work experience
        </h1>
        <p>Edit, update, or add new roles to complete your resume.</p>

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
                      <p>1</p>
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
                            | {exp.startMonth} {exp.startYear} - {exp.endMonth}{" "}
                            {exp.endYear}
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

        <div className="flex items-center justify-between my-3">
          <button className="py-3 bg-white rounded-2xl px-9 border-1 cursor-pointer border-gray-400 font-bold ">
            Back
          </button>
          <button className="py-3 bg-orange-400 rounded-2xl border-transparent cursor-pointer text-white px-9 border-1  font-bold ">
            Save & Next
          </button>
        </div>
      </div>
    </>
  );
};

export default WorkExperienceView;

/*

<div className="border-1 bg-[#EFF1E4] border-dotted min-h-50 rounded-2xl my-4 flex flex-col  text-center items-center justify-center">
            <div>
              <p className="font-bold text-xl">No work experience added yet.</p>
              <p>Start with your most recent job to build your resume.</p>
            </div>
            <button
              onClick={redirectToForm}
              className="flex gap-2 bg-black text-white  py-2 px-6 rounded-lg my-3 items-center font-bold text-md cursor-pointer hover:underline"
            >
              <FaPlus />
              Add experience
            </button>
          </div>
*/
