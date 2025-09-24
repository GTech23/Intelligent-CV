import React from "react";
import { useResume } from "../../../../context/ResumeContext";

const EducationForm = () => {
  const { formData, setFormData } = useResume();

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...formData.education];
    updatedEducation[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      education: updatedEducation,
    }));
  };

  return (
    <div className="flex gap-8">
      <title>Resume Builder</title>
      <div className="max-w-5xl mx-auto w-full">
        <h1 className="text-4xl font-bold text-gray-700">Education</h1>
        <p>
          Great job! You're onto the next section. Where did you attend college
          or university?
        </p>

        <form action="#" className="my-4 flex items-start gap-8">
          <div className="grid grid-cols-2 w-full gap-8">
            {formData.education.map((edu, i) => {
              return (
                <>
                  <div>
                    <input
                      name="school"
                      placeholder="School Name"
                      value={edu.school}
                      onChange={(e) =>
                        handleEducationChange(i, "school", e.target.value)
                      }
                      className="w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      name="location"
                      placeholder="School Location"
                      value={edu.location}
                      onChange={(e) =>
                        handleEducationChange(i, "location", e.target.value)
                      }
                      className="w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      name="degree"
                      placeholder="Degree or Program"
                      value={edu.degree}
                      onChange={(e) =>
                        handleEducationChange(i, "degree", e.target.value)
                      }
                      className="w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      name="field-of-study"
                      placeholder="Field of Study"
                      value={edu.fieldOfStudy}
                      onChange={(e) =>
                        handleEducationChange(i, "fieldOfStudy", e.target.value)
                      }
                      className="w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      name="graduation-month"
                      placeholder="Graduation Month"
                      value={edu.graduationMonth}
                      onChange={(e) =>
                        handleEducationChange(
                          0,
                          "graduationMonth",
                          e.target.value
                        )
                      }
                      className="w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      name="graduation-year"
                      placeholder="Graduation Year"
                      value={edu.graduationYear}
                      onChange={(e) =>
                        handleEducationChange(
                          0,
                          "graduationYear",
                          e.target.value
                        )
                      }
                      className="w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="col-span-2 flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="accent-orange-400 w-5 h-5"
                      name="removeGraduationDate"
                      checked={edu.removeGraduationDate}
                      onChange={(e) =>
                        handleEducationChange(
                          0,
                          "removeGraduationDate",
                          e.target.checked
                        )
                      }
                    />
                    <label htmlFor="removeGraduationDate">
                      Remove graduation date from resume
                    </label>
                  </div>
                </>
              );
            })}

            <button
              type="button"
              className="py-3 rounded-2xl px-9 border-1 cursor-pointer border-gray-400 font-bold"
            >
              Back
            </button>
            <button
              type="submit"
              className="py-3 bg-orange-400 rounded-2xl border-transparent cursor-pointer text-white px-9 border-1 font-bold"
            >
              Save & Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EducationForm;
