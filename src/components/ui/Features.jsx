import FeatureCard from "../common/FeatureCard";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Features = () => {
  return (
    <>
      <section className=" max-w-[1600px] mx-auto min-h-140 p-3 mb-20">
        <div className="flex items-center flex-col space-y-8 justify-center">
          <h2 className="text-4xl font-bold text-center mb-4">
            Features of Our AI Resume Builder
          </h2>
          <p className="text-lg font-light text-center max-w-[900px] mx-auto">
            Our resume builder comes packed with smart, user-friendly features
            to help you create a standout resume effortlessly. From beautifully
            designed templates to real-time editing, we've got everything you
            need to build a professional resume that gets noticed.
          </p>
        </div>

        <FeatureCard />
      </section>
    </>
  );
};

export default Features;
