import "quill/dist/quill.snow.css";
import { FaPlus } from "react-icons/fa6";
import { useResume } from "../../../context/ResumeContext";
import { FiTrash } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const SkillStep = () => {
  const { formData, setFormData } = useResume();
  const navigate = useNavigate();

  const handleSkillChange = (index, value) => {
    const updatedCert = [...formData.skills];
    updatedCert[index] = value;

    setFormData((prev) => ({
      ...prev,
      skills: updatedCert,
    }));
  };

  const handleAddSkill = () => {
    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, ""],
    }));
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = formData.skills.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      skills: updatedSkills,
    }));
  };

  return (
    <>
      <div className="flex gap-8">
        <title>Resume Builder</title>
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-700">Skills</h1>
          <p>
            You're on a roll. Let's find relevant skills for the job your
            applying for. Listing 6-10 skills is best.
          </p>

          <form action="#" className="my-4  items-start gap-8">
            <div className="grid grid-cols-1 gap-4">
              {formData.skills.map((skill, index) => (
                <div key={index} className="relative w-full mb-1">
                  <input
                    name={`skill_id${index}`}
                    id={`skill_id${index}`}
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                    value={skill}
                    placeholder={`Skill ${index + 1}`}
                    className="w-full px-6 pr-12 py-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />

                  <button
                    onClick={() => handleRemoveSkill(index)}
                    aria-label="Remove Skill"
                    type="button"
                    className="absolute right-3 cursor-pointer top-1/2 -translate-y-1/2 text-red-500 hover:text-red-700"
                  >
                    <FiTrash size={18} />
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={handleAddSkill}
                className="flex items-center gap-2"
              >
                <FaPlus />
                <span className="hover:underline cursor-pointer">
                  Add another skill
                </span>
              </button>

              <div className=" col-span-1 flex items-center justify-between">
                <button
                  onClick={() => navigate(-1)}
                  type="button"
                  className="py-3 rounded-2xl px-9 border-1 cursor-pointer border-gray-400 font-bold "
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
          </form>
        </div>
      </div>
    </>
  );
};

export default SkillStep;
