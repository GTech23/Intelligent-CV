import { Link } from "react-router-dom";
import avatarGroup from "../../assets/images/home-avatar-group.webp";
import HeroImage from "../../assets/images/home-hero-banner.avif";
import { FaArrowRight } from "react-icons/fa";
const Hero = () => {
  return (
    <section className=" mx-auto py-7 px-7 ">
      <div className=" flex items-center min-h-[85vh] space-x-12 gap-4 p-4">
        <div className="h-full mr-20">
          <h1 className="text-6xl font-bold mb-4 text-[#24272E]">
            Make your professional resume{" "}
            <span className="text-[#EA723C] leading-normal">in minutes</span>
          </h1>
          <p className="text-[#24272E] text-lg leading-normal mb-8">
            Try our free resume builder and create a resume with the power of
            AI. Let the Intelligent Resume Marker help build your resume quickly
            and effortlessly.
          </p>

          <Link className="py-4 px-14 bg-[#EA723C] rounded-2xl text-white font-bold mb-4 inline-block">
            Build My Resume Now
          </Link>

          <div className="flex items-center space-x-2">
            <img src={avatarGroup} alt="avatar-group" width={80} />
            <span className="text-xs text-zinc-500">
              Resume & Career Expert{" "}
            </span>
            <FaArrowRight className="text-zinc-500 text-xs" />
          </div>
        </div>

        <div>
          <img src={HeroImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
