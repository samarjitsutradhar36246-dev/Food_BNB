import React, { useState, useEffect } from "react";
import {
  Shield,
  CheckCircle2,
  Lock,
  Upload,
  X,
  AlertCircle,
} from "lucide-react";

const FraudReportPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    userType: "",
    issueType: "",
    orderId: "",
    description: "",
  });

  const [file, setFile] = useState(null);
  const [charCount, setCharCount] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showAutoSave, setShowAutoSave] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-save functionality
  useEffect(() => {
    const savedDraft = localStorage.getItem("fraudReportDraft");
    if (savedDraft) {
      const parsedData = JSON.parse(savedDraft);
      setFormData(parsedData);
      setCharCount(parsedData.description?.length || 0);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (formData.fullName || formData.email || formData.description) {
        localStorage.setItem("fraudReportDraft", JSON.stringify(formData));
        setShowAutoSave(true);
        setTimeout(() => setShowAutoSave(false), 2000);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [formData]);

  // Form validation
  useEffect(() => {
    const isValid =
      formData.fullName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.userType !== "" &&
      formData.issueType !== "" &&
      formData.description.trim() !== "";

    setIsFormValid(isValid);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "description") {
      setCharCount(value.length);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const removeFile = () => {
    setFile(null);
    document.getElementById("fileUpload").value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setShowSuccess(true);
      localStorage.removeItem("fraudReportDraft");
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1500);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-red-600 text-white text-center py-12 px-6 rounded-b-3xl">
          <Shield className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-3">Report a Fraud or Issue</h1>
          <p className="text-lg opacity-95 max-w-2xl mx-auto">
            If you've faced any suspicious activity, payment issue, or
            inappropriate behavior, let us know. We're here to help.
          </p>
        </div>

        <div className="max-w-2xl mx-auto px-6 py-12">
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center animate-fade-in">
            <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-green-600" />
            <h3 className="text-2xl font-bold mb-2 text-black">
              Thank You for Reporting
            </h3>
            <p className="text-black text-lg">
              Our team will review your issue and contact you if more
              information is needed.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-12">
      {/* Header Section */}
      <div className="bg-red-600 text-white text-center py-12 px-6 rounded-b-3xl mb-8">
        <Shield className="w-16 h-16 mx-auto mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Report a Fraud or Issue
        </h1>
        <p className="text-base md:text-lg opacity-95 max-w-2xl mx-auto">
          If you've faced any suspicious activity, payment issue, or
          inappropriate behavior, let us know. We're here to help.
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-6">
        {/* Who Can Report Section */}
        <div className="bg-red-50 border-l-4 border-red-600 rounded-2xl p-6 mb-8 border-t-slate-400 ">
          <h2 className="text-xl font-semibold mb-3 text-black">
            Who Can Report
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center text-black">
              <CheckCircle2 className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
              Foodbnb customers
            </li>
            <li className="flex items-center text-black">
              <CheckCircle2 className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
              Moms / Home chefs
            </li>
          </ul>
        </div>

        {/* Report Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-base font-semibold mb-2 text-black">
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:border-red-600 focus:outline-none focus:ring-4 focus:ring-red-100 transition-all text-black bg-white"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-base font-semibold mb-2 text-black">
              Email Address <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:border-red-600 focus:outline-none focus:ring-4 focus:ring-red-100 transition-all text-black bg-white"
              required
            />
          </div>

          {/* User Type */}
          <div>
            <label
              htmlFor="userType"
              className="block text-base font-semibold mb-2 text-black">
              User Type <span className="text-red-600">*</span>
            </label>
            <select
              id="userType"
              name="userType"
              value={formData.userType}
              onChange={handleInputChange}
              className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:border-red-600 focus:outline-none focus:ring-4 focus:ring-red-100 transition-all text-black bg-white"
              required>
              <option value="">Select user type</option>
              <option value="customer">Customer</option>
              <option value="chef">Mom / Home Chef</option>

              <option value="other">Other</option>
            </select>
          </div>

          {/* Issue Type */}
          <div>
            <label
              htmlFor="issueType"
              className="block text-base font-semibold mb-2 text-black">
              Issue Type <span className="text-red-600">*</span>
            </label>
            <select
              id="issueType"
              name="issueType"
              value={formData.issueType}
              onChange={handleInputChange}
              className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:border-red-600 focus:outline-none focus:ring-4 focus:ring-red-100 transition-all text-black bg-white"
              required>
              <option value="">Select issue type</option>
              <option value="fraud">Fraud / Scam</option>
              <option value="payment">Payment Issue</option>
              <option value="fake-order">Fake Order</option>
              <option value="food-quality">Food Quality / Safety</option>
              <option value="app-issue">App Issue</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Order ID (Optional) */}
          <div>
            <label
              htmlFor="orderId"
              className="block text-base font-semibold mb-2 text-black">
              Order ID (Optional)
            </label>
            <input
              type="text"
              id="orderId"
              name="orderId"
              value={formData.orderId}
              onChange={handleInputChange}
              placeholder="e.g., FBN123456"
              className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:border-red-600 focus:outline-none focus:ring-4 focus:ring-red-100 transition-all text-black bg-white placeholder-gray-400"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-base font-semibold mb-2 text-black">
              Describe the Issue <span className="text-red-600">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              maxLength={2000}
              rows={6}
              placeholder="Please explain what happened, including order ID, date, or any details that may help us investigate."
              className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:border-red-600 focus:outline-none focus:ring-4 focus:ring-red-100 transition-all resize-y text-black bg-white placeholder-gray-400"
              required
            />
            <div
              className={`text-right text-sm mt-1 ${charCount > 1800 ? "text-red-600 font-semibold" : "text-gray-500"}`}>
              {charCount} / 2000 characters
            </div>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-base font-semibold mb-2 text-black">
              Upload Screenshot / Proof (Optional)
            </label>
            <div className="space-y-3">
              <label
                htmlFor="fileUpload"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-black border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:bg-gray-200 hover:border-red-600 transition-all">
                <Upload className="w-5 h-5" />
                <span className="font-medium">Choose File</span>
              </label>
              <input
                type="file"
                id="fileUpload"
                onChange={handleFileChange}
                accept="image/*,.pdf"
                className="hidden"
              />
              {file && (
                <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                  <span className="text-green-700 font-medium text-sm">
                    ✓ {file.name}
                  </span>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="text-red-600 hover:text-red-700">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Privacy Note */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
            <Lock className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-black leading-relaxed">
              Your report is confidential. We take every complaint seriously and
              your information will be used only for investigation and
              resolution.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2 ${
              isFormValid && !isSubmitting
                ? "bg-red-600 text-white hover:bg-red-700 hover:shadow-lg hover:-translate-y-0.5"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}>
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Shield className="w-5 h-5" />
                <span>Submit Report Securely</span>
              </>
            )}
          </button>
        </form>
      </div>

      {/* Auto-save Indicator */}
      {showAutoSave && (
        <div className="fixed bottom-6 right-6 bg-black text-white px-4 py-2.5 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in z-50">
          <CheckCircle2 className="w-4 h-4" />
          <span className="text-sm font-medium">Draft saved</span>
        </div>
      )}
    </div>
  );
};

export default FraudReportPage;
