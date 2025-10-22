import {toast} from 'react-toastify';
import { FaQuestionCircle } from "react-icons/fa";

const SupportButton = () => {
  return (
    <div className="fixed bottom-10 right-6 z-50 ">
      <button
        onClick={() => toast.warn("Support is unavailable,\ntry again later!")}
        className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-orange-700 cursor-pointer transition"
      >
        <FaQuestionCircle />
        <span className="font-medium">Need Help?</span>
      </button>
    </div>
  );
};

export default SupportButton;
