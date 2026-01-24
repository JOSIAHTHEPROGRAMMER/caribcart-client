import React, { useState } from "react";
import { Mail, User, MessageSquare, Send, CheckCircle2 } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      setForm({ name: "", email: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="relative py-20 px-4 md:px-16 lg:px-24 xl:px-40 bg-linear-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-orange-100/20 to-yellow-100/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-cyan-100/20 to-blue-100/20 rounded-full blur-3xl -z-10"></div>

      {/* Header - unchanged */}
      <h2 className="text-3xl mb-4 md:text-4xl font-semibold text-center text-gray-800">
        Get in Touch
      </h2>
      <div className="w-24 h-1 bg-linear-to-r from-[#FF6B6B] to-[#FFD93D] mx-auto rounded-full mb-6"></div>

      <p className="text-sm md:text-base text-gray-600 text-center mt-2 max-w-xl mx-auto">
        Have questions or want to collaborate? Fill out the form below and we'll
        get back to you as soon as possible.
      </p>

      {/* Form container with card design */}
      <div className="mt-12 max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-8 md:p-10 relative overflow-hidden">
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-[#FF6B6B]/10 to-[#FFD93D]/10 rounded-bl-full z-0"></div>

          <form
            onSubmit={handleSubmit}
            className="relative z-10 flex flex-col gap-6"
          >
            {/* Name input */}
            <div className="relative group">
              <label className="block text-sm font-semibold text-gray-700 mb-2 items-center gap-2">
                <User className="w-4 h-4 text-[#FF6B6B]" />
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-[#FF6B6B] transition-all duration-300 bg-gray-50 hover:bg-white group-hover:border-gray-300"
                required
              />
            </div>

            {/* Email input */}
            <div className="relative group">
              <label className="block text-sm font-semibold text-gray-700 mb-2 items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-500" />
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-cyan-500 transition-all duration-300 bg-gray-50 hover:bg-white group-hover:border-gray-300"
                required
              />
            </div>

            {/* Message textarea */}
            <div className="relative group">
              <label className="block text-sm font-semibold text-gray-700 mb-2 items-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-500" />
                Your Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us what's on your mind..."
                rows="6"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500 transition-all duration-300 bg-gray-50 hover:bg-white resize-none group-hover:border-gray-300"
                required
              ></textarea>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitted}
              className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${
                isSubmitted
                  ? "bg-linear-to-r from-green-500 to-emerald-600 shadow-green-200/50"
                  : "bg-linear-to-r from-[#FF6B6B] to-[#FFD93D] hover:from-teal-400 hover:via-cyan-500 hover:to-blue-800 shadow-orange-200/50 hover:shadow-cyan-200/50"
              }`}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

        {/* Additional contact info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-white rounded-xl p-4 border-2 border-gray-100 hover:border-[#FF6B6B] transition-all duration-300 hover:shadow-lg text-center">
            <Mail className="w-6 h-6 text-[#FF6B6B] mx-auto mb-2" />
            <p className="text-xs font-semibold text-gray-700">Email Us</p>
            <p className="text-xs text-gray-500 mt-1">support@caribcart.com</p>
          </div>

          <div className="bg-white rounded-xl p-4 border-2 border-gray-100 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg text-center">
            <MessageSquare className="w-6 h-6 text-cyan-500 mx-auto mb-2" />
            <p className="text-xs font-semibold text-gray-700">Live Chat</p>
            <p className="text-xs text-gray-500 mt-1">Available 24/7</p>
          </div>

          <div className="bg-white rounded-xl p-4 border-2 border-gray-100 hover:border-blue-500 transition-all duration-300 hover:shadow-lg text-center">
            <CheckCircle2 className="w-6 h-6 text-blue-500 mx-auto mb-2" />
            <p className="text-xs font-semibold text-gray-700">Response Time</p>
            <p className="text-xs text-gray-500 mt-1">Within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
