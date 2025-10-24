import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import resumeComplete from "../../../assets/images/resume-complete.png";
import { Link, useNavigate} from "react-router-dom";
const ResumeFinalize = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-12">
        <title>Resume Builder</title>
        <div className="max-w-5xl mb-4 flex flex-col items-center justify-center  w-full mx-auto">
          <div className="flex flex-col w-full items-center justify-center text-center">
            <h1 className="text-2xl font-bold mb-4 text-gray-700 sm:text-4xl">
              Hurray, Your Resume is Ready
            </h1>
            <p>
              You've successfully completed your resume. It's ready for preview
              and download.
            </p>
          </div>

          <img src={resumeComplete} className="w-full md:w-1/2" alt="" />
        </div>

        <div className="p-4 flex flex-col justify-center text-center items-center  gap-4 lg:space-x-4 lg:flex-row">
          <button onClick={() => {
            navigate("/dashboard/app/personalize/")
          }} className="py-3 px-8  bg-white text-sm text-black  font-bold rounded-2xl cursor-pointer flex items-center justify-center gap-4">
            <FaArrowLeft />
            Continue Editing
          </button>
          <Link
            to="/dashboard/app/personalize/done"
            className="py-3 text-sm px-8 bg-amber-700 text-white  font-bold rounded-lg cursor-pointer flex items-center justify-center gap-4"
          >
            Proceed to Download
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ResumeFinalize;
