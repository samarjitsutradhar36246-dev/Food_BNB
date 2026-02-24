import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";

const sections = [
  {
    num: "01",
    title: "About Foodbnb",
    summaryTitle: "QUICK SUMMARY",
    summaryIcon: "🍽️",
    summaryText:
      "Foodbnb is an online marketplace connecting customers with home-based food providers. We don't prepare food — we power the platform.",
    summaryBullets: ["Marketplace platform only", "No direct food preparation"],
    content: (
      <>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          Foodbnb is an online platform that connects customers with home-based
          food providers offering homemade meals.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          Foodbnb operates as a marketplace and technology platform and does not
          directly prepare or manufacture food unless clearly stated.
        </p>
      </>
    ),
  },
  {
    num: "02",
    title: "Use of the Platform",
    summaryTitle: "YOUR OBLIGATIONS",
    summaryIcon: "📋",
    summaryText:
      "Use the platform lawfully, provide accurate info, and don't disrupt services. Violations may result in account suspension.",
    summaryBullets: ["Lawful use only", "Accurate info required"],
    content: (
      <>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          You agree to:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            "Provide accurate and complete information",
            "Use the Platform only for lawful purposes",
            "Not misuse or attempt to disrupt the Platform",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-gray-600 border-b border-orange-50 pb-2">
              <span className="text-orange-500 font-bold mt-0.5">•</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-600 leading-relaxed">
          Foodbnb reserves the right to suspend or terminate accounts that
          violate these Terms.
        </p>
      </>
    ),
  },
  {
    num: "03",
    title: "Orders and Payments",
    summaryTitle: "ORDERS",
    summaryIcon: "💳",
    summaryText:
      "Orders are subject to availability. Payments must go through the platform. Cancellations may not be possible once preparation starts.",
    summaryBullets: ["Approved payment methods only", "Fees & taxes may apply"],
    content: (
      <>
        <ul className="space-y-2 mb-4">
          {[
            "All orders are subject to availability.",
            "Prices and menus may change without notice.",
            "Payments must be completed through the Platform's approved payment methods.",
            "Service fees, delivery charges, and taxes may apply.",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-gray-600 border-b border-orange-50 pb-2">
              <span className="text-orange-500 font-bold mt-0.5">•</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-600 leading-relaxed">
          Orders cannot be canceled once preparation has started unless
          permitted by the provider.
        </p>
      </>
    ),
  },
  {
    num: "04",
    title: "Food Responsibility",
    summaryTitle: "WHO'S RESPONSIBLE",
    summaryIcon: "🧑‍🍳",
    summaryText:
      "Food providers handle preparation and hygiene. Customers must review food details and disclose allergies before ordering.",
    summaryBullets: [
      "Providers handle food safety",
      "Disclose allergies before ordering",
    ],
    content: (
      <>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          Food providers listed on Foodbnb are responsible for:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            "Food preparation and hygiene",
            "Ingredient information",
            "Compliance with applicable food safety regulations",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-gray-600 border-b border-orange-50 pb-2">
              <span className="text-orange-500 font-bold mt-0.5">•</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-600 leading-relaxed">
          Customers are responsible for reviewing food details and informing
          providers of any allergies or dietary restrictions before ordering.
        </p>
      </>
    ),
  },
  {
    num: "05",
    title: "Delivery",
    summaryTitle: "DELIVERY TERMS",
    summaryIcon: "🚚",
    summaryText:
      "Delivery times are estimates. Delays from external factors aren't Foodbnb's responsibility. Risk transfers to you on delivery.",
    summaryBullets: ["Times are estimates only", "Risk transfers on delivery"],
    content: (
      <ul className="space-y-2">
        {[
          "Delivery times are estimates and may vary.",
          "Delays caused by traffic, weather, or unforeseen circumstances are not the responsibility of Foodbnb.",
          "Responsibility for the order transfers to the customer upon delivery.",
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
    num: "06",
    title: "Refunds and Complaints",
    summaryTitle: "REFUND POLICY",
    summaryIcon: "💰",
    summaryText:
      "Refunds may be issued for non-delivery, wrong items, or valid quality issues. All decisions are subject to review.",
    summaryBullets: [
      "Reported within required timeframe",
      "Subject to approval",
    ],
    content: (
      <>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          Refunds may be considered in cases such as:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            "Non-delivery",
            "Incorrect items delivered",
            "Valid quality issues reported within [X hours] of delivery",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-gray-600 border-b border-orange-50 pb-2">
              <span className="text-orange-500 font-bold mt-0.5">•</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-600 leading-relaxed">
          All refund decisions are subject to review and approval.
        </p>
      </>
    ),
  },
  {
    num: "07",
    title: "User Conduct",
    summaryTitle: "GROUND RULES",
    summaryIcon: "🚫",
    summaryText:
      "No illegal activities, harassment, fake reviews, or bypassing the platform for direct transactions. Violations lead to suspension.",
    summaryBullets: ["No harassment or abuse", "No off-platform transactions"],
    content: (
      <>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          Users must not:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            "Engage in illegal activities",
            "Harass or abuse providers or staff",
            "Post false or misleading reviews",
            "Attempt to bypass the Platform for direct transactions",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-gray-600 border-b border-orange-50 pb-2">
              <span className="text-orange-500 font-bold mt-0.5">•</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-600 leading-relaxed">
          Violations may result in account suspension or termination.
        </p>
      </>
    ),
  },
  {
    num: "08",
    title: "Intellectual Property",
    summaryTitle: "OWNERSHIP",
    summaryIcon: "©️",
    summaryText:
      "All logos, branding, design, and software on the platform belong to Foodbnb. Don't copy or use without permission.",
    summaryBullets: [
      "All content belongs to Foodbnb",
      "Permission required to use",
    ],
    content: (
      <p className="text-sm text-gray-600 leading-relaxed">
        All content on the Platform, including logos, branding, design, and
        software, belongs to Foodbnb and may not be copied or used without
        permission.
      </p>
    ),
  },
  {
    num: "09",
    title: "Limitation of Liability",
    summaryTitle: 'THE "CAPS" SECTION',
    summaryIcon: "🛡️",
    summaryText:
      "Foodbnb isn't responsible for food health issues, allergic reactions, or provider negligence. Liability won't exceed the order amount paid.",
    summaryBullets: [
      "Use at your own risk",
      "Liability capped at order amount",
    ],
    content: (
      <>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          Foodbnb provides the Platform on an "as available" basis.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          Foodbnb is not responsible for:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            "Food-related health issues",
            "Allergic reactions",
            "Actions or negligence of food providers",
            "Indirect or consequential damages",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-gray-600 border-b border-orange-50 pb-2">
              <span className="text-orange-500 font-bold mt-0.5">•</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-600 leading-relaxed">
          Liability, if any, shall not exceed the amount paid for the specific
          order.
        </p>
      </>
    ),
  },
  {
    num: "10",
    title: "Changes to Terms",
    summaryTitle: "STAYING CURRENT",
    summaryIcon: "📋",
    summaryText:
      "Foodbnb may update these terms at any time. Continued use of the platform means you accept the updated terms.",
    summaryBullets: [
      "Terms may be updated anytime",
      "Continued use = acceptance",
    ],
    content: (
      <p className="text-sm text-gray-600 leading-relaxed">
        Foodbnb may update these Terms at any time. Continued use of the
        Platform means you accept the updated Terms.
      </p>
    ),
  },
  {
    num: "11",
    title: "Contact Us",
    summaryTitle: "REACH US",
    summaryIcon: "📧",
    summaryText:
      "Have questions about these terms? Our team is ready to help. Reach out via email, phone, or visit us in person.",
    summaryBullets: null,
    content: (
      <>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          If you have any questions or concerns regarding these Terms and
          Conditions, please contact us:
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Mail className="text-orange-500 flex-shrink-0" size={18} />
            <span>support@foodbnb.com</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Phone className="text-orange-500 flex-shrink-0" size={18} />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <MapPin className="text-orange-500 flex-shrink-0" size={18} />
            <span>123 Foodbnb Street, City, State, ZIP</span>
          </div>
        </div>
      </>
    ),
  },
];

export default function FoodbnbTerms() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-12 md:pb-14 border-b border-stone-200">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm text-gray-500 border border-stone-200 rounded-lg px-3 sm:px-4 py-2 mb-6 sm:mb-8 md:mb-10 hover:bg-stone-100 hover:text-orange-600 transition-colors bg-white cursor-pointer">
          <ArrowLeft size={15} />
          Back
        </button>

        {/* Responsive headline: scales from small to huge */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-4 sm:mb-5 tracking-tight">
          Terms of <span className="text-orange-500">Service</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-xs sm:max-w-sm md:max-w-lg font-light">
          Welcome to Foodbnb. By accessing or using our platform, you agree to
          comply with these Terms and Conditions. If you do not agree, please do
          not use the Platform.
        </p>
      </div>

      {/* Sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {sections.map((section) => (
          <div
            key={section.num}
            className="
              flex flex-col gap-6
              md:grid md:grid-cols-3 md:gap-8
              lg:gap-12
              py-10 sm:py-12 md:py-16
              border-b border-stone-200
              relative
            ">
            {/* Ghost number — only show on md+ where there's room */}
            <span className="hidden md:block absolute left-0 top-10 text-7xl lg:text-9xl font-black text-stone-100 leading-none select-none pointer-events-none">
              {section.num}
            </span>

            {/* Main content */}
            <div className="md:col-span-2 relative z-10">
              {/* Small screens: show section number inline */}
              <span className="md:hidden inline-block text-xs font-black text-stone-300 tracking-widest mb-1">
                {section.num}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 leading-snug">
                {section.title}
              </h2>
              {section.content}
            </div>

            {/* Summary card */}
            <div className="md:col-span-1">
              <div className="bg-white border border-stone-200 rounded-xl p-4 sm:p-5 md:sticky md:top-6">
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
        <div className="flex justify-center items-center py-8 sm:py-10 mt-6 sm:mt-8 border-t border-stone-200 flex-wrap gap-3">
          <p className="text-xs text-gray-400">
            © 2026 Foodbnb. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
