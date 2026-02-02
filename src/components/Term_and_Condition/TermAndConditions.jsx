import React, { useState } from "react";
import Logo from "../../assets/Image/foodbnb.svg";
import {
  ChefHat,
  AlertTriangle,
  Ban,
  Shield,
  Phone,
  CheckCircle,
} from "lucide-react";
import "./TermAndCondition.css";
export default function TermsAndConditions() {
  const [showScrollHint, setShowScrollHint] = useState(true);

  const handleScroll = (e) => {
    const element = e.target;

    if (element.scrollTop > 100) {
      setShowScrollHint(false);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-red-600 text-white px-4 sm:px-6 py-4 shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <img
            src={Logo}
            alt="Mom's Kitchen Logo"
            className="w-8 h-8 sm:w-10 sm:h-10 shrink-0"
          />
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">Mom's Kitchen</h1>
            <p className="text-xs sm:text-sm text-red-100">
              Terms & Conditions
            </p>
          </div>
        </div>
      </header>

      {/* Scrollable Content */}
      <div
        className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 relative"
        onScroll={handleScroll}>
        {/* Scroll hint */}
        {showScrollHint && (
          <div className="sticky top-0 z-10 bg-yellow-100 border border-yellow-400 text-black px-4 py-2 rounded-lg mb-4 text-center text-sm animate-pulse">
            📜 Please scroll down to read all terms before accepting
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm text-gray-600 mb-6">
            <strong>Last Updated:</strong> 31 January 2026
          </p>

          <div className="bg-gray-50 border-l-4 border-red-600 p-4 mb-6 rounded">
            <p className="text-sm sm:text-base text-black leading-relaxed">
              Welcome to <strong>Mom's Kitchen</strong>, an application designed
              for home cooks to list and manage homemade food offerings. By
              registering or using Mom's Kitchen, you agree to the following
              Terms & Conditions.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-black mb-3 flex items-center gap-2">
              <span className="bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">
                1
              </span>
              About Mom's Kitchen
            </h2>
            <div className="ml-0 sm:ml-9 space-y-3">
              <p className="text-sm sm:text-base text-black leading-relaxed">
                Mom's Kitchen is a digital platform that enables home cooks to
                create food listings and manage their kitchen profiles.
              </p>
              <div className="bg-red-50 border border-red-200 p-3 rounded">
                <p className="text-sm sm:text-base text-black leading-relaxed font-semibold">
                  ⚠️ Mom's Kitchen does not prepare, cook, inspect, certify,
                  store, or deliver food.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-black mb-3 flex items-center gap-2">
              <span className="bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">
                2
              </span>
              Eligibility
            </h2>
            <div className="ml-0 sm:ml-9">
              <p className="text-sm sm:text-base text-black leading-relaxed mb-2">
                To use Mom's Kitchen, you must:
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-black">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold flex-shrink-0">
                    •
                  </span>
                  <span>Be 18 years of age or older</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold flex-shrink-0">
                    •
                  </span>
                  <span>Provide accurate and complete information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold flex-shrink-0">
                    •
                  </span>
                  <span>
                    Comply with all applicable local food safety and hygiene
                    laws
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-black mb-3 flex items-center gap-2">
              <span className="bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">
                3
              </span>
              Account Registration & Security
            </h2>
            <div className="ml-0 sm:ml-9">
              <ul className="space-y-2 text-sm sm:text-base text-black">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold flex-shrink-0">
                    •
                  </span>
                  <span>Each cook may create only one account</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold flex-shrink-0">
                    •
                  </span>
                  <span>
                    You are responsible for maintaining the confidentiality of
                    your account credentials
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold flex-shrink-0">
                    •
                  </span>
                  <span>
                    Any activity performed using your account is your
                    responsibility
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4 - Highlighted */}
          <section className="mb-8 bg-red-600 text-white p-5 rounded-lg shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <ChefHat className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold">
                4. Cook Responsibilities
              </h2>
            </div>
            <div className="space-y-3">
              <p className="text-sm sm:text-base leading-relaxed">
                By using Mom's Kitchen, you agree to:
              </p>
              <ul className="space-y-2 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-white font-bold flex-shrink-0">•</span>
                  <span>
                    Prepare food in a clean, safe, and hygienic home environment
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white font-bold flex-shrink-0">•</span>
                  <span>Use fresh and consumable ingredients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white font-bold flex-shrink-0">•</span>
                  <div>
                    <span>Clearly disclose:</span>
                    <ul className="ml-4 mt-1 space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="flex-shrink-0">○</span>
                        <span>Ingredients used</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="flex-shrink-0">○</span>
                        <span>Preparation methods</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="flex-shrink-0">○</span>
                        <span>
                          Possible allergens (nuts, dairy, gluten, etc.)
                        </span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white font-bold flex-shrink-0">•</span>
                  <span>
                    Ensure that food listings accurately represent the food
                    prepared
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white font-bold flex-shrink-0">•</span>
                  <span>Follow all applicable local food regulations</span>
                </li>
              </ul>
              <div className="bg-white text-black p-3 rounded mt-4">
                <p className="text-sm sm:text-base font-semibold">
                  ⚠️ Mom's Kitchen does not verify or monitor individual
                  kitchens.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 - Warning */}
          <section className="mb-8 border-2 border-yellow-500 bg-yellow-50 p-5 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-600 flex-shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold text-black">
                5. Food Safety & Legal Responsibility
              </h2>
            </div>
            <ul className="space-y-2 text-sm sm:text-base text-black">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold flex-shrink-0">
                  •
                </span>
                <span>
                  You acknowledge that food safety and hygiene are solely your
                  responsibility
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold flex-shrink-0">
                  •
                </span>
                <span>
                  Any legal or regulatory issues related to food preparation are
                  your responsibility
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold flex-shrink-0">
                  •
                </span>
                <span className="font-bold">
                  Mom's Kitchen shall not be held liable for food-related
                  health, safety, or legal issues
                </span>
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-black mb-3 flex items-center gap-2">
              <span className="bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">
                6
              </span>
              Platform Usage & Payments
            </h2>
            <div className="ml-0 sm:ml-9">
              <ul className="space-y-2 text-sm sm:text-base text-black">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold flex-shrink-0">
                    •
                  </span>
                  <span>
                    Mom's Kitchen may facilitate payments through supported
                    payment partners
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold flex-shrink-0">
                    •
                  </span>
                  <span>Service or platform fees may be deducted</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold flex-shrink-0">
                    •
                  </span>
                  <span>
                    You are responsible for any applicable taxes, permits, or
                    licenses required by law
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 7 - Prohibited */}
          <section className="mb-8 bg-red-600 text-white p-5 rounded-lg shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Ban className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold">
                7. Prohibited Use
              </h2>
            </div>
            <div className="space-y-3">
              <p className="text-sm sm:text-base leading-relaxed font-semibold">
                You must not:
              </p>
              <ul className="space-y-2 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-white font-bold flex-shrink-0">•</span>
                  <span>List unsafe, expired, or prohibited food items</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white font-bold flex-shrink-0">•</span>
                  <span>Provide false or misleading information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white font-bold flex-shrink-0">•</span>
                  <span>
                    Use the platform for unlawful or unethical activities
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white font-bold flex-shrink-0">•</span>
                  <span>Violate any applicable food or safety regulations</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-black mb-3 flex items-center gap-2">
              <span className="bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">
                8
              </span>
              Suspension or Termination
            </h2>
            <div className="ml-0 sm:ml-9 space-y-3">
              <p className="text-sm sm:text-base text-black leading-relaxed">
                Mom's Kitchen reserves the right to suspend or terminate
                accounts that:
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-black">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold flex-shrink-0">
                    •
                  </span>
                  <span>Violate these Terms & Conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold flex-shrink-0">
                    •
                  </span>
                  <span>Pose food safety or legal risks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold flex-shrink-0">
                    •
                  </span>
                  <span>Engage in fraudulent activity</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 9 */}
          <section className="mb-8 bg-gray-100 border-l-4 border-gray-600 p-5 rounded">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700 flex-shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold text-black">
                9. Limitation of Liability
              </h2>
            </div>
            <div className="space-y-3">
              <p className="text-sm sm:text-base text-black leading-relaxed">
                Mom's Kitchen shall not be liable for:
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-black">
                <li className="flex items-start gap-2">
                  <span className="text-gray-700 font-bold flex-shrink-0">
                    •
                  </span>
                  <span>Food quality, preparation, or hygiene practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-700 font-bold flex-shrink-0">
                    •
                  </span>
                  <span>Compliance with food laws or regulations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-700 font-bold flex-shrink-0">
                    •
                  </span>
                  <span>
                    Any loss, damage, or legal claim arising from the use of the
                    platform
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 10 */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-black mb-3 flex items-center gap-2">
              <span className="bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">
                10
              </span>
              Updates to Terms
            </h2>
            <div className="ml-0 sm:ml-9">
              <p className="text-sm sm:text-base text-black leading-relaxed mb-2">
                These Terms & Conditions may be updated periodically.
              </p>
              <p className="text-sm sm:text-base text-black leading-relaxed font-semibold">
                Continued use of Mom's Kitchen indicates acceptance of the
                revised terms.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section className="mb-8 bg-white border-2 border-red-600 p-5 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-red-600 flex-shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold text-black">
                11. Contact Information
              </h2>
            </div>
            <div className="space-y-2">
              <p className="text-sm sm:text-base text-black leading-relaxed">
                For questions or support, contact:
              </p>
              <a
                href="mailto:support@foodbnb.com"
                className="inline-block text-sm sm:text-base text-red-600 font-bold hover:underline hover:text-red-700 transition-colors">
                📧 support@foodbnb.com
              </a>
            </div>
          </section>

          {/* Acceptance Box */}
          <section className="mb-8 bg-green-50 border-2 border-green-600 p-5 rounded-lg shadow-md">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-black mb-3">
                  ✅ Acceptance
                </h2>
                <p className="text-sm sm:text-base text-black leading-relaxed">
                  By selecting Accept, you confirm that you have read,
                  understood, and agree to the Terms & Conditions of Mom's
                  Kitchen.
                </p>
              </div>
            </div>
          </section>

          {/* End marker */}
          <div className="h-4"></div>
        </div>
      </div>
    </div>
  );
}
