import React from "react";
import { Link } from "react-router-dom";

const LAST_UPDATED = "November 7, 2025";

const Section = ({ id, title, children }) => (
  <section id={id} className="mt-10">
    <h3 className="text-2xl font-semibold mb-3">{title}</h3>
    <div className="prose prose-sm prose-zinc text-gray-700 max-w-none">{children}</div>
  </section>
);

const Terms = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Terms of Service</h1>
        <p className="mt-2 text-sm text-gray-600">Last updated: {LAST_UPDATED}</p>
      </header>

      <div className="grid gap-8 lg:grid-cols-4">
        <nav className="hidden lg:block sticky top-24">
          <div className="text-sm text-gray-700 space-y-2">
            <div className="font-medium mb-2">On this page</div>
            <a href="#summary" className="block hover:text-[#EA723C]">Quick summary</a>
            <a href="#acceptance" className="block hover:text-[#EA723C]">Acceptance</a>
            <a href="#accounts" className="block hover:text-[#EA723C]">Accounts</a>
            <a href="#payments" className="block hover:text-[#EA723C]">Payments & Refunds</a>
            <a href="#content" className="block hover:text-[#EA723C]">Your content</a>
            <a href="#liability" className="block hover:text-[#EA723C]">Disclaimers & Liability</a>
            <a href="#privacy" className="block hover:text-[#EA723C]">Privacy</a>
            <a href="#contact" className="block hover:text-[#EA723C]">Contact</a>
          </div>
        </nav>

        <div className="lg:col-span-3">
          <Section id="summary" title="Quick summary">
            <p>
              Short version: Intelligent CV provides tools to build, review, and export resumes. Use the
              service responsibly. We try to make results accurate and useful, but we can't promise
              you'll get a job — your success depends on many factors. By using the service you agree
              to these terms.
            </p>
          </Section>

          <Section id="acceptance" title="Acceptance of terms">
            <p>
              These Terms of Service ("Terms") govern your access to and use of Intelligent CV and any
              related services we provide. By accessing or using the Service you accept and agree to be
              bound by these Terms. If you do not agree, please do not use the Service.
            </p>
          </Section>

          <Section id="accounts" title="Accounts & eligibility">
            <p>
              You may need to create an account to use certain features. You represent that you are at
              least the minimum age required in your jurisdiction. You are responsible for maintaining
              the confidentiality of your account credentials and for all activity that occurs under
              your account.
            </p>
            <ul>
              <li>Keep your password secure and notify us of unauthorized access.</li>
              <li>Do not share paid accounts with unauthorized users.</li>
            </ul>
          </Section>

          <Section id="payments" title="Payments, subscriptions & refunds">
            <p>
              Some features or products require payment. All fees are described on our Pricing page and
              are non-refundable except as required by law or expressly stated. By purchasing a paid
              plan you authorize us to charge your selected payment method.
            </p>
            <p>
              Refund requests are handled on a case-by-case basis. If you believe you are entitled to a
              refund, contact our support team at <a href="mailto:hello@intelligentcv.example" className="text-[#EA723C]">hello@intelligentcv.example</a>.
            </p>
          </Section>

          <Section id="content" title="Your content & license">
            <p>
              You retain ownership of the content you upload or generate using the Service ("Your
              Content"). By posting, uploading or submitting Your Content, you grant Intelligent CV a
              worldwide, non-exclusive, royalty-free license to host, use, copy, modify, and display
              that content as needed to provide the Service.
            </p>
            <p>
              You are responsible for ensuring Your Content does not violate third-party rights or the
              law. Do not upload illegal, infringing, or abusive materials.
            </p>
          </Section>

          <Section id="prohibited" title="Prohibited uses">
            <p>Examples of prohibited uses include:</p>
            <ul>
              <li>Uploading content that infringes copyrights or other IP.</li>
              <li>Using the Service to impersonate others or commit fraud.</li>
              <li>Attempting to reverse-engineer or abuse our services or APIs.</li>
            </ul>
          </Section>

          <Section id="liability" title="Disclaimers & limitation of liability">
            <p>
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE". TO THE MAXIMUM EXTENT PERMITTED
              BY LAW, INTELLIGENT CV DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING
              MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. WE DO NOT GUARANTEE JOB
              OFFERS, EMPLOYMENT, OR SPECIFIC OUTCOMES.
            </p>
            <p>
              IN NO EVENT WILL INTELLIGENT CV BE LIABLE FOR INDIRECT, SPECIAL, INCIDENTAL, OR
              CONSEQUENTIAL DAMAGES, OR FOR LOST PROFITS, DATA, OR BUSINESS INTERRUPTION.
            </p>
          </Section>

          <Section id="privacy" title="Data & privacy">
            <p>
              We collect and process personal data according to our <Link to="/privacy" className="text-[#EA723C]">Privacy Policy</Link>.
              Please review that policy to understand how we collect, use, and protect your information.
            </p>
          </Section>

          <Section id="changes" title="Changes to the Terms">
            <p>
              We may update these Terms from time to time. When we do we'll post the new Terms on this
              page with the "Last updated" date. If a material change is made we will attempt to notify
              you by email if you have an account.
            </p>
          </Section>

          <Section id="termination" title="Termination">
            <p>
              We may suspend or terminate access to the Service for users who violate these Terms or
              for other legitimate business reasons. Termination will not relieve you of obligations
              accrued prior to termination (including payment obligations).
            </p>
          </Section>

          <Section id="governing" title="Governing law & dispute resolution">
            <p>
              These Terms are governed by the laws of the jurisdiction in which Intelligent CV is
              incorporated, without regard to conflict of laws principles. For disputes, we prefer
              to resolve issues informally via our support channel; otherwise, disputes may be brought
              in the courts located in the stated jurisdiction.
            </p>
          </Section>

          <Section id="contact" title="Contact us">
            <p>
              If you have questions about these Terms, contact us at
              <a href="mailto:hello@intelligentcv.example" className="text-[#EA723C]"> hello@intelligentcv.example</a> or visit our <Link to="/contact" className="text-[#EA723C]">Contact page</Link>.
            </p>
          </Section>

        </div>
      </div>
    </main>
  );
};

export default Terms;
