import { FaPlus, FaTrash } from "react-icons/fa6";
import useQuery from "../../../../hooks/UseQuery";
import { useNavigate } from "react-router-dom";
import { useResume } from "../../../../context/ResumeContext";

import EducationForm from "./EducationForm";

const EducationStepView = () => {
  const { formData, setFormData } = useResume();

  const education = (formData.education || []).filter((ref) => {
    if (!ref) return false;
    return Object.values(ref).some((v) => v && v.toString().trim() !== "");
  });
  const query = useQuery();
  const navigate = useNavigate();
  const showForm =
    query.get("add_school") === "true" || query.has("edit_education");

  const redirectToForm = () => {
    query.set("add_school", "true");
    setFormData((prev) => ({
      ...prev,
      education: [
        ...(prev.education || []),
        {
          school: "",
          degree: "",
          fieldOfStudy: "",
          graduationMonth: "",
          graduationYear: "",
          location: "",
          removeGraduationDate: false,
        },
      ],
    }));

    navigate(`?${query.toString()}`);
  };

  const handleEditEducation = (index) => {
    query.set("edit_education", index);
    navigate(`?${query.toString()}`);
  };

  const handleDeleteEducation = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setFormData((prev) => ({
      ...prev,
      education: updatedEducation,
    }));
    if (updatedEducation.length === 0) {
      query.delete("edit_education");
      navigate(`?${query.toString()}`);
    } else {
      navigate(`?${query.toString()}`);
    }
  };

  return (
    <>
      {showForm ? (
        <EducationForm />
      ) : (
        <div className="max-w-5xl  w-full mx-auto">
          <h1 className="text-2xl font-bold text-gray-700 sm:text-4xl">
            Education Summary
          </h1>
          <p>Add, edit, or delete your education.</p>

          {education.length === 0 && (
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

          <div>
            {education.length > 0 &&
              education.map((edu, index) => {
                return (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-lg min-h-25 mt-8"
                  >
                    <div className="flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 sm:gap-8">
                          <p className="text-blue-600 font-bold bg-blue-100 p-3 rounded-full w-10 h-10 flex items-center justify-center">
                            {index + 1}
                          </p>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-1 sm:gap-4">
                              <p className="font-bold">
                                {edu.degree} in {edu.fieldOfStudy}
                              </p>
                              <p>| {edu.school}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <p className="text-sm">{edu.location}</p>
                              {!edu.removeGraduationDate && (
                                <p className="text-sm">
                                  | Graduated {(edu.graduationMonth).slice(0,3)}{" "}
                                  {edu.graduationYear}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 justify-between">
                          <button
                            onClick={() => handleEditEducation(index)}
                            className="flex items-center font-bold border-zinc-400 gap-3 cursor-pointer p-2 border rounded-md"
                          >
                            <FaPlus className="hidden sm:block" />
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteEducation(index)}
                            className="flex  items-center font-bold border-zinc-400 gap-3 cursor-pointer p-3 border rounded-full"
                          >
                            <FaTrash className="text-red-500" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

           {education.length !== 0 && ( 
            <button
              onClick={redirectToForm}
              className="flex gap-2 items-center font-bold text-md cursor-pointer hover:underline mt-4"
            >
              <FaPlus />
              Add another education
            </button>)}
          </div>

          <div className="flex items-center justify-between my-3">
            <button
              onClick={() => navigate(-1)}
              className="py-3 bg-white rounded-2xl px-9 border-1 cursor-pointer border-gray-400 font-bold "
            >
              Back
            </button>
            <button
              onClick={() => navigate("/dashboard/app/personalize/certification")}
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

export default EducationStepView;
