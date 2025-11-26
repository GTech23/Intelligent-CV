import React from "react";
import { FaFileAlt, FaEdit, FaDownload } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const steps = [
  {
    icon: <FaFileAlt size={32} className="text-orange-600" />,
    title: "Choose a Template",
    description:
      "Pick from a collection of professionally designed resume templates.",
  },
  {
    icon: <FaEdit size={32} className="text-orange-600" />,
    title: "Fill in Your Details",
    description:
      "Enter your education, experience, and skills with our easy-to-use editor.",
  },
  {
    icon: <FaDownload size={32} className="text-orange-600" />,
    title: "Download & Apply",
    description:
      "Export your resume in PDF and start applying to your dream jobs.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">How It Works</h2>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              data-aos="zoom-in"
              data-aos-duration="3000"
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow hover:shadow-md transition duration-300"
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
