import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  CheckCircle2,
  Lock,
  Upload,
  X,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Activity,
} from "lucide-react";

const FraudReportPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    issueType: "",
    transactionId: "",
    description: "",
    certify: false,
  });

  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showAutoSave, setShowAutoSave] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    try {
      const savedDraft = localStorage.getItem("fraudReportDraft");
      if (savedDraft) {
        const parsedData = JSON.parse(savedDraft);
        setFormData(parsedData);
        setCharCount(parsedData.description?.length || 0);
      }
    } catch (e) {}
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (formData.fullName || formData.email || formData.description) {
        try {
          localStorage.setItem("fraudReportDraft", JSON.stringify(formData));
          setShowAutoSave(true);
          setTimeout(() => setShowAutoSave(false), 2000);
        } catch (e) {}
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [formData]);

  useEffect(() => {
    const isValid =
      formData.fullName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.issueType !== "" &&
      formData.description.trim() !== "" &&
      formData.certify;
    setIsFormValid(isValid);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (name === "description") setCharCount(value.length);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) setFile(selectedFile);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) setFile(droppedFile);
  };

  const removeFile = () => {
    setFile(null);
    const input = document.getElementById("fileUpload");
    if (input) input.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setShowSuccess(true);
      try {
        localStorage.removeItem("fraudReportDraft");
      } catch (e) {}
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1500);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-orange-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Report Submitted!
          </h2>
          <p className="text-gray-500">
            Our safety team will review your report within 24 hours and contact
            you if more information is needed.
          </p>
          <button
            onClick={() => {
              setShowSuccess(false);
              setFormData({
                fullName: "",
                email: "",
                issueType: "",
                transactionId: "",
                description: "",
                certify: false,
              });
              setCharCount(0);
              setFile(null);
            }}
            className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors">
            Submit Another Report
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-50 font-sans">
      {/* Top Nav Bar */}
      <div className="bg-white border-b border-gray-100 px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-gray-500 hover:text-orange-500 transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span className="text-xs font-semibold hidden sm:inline">
            Back to Home
          </span>
        </button>

        {/* Logo / Brand — centered */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
            Safety Center
          </span>
        </div>

        {/* Spacer to balance layout and keep brand centered */}
        <div className="w-[72px] sm:w-24" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Page Header */}
        <div className="mb-6 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
            Report a <span className="text-orange-500">Fraud</span>
          </h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-lg">
            Your safety and trust are our top priorities. If you've encountered
            fraud or an issue with a booking, please let us know so we can
            investigate immediately.
          </p>
        </div>

        {/* Two-column layout — stacks on mobile/tablet, side-by-side on lg+ */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          {/* LEFT: Form */}
          <div className="w-full lg:flex-1 lg:min-w-0">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Section 01 - Contact */}
              <div className="p-5 sm:p-8 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <span className="text-2xl font-black text-orange-400">
                    01
                  </span>
                  <h2 className="text-xs sm:text-sm font-bold tracking-widest text-gray-700 uppercase">
                    Contact Information
                  </h2>
                </div>
                {/* Stack on xs, 2-col on sm+ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all text-sm bg-gray-50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all text-sm bg-gray-50"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Section 02 - Transaction */}
              <div className="p-5 sm:p-8 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <span className="text-2xl font-black text-orange-400">
                    02
                  </span>
                  <h2 className="text-xs sm:text-sm font-bold tracking-widest text-gray-700 uppercase">
                    Transaction Details
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">
                      Type of Issue
                    </label>
                    <div className="relative">
                      <select
                        name="issueType"
                        value={formData.issueType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all text-sm bg-gray-50 appearance-none"
                        required>
                        <option value="">Select issue type</option>
                        <option value="fraud">Fraud / Scam</option>
                        <option value="payment">Payment Issue</option>
                        <option value="fake-order">Fake Order</option>
                        <option value="food-quality">
                          Food Quality / Safety
                        </option>
                        <option value="app-issue">App Issue</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">
                      Transaction ID
                    </label>
                    <input
                      type="text"
                      name="transactionId"
                      value={formData.transactionId}
                      onChange={handleInputChange}
                      placeholder="FB-XXXX-XXXX"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all text-sm bg-gray-50"
                    />
                  </div>
                </div>
              </div>

              {/* Section 03 - Incident */}
              <div className="p-5 sm:p-8">
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <span className="text-2xl font-black text-orange-400">
                    03
                  </span>
                  <h2 className="text-xs sm:text-sm font-bold tracking-widest text-gray-700 uppercase">
                    The Incident
                  </h2>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-600 mb-2">
                    Description of Incident
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    maxLength={2000}
                    rows={6}
                    placeholder="Please provide as much detail as possible..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all text-sm bg-gray-50 resize-y"
                    required
                  />
                  <div
                    className={`text-right text-xs mt-1 ${charCount > 1800 ? "text-red-500 font-semibold" : "text-gray-400"}`}>
                    {charCount} / 2000 characters
                  </div>
                </div>

                {/* File Upload */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-600 mb-2">
                    Evidence (Optional)
                  </label>
                  <label
                    htmlFor="fileUpload"
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDragOver(true);
                    }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={handleDrop}
                    className={`flex flex-col items-center justify-center gap-2 w-full py-6 sm:py-8 border-2 border-dashed rounded-xl cursor-pointer transition-all ${
                      dragOver
                        ? "border-orange-400 bg-orange-50"
                        : "border-gray-200 bg-gray-50 hover:border-orange-300 hover:bg-orange-50"
                    }`}>
                    <Upload
                      className={`w-7 h-7 sm:w-8 sm:h-8 ${dragOver ? "text-orange-500" : "text-gray-400"}`}
                    />
                    <p className="text-xs sm:text-sm text-gray-500 font-medium text-center px-2">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-400">
                      PNG, JPG or PDF (max. 10MB)
                    </p>
                  </label>
                  <input
                    type="file"
                    id="fileUpload"
                    onChange={handleFileChange}
                    accept="image/*,.pdf"
                    className="hidden"
                  />
                  {file && (
                    <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-xl px-4 py-3 mt-3">
                      <span className="text-green-700 font-medium text-sm truncate mr-2">
                        ✓ {file.name}
                      </span>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="text-red-400 hover:text-red-600 transition-colors flex-shrink-0">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Certify Checkbox */}
                <div className="flex items-start gap-3 mb-8">
                  <input
                    type="checkbox"
                    id="certify"
                    name="certify"
                    checked={formData.certify}
                    onChange={handleInputChange}
                    className="mt-0.5 w-4 h-4 rounded border-gray-300 text-orange-500 accent-orange-500 cursor-pointer flex-shrink-0"
                  />
                  <label
                    htmlFor="certify"
                    className="text-xs sm:text-sm text-gray-500 leading-relaxed cursor-pointer">
                    I certify that the information provided is true and accurate
                    to the best of my knowledge. I understand FoodBnB may
                    contact me for further details regarding this report.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start px-8 py-4 rounded-xl font-bold text-base transition-all ${
                    isFormValid && !isSubmitting
                      ? "bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}>
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <ArrowRight className="w-4 h-4" />
                      Submit Report
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT: Sidebar — full width on mobile, fixed width on lg+ */}
          <div className="w-full lg:w-80 lg:flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {/* Tips for Reporting */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-5 h-5 text-orange-500" />
                <h3 className="font-bold text-gray-800 text-sm">
                  Tips for Reporting
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Be specific with dates, times, and names involved.",
                  "Include clear screenshots of messages or receipts.",
                  "Double-check your Transaction ID to speed up tracking.",
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-500 leading-relaxed">
                      {tip}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What Happens Next */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-5 h-5 text-orange-500 flex-shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 text-sm">
                  What Happens Next?
                </h3>
              </div>
              <div className="space-y-5">
                {[
                  {
                    n: 1,
                    title: "Initial Review",
                    desc: "Our safety team reviews your report within 24 hours.",
                  },
                  {
                    n: 2,
                    title: "Investigation",
                    desc: "We verify transaction logs and contact involved parties if needed.",
                  },
                  {
                    n: 3,
                    title: "Resolution",
                    desc: "You'll receive a final status update via email and dashboard.",
                  },
                ].map(({ n, title, desc }) => (
                  <div key={n} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {n}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        {title}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Secure Reporting — spans both cols on sm, full on lg */}
            <div className="sm:col-span-2 lg:col-span-1 bg-orange-50 rounded-2xl border border-orange-100 p-5 flex items-start gap-3">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800 mb-1">
                  Secure Reporting
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  All reports are encrypted and handled with strict
                  confidentiality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Auto-save Toast */}
      {showAutoSave && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-gray-900 text-white px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 z-50 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-green-400" />
          <span className="text-sm font-medium">Draft saved</span>
        </div>
      )}
    </div>
  );
};

export default FraudReportPage;
