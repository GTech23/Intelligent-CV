import React from "react";
import { Link } from "react-router-dom"; // Optional if using React Router

const NotFoundPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-[#e76021] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#e76021] text-white px-6 py-3 rounded-md font-medium transition"
        >
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
