import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ChefHat,
  AlertTriangle,
  Ban,
  Shield,
  Phone,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

const sections = [
  {
    num: "01",
    title: "About Mom's Kitchen",
    summaryTitle: "QUICK SUMMARY",
    summaryIcon: "🍳",
    summaryText:
      "Mom's Kitchen is a platform for home cooks to list and manage food offerings. We connect cooks with customers — we don't cook, inspect, or deliver the food ourselves.",
    summaryBullets: [
      "Digital listings platform only",
      "No food handling by us",
    ],
    content: (
      <>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Mom's Kitchen is a digital platform that enables home cooks to create
          food listings and manage their kitchen profiles. We provide the tools
          and marketplace — the cooking is all you.
        </p>
        <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-lg p-4 mt-4">
          <p className="text-sm font-bold text-gray-800">
            ⚠️ Mom's Kitchen does not prepare, cook, inspect, certify, store, or
            deliver food.
          </p>
        </div>
      </>
    ),
  },
  {
    num: "02",
    title: "Eligibility",
    summaryTitle: "WHO CAN JOIN",
    summaryIcon: "✅",
    summaryText:
      "You must be 18 or older, provide honest information, and follow local food safety laws.",
    summaryBullets: ["Must be 18+ years old", "Accurate info required"],
    content: (
      <>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          To use Mom's Kitchen, you must:
        </p>
        <ul className="space-y-2">
          {[
            "Be 18 years of age or older",
            "Provide accurate and complete information",
            "Comply with all applicable local food safety and hygiene laws",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-gray-600 border-b border-orange-50 pb-2">
              <span className="text-orange-500 font-bold mt-0.5">•</span>
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    num: "03",
    title: "Account Registration & Security",
    summaryTitle: "YOUR ACCOUNT",
    summaryIcon: "🔐",
    summaryText:
      "One account per cook. Keep your credentials safe — all activity on your account is your responsibility.",
    summaryBullets: ["One account per user", "You own your account activity"],
    content: (
      <ul className="space-y-2">
        {[
          "Each cook may create only one account",
          "You are responsible for maintaining the confidentiality of your account credentials",
          "Any activity performed using your account is your responsibility",
        ].map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm text-gray-600 border-b border-orange-50 pb-2">
            <span className="text-orange-500 font-bold mt-0.5">•</span>
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    num: "04",
    title: "Cook Responsibilities",
    summaryTitle: "YOUR DUTIES",
    summaryIcon: "👨‍🍳",
    summaryText:
      "Cook clean, use fresh ingredients, disclose allergens, and follow local regulations. Your kitchen, your responsibility.",
    summaryBullets: ["Disclose all allergens", "Follow food safety laws"],
    content: (
      <>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          By using Mom's Kitchen, you agree to:
        </p>
        <ul className="space-y-2">
          {[
            "Prepare food in a clean, safe, and hygienic home environment",
            "Use fresh and consumable ingredients",
            "Clearly disclose ingredients, preparation methods, and possible allergens (nuts, dairy, gluten, etc.)",
            "Ensure that food listings accurately represent the food prepared",
            "Follow all applicable local food regulations",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-gray-600 border-b border-orange-50 pb-2">
              <span className="text-orange-500 font-bold mt-0.5">•</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-lg p-4 mt-4">
          <p className="text-sm font-bold text-gray-800">
            ⚠️ Mom's Kitchen does not verify or monitor individual kitchens.
          </p>
        </div>
      </>
    ),
  },
  {
    num: "05",
    title: "Food Safety & Legal Responsibility",
    summaryTitle: "IMPORTANT",
    summaryIcon: "⚠️",
    summaryText:
      "Food safety and legal compliance are entirely yours. Mom's Kitchen is not liable for health, safety, or legal issues from your food.",
    summaryBullets: ["Safety is your responsibility", "Legal issues are yours"],
    content: (
      <ul className="space-y-2">
        {[
          "You acknowledge that food safety and hygiene are solely your responsibility",
          "Any legal or regulatory issues related to food preparation are your responsibility",
        ].map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm text-gray-600 border-b border-orange-50 pb-2">
            <span className="text-orange-500 font-bold mt-0.5">•</span>
            {item}
          </li>
        ))}
        <li className="flex items-start gap-2 text-sm font-bold text-gray-800 pb-2">
          <span className="text-orange-500 font-bold mt-0.5">•</span>
          Mom's Kitchen shall not be held liable for food-related health,
          safety, or legal issues
        </li>
      </ul>
    ),
  },
  {
    num: "06",
    title: "Platform Usage & Payments",
    summaryTitle: "PAYMENTS",
    summaryIcon: "💳",
    summaryText:
      "We may facilitate payments through partners and deduct platform fees. You handle your own taxes and licensing.",
    summaryBullets: ["Platform fees may apply", "You handle your taxes"],
    content: (
      <ul className="space-y-2">
        {[
          "Mom's Kitchen may facilitate payments through supported payment partners",
          "Service or platform fees may be deducted",
          "You are responsible for any applicable taxes, permits, or licenses required by law",
        ].map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm text-gray-600 border-b border-orange-50 pb-2">
            <span className="text-orange-500 font-bold mt-0.5">•</span>
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    num: "07",
    title: "Prohibited Use",
    summaryTitle: "GROUND RULES",
    summaryIcon: "🚫",
    summaryText:
      "Don't list unsafe food, lie about ingredients, or use the platform for unlawful activities. Play fair.",
    summaryBullets: ["No unsafe or expired food", "No false information"],
    content: (
      <>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          You must not:
        </p>
        <ul className="space-y-2">
          {[
            "List unsafe, expired, or prohibited food items",
            "Provide false or misleading information",
            "Use the platform for unlawful or unethical activities",
            "Violate any applicable food or safety regulations",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-gray-600 border-b border-orange-50 pb-2">
              <span className="text-orange-500 font-bold mt-0.5">•</span>
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    num: "08",
    title: "Suspension or Termination",
    summaryTitle: "ENFORCEMENT",
    summaryIcon: "🔒",
    summaryText:
      "We reserve the right to suspend or terminate accounts that violate these terms, pose safety risks, or commit fraud.",
    summaryBullets: [
      "Violations may result in removal",
      "Fraud leads to termination",
    ],
    content: (
      <>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          Mom's Kitchen reserves the right to suspend or terminate accounts
          that:
        </p>
        <ul className="space-y-2">
          {[
            "Violate these Terms & Conditions",
            "Pose food safety or legal risks",
            "Engage in fraudulent activity",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-gray-600 border-b border-orange-50 pb-2">
              <span className="text-orange-500 font-bold mt-0.5">•</span>
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    num: "09",
    title: "Limitation of Liability",
    summaryTitle: 'THE "CAPS" SECTION',
    summaryIcon: "🛡️",
    summaryText:
      "Legal jargon for: we are not responsible for food quality, regulatory compliance, or any loss or damage from use of the platform.",
    summaryBullets: ["Use at your own risk", "No warranty on food quality"],
    content: (
      <>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          Mom's Kitchen shall not be liable for:
        </p>
        <ul className="space-y-2">
          {[
            "Food quality, preparation, or hygiene practices",
            "Compliance with food laws or regulations",
            "Any loss, damage, or legal claim arising from the use of the platform",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-gray-600 border-b border-orange-50 pb-2">
              <span className="text-orange-500 font-bold mt-0.5">•</span>
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    num: "10",
    title: "Updates to Terms",
    summaryTitle: "STAYING CURRENT",
    summaryIcon: "📋",
    summaryText:
      "These terms may change. Continuing to use Mom's Kitchen after updates means you accept the revised terms.",
    summaryBullets: ["Terms may be updated", "Continued use = acceptance"],
    content: (
      <>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          These Terms & Conditions may be updated periodically.
        </p>
        <p className="text-sm font-bold text-gray-800">
          Continued use of Mom's Kitchen indicates acceptance of the revised
          terms.
        </p>
      </>
    ),
  },
  {
    num: "11",
    title: "Contact Information",
    summaryTitle: "REACH US",
    summaryIcon: "📧",
    summaryText:
      "Have questions or need support? Our team is here to help. Reach out anytime.",
    summaryBullets: null,
    content: (
      <>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          For questions or support, contact:
        </p>
        <a
          href="mailto:support@foodbnb.com"
          className="text-orange-600 font-semibold text-sm underline hover:text-orange-800">
          📧 support@foodbnb.com
        </a>
      </>
    ),
  },
];

export default function TermsAndConditions() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero */}
      <div className="max-w-5xl mx-auto px-12 pt-12 pb-14 border-b border-stone-200">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm text-gray-500 border border-stone-200 rounded-lg px-4 py-2 mb-10 hover:bg-stone-100 hover:text-orange-600 transition-colors bg-white cursor-pointer">
          <ArrowLeft size={15} />
          Back
        </button>

        <h1 className="text-7xl font-black text-gray-900 leading-tight mb-5 tracking-tight">
          Terms of <span className="text-orange-500">Service</span>
        </h1>
        <p className="text-base text-gray-500 leading-relaxed max-w-lg font-light">
          Our goal is to be as transparent as possible. We've designed these
          terms to be easy to read while covering the legal essentials of our
          partnership.
        </p>
      </div>

      {/* Sections */}
      <div className="max-w-5xl mx-auto px-12">
        {sections.map((section) => (
          <div
            key={section.num}
            className="grid grid-cols-3 gap-12 py-16 border-b border-stone-200 relative">
            {/* Ghost number */}
            <span className="absolute left-0 top-10 text-9xl font-black text-stone-100 leading-none select-none pointer-events-none">
              {section.num}
            </span>

            {/* Main content */}
            <div className="col-span-2 relative z-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 leading-snug">
                {section.title}
              </h2>
              {section.content}
            </div>

            {/* Summary card */}
            <div className="col-span-1">
              <div className="bg-white border border-stone-200 rounded-xl p-5 sticky top-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm">{section.summaryIcon}</span>
                  <span className="text-xs font-semibold tracking-widest text-orange-500 uppercase">
                    {section.summaryTitle}
                  </span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">
                  {section.summaryText}
                </p>
                {section.summaryBullets &&
                  section.summaryBullets.map((b, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs text-gray-700 font-medium my-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                      {b}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}

        {/* Footer */}
        <div className="flex justify-center py-10 mt-8 border-t border-stone-200 flex-wrap gap-3 ">
          <p className="text-xs text-gray-400">
            © 2026 Mom's Kitchen. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
