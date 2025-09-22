import { FaPlus } from "react-icons/fa6";
import useQuery from "../../../../hooks/UseQuery";
import { useNavigate, useLocation, replace } from "react-router-dom";

const ReferenceStepView = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const redirectToForm = () => {
    query.set("add_reference", "true");
    navigate(`?${query.toString()}`);
  };
  return (
    <>
      <div className="max-w-5xl  w-full mx-auto">
        <h1 className="text-4xl font-bold text-gray-700">Add Reference</h1>
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

        {/* empty reference UI */}
        <div className="border-2 border-dotted min-h-50 rounded-2xl flex items-center justify-center">
          <button
            onClick={redirectToForm}
            className="flex gap-2 items-center font-bold text-md cursor-pointer hover:underline"
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

export default ReferenceStepView;
