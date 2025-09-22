import { FaPlus } from "react-icons/fa6";
import useQuery from "../../../../hooks/UseQuery";
import { useNavigate } from "react-router-dom";

const WorkExperienceView = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const redirectToForm = () => {
    query.set("add_experience", "true");
    navigate(`?${query.toString()}`);
  };
  return (
    <>
      <div className="max-w-5xl  w-full mx-auto">
        <h1 className="text-4xl font-bold text-gray-700">
          Review your work experience
        </h1>
        <p>Edit, update, or add new roles to complete your resume.</p>

        {/* empty reference UI */}
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
            Add reference
          </button>
        </div>
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
