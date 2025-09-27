import { FaPlus, FaTrash } from "react-icons/fa6";
import useQuery from "../../../../hooks/UseQuery";
import { useNavigate } from "react-router-dom";
import { useResume } from "../../../../context/ResumeContext";
import ReferenceStepForm from "./ReferenceStepForm";

const ReferenceStepView = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const { formData, setFormData } = useResume();
  const references = (formData.references || []).filter((ref) => {
    if (!ref) return false;
    return Object.values(ref).some((v) => v && v.toString().trim() !== "");
  });

  const showForm =
    query.get("add_reference") === "true" || query.has("edit_reference");
    
  const redirectToForm = () => {
    query.set("add_reference", "true");
    setFormData((prev) => ({
      ...prev,
      references: [
        ...(prev.references || []),
        {
          firstName: "",
          lastName: "",
          company: "",
          jobTitle: "",
          email: "",
          phone: "",
        },
      ],
    }));
    navigate(`?${query.toString()}`);
  };

  const handleDeleteReference = (index) => {
    const updatedReferences = [...references];
    updatedReferences.splice(index, 1);
    setFormData((prev) => ({
      ...prev,
      references: updatedReferences,
    }));
    if (updatedReferences.length === 0) {
      query.delete("edit_reference");
      navigate(`?${query.toString()}`);
    } else {
      navigate(`?${query.toString()}`);
    }
  };

  return (
    <>
      {showForm ? (
        <ReferenceStepForm />
      ) : (
        <div className="max-w-5xl  w-full mx-auto">
          <h1 className="text-4xl font-bold text-gray-700">Edit Reference</h1>
          <div className=" my-8 py-4">
            <label htmlFor="" className="mb-2 inline-block">
              Include References?
            </label>
            <select
              className={`w-full px-6 border-gray-300 appearance-none  bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              name=""
              id=""
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="upon request">Upon Request</option>
            </select>
          </div>
          {references.length === 0 ? (
            <div className="border-2 border-dotted min-h-50 rounded-2xl flex items-center justify-center">
              <button
                onClick={redirectToForm}
                className="flex gap-2 items-center font-bold text-md cursor-pointer hover:underline"
              >
                <FaPlus />
                Add reference
              </button>
            </div>
          ) : (
            <div className="my-8">
              {references.map((ref, index) => {
                return (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-lg min-h-25 mt-8"
                  >
                    <div className="flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-8">
                          <p className="text-blue-600 font-bold bg-blue-100 p-3 rounded-full w-10 h-10 flex items-center justify-center">
                            {index + 1}
                          </p>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-4">
                              <p className="font-bold">
                                {ref.firstName} {ref.lastName}
                              </p>
                              <p>| {ref.company}</p>
                            </div>
                            <p>{ref.jobTitle}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 justify-between">
                          <button
                            onClick={() => {
                              query.set("edit_reference", index);
                              navigate(`?${query.toString()}`);
                            }}
                            className="flex items-center font-bold border-zinc-400 gap-3 cursor-pointer p-2 border rounded-md"
                          >
                            <FaPlus />
                            Edit
                          </button>
                          <button className="flex  items-center font-bold border-zinc-400 gap-3 cursor-pointer p-3 border rounded-full">
                            <FaTrash
                              onClick={() => handleDeleteReference(index)}
                              className="text-red-500"
                            />
                          </button>
                        </div>
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
                Add another reference
              </button>
            </div>
          )}
          <div className="flex items-center justify-between my-3">
            <button
              onClick={() => navigate(-1)}
              type="button"
              className="py-3 bg-white rounded-2xl px-9 border-1 cursor-pointer border-gray-400 font-bold "
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

export default ReferenceStepView;
