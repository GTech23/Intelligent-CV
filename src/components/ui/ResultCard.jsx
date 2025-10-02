import { FaPlus } from "react-icons/fa6";

function ResultCard({ children }) {
  return (
    <div className="flex items-start bg-white rounded-lg shadow-sm p-4 mb-4 cursor-pointer">
      <button className="flex items-center cursor-pointer justify-center w-10 h-10 rounded-full bg-black text-white mr-4 flex-shrink-0">
        <FaPlus className="w-6 h-6" />
      </button>
      <p className="text-gray-800 text-base leading-relaxed">{children}</p>
    </div>
  );
}

export function ResultsList() {
  return (
    <div className="max-w-md mx-auto p-4 bg-gray-50 rounded-lg shadow-inner overflow-y-auto max-h-[400px]">
      <ResultCard>
        Seeking to utilize excellent communication, interpersonal, and
        organizational skills to complete tasks. Reliable with a good work ethic
        and the ability to quickly adapt to new tasks and environments.
      </ResultCard>
      <ResultCard>
        Reliable worker with excellent communication, time management, and
        computer skills. A driven and detail-oriented individual with a desire
        to use analytical and...
      </ResultCard>
      {/* Add more ResultCard components as needed */}
    </div>
  );
}

export default ResultCard;
