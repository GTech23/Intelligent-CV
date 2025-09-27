import React from "react";
import { useResume } from "../../../../context/ResumeContext";
import { useNavigate } from "react-router-dom";

const WorkExperienceForm = () => {
  const { formData, setFormData } = useResume();
  const navigate = useNavigate();

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...formData.experience];
    updatedExperience[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      experience: updatedExperience,
    }));
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
          {formData.experience.map((exp, index) => (
            <div key={index} className="grid grid-cols-12 gap-8 mb-8">
              {/* Job Title */}
              <div className="col-span-6">
                <input
                  name="position"
                  placeholder="Job Title"
                  value={exp.position}
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
                  value={exp.company}
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
                  value={exp.country}
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
                  value={exp.province}
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
                  value={exp.city}
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
                  value={exp.startMonth}
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
                  value={exp.startYear}
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
                  value={exp.endMonth}
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
                  value={exp.endYear}
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
                  checked={exp.isCurrentlyWorking}
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
                  type="button"
                  className="py-3 rounded-2xl px-9 border cursor-pointer border-gray-400 font-bold"
                >
                  Back
                </button>
                <button
                  type="button"
                  className="py-3 bg-orange-400 rounded-2xl border-transparent cursor-pointer text-white px-9 border font-bold"
                >
                  Save & Next
                </button>
              </div>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default WorkExperienceForm;
