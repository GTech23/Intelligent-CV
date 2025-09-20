import Features from "../components/ui/Features";
import Hero from "../components/ui/Hero";
import JobSeekersSection from "../components/ui/Testimonial";
import JobWinningTemplate from "../components/ui/JobWinningTemplate";
import Navbar from "../components/ui/Navbar";
import Cta from "../components/ui/Cta";
import FAQSection from "../components/ui/Faq";
import Footer from "../components/ui/Footer";
import HowItWorksSection from "../components/ui/HowItWorksSection";
import SupportButton from "../components/ui/SupportButton";
import PartnersSection from "../components/ui/PartnerSection";
import PricingSection from "../components/ui/PricingSection";
import StatsSection from "../components/ui/Stats";
import NewsletterSignup from "../components/ui/NewsLetterSignup";

const Home = () => {
  return (
    <>
      <Navbar />

      <main className="mt-15">
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
        <NewsletterSignup />
        <SupportButton />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
