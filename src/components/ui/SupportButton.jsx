import {toast} from 'react-toastify';
import { FaQuestionCircle } from "react-icons/fa";

const SupportButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => toast.warn("Support coming soon!")}
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        <FaQuestionCircle />
        <span className="font-medium">Need Help?</span>
      </button>
    </div>
  );
};

export default SupportButton;
