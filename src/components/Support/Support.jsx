import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  MessagesSquare,
  Utensils,
  Package,
  Clock,
  ThumbsDown,
  BadgeAlert,
  HelpCircle,
} from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Support = () => {
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const contactRef = useRef(null);
  const navigate = useNavigate();

  const handleIssueSelect = (id) => {
    setSelectedIssue(id);
    setTimeout(() => {
      contactRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSendMessage = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Success
    toast.success(
      " Your request has been submitted! We'll get back to you soon.",
      {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      },
    );

    // Reset form
    setFormData({ name: "", email: "", message: "" });
    setSelectedIssue(null);
    setErrors({});
  };

  const issues = [
    {
      id: "food-quality",
      icon: <Utensils className="w-6 h-6" />,
      title: "Food Quality Issues",
      description: "Wrong items, cold food, or quality concerns",
      bg: "bg-yellow-50",
      border: "border-yellow-300",
      iconColor: "text-yellow-500",
      selectedBorder: "border-yellow-400",
    },
    {
      id: "missing-items",
      icon: <Package className="w-6 h-6" />,
      title: "Missing Items",
      description: "Items missing from your order",
      bg: "bg-orange-50",
      border: "border-orange-200",
      iconColor: "text-orange-400",
      selectedBorder: "border-orange-400",
    },
    {
      id: "delivery-delays",
      icon: <Clock className="w-6 h-6" />,
      title: "Delivery Delays",
      description: "Late delivery or tracking issues",
      bg: "bg-teal-50",
      border: "border-teal-200",
      iconColor: "text-teal-500",
      selectedBorder: "border-teal-400",
    },
    {
      id: "refund-requests",
      icon: <ThumbsDown className="w-6 h-6" />,
      title: "Refund Requests",
      description: "Request a refund for your order",
      bg: "bg-pink-50",
      border: "border-pink-200",
      iconColor: "text-pink-500",
      selectedBorder: "border-pink-400",
    },
  ];

  const infoCards = [
    {
      title: "Refund Policy",
      description:
        "Full refunds are available within 30 minutes of delivery for quality issues. Partial refunds may apply for missing items.",
      borderColor: "border-orange-400",
    },
    {
      title: "Food Safety",
      description:
        "All our partner restaurants follow strict hygiene standards. Report any food safety concerns immediately.",
      borderColor: "border-green-400",
    },
    {
      title: "Response Time",
      description:
        "Our support team typically responds within 2 minutes via live chat and within 24 hours via email.",
      borderColor: "border-blue-400",
    },
  ];

  const quickTips = [
    "Take photos of any food quality issues before contacting support",
    "Keep your order number handy for faster assistance",
    "Check your email for order confirmations and updates",
    "Contact us within 30 minutes for immediate resolution",
    "Rate your experience to help us improve our service",
  ];

  return (
    <div className="select-none">
      <div className="min-h-screen bg-gray-100">
        {/* Toastify Container */}
        <ToastContainer />

        {/* Header Section */}
        <div
          className="text-white"
          style={{ background: "linear-gradient(135deg, #c90900, #ff865a)" }}>
          <div className="max-w-6xl mx-auto px-6 py-16 text-center">
            <div className="flex justify-start mb-6">
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition duration-200 px-4 py-2 rounded-xl text-sm font-medium backdrop-blur-sm border border-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                Back to Home
              </button>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 ">
              How Can We Help You?
            </h1>

            <p className="text-lg md:text-xl text-orange-100 max-w-2xl mx-auto">
              We're here to ensure your food experience is perfect. Get support
              for orders, quality issues, or any questions you have.
            </p>

            {/* Support Cards */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-rgba(255, 255, 255, 0.15) hover:bg-red-600 border-2  border-rgba(255, 255, 255, 0.2) hover:scale-105 transition duration-1000 rounded-2xl p-6 text-left shadow-lg text-white blur-l">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl rounded-l border-2 border-black bg-white">
                    📞
                  </span>
                  <h3 className="font-semibold text-lg">Phone Support</h3>
                </div>
                <p className="text-2xl font-bold">1-800-0000-000</p>
                <p className="text-sm text-orange-100 mt-2 ">Mon-Sun</p>
              </div>

              <div className="bg-rgba(255, 255, 255, 0.15) hover:bg-red-600 border-2 border-rgba(255, 255, 255, 0.2) hover:scale-105 transition duration-1000 rounded-2xl p-6 text-left shadow-lg backdrop-blur-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="w-8 h-6 text-slate-600 rounded-l border-2 border-slate-500 bg-white" />
                  <h3 className="font-semibold text-lg text-white">
                    Email Support
                  </h3>
                </div>
                <p className="text-2xl font-bold">support@foodbnb.com</p>
                <p className="text-sm text-emerald-100 mt-2">
                  Response within 24 hours
                </p>
              </div>

              <div className="bg-rgba(255, 255, 255, 0.15) hover:bg-red-600 border-2 border-rgba(255, 255, 255, 0.2) hover:scale-105 transition duration-1000 rounded-2xl p-6 text-left shadow-lg blur(10px)">
                <div className="flex items-center gap-2 mb-3">
                  <MessagesSquare className="w-8 h-6 rounded-l border-2 border-slate-500 bg-white text-slate-500" />
                  <h3 className="font-semibold text-lg">Live Chat</h3>
                </div>
                <p className="text-2xl font-bold">Chat with us now</p>
                <p className="text-sm text-red-100 mt-2">
                  Average wait: 2 minutes
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Issues Section */}
        <div className="max-w-6xl mx-auto px-6 py-16 ">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
              <BadgeAlert className="w-4 h-4" />
              Common Issues
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              What's Your Issue?
            </h2>
            <p className="text-gray-500 text-base">
              Select the type of problem you're experiencing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 ">
            {issues.map((issue) => (
              <button
                key={issue.id}
                onClick={() => handleIssueSelect(issue.id)}
                className={`${issue.bg} border-2 ${
                  selectedIssue === issue.id
                    ? issue.selectedBorder + " shadow-md"
                    : issue.border
                } rounded-2xl p-6 text-left hover:shadow-md transition-all duration-200 hover:scale-[1.01] hover:bg-slate-300`}>
                <div className={`${issue.iconColor} mb-3`}>{issue.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">
                  {issue.title}
                </h3>
                <p className="text-gray-500 text-sm">{issue.description}</p>
              </button>
            ))}
          </div>

          {selectedIssue && (
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                You selected:{" "}
                <span className="font-semibold text-orange-500">
                  {issues.find((i) => i.id === selectedIssue)?.title}
                </span>
              </p>
            </div>
          )}
        </div>

        {/* Important Information Section */}
        <div className="bg-amber-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <span className="inline-flex items-center gap-2 bg-white border border-orange-300 text-orange-500 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                <HelpCircle className="w-4 h-4" />
                Good to Know
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Important Information
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-5">
                {infoCards.map((card, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-2xl p-6 shadow-sm border-l-4 ${card.borderColor}`}>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm h-fit hover:cursor-pointer">
                <h3 className="font-bold text-gray-900 text-xl mb-5">
                  Quick Tips
                </h3>
                <ol className="flex flex-col gap-4 ">
                  {quickTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-orange-400 text-white text-sm font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                      <p className="text-gray-600 text-sm leading-relaxed pt-0.5">
                        {tip}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* Contact Us Section */}
          <div ref={contactRef} className="bg-amber-50 py-16">
            <div className="max-w-3xl mx-auto px-6 text-center">
              <span className="inline-flex items-center gap-2 bg-teal-100 text-teal-600 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Get in Touch
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-3">
                Contact Us
              </h2>
              <p className="text-gray-500 text-base mb-10">
                {selectedIssue
                  ? `We'll help you with: ${issues.find((i) => i.id === selectedIssue)?.title}`
                  : "Fill out the form below and we'll get back to you as soon as possible"}
              </p>

              <div className="grid md:grid-cols-2 gap-6 text-left mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 ${
                      errors.name
                        ? "border-red-400 bg-red-50"
                        : "border-gray-300"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 ${
                      errors.email
                        ? "border-red-400 bg-red-50"
                        : "border-gray-300"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="text-left mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={
                    selectedIssue
                      ? `Describe your ${issues.find((i) => i.id === selectedIssue)?.title.toLowerCase()} issue...`
                      : "Describe your issue..."
                  }
                  className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none ${
                    errors.message
                      ? "border-red-400 bg-red-50"
                      : "border-gray-300"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <button
                onClick={handleSendMessage}
                className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded-xl transition duration-200 flex items-center gap-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="bg-gray-900 text-white">
          <div className="py-16 text-center border-b border-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Still Need Help?
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto">
              Our dedicated support team is available 24/7 to assist you with
              any questions or concerns about your food orders.
            </p>
          </div>

          <div className="py-6 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-sm mx-auto">
                © {new Date().getFullYear()} foodbnb. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
