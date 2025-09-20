import aiParsingImage from "../../assets/images/feature-img1.avif";
import aiContentGenImage from "../../assets/images/feature-img2.avif";
import dataBackedImage from "../../assets/images/feature-img4.avif";

const FeatureCard = () => {
  return (
    <div className="grid grid-cols-3 gap-8 items-center p-4 my-8">
      <div className=" shadow-lg min-h-50 p-4 rounded-3xl border-1 border-zinc-300">
        <div>
          <h3 className="text-2xl font-bold text-[#24272E]  mb-3">
            AI Parsing: upload and edit your old resume
          </h3>
          <p className="text-lg mb-8 text-zinc-600">
            Quickly pull information from your existing resume with our
            builder's AI-parsing tool. There's no need to start a new resume
            from the beginning (unless you want to — we can help with that too).
          </p>
        </div>

        <div className="p-6 border-zinc-400 border-1 rounded-lg">
          <img src={aiParsingImage} alt="" />
        </div>
      </div>
      <div className=" shadow-lg min-h-50 p-4 rounded-3xl border-1 border-zinc-300">
        <div>
          <h3 className="text-2xl font-bold text-[#24272E] mb-3">
            AI Content Generation
          </h3>
          <p className="text-lg mb-8 text-zinc-600">
            Instantly create bullet points to describe your past work
            experience. Then use our ChatGPT-powered summary generator to build
            a summary that concisely highlights your top professional
            qualifications.
          </p>
        </div>

        <div className="p-6 border-zinc-400 border-1 rounded-lg">
          <img src={aiContentGenImage} alt="" />
        </div>
      </div>
      <div className=" shadow-lg min-h-50 p-4 rounded-3xl border-1 border-zinc-300">
        <div>
          <h3 className="text-2xl font-bold text-[#24272E] mb-3">
            Data-backed skills selector
          </h3>
          <p className="text-lg mb-8 text-zinc-600">
            Want to know what skills to list on your resume? Enter your job
            title, and our software will provide you with targeted skills
            suggestions pulled from an extensive employment database.
          </p>
        </div>

        <div className="p-6 border-zinc-400 border-1 rounded-lg">
          <img src={dataBackedImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
