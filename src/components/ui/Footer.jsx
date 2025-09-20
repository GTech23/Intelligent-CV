import React from "react";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white">Intellgent CV 247</h2>
            <p className="text-sm mt-2 text-gray-400">
              Build your resume faster, smarter, and for free.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <div>
              <h3 className="font-semibold text-white mb-2">Product</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="/builder" className="hover:text-white">
                    Resume Builder
                  </a>
                </li>
                <li>
                  <a href="/templates" className="hover:text-white">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:text-white">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Company</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="/about" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <div>
              <h3 className="font-semibold text-white mb-2">Support</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="/builder" className="hover:text-white">
                    Help & Support
                  </a>
                </li>
                <li>
                  <a href="/templates" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:text-white">
                    Forgot Password
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} Intelligent CV 247. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
