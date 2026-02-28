import React, { useState, useRef, useEffect } from "react";
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
  CalendarDays,
  LogOut,
  Eye,
  EyeOff,
  Sparkles,
} from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../firebase.js";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

// ── Configurable daily limit ───────────────────────────────────────────────
const DAILY_REQUEST_LIMIT = 3;

export const Support = () => {
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    date: "",
    time: "",
    token: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authData, setAuthData] = useState({ email: "", password: "" });
  const [authErrors, setAuthErrors] = useState({});
  const [authSubmitting, setAuthSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Per-session salt keeps tokens unique across sessions for the same name+email
  const sessionSalt = useRef(Date.now().toString(36).toUpperCase());

  const contactRef = useRef(null);
  const navigate = useNavigate();

  // ── Auth listener ──────────────────────────────────────────────────────────
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthLoading(false);
      if (u) {
        setFormData((prev) => ({
          ...prev,
          email: u.email || "",
          name: u.displayName || "",
        }));
      }
    });
    return () => unsub();
  }, []);

  // ── Auto-generate token when both name AND email are filled ────────────────
  useEffect(() => {
    const name = formData.name.trim();
    const email = formData.email.trim();

    if (name.length > 0 && email.length > 0) {
      const seed = name + email + sessionSalt.current;
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let hash = 0;
      for (let i = 0; i < seed.length; i++) {
        hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
      }
      let token = "";
      let n = hash;
      for (let i = 0; i < 8; i++) {
        token += chars[n % chars.length];
        n = ((n >>> 3) + hash + i * 17) >>> 0 || i + 1;
      }
      setFormData((prev) => ({ ...prev, token }));
      if (errors.token) setErrors((prev) => ({ ...prev, token: "" }));
    } else {
      setFormData((prev) => ({ ...prev, token: "" }));
    }
  }, [formData.name, formData.email]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Auth handlers ──────────────────────────────────────────────────────────
  const handleEmailLogin = async () => {
    const newErrors = {};
    if (!authData.email.trim()) newErrors.email = "Email is required.";
    if (!authData.password.trim()) newErrors.password = "Password is required.";
    if (Object.keys(newErrors).length > 0) {
      setAuthErrors(newErrors);
      return;
    }
    setAuthSubmitting(true);
    try {
      await signInWithEmailAndPassword(auth, authData.email, authData.password);
      toast.success("✅ Signed in successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
      setAuthData({ email: "", password: "" });
      setAuthErrors({});
    } catch (err) {
      const msg =
        err.code === "auth/user-not-found" ||
        err.code === "auth/wrong-password" ||
        err.code === "auth/invalid-credential"
          ? "Invalid email or password. Please try again."
          : "Sign in failed. Please try again.";
      setAuthErrors({ general: msg });
    } finally {
      setAuthSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    setAuthSubmitting(true);
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("✅ Signed in with Google!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch {
      toast.error("❌ Google sign-in failed. Please try again.", {
        position: "top-right",
        autoClose: 4000,
      });
    } finally {
      setAuthSubmitting(false);
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    setFormData({
      name: "",
      email: "",
      message: "",
      date: "",
      time: "",
      token: "",
    });
    setSelectedIssue(null);
    toast.info("🔐 Signed out successfully.", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  // ── Form helpers ───────────────────────────────────────────────────────────
  const handleIssueSelect = (id) => {
    setSelectedIssue(id);
    setTimeout(
      () =>
        contactRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        }),
      100,
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) newErrors.email = "Email address is required.";
    if (!formData.date.trim()) newErrors.date = "Date is required.";
    if (!formData.time.trim()) newErrors.time = "Time is required.";
    if (!formData.token.trim())
      newErrors.token =
        "Token could not be generated — please fill in your name and email.";
    if (!selectedIssue) newErrors.issue = "Please select an issue type above.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  // ── Rate-limit: count today's submissions for this email ──────────────────
  const getSubmissionsToday = async (email) => {
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);
    const q = query(
      collection(db, "supportRequest"),
      where("email", "==", email.toLowerCase().trim()),
    );
    const snapshot = await getDocs(q);
    const todayStart = startOfToday.getTime();
    return snapshot.docs.filter((doc) => {
      const docTime = doc.data().time?.toDate?.();
      return docTime && docTime.getTime() >= todayStart;
    }).length;
  };

  // ── Submit ─────────────────────────────────────────────────────────────────
  const handleSendMessage = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    try {
      const submissionsToday = await getSubmissionsToday(formData.email);

      if (submissionsToday >= DAILY_REQUEST_LIMIT) {
        toast.error(
          `⚠️ You've reached the daily limit of ${DAILY_REQUEST_LIMIT} support requests. Please come back tomorrow — we're working on your requests!`,
          { position: "top-right", autoClose: 7000, hideProgressBar: false },
        );
        setIsSubmitting(false);
        return;
      }

      const issueTitle =
        issues.find((i) => i.id === selectedIssue)?.title || "";
      await addDoc(collection(db, "supportRequest"), {
        requestId: `SN-${formData.token}`,
        customerName: formData.name,
        email: formData.email.toLowerCase().trim(),
        uid: user.uid,
        issueType: issueTitle,
        message: formData.message,
        date: formData.date,
        time_of_issue: formData.time,
        status: false,
        time: serverTimestamp(),
      });

      const remaining = DAILY_REQUEST_LIMIT - submissionsToday - 1;
      toast.success(
        remaining > 0
          ? `✅ Request submitted! You have ${remaining} request${remaining > 1 ? "s" : ""} remaining today.`
          : "✅ Request submitted! You've used all your requests for today.",
        { position: "top-right", autoClose: 5000 },
      );

      setFormData({
        name: "",
        email: "",
        message: "",
        date: "",
        time: "",
        token: "",
      });
      setSelectedIssue(null);
      setErrors({});
    } catch (error) {
      console.error("Firestore error:", error);
      toast.error(
        "❌ Something went wrong. Please check your connection and try again.",
        {
          position: "top-right",
          autoClose: 5000,
        },
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Static data ────────────────────────────────────────────────────────────
  const issues = [
    {
      id: "food-quality",
      icon: <Utensils className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Food Quality Issues",
      description: "Wrong items, cold food, or quality concerns",
      bg: "bg-yellow-50",
      border: "border-yellow-300",
      iconColor: "text-yellow-500",
      selectedBorder: "border-yellow-400",
    },
    {
      id: "missing-items",
      icon: <Package className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Missing Items",
      description: "Items missing from your order",
      bg: "bg-orange-50",
      border: "border-orange-200",
      iconColor: "text-orange-400",
      selectedBorder: "border-orange-400",
    },
    {
      id: "delivery-delays",
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Delivery Delays",
      description: "Late delivery or tracking issues",
      bg: "bg-teal-50",
      border: "border-teal-200",
      iconColor: "text-teal-500",
      selectedBorder: "border-teal-400",
    },
    {
      id: "refund-requests",
      icon: <ThumbsDown className="w-5 h-5 sm:w-6 sm:h-6" />,
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

  // ── Reusable spinner ───────────────────────────────────────────────────────
  const Spinner = ({ className = "w-4 h-4" }) => (
    <svg
      className={`animate-spin ${className}`}
      fill="none"
      viewBox="0 0 24 24">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8z"
      />
    </svg>
  );

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="select-none">
      <div className="min-h-screen bg-gray-100">
        <ToastContainer />

        {/* ── Header ── */}
        <div
          className="text-white"
          style={{ background: "linear-gradient(135deg, #c90900, #ff865a)" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
            <div className="flex justify-start mb-5 sm:mb-6">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition duration-200 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium backdrop-blur-sm border border-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4"
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

            <div className="text-center px-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
                How Can We Help You?
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-orange-100 max-w-2xl mx-auto px-2">
                We're here to ensure your food experience is perfect. Get
                support for orders, quality issues, or any questions you have.
              </p>
            </div>

            <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              <div className="hover:bg-red-600 border-2 border-white/20 hover:scale-105 transition duration-300 rounded-2xl p-4 sm:p-5 lg:p-6 text-left shadow-lg text-white">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <span className="text-lg sm:text-xl rounded-l border-2 border-black bg-white leading-none px-0.5">
                    📞
                  </span>
                  <h3 className="font-semibold text-base sm:text-lg">
                    Phone Support
                  </h3>
                </div>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold break-all">
                  1-800-0000-000
                </p>
                <p className="text-xs sm:text-sm text-orange-100 mt-1 sm:mt-2">
                  Mon-Sun
                </p>
              </div>

              <div className="hover:bg-red-600 border-2 border-white/20 hover:scale-105 transition duration-300 rounded-2xl p-4 sm:p-5 lg:p-6 text-left shadow-lg backdrop-blur-lg">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <Mail className="w-6 h-5 sm:w-8 sm:h-6 text-slate-600 rounded-l border-2 border-slate-500 bg-white flex-shrink-0" />
                  <h3 className="font-semibold text-base sm:text-lg text-white">
                    Email Support
                  </h3>
                </div>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold break-all">
                  support@foodbnb.com
                </p>
                <p className="text-xs sm:text-sm text-emerald-100 mt-1 sm:mt-2">
                  Response within 24 hours
                </p>
              </div>

              <div className="hover:bg-red-600 border-2 border-white/20 hover:scale-105 transition duration-300 rounded-2xl p-4 sm:p-5 lg:p-6 text-left shadow-lg">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <MessagesSquare className="w-6 h-5 sm:w-8 sm:h-6 rounded-l border-2 border-slate-500 bg-white text-slate-500 flex-shrink-0" />
                  <h3 className="font-semibold text-base sm:text-lg">
                    Live Chat
                  </h3>
                </div>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold">
                  Chat with us now
                </p>
                <p className="text-xs sm:text-sm text-red-100 mt-1 sm:mt-2">
                  Average wait: 2 minutes
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Common Issues ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
          <div className="text-center mb-7 sm:mb-10">
            <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 rounded-full mb-3 sm:mb-4">
              <BadgeAlert className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Common Issues
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
              What's Your Issue?
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Select the type of problem you're experiencing
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
            {issues.map((issue) => (
              <button
                key={issue.id}
                onClick={() => handleIssueSelect(issue.id)}
                className={`${issue.bg} border-2 ${
                  selectedIssue === issue.id
                    ? issue.selectedBorder + " shadow-md"
                    : issue.border
                } rounded-2xl p-4 sm:p-5 lg:p-6 text-left hover:shadow-md transition-all duration-200 hover:scale-[1.01] hover:bg-slate-300 w-full`}>
                <div className={`${issue.iconColor} mb-2 sm:mb-3`}>
                  {issue.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1">
                  {issue.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm">
                  {issue.description}
                </p>
              </button>
            ))}
          </div>

          {selectedIssue && (
            <div className="mt-4 sm:mt-6 text-center">
              <p className="text-gray-600 text-xs sm:text-sm">
                You selected:{" "}
                <span className="font-semibold text-orange-500">
                  {issues.find((i) => i.id === selectedIssue)?.title}
                </span>
              </p>
            </div>
          )}
          {errors.issue && (
            <p className="text-red-500 text-xs text-center mt-2">
              {errors.issue}
            </p>
          )}
        </div>

        {/* ── Important Information ── */}
        <div className="bg-amber-50 py-10 sm:py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-7 sm:mb-10">
              <span className="inline-flex items-center gap-2 bg-white border border-orange-300 text-orange-500 text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 rounded-full mb-3 sm:mb-4">
                <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Good to Know
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Important Information
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div className="flex flex-col gap-4 sm:gap-5">
                {infoCards.map((card, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-2xl p-4 sm:p-5 lg:p-6 shadow-sm border-l-4 ${card.borderColor}`}>
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-4 sm:p-5 lg:p-6 shadow-sm h-fit">
                <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-4 sm:mb-5">
                  Quick Tips
                </h3>
                <ol className="flex flex-col gap-3 sm:gap-4">
                  {quickTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <span className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-orange-400 text-white text-xs sm:text-sm font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed pt-0.5">
                        {tip}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* ── Get in Touch ── */}
          <div ref={contactRef} className="bg-amber-50 pt-12 sm:pt-14 lg:pt-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <span className="inline-flex items-center gap-2 bg-teal-100 text-teal-600 text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 rounded-full mb-3 sm:mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4"
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                Contact Us
              </h2>

              {/* Auth loading */}
              {authLoading && (
                <div className="flex items-center justify-center py-12 sm:py-16">
                  <Spinner className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 mr-3" />
                  <span className="text-gray-400 text-sm">Loading...</span>
                </div>
              )}

              {/* ── LOGIN GATE ── */}
              {!authLoading && !user && (
                <div className="mt-5 sm:mt-6">
                  <p className="text-gray-500 text-xs sm:text-sm mb-6 sm:mb-8 px-2">
                    Please sign in to submit a support request. This helps us
                    respond to you faster and keep things secure.
                  </p>
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 sm:p-6 lg:p-8 text-left max-w-md mx-auto">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-5 sm:mb-6 text-center">
                      Sign In
                    </h3>

                    {authErrors.general && (
                      <div className="mb-4 px-3 sm:px-4 py-2.5 sm:py-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs sm:text-sm text-center">
                        {authErrors.general}
                      </div>
                    )}

                    <div className="mb-4">
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={authData.email}
                        onChange={(e) => {
                          setAuthData((p) => ({ ...p, email: e.target.value }));
                          if (authErrors.email)
                            setAuthErrors((p) => ({ ...p, email: "" }));
                        }}
                        placeholder="you@example.com"
                        className={`w-full border rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 ${authErrors.email ? "border-red-400 bg-red-50" : "border-gray-300"}`}
                      />
                      {authErrors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {authErrors.email}
                        </p>
                      )}
                    </div>

                    <div className="mb-5 sm:mb-6">
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          value={authData.password}
                          onChange={(e) => {
                            setAuthData((p) => ({
                              ...p,
                              password: e.target.value,
                            }));
                            if (authErrors.password)
                              setAuthErrors((p) => ({ ...p, password: "" }));
                          }}
                          onKeyDown={(e) =>
                            e.key === "Enter" && handleEmailLogin()
                          }
                          placeholder="••••••••"
                          className={`w-full border rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 pr-10 sm:pr-11 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 ${authErrors.password ? "border-red-400 bg-red-50" : "border-gray-300"}`}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((p) => !p)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                          {showPassword ? (
                            <EyeOff className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          ) : (
                            <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          )}
                        </button>
                      </div>
                      {authErrors.password && (
                        <p className="text-red-500 text-xs mt-1">
                          {authErrors.password}
                        </p>
                      )}
                    </div>

                    <button
                      onClick={handleEmailLogin}
                      disabled={authSubmitting}
                      className={`w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-xl text-white font-semibold text-xs sm:text-sm transition duration-200 mb-3 sm:mb-4 ${authSubmitting ? "bg-orange-300 cursor-not-allowed" : "bg-orange-400 hover:bg-orange-500"}`}>
                      {authSubmitting ? (
                        <>
                          <Spinner /> Signing in...
                        </>
                      ) : (
                        <>
                          <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Sign In
                          with Email
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <div className="flex-1 h-px bg-gray-200" />
                      <span className="text-xs text-gray-400 font-medium">
                        OR
                      </span>
                      <div className="flex-1 h-px bg-gray-200" />
                    </div>

                    <button
                      onClick={handleGoogleLogin}
                      disabled={authSubmitting}
                      className="w-full flex items-center justify-center gap-2 sm:gap-3 py-2.5 sm:py-3 rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold text-xs sm:text-sm transition duration-200">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      Continue with Google
                    </button>
                  </div>
                </div>
              )}

              {/* ── CONTACT FORM (logged in) ── */}
              {!authLoading && user && (
                <div className="mt-2">
                  {/* Logged-in banner */}
                  <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 mb-6 sm:mb-8 max-w-md mx-auto gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-green-400 flex items-center justify-center text-white text-xs font-bold">
                        {(user.displayName ||
                          user.email ||
                          "U")[0].toUpperCase()}
                      </div>
                      <div className="text-left min-w-0">
                        <p className="text-xs font-semibold text-green-800 truncate">
                          {user.displayName || "Signed In"}
                        </p>
                        <p className="text-xs text-green-600 truncate">
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="flex-shrink-0 flex items-center gap-1 text-xs text-red-500 hover:text-red-700 font-medium transition">
                      <LogOut className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span className="hidden xs:inline sm:inline">
                        Sign out
                      </span>
                    </button>
                  </div>

                  <p className="text-gray-500 text-sm sm:text-base mb-6 sm:mb-8 px-2">
                    {selectedIssue
                      ? `We'll help you with: ${issues.find((i) => i.id === selectedIssue)?.title}`
                      : "Fill out the form below and we'll get back to you as soon as possible"}
                  </p>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left mb-4 sm:mb-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`w-full border rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 ${errors.name ? "border-red-400 bg-red-50" : "border-gray-300"}`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className={`w-full border rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 bg-gray-50 ${errors.email ? "border-red-400 bg-red-50" : "border-gray-300"}`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left mb-4 sm:mb-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
                          Date <span className="text-red-500">*</span>
                        </span>
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className={`w-full border rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white ${errors.date ? "border-red-400 bg-red-50" : "border-gray-300"}`}
                      />
                      {errors.date && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.date}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
                          Time <span className="text-red-500">*</span>
                        </span>
                      </label>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className={`w-full border rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white ${errors.time ? "border-red-400 bg-red-50" : "border-gray-300"}`}
                      />
                      {errors.time && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.time}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* ── Token — auto-generated, fully read-only ── */}
                  <div className="text-left mb-4 sm:mb-6">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Token Number <span className="text-red-500">*</span>
                      <span className="ml-2 text-xs font-normal text-gray-400 italic">
                        — auto-generated
                      </span>
                    </label>

                    <div
                      className={`flex items-stretch rounded-xl border overflow-hidden ${errors.token ? "border-red-400" : "border-gray-300"}`}>
                      {/* Static prefix */}
                      <span className="flex items-center px-2.5 sm:px-4 py-2.5 sm:py-3 bg-gray-100 border-r border-gray-300 text-xs sm:text-sm font-bold text-gray-500 select-none tracking-widest cursor-default whitespace-nowrap">
                        SR-
                      </span>
                      {/* Token value */}
                      <input
                        type="text"
                        readOnly
                        value={formData.token}
                        placeholder="Fill in name & email above…"
                        className={`flex-1 min-w-0 px-2 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-mono tracking-widest focus:outline-none cursor-default ${formData.token ? "text-gray-800 bg-gray-50" : "text-gray-400 bg-gray-50"} ${errors.token ? "bg-red-50" : ""}`}
                      />
                      {/* Status badge */}
                      <span
                        className={`flex items-center gap-1 px-3 sm:px-4 border-l text-xs font-semibold whitespace-nowrap transition-all duration-300 ${formData.token ? "border-teal-200 bg-teal-50 text-teal-600" : "border-gray-200 bg-gray-50 text-gray-400"}`}>
                        {formData.token ? (
                          <>
                            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />{" "}
                            Generated
                          </>
                        ) : (
                          "Pending"
                        )}
                      </span>
                    </div>

                    {formData.token ? (
                      <p className="text-teal-600 text-xs mt-1.5 font-medium">
                        ✓ Your token:{" "}
                        <span className="font-mono font-bold">
                          SR-{formData.token}
                        </span>{" "}
                        — please save this for reference
                      </p>
                    ) : (
                      <p className="text-gray-400 text-xs mt-1.5">
                        Token will appear automatically once you fill in your
                        name and email.
                      </p>
                    )}
                    {errors.token && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.token}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="text-left mb-4 sm:mb-6">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
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
                      className={`w-full border rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none ${errors.message ? "border-red-400 bg-red-50" : "border-gray-300"}`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Daily limit notice */}
                  <p className="text-gray-400 text-xs mb-4">
                    You may submit up to{" "}
                    <span className="font-semibold text-orange-400">
                      {DAILY_REQUEST_LIMIT} support requests
                    </span>{" "}
                    per day.
                  </p>

                  {/* Submit */}
                  <button
                    onClick={handleSendMessage}
                    disabled={isSubmitting}
                    className={`${isSubmitting ? "bg-orange-300 cursor-not-allowed" : "bg-orange-400 hover:bg-orange-500"} text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl transition duration-200 flex items-center gap-2 mx-auto text-xs sm:text-sm`}>
                    {isSubmitting ? (
                      <>
                        <Spinner /> Submitting...
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4"
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
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <footer className="bg-gray-900 text-white">
          <div className="py-10 sm:py-12 lg:py-16 text-center border-b border-gray-700 px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Still Need Help?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-2">
              Our dedicated support team is available 24/7 to assist you with
              any questions or concerns about your food orders.
            </p>
          </div>
          <div className="py-5 sm:py-6 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
              <p className="text-gray-500 text-xs sm:text-sm mx-auto">
                © {new Date().getFullYear()} foodbnb. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
