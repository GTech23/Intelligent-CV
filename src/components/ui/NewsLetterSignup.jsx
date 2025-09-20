import React, { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // null, "success", "error"

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setEmail("");
    // TODO: Add actual signup logic (API call etc.)
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4" style={{ color: "#e76021" }}>
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-700 mb-8">
          Get the latest resume tips, updates, and exclusive offers delivered
          straight to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e76021]"
            required
          />
          <button
            type="submit"
            style={{ backgroundColor: "#e76021" }}
            className="px-6 py-3 text-white rounded-md font-semibold hover:bg-[#cc591d] transition"
          >
            Subscribe
          </button>
        </form>

        {status === "error" && (
          <p className="text-red-600 mt-4">
            Please enter a valid email address.
          </p>
        )}
        {status === "success" && (
          <p className="text-green-600 mt-4">Thank you for subscribing!</p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSignup;
