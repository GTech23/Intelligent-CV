import Features from "../components/ui/Features";
import Hero from "../components/ui/Hero";
import JobSeekersSection from "../components/ui/Testimonial";
import JobWinningTemplate from "../components/ui/JobWinningTemplate";
import Cta from "../components/ui/Cta";
import FAQSection from "../components/ui/Faq";
import HowItWorksSection from "../components/ui/HowItWorksSection";
import PartnersSection from "../components/ui/PartnerSection";
import PricingSection from "../components/ui/PricingSection";
import StatsSection from "../components/ui/Stats";

const Home = () => {
  return (
    <>
      <Hero />
      <JobWinningTemplate />
      <HowItWorksSection />
      <PartnersSection />
      <Features />
      <JobSeekersSection />
      <StatsSection />
      <PricingSection />
      <FAQSection />
      <Cta />
    </>
  );
};

export default Home;
