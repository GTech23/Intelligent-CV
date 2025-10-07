import PricingCard, { pricingMeta } from "./PricingCard";
const PricingSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Whether you're just starting out or you're a seasoned pro, we've got a
          plan that fits your resume-building needs.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {pricingMeta.map((pm) => (
            <PricingCard pricingStats={pm} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
