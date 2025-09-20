import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Why use our Resume Builder?",
    answer:
      "It's fast, it's easy, and it can make a professional, full-page resume for anyone. Regardless of how much work experience you have, how long you went to school, or what skills you possess, our software was designed by certified resume writers to generate a complete resume for every kind of job seeker.",
  },
  {
    question: "What should I put on my resume?",
    answer:
      "There are five main sections that every resume should include: Contact Info, Resume Introduction, Professional Experience, Education, and Skills. However, keep in mind that depending on your industry, you may want to include additional sections.",
  },
  {
    question: "Can I download my resume as a PDF?",
    answer:
      "Absolutely. Once you finish editing, you can download your resume instantly in PDF format.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use encrypted connections and do not share or sell your information. Your data privacy is a top priority.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Frequently Asked Questions</h2>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-md shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium focus:outline-none"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="text-gray-600" />
                ) : (
                  <FaChevronDown className="text-gray-600" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
