import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import resumeComplete from "../../../assets/images/resume-complete.png";
import { Link } from "react-router-dom";
const ResumeFinalize = () => {
  return (
    <>
      <div className=" gap-8">
        <title>Resume Builder</title>
        <div className="max-w-5xl mb-4 flex flex-col items-center justify-center  w-full mx-auto">
          <div className="flex flex-col w-full items-center justify-center text-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-700">
              Hurray, Your Resume is Ready
            </h1>
            <p>
              You've successfully completed your resume. It's ready for preview
              and download.
            </p>
          </div>

          <img src={resumeComplete} className="w-1/2" alt="" />
        </div>

        <div className="flex  justify-center space-x-8 gap-4">
          <button className="py-3 px-8  bg-white text-black  font-bold rounded-2xl cursor-pointer flex items-center justify-center gap-4">
            <FaArrowLeft />
            Continue Editing
          </button>
          <Link
            to="/dashboard/app/personalize/done"
            className="py-3 px-8 bg-amber-700 text-white  font-bold rounded-2xl cursor-pointer flex items-center justify-center gap-4"
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
