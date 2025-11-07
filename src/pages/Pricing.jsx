import React, { useState } from "react";
import mastercard from "../assets/images/mastercard.webp";
import visa from "../assets/images/visa-logo.webp";
import Testimonial from "../components/ui/Testimonial";

const pricingMeta = [
  {
    id: "freemium",
    plan: "Freemium",
    monthly: 0,
    yearly: 0,
    features: [
      "Downloadable PDF resumes (basic templates)",
      "Basic resume sections",
      "1 cover letter per day",
      "Email support",
      "Free forever",
    ],
  },
  {
    id: "premium",
    plan: "Premium",
    monthly: 1500,
    yearly: 1500 * 10, // ~2 months free on yearly
    featured: true,
    features: [
      "AI-powered resume generation",
      "Unlimited templates & cover letters",
      "Advanced formatting & export options",
      "Priority support",
      "Resume review & recruiter tips",
    ],
  },
];

const formatPrice = (amount) => {
  if (!amount) return "₦0";
  return `₦${amount.toLocaleString()}`;
};

const PricingCard = ({ plan, billing }) => {
  const price = billing === "yearly" ? plan.yearly : plan.monthly;
  const period = billing === "yearly" ? "per year" : "per month";

  return (
    <div
      className={`rounded-xl p-6 shadow-md bg-white flex flex-col justify-between h-full ${
        plan.featured ? "border-2 border-orange-500" : "border"
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{plan.plan}</h3>
          {plan.featured && (
            <span className="text-sm text-orange-600 font-medium bg-orange-100 px-2 py-1 rounded-full">
              Most Popular
            </span>
          )}
        </div>

        <div className="mb-6">
          <p className="text-4xl font-extrabold text-gray-900">{formatPrice(price)}</p>
          <p className="text-sm text-gray-500">{period} • Cancel anytime</p>
        </div>

        <div>
          <p className="text-sm font-semibold mb-3 text-gray-700">What's included</p>
          <ul className="text-sm text-gray-700 space-y-2">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <a
          href={plan.id === "freemium" ? "/resume-builder/app/choose-templates" : "/pricing"}
          className={`w-full inline-block text-center py-3 rounded-lg font-semibold ${
            plan.featured ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-900"
          }`}
        >
          {plan.id === "freemium" ? "Start for free" : "Choose plan"}
        </a>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");

  return (
    <>
      <title>Pricing Plans — Intelligent CV</title>
      <section className="max-w-7xl mx-auto p-6">
        <div className="text-center mb-12">
          <span className="inline-block text-[#EA723C] py-1 px-4 font-bold rounded-full text-xs">
            PRICING
          </span>
          <h1 className="text-5xl text-[#24272E] font-bold my-4">Invest in your career with confidence</h1>
          <p className="text-[#52575E] max-w-2xl mx-auto">
            Flexible plans for jobseekers at every stage — start free or upgrade for AI features and
            priority support.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="text-sm text-gray-600">Billing</div>
          <div className="bg-gray-100 p-1 rounded-full inline-flex items-center">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-4 py-2 rounded-full text-sm ${billing === "monthly" ? "bg-white shadow" : "text-gray-600"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-4 py-2 rounded-full text-sm ${billing === "yearly" ? "bg-white shadow" : "text-gray-600"}`}
            >
              Yearly (save ~2 months)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {pricingMeta.map((pm) => (
            <PricingCard key={pm.id} plan={pm} billing={billing} />
          ))}
        </div>

        <div className="flex items-center justify-center my-8 gap-6">
          <span className="text-sm">We accept:</span>
          <div className="flex items-center gap-4">
            <img src={mastercard} width={48} alt="Mastercard" />
            <img src={visa} width={48} alt="Visa" />
          </div>
        </div>
      </section>

     

      {/* Billing FAQ & Security */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Billing & refunds — FAQ</h3>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <strong>How am I billed?</strong>
                <p className="mt-1">You can choose monthly or yearly billing. Yearly saves roughly two months compared to monthly.</p>
              </div>

              <div>
                <strong>Can I cancel anytime?</strong>
                <p className="mt-1">Yes. Cancel from your account dashboard and you'll retain access for the period you've paid for.</p>
              </div>

              <div>
                <strong>Do you offer refunds?</strong>
                <p className="mt-1">We offer a 30-day money-back guarantee for Premium. Contact support for assistance.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Security & compliance</h3>
            <p className="text-sm text-gray-700">We take security seriously. Your data is encrypted in transit using TLS. Payment processing is handled by PCI-compliant providers. For enterprise customers we offer additional data controls and contractual protections.</p>

            <ul className="mt-4 text-sm text-gray-700 space-y-2">
              <li>Encrypted backups and secure storage practices</li>
              <li>Access controls and role-based permissions for teams</li>
              <li>GDPR & CCPA compliance guidance available on request</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Enterprise & Contact Sales */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#FBF7F5] to-[#FFF8F4] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Need a plan for teams or education?</h3>
          <p className="text-gray-700 mb-6">We offer discounted plans for teams, universities, and career centers. Get a custom quote and dedicated onboarding.</p>
          <div className="flex items-center justify-center gap-4">
            <a href="/contact" className="bg-[#EA723C] text-white px-5 py-3 rounded-lg font-semibold">Contact sales</a>
            <a href="/pricing" className="border border-gray-200 px-5 py-3 rounded-lg">See all plans</a>
          </div>
        </div>
      </section>

      <Testimonial />
    </>
  );
};

export default Pricing;
