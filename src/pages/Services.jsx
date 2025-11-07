import React from "react";
import { Link } from "react-router-dom";
import { FaFileAlt, FaPenFancy, FaMagic, FaLinkedin, FaEnvelopeOpenText, FaChalkboardTeacher } from "react-icons/fa";
import Features from "../components/ui/Features";
import StatsSection from "../components/ui/Stats";
import Testimonial from "../components/ui/Testimonial";
import PartnersSection from "../components/ui/PartnerSection";
import HowItWorksSection from "../components/ui/HowItWorksSection";
import PricingSection from "../components/ui/PricingSection";
import Cta from "../components/ui/Cta";
import Faq from "../components/ui/Faq";

const services = [
	{
		id: "resume-builder",
		title: "Resume Builder (AI-assisted)",
		description:
			"Create a modern, ATS-friendly resume in minutes using recruiter-tested templates and AI recommendations.",
		icon: <FaFileAlt className="text-3xl text-[#EA723C]" />,
		action: "/resume-builder/app/choose-templates",
	},
	{
		id: "professional-writing",
		title: "Professional Writing",
		description:
			"Work with our expert resume writers to tailor content for your target role, industry, and level.",
		icon: <FaPenFancy className="text-3xl text-[#EA723C]" />,
		comingSoon: true,
		action: "/pricing",
	},
	{
		id: "ai-review",
		title: "AI Resume Review & Score",
		description:
			"Get instant feedback and a recruiter-aligned score to highlight areas for improvement and quick wins.",
		icon: <FaMagic className="text-3xl text-[#EA723C]" />,
		comingSoon: true,
		action: "/resume-review",
	},
	{
		id: "linkedin-makeover",
		title: "LinkedIn Makeover",
		description:
			"Optimize your LinkedIn profile to match your resume and increase discoverability to recruiters.",
		icon: <FaLinkedin className="text-3xl text-[#0A66C2]" />,
		comingSoon: true,
		action: "/services/linkedin",
	},
	{
		id: "cover-letter",
		title: "Cover Letter Generator",
		description:
			"Personalised cover letters for each application; generated to match your resume's tone and role.",
		icon: <FaEnvelopeOpenText className="text-3xl text-[#EA723C]" />,
		comingSoon: true,
		action: "/cover-letter",
	},
	{
		id: "interview-coaching",
		title: "Interview Coaching",
		description:
			"1:1 mock interviews, feedback, and negotiation coaching from our experienced career coaches.",
		icon: <FaChalkboardTeacher className="text-3xl text-[#EA723C]" />,
		comingSoon: true,
		action: "/services/coaching",
	},
];

const ServiceCard = ({ service }) => (
	<div className="bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition">
		<div>
			<div className="w-12 h-12 flex items-center justify-center bg-[#FFF3EE] rounded-lg mb-4">
				{service.icon}
			</div>
			<h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
				<span>{service.title}</span>
				{service.comingSoon && (
					<span className="ml-3 inline-block text-xs font-semibold text-[#EA723C] bg-[#FFF3EE] px-2 py-1 rounded-full">Coming soon</span>
				)}
			</h3>
			<p className="text-sm text-gray-600">{service.description}</p>
		</div>

		<div className="mt-6">
			{service.comingSoon ? (
				<span className="inline-block text-sm font-medium text-gray-500 bg-gray-100 px-3 py-2 rounded-lg">Coming soon</span>
			) : (
				<Link
					to={service.action}
					className="inline-block text-sm font-medium text-[#EA723C] hover:underline"
				>
					Learn more →
				</Link>
			)}
		</div>
	</div>
);

const Services = () => {
	return (
		<div className="text-gray-900">
			{/* Hero */}
			<section className="bg-white py-20 px-6">
				<div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2 items-center">
					<div>
						<h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
							Services that help you land the interview — and the job.
						</h1>
						<p className="text-lg text-gray-700 mb-6">
							From AI-assisted resume creation to personalized coaching, our services are designed to improve your chances at every stage of the job search.
						</p>

						<div className="flex flex-col sm:flex-row gap-4">
							<Link
								to="/resume-builder/app/choose-templates"
								className="inline-block bg-[#EA723C] text-white font-semibold py-3 px-6 rounded-2xl shadow hover:opacity-95 transition"
							>
								Start Building
							</Link>

							<Link
								to="/pricing"
								className="inline-block border border-zinc-300 text-zinc-700 font-medium py-3 px-6 rounded-2xl hover:bg-zinc-50 transition"
							>
								View Pricing
							</Link>
						</div>

						<p className="mt-6 text-sm text-zinc-500">
							Need help choosing? Chat with our career advisors for a free consultation.
						</p>
					</div>

					<div className="flex justify-center lg:justify-end">
						<div className="w-full max-w-md bg-gradient-to-br from-[#fff] to-[#FFF8F4] rounded-2xl p-6 shadow-md">
							<h4 className="text-lg font-semibold mb-2">Quick service selector</h4>
							<p className="text-sm text-gray-600 mb-4">Pick a service and we’ll guide you through the next steps.</p>

							<div className="grid grid-cols-1 gap-3">
								{services.slice(0, 3).map((s) => (
													s.comingSoon ? (
														<div
															key={s.id}
															className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3 opacity-75"
														>
															<div className="flex items-center gap-3">
																<div className="w-10 h-10 flex items-center justify-center bg-[#FFF3EE] rounded-md">{s.icon}</div>
																<div>
																	<div className="text-sm font-medium">{s.title}</div>
																	<div className="text-xs text-gray-500">{s.description.split(" ").slice(0,8).join(" ")}...</div>
																</div>
															</div>
															<div className="text-xs text-gray-500">Coming soon</div>
														</div>
													) : (
														<Link
															key={s.id}
															to={s.action}
															className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3 hover:bg-gray-50"
														>
															<div className="flex items-center gap-3">
																<div className="w-10 h-10 flex items-center justify-center bg-[#FFF3EE] rounded-md">{s.icon}</div>
																<div>
																	<div className="text-sm font-medium">{s.title}</div>
																	<div className="text-xs text-gray-500">{s.description.split(" ").slice(0,8).join(" ")}...</div>
																</div>
															</div>
															<div className="text-xs text-[#EA723C]">Choose</div>
														</Link>
													)
												))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services grid */}
			<section className="py-16 px-6 bg-gray-50">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
					<p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">Choose the service that fits your timeline and budget — we make professional results accessible.</p>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{services.map((service) => (
							<ServiceCard key={service.id} service={service} />
						))}
					</div>
				</div>
			</section>

			{/* Pricing teaser */}
			<PricingSection />

			{/* How it works */}
			<HowItWorksSection />

			{/* FAQ */}
			<section className="py-16 px-6">
				<div className="max-w-6xl mx-auto">
					<div className="max-w-4xl mx-auto">
						<Faq />
					</div>
				</div>
			</section>

			{/* Testimonials & Partners */}
			<Testimonial />
			<PartnersSection />

		</div>
	);
};

export default Services;

