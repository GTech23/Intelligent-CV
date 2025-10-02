import { useRef } from "react";
import { useResume } from "../../../../context/ResumeContext";
import { useNavigate } from "react-router-dom";
import useQuery from "../../../../hooks/UseQuery";

const WorkExperienceForm = () => {
  const { formData, setFormData } = useResume();
  const navigate = useNavigate();
  const query = useQuery();

  const experiences = formData.experience || [];

  // resolve editing index from query param
  const expIndexParam = parseInt(query.get("expIndex"), 10);
  const index = Number.isFinite(expIndexParam)
    ? expIndexParam
    : experiences.length - 1;
  const ref = experiences[index] || {};
  const savedRef = useRef(false);

  const handleExperienceChange = (index, field, value) => {
    setFormData((prev) => {
      const updated = (prev.experience || []).map((e, i) =>
        i === index ? { ...e, [field]: value } : e
      );
      return { ...prev, experience: updated };
    });
  };

  const handleBack = () => {
    // if user cancels while adding a blank experience, remove it
    if (!savedRef.current) {
      const isEmpty = Object.values(ref).every((v) => !v);
      if (isEmpty && experiences.length > 0) {
        const updated = [...experiences];
        updated.splice(index, 1);
        setFormData((prev) => ({ ...prev, experience: updated }));
      }
    }
    // go back to list (clear add/edit params)
    query.delete("add_experience");
    query.delete("expIndex");
    navigate(`?${query.toString()}`);
  };

  const handleSaveToList = () => {
    savedRef.current = true;
    // simply return to the list view (clear add/edit query params)
    query.delete("add_experience");
    query.delete("expIndex");
    navigate(`?${query.toString()}`);
  };

  return (
    <div className="flex gap-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-700">Experience</h1>
        <p>
          This is going to be easy, we promise! Let's start with your most
          recent job.
        </p>

        <form className="my-4 items-start gap-8">
          <div key={index} className="grid grid-cols-12 gap-8 mb-8">
            {/* Job Title */}
            <div className="col-span-6">
              <input
                name="position"
                placeholder="Job Title"
                value={ref.position || ""}
                onChange={(e) =>
                  handleExperienceChange(index, "position", e.target.value)
                }
                className="w-full px-6 border-gray-300 bg-white py-3 border rounded-md"
              />
            </div>

            {/* Company Name */}
            <div className="col-span-6">
              <input
                name="company"
                placeholder="Company or Organization Name"
                value={ref.company || ""}
                onChange={(e) =>
                  handleExperienceChange(index, "company", e.target.value)
                }
                className="w-full px-6 border-gray-300 bg-white py-3 border rounded-md"
              />
            </div>

            {/* Country */}
            <div className="col-span-4">
              <input
                name="country"
                placeholder="Country"
                value={ref.country || ""}
                onChange={(e) =>
                  handleExperienceChange(index, "country", e.target.value)
                }
                className="w-full px-6 border-gray-300 bg-white py-3 border rounded-md"
              />
            </div>

            {/* Province */}
            <div className="col-span-4">
              <input
                name="province"
                placeholder="Province or State"
                value={ref.province || ""}
                onChange={(e) =>
                  handleExperienceChange(index, "province", e.target.value)
                }
                className="w-full px-6 border-gray-300 bg-white py-3 border rounded-md"
              />
            </div>

            {/* City */}
            <div className="col-span-4">
              <input
                name="city"
                placeholder="City"
                value={ref.city || ""}
                onChange={(e) =>
                  handleExperienceChange(index, "city", e.target.value)
                }
                className="w-full px-6 border-gray-300 bg-white py-3 border rounded-md"
              />
            </div>

            {/* Start Month */}
            <div className="col-span-6">
              <input
                name="startMonth"
                placeholder="Start Month"
                value={ref.startMonth || ""}
                onChange={(e) =>
                  handleExperienceChange(index, "startMonth", e.target.value)
                }
                className="w-full px-6 border-gray-300 bg-white py-3 border rounded-md"
              />
            </div>

            {/* Start Year */}
            <div className="col-span-6">
              <input
                type="number"
                name="startYear"
                placeholder="Start Year"
                value={ref.startYear || ""}
                onChange={(e) =>
                  handleExperienceChange(index, "startYear", e.target.value)
                }
                className="w-full px-6 border-gray-300 bg-white py-3 border rounded-md"
              />
            </div>

            {/* End Month */}
            <div className="col-span-6">
              <input
                name="endMonth"
                placeholder="End Month"
                value={ref.endMonth || ""}
                onChange={(e) =>
                  handleExperienceChange(index, "endMonth", e.target.value)
                }
                className="w-full px-6 border-gray-300 bg-white py-3 border rounded-md"
              />
            </div>

            {/* End Year */}
            <div className="col-span-6">
              <input
                type="number"
                name="endYear"
                placeholder="End Year"
                value={ref.endYear || ""}
                onChange={(e) =>
                  handleExperienceChange(index, "endYear", e.target.value)
                }
                className="w-full px-6 border-gray-300 bg-white py-3 border rounded-md"
              />
            </div>

            {/* Currently Working Checkbox */}
            <div className="col-span-12 flex items-center gap-2">
              <input
                type="checkbox"
                id="currentlyWorkingInput"
                className="accent-orange-400 w-5 h-5"
                checked={!!ref.isCurrentlyWorking}
                onChange={(e) =>
                  handleExperienceChange(
                    index,
                    "isCurrentlyWorking",
                    e.target.checked
                  )
                }
              />
              <label htmlFor="currentlyWorkingInput">
                I currently work here
              </label>
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
                onClick={handleSaveToList}
                type="button"
                className="py-3 bg-orange-400 rounded-2xl text-white px-9 border font-bold"
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
