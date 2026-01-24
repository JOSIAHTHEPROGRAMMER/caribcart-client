import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicySection = () => {
  return (
    <div className="py-20 px-4 md:px-16 lg:px-24 xl:px-40 bg-linear-to-b from-white to-gray-50">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-gray-800 mb-4">
          Privacy Policy
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-[#FF6B6B] to-[#FFD93D] mx-auto rounded-full mb-6"></div>
        <p className="text-base md:text-lg text-gray-600 text-center max-w-2xl mx-auto leading-relaxed">
          We value your privacy and are committed to protecting your personal
          information. Please read the details below to understand how we collect,
          use, and safeguard your data.
        </p>
      </div>

      {/* Content Sections */}
      <div className="mt-16 max-w-4xl mx-auto space-y-6">
        <section className="bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-linear-to-r from-[#FF6B6B] to-[#FFD93D] flex items-center justify-center shrink-0">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Information We Collect
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                We collect information you provide directly to us, such as when you
                create an account, contact us, or use our services. This may include
                your name, email, payment information, and any other information you
                choose to provide.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-linear-to-r from-[#1DD3B0] to-[#3C91E6] flex items-center justify-center shrink-0">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                How We Use Your Information
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Your information helps us provide and improve our services,
                communicate with you, process transactions, and personalize your
                experience on our platform.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-linear-to-r from-[#FFD93D] to-[#1DD3B0] flex items-center justify-center shrink-0">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Data Sharing & Security
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                We do not sell your personal information. We may share data with
                trusted third-party service providers to help deliver our services,
                and we maintain strict security measures to protect your data.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-linear-to-r from-[#3C91E6] to-[#FF6B6B] flex items-center justify-center shrink-0">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Your Rights</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                You have the right to access, update, or delete your personal
                information at any time. You can also opt out of communications or
                marketing emails.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-linear-to-r from-[#FF6B6B] to-[#FFD93D] rounded-lg p-6 md:p-8 shadow-md">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3 text-white">Contact Us</h3>
              <p className="text-sm md:text-base text-white/90 leading-relaxed">
                If you have any questions or concerns about your privacy, please{" "}
                <Link
                  to="/contact"
                  className="font-semibold text-white underline decoration-2 underline-offset-2 hover:decoration-4 transition-all"
                >
                  contact us
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Last Updated */}
      <div className="mt-12 text-center">
        <p className="text-sm text-gray-500">
          Last updated: December 31, 2024
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicySection;