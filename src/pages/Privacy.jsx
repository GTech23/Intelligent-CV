import React from "react";
import { Link } from "react-router-dom";

const LAST_UPDATED = "November 7, 2025";

const Section = ({ id, title, children }) => (
  <section id={id} className="mt-10">
    <h3 className="text-2xl font-semibold mb-3">{title}</h3>
    <div className="prose prose-sm prose-zinc text-gray-700 max-w-none">
      {children}
    </div>
  </section>
);

const Privacy = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Last updated: {LAST_UPDATED}
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-4">
        <nav className="hidden lg:block sticky top-24">
          <div className="text-sm text-gray-700 space-y-2">
            <div className="font-medium mb-2">On this page</div>
            <a href="#summary" className="block hover:text-[#EA723C]">
              Summary
            </a>
            <a href="#data" className="block hover:text-[#EA723C]">
              Data we collect
            </a>
            <a href="#use" className="block hover:text-[#EA723C]">
              How we use data
            </a>
            <a href="#cookies" className="block hover:text-[#EA723C]">
              Cookies & tracking
            </a>
            <a href="#sharing" className="block hover:text-[#EA723C]">
              Sharing & third parties
            </a>
            <a href="#security" className="block hover:text-[#EA723C]">
              Security
            </a>
            <a href="#rights" className="block hover:text-[#EA723C]">
              Your rights
            </a>
            <a href="#children" className="block hover:text-[#EA723C]">
              Children
            </a>
            <a href="#contact" className="block hover:text-[#EA723C]">
              Contact
            </a>
          </div>
        </nav>

        <div className="lg:col-span-3">
          <Section id="summary" title="Summary">
            <p>
              Intelligent CV respects your privacy. This page explains what
              personal data we collect, why we collect it, and how you can
              control your information. We keep our practices simple and
              transparent so you can focus on building a great resume.
            </p>
          </Section>

          <Section id="data" title="Data we collect">
            <p>
              We collect the following types of information to provide and
              improve the Service:
            </p>
            <ul>
              <li>
                <strong>Account data:</strong> name, email, password (hashed),
                and profile details you provide when creating an account.
              </li>
              <li>
                <strong>Resume content:</strong> the text, files, and structured
                data you upload or generate with our tools (education,
                experience, skills, etc.). You retain ownership of this content.
              </li>
              <li>
                <strong>Usage data:</strong> information about how you use the
                Service (pages visited, features used, timestamps) to help us
                improve product quality.
              </li>
              <li>
                <strong>Transaction data:</strong> billing details, subscription
                status, and payment receipts when you purchase premium services.
              </li>
              <li>
                <strong>Device & cookies:</strong> Device identifiers, IP
                address, browser type, and cookies used for session management
                and analytics.
              </li>
            </ul>
          </Section>

          <Section id="use" title="How we use your data">
            <p>We use personal data for these core purposes:</p>
            <ul>
              <li>
                <strong>To provide the Service:</strong> storing and delivering
                your resume content, generating downloadable PDFs, and enabling
                account access.
              </li>
              <li>
                <strong>To improve the product:</strong> analytics, A/B tests,
                and feature development.
              </li>
              <li>
                <strong>For billing:</strong> process payments, send invoices,
                and manage subscriptions.
              </li>
              <li>
                <strong>For safety & compliance:</strong> detect and prevent
                abuse, fraud, or security incidents and to comply with legal
                obligations.
              </li>
              <li>
                <strong>For communications:</strong> product updates, policy
                changes, and marketing where permitted — you can opt out of
                marketing emails at any time.
              </li>
            </ul>
          </Section>

          <Section id="cookies" title="Cookies & tracking">
            <p>
              We use cookies and similar technologies to make the site work,
              analyze usage, and provide personalized features. Cookies fall
              into categories like strictly necessary, performance, and
              functional cookies. You can manage cookie preferences via your
              browser settings.
            </p>
            <p>
              We may use third-party analytics providers (for example, Google
              Analytics or similar). These providers may collect information
              about your use of the Service and their own privacy policies apply
              to that data.
            </p>
          </Section>

          <Section id="sharing" title="Sharing & third parties">
            <p>
              We do not sell your personal data. We may share data in these
              circumstances:
            </p>
            <ul>
              <li>
                <strong>Service providers:</strong> vendors who process data on
                our behalf (payments, email, analytics). We require them to
                follow strict confidentiality and security standards.
              </li>
              <li>
                <strong>Legal requests:</strong> if required by law or a valid
                legal process we may disclose data to comply with legal
                obligations.
              </li>
              <li>
                <strong>Business transfers:</strong> in connection with a
                merger, acquisition, or sale of assets, personal data may be
                transferred. We will notify users if such change affects how
                their personal data is used.
              </li>
            </ul>
          </Section>

          <Section id="security" title="Security & data retention">
            <p>
              We implement reasonable technical and organizational measures to
              protect data, including encryption in transit (TLS) and secure
              storage practices. However, no internet service is completely
              secure — if you believe your account has been compromised, contact
              support immediately at{" "}
              <a
                href="mailto:hello@intelligentcv.com"
                className="text-[#EA723C]"
              >
                hello@intelligentcv.com
              </a>
              .
            </p>
            <p>
              We keep data only as long as necessary to provide the Service and
              for legitimate business purposes (for example, billing and fraud
              prevention), or as required by law. You can request deletion of
              your account and associated data; see the "Your rights" section.
            </p>
          </Section>

          <Section id="rights" title="Your rights & choices">
            <p>
              Depending on your jurisdiction, you may have rights to access,
              correct, export, or delete your personal data. You can:
            </p>
            <ul>
              <li>Access and download your resume data from your account.</li>
              <li>Request correction or deletion of personal information.</li>
              <li>
                Object to or restrict processing in certain circumstances.
              </li>
              <li>
                Opt out of marketing communications by using the unsubscribe
                link in emails.
              </li>
            </ul>
            <p>
              For GDPR requests, mention "Data Subject Access Request" in your
              email to
              <a
                href="mailto:hello@intelligentcv.com"
                className="text-[#EA723C]"
              >
                {" "}
                hello@intelligentcv.com
              </a>
              .
            </p>
          </Section>

          <Section id="ccpa" title="California privacy (CCPA)">
            <p>
              If you are a California resident, you may have additional rights
              under the California Consumer Privacy Act (CCPA). These include
              the right to know the categories and specific pieces of personal
              information we collect and the right to request deletion of
              certain personal information. To exercise rights under the CCPA,
              contact
              <a
                href="mailto:hello@intelligentcv.com"
                className="text-[#EA723C]"
              >
                {" "}
                hello@intelligentcv.com
              </a>
              .
            </p>
          </Section>

          <Section id="children" title="Children">
            <p>
              Our Service is not directed to children under 16. We do not
              knowingly collect personal data from children under the age of 16.
              If you believe we have collected information of a child under 16,
              contact us and we will take steps to remove the data.
            </p>
          </Section>

          <Section id="changes" title="Changes to this policy">
            <p>
              We may update this Privacy Policy to reflect changes in our
              practices. When we make material changes we will notify users via
              email (for registered accounts) and update the "Last updated" date
              on this page.
            </p>
          </Section>

          <Section id="contact" title="Contact & more information">
            <p>
              Questions, requests, or concerns about this Privacy Policy can be
              sent to
              <a
                href="mailto:hello@intelligentcv.com"
                className="text-[#EA723C]"
              >
                {" "}
                hello@intelligentcv.com
              </a>
              . For legal matters, include "Privacy" in the subject line.
            </p>
            <p className="mt-4">
              For details about terms, see our{" "}
              <Link to="/terms" className="text-[#EA723C]">
                Terms of Service
              </Link>
              .
            </p>
          </Section>
        </div>
      </div>
    </main>
  );
};

export default Privacy;
