import { useRef } from "react";
import { useResume } from "../../../../context/ResumeContext";
import { useNavigate } from "react-router-dom";

const WorkExperienceForm = ({ editIndex }) => {
  const { formData, setFormData } = useResume();
  const navigate = useNavigate();
  const experience = formData.experience || [];
  const index =
    editIndex !== undefined ? Number(editIndex) : experience.length - 1;
  const ref = experience[index] || {};
  const savedRef = useRef(false);

  // Handle changes to experience fields
  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...formData.experience];
    updatedExperience[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      experience: updatedExperience,
    }));
  };

  const handleBack = () => {
    if (!savedRef.current) {
      const isEmpty = Object.values(ref).every((v) => !v);
      if (isEmpty && experience.length > 0) {
        const updatedExperience = [...experience];
        updatedExperience.splice(index, 1);
        setFormData((prev) => ({
          ...prev,
          experience: updatedExperience,
        }));
      }
    }
    navigate(-1);
  };

  const handleSave = () => {
    savedRef.current = true;
    navigate(-1);
  };

  return (
    <div className="flex gap-8">
      <title>Resume Builder</title>
      <div>
        <h1 className="text-4xl font-bold text-gray-700">Experience</h1>
        <p>
          This is going to be easy, we promise! Let's start with your most
          recent job.
        </p>

        <form action="#" className="my-4 items-start gap-8">
          <div key={index} className="grid grid-cols-12 gap-8 mb-8">
            {/* Job Title */}
            <div className="col-span-6">
              <input
                name="position"
                placeholder="Job Title"
                value={ref.position}
                onChange={(e) =>
                  handleExperienceChange(index, "position", e.target.value)
                }
                className="w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Company Name */}
            <div className="col-span-6">
              <input
                name="company"
                placeholder="Company or Organization Name"
                value={ref.company}
                onChange={(e) =>
                  handleExperienceChange(index, "company", e.target.value)
                }
                className="w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Country */}
            <div className="col-span-4">
              <input
                name="country"
                placeholder="Country"
                value={ref.country}
                onChange={(e) =>
                  handleExperienceChange(index, "country", e.target.value)
                }
                className="w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Province */}
            <div className="col-span-4">
              <input
                name="province"
                placeholder="Province or State"
                value={ref.province}
                onChange={(e) =>
                  handleExperienceChange(index, "province", e.target.value)
                }
                className="w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* City */}
            <div className="col-span-4">
              <input
                name="city"
                placeholder="City"
                value={ref.city}
                onChange={(e) =>
                  handleExperienceChange(index, "city", e.target.value)
                }
                className="w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Start Month */}
            <div className="col-span-6">
              <input
                name="startMonth"
                placeholder="Start Month"
                value={ref.startMonth}
                onChange={(e) =>
                  handleExperienceChange(index, "startMonth", e.target.value)
                }
                className="w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Start Year */}
            <div className="col-span-6">
              <input
                type="number"
                name="startYear"
                placeholder="Start Year"
                value={ref.startYear}
                onChange={(e) =>
                  handleExperienceChange(index, "startYear", e.target.value)
                }
                className="w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* End Month */}
            <div className="col-span-6">
              <input
                name="endMonth"
                placeholder="End Month"
                value={ref.endMonth}
                onChange={(e) =>
                  handleExperienceChange(index, "endMonth", e.target.value)
                }
                className="w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* End Year */}
            <div className="col-span-6">
              <input
                type="number"
                name="endYear"
                placeholder="End Year"
                value={ref.endYear}
                onChange={(e) =>
                  handleExperienceChange(index, "endYear", e.target.value)
                }
                className="w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Currently Working Checkbox */}
            <div className="col-span-12 flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-orange-400 w-5 h-5"
                checked={ref.isCurrentlyWorking}
                onChange={(e) =>
                  handleExperienceChange(
                    index,
                    "isCurrentlyWorking",
                    e.target.checked
                  )
                }
              />
              <label>I currently work here</label>
            </div>

            <div className="col-span-12 flex justify-between mt-4">
              <button
                onClick={handleBack}
                type="button"
                className="py-3 rounded-2xl px-9 border cursor-pointer border-gray-400 font-bold"
              >
                Back
              </button>
              <button
                onClick={handleSave}
                type="button"
                className="py-3 bg-orange-400 rounded-2xl border-transparent cursor-pointer text-white px-9 border font-bold"
              >
                Save & Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WorkExperienceForm;
