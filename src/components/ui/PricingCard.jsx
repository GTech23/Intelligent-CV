export const pricingMeta = [
  {
    plan: `Freemium`,
    price: `₦0`,
    features: [
      "Free Download",
      "Unlimited Customer Support",
      "1 Cover letter per day",
      "Limited Resume Templates",
      "Limited access to our site features",
      "Free forever",
    ],
  },
  {
    plan: `Premium`,
    price: `N1,500`,
    features: [
      "AI Powered Resume Generations",
      "Unlimited Cover letters",
      "Unlimited Resume Templates",
      "Unlimited Customer supports",
      "Have complete access to all our site features",
      "Additional Resume Sections",
    ],
  },
];

const PricingCard = ({ pricingStats: { plan, price, features } }) => {
  return (
    <div
      className={` ${
        plan === "Premium" ? "border-2  border-orange-500" : ""
      }  rounded-xl p-6 shadow-md bg-white`}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{plan}</h3>
        <span className="text-sm text-orange-600 font-medium bg-orange-100 px-2 py-1 rounded-full">
          {plan === "Premium" ? "Most Popular" : ""}
        </span>
      </div>

      <div className="mb-6">
        <p className="text-3xl font-bold text-gray-900">{price}</p>
        <p className="text-sm text-gray-500">
          {plan === "Premium"
            ? `${price} billed every four weeks.`
            : "Forever Free❤️😊"}
        </p>
      </div>

      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded mb-6">
        Get Started
      </button>

      <div>
        <p className="text-sm font-semibold mb-2 text-gray-700">
          WHAT'S INCLUDED
        </p>
        <ul className="text-sm text-gray-700 space-y-2">
          {features.map((feature) => {
            return <li>✅ {feature}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
