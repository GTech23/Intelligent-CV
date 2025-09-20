import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section className="bg-[#e76021]  text-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Create a Job-Winning Resume Today
        </h1>
        <p className="text-lg md:text-xl mb-10">
          Build a modern, professional resume in minutes — no design skills
          needed. Stand out and get hired faster.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/builder"
            className="bg-white text-black font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition"
          >
            Build My Resume
          </Link>

          <Link
            to="/templates"
            className="text-white border border-white py-3 px-6 rounded-md hover:bg-white hover:text-[transition"
          >
            Browse Templates
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
