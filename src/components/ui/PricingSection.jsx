import React from "react";

const plans = [
  {
    name: "Free",
    price: "₦0",
    description: "Perfect to try the builder with basic features.",
    features: [
      "1 Resume",
      "Basic Templates",
      "PDF Download",
      "Limited Customization",
    ],
    buttonText: "Get Started",
    isPopular: false,
  },
  {
    name: "Pro",
    price: "₦1,500",
    description: "Great for job seekers who want more control and styles.",
    features: [
      "Unlimited Resumes",
      "Premium Templates",
      "Full Customization",
      "Resume Tips & Guidance",
    ],
    buttonText: "Go Pro",
    isPopular: true,
  },
  {
    name: "Premium",
    price: "$3,500",
    description: "Best for professionals with ongoing job search needs.",
    features: [
      "Everything in Pro",
      "Cover Letter Builder",
      "Priority Support",
      "Template Unlock Forever",
    ],
    buttonText: "Get Premium",
    isPopular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Whether you're just starting out or you're a seasoned pro, we've got a
          plan that fits your resume-building needs.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-md p-8 border ${
                plan.isPopular
                  ? "border-blue-600 bg-white scale-105"
                  : "bg-white"
              } transition duration-300`}
            >
              {plan.isPopular && (
                <div className="mb-4">
                  <span className="inline-block bg-[#EA723C] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold text-[#EA723C] mb-2">
                {plan.price}
              </p>
              <p className="text-sm text-gray-600 mb-6">{plan.description}</p>

              <ul className="text-left space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#EA723C] font-bold">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2 rounded-md font-medium ${
                  plan.isPopular
                    ? "bg-[#EA723C] text-white hover:bg-[#EA723C]"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                } transition duration-200`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
