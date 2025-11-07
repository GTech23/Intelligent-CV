import React from "react";
import { Link } from "react-router-dom";
import Features from "../components/ui/Features";
import StatsSection from "../components/ui/Stats";
import Testimonial from "../components/ui/Testimonial";
import PartnersSection from "../components/ui/PartnerSection";
import HowItWorksSection from "../components/ui/HowItWorksSection";
import Cta from "../components/ui/Cta";
import HeroImage from "../assets/images/home-hero-banner.avif";
import team1 from "../assets/admins/gtech.jpeg";
import team2 from "../assets/admins/abdul.jpg";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const TeamCard = ({ img, name, role, bio, twitter_url }) => (
  <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
    <div className="flex items-center space-x-4">
      <img src={img} alt={name} className="w-20 h-20 rounded-full object-cover" />
      <div>
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="text-sm text-zinc-500">{role}</p>
      </div>
    </div>

    <p className="mt-4 text-sm text-gray-700">{bio}</p>

    <div className="mt-4 flex items-center space-x-3">
      <a className="text-zinc-500 hover:text-[#EA723C]" href="#" aria-label={`${name} LinkedIn`}>
        <FaLinkedin />
      </a>
      <a className="text-zinc-500 hover:text-[#1DA1F2]" href={twitter_url} aria-label={`${name} Twitter`}>
        <FaTwitter />
      </a>
    </div>
  </div>
);

const About = () => {
  const team = [
    {
      img: team1,
      name: "Godstime Pious",
      role: "Head of Product",
      bio: "Designs delightful resume experiences and leads product strategy to help jobseekers land interviews.",
      twitter_url: 'https://www.twitter.com/GodstimePious'
    },
    {
      img: team2,
      name: "Oladimeji Abdulrazaq",
      role: "Co-founder & Lead Engineer",
      bio: "Builds the AI-driven resume engine and ensures fast, reliable PDF exports at scale.",
      twitter_url: 'https://www.twitter.com/iam_oladhimeji'
    },
   
  ];

  return (
    <div className="text-gray-900">
      {/* Page hero */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              We help millions of professionals build resumes that get interviews.
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Intelligent CV is the modern resume builder for ambitious professionals.
              We combine beautiful templates, recruiter-optimized content, and AI-smarts to help you present your story clearly and confidently.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/resume-builder/app/choose-templates"
                className="inline-block bg-[#EA723C] text-white font-semibold py-3 px-6 rounded-2xl shadow hover:opacity-95 transition"
              >
                Build My Resume
              </Link>

              <Link
                to="/pricing"
                className="inline-block border border-zinc-300 text-zinc-700 font-medium py-3 px-6 rounded-2xl hover:bg-zinc-50 transition"
              >
                See Pricing
              </Link>
            </div>

            <div className="mt-6 text-sm text-zinc-500">
              <strong>Trusted by</strong> thousands of students and professionals worldwide.
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img src={HeroImage} alt="team collaborating" className="rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* Mission & values */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#FBF7F5] to-[#FFF8F4]">
        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-2xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-700">Make high-quality resumes accessible to everyone — whether you're just starting out or pivoting careers.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-700">To be the most trusted career companion for jobseekers, powering data-driven resume decisions.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <ul className="text-gray-700 list-disc list-inside space-y-1">
              <li>Honest, recruiter-focused guidance</li>
              <li>Speed without sacrificing quality</li>
              <li>Design that highlights substance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <HowItWorksSection />

      {/* Features */}
      <Features />

      {/* Stats */}
      <StatsSection />

      {/* Team */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the team</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            A small, focused team building tools that help you show your best professional self.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {team.map((member, idx) => (
              <TeamCard key={idx} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonial />

      {/* Partners */}
      <PartnersSection />

      {/* CTA */}
      <Cta />
    </div>
  );
};

export default About;
