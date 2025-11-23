import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const submitNewsletter = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">
      <div className="max-w-[1600px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-gray-800">
          <div>
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-bold text-white">Intelligent CV</h2>
            </Link>
            <p className="text-sm mt-3 text-gray-400 max-w-xs">
              Build professional, recruiter-friendly resumes quickly with our
              AI-powered tools, expert writers, and tailored templates.
            </p>

            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="Facebook"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Policies</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/about" className="hover:text-white">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Stay updated</h3>
            <p className="text-sm text-gray-400 mb-3">
              Get monthly tips on resumes, job search, and interview prep.
            </p>

            <form
              onSubmit={submitNewsletter}
              className="flex flex-col sm:flex-row gap-3"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EA723C]"
                aria-label="Subscribe to newsletter"
              />

              <button
                type="submit"
                className="bg-[#EA723C] text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-95 transition"
                aria-label="Subscribe"
              >
                Subscribe
              </button>
            </form>

            {status === "success" && (
              <p className="text-sm text-green-400 mt-3">
                Thanks — check your inbox for confirmation.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-rose-400 mt-3">
                Please enter a valid email address.
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-6 text-sm text-gray-400">
          <div className="flex items-center gap-4">
            <span>&copy; {new Date().getFullYear()} Intelligent CV 247</span>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-gray-400 hover:text-white flex items-center gap-2">
              <FaGlobe /> <span className="text-sm">English</span>
            </p>
            <a
              href="mailto:hello@intelligentcv.com"
              className="text-gray-400 hover:text-white flex items-center gap-2"
            >
              <FaEnvelope />{" "}
              <span className="text-sm">hello@intelligentcv.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
