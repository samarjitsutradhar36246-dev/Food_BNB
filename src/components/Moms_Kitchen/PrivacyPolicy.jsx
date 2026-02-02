import React from "react";
import Logo from "../../assets/Image/foodbnb.svg";
import {
  ChefHat,
  Shield,
  Lock,
  User,
  UtensilsCrossed,
  Activity,
  CreditCard,
  Share2,
  Database,
  Eye,
  UserX,
  Mail,
} from "lucide-react";
import "./PrivacyPolicy.css";
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-red-600 text-white px-4 sm:px-6 py-6 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={Logo}
              alt="Mom's Kitchen Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 shrink-0"
            />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold">Mom's Kitchen</h1>
              <p className="text-xs sm:text-sm text-red-100">
                Legal Information
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Title Section */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-red-600" />
              <h2 className="text-3xl sm:text-4xl font-bold text-black">
                Privacy Policy
              </h2>
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
              Your privacy is important to us. This page explains how Mom's
              Kitchen collects, uses, and protects your information.
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              <strong>Last Updated:</strong> January 31, 2026
            </p>
          </div>

          {/* Introduction Section */}
          <section className="mb-8 bg-yellow-50 border-l-4 border-yellow-500 p-5 sm:p-6 rounded-r-lg shadow-sm">
            <p className="text-sm sm:text-base text-black leading-relaxed">
              <strong>Mom's Kitchen</strong> is committed to protecting the
              privacy of home cooks using our platform. By using Mom's Kitchen,
              you consent to the practices described in this Privacy Policy.
            </p>
          </section>

          {/* A. Information We Collect */}
          <section className="mb-8">
            <div className="bg-red-600 text-white p-5 sm:p-6 rounded-lg shadow-md mb-4">
              <div className="flex items-center gap-3">
                <Database className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold">
                  Information We Collect
                </h3>
              </div>
            </div>

            <div className="ml-0 sm:ml-4 space-y-4">
              {/* Account Information */}
              <div className="bg-gray-50 border-l-4 border-red-600 p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <User className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-black mb-2 text-sm sm:text-base">
                      Account Information:
                    </h4>
                    <p className="text-sm sm:text-base text-black">
                      Name, email, password, phone number.
                    </p>
                  </div>
                </div>
              </div>

              {/* Kitchen Information */}
              <div className="bg-gray-50 border-l-4 border-red-600 p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <UtensilsCrossed className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-black mb-2 text-sm sm:text-base">
                      Kitchen Information:
                    </h4>
                    <p className="text-sm sm:text-base text-black">
                      Listings, menus, photos, pricing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Usage Data */}
              <div className="bg-gray-50 border-l-4 border-red-600 p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <Activity className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-black mb-2 text-sm sm:text-base">
                      Usage Data:
                    </h4>
                    <p className="text-sm sm:text-base text-black">
                      App interactions, login timestamps, error logs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-gray-50 border-l-4 border-red-600 p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <CreditCard className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-black mb-2 text-sm sm:text-base">
                      Payment Information:
                    </h4>
                    <p className="text-sm sm:text-base text-black">
                      Only when using payment features (handled securely via
                      payment partners).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* B. How We Use Your Information */}
          <section className="mb-8">
            <div className="bg-red-600 text-white p-5 sm:p-6 rounded-lg shadow-md mb-4">
              <div className="flex items-center gap-3">
                <Eye className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold">
                  How We Use Your Information
                </h3>
              </div>
            </div>

            <div className="ml-0 sm:ml-4 space-y-3">
              <div className="flex items-start gap-3">
                <span className="bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-1">
                  1
                </span>
                <p className="text-sm sm:text-base text-black leading-relaxed">
                  To provide and maintain Mom's Kitchen services.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-1">
                  2
                </span>
                <p className="text-sm sm:text-base text-black leading-relaxed">
                  To communicate with you (notifications, updates, support).
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-1">
                  3
                </span>
                <p className="text-sm sm:text-base text-black leading-relaxed">
                  To improve the platform and user experience.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                  4
                </span>
                <p className="text-sm sm:text-base text-black leading-relaxed">
                  To process payments securely.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-1">
                  5
                </span>
                <p className="text-sm sm:text-base text-black leading-relaxed">
                  To comply with legal obligations if required.
                </p>
              </div>
            </div>
          </section>

          {/* C. Sharing and Disclosure */}
          <section className="mb-8">
            <div className="bg-red-600 text-white p-5 sm:p-6 rounded-lg shadow-md mb-4">
              <div className="flex items-center gap-3">
                <Share2 className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold">
                  Sharing and Disclosure
                </h3>
              </div>
            </div>

            <div className="ml-0 sm:ml-4 space-y-4">
              <div className="bg-green-50 border-2 border-green-600 p-4 sm:p-5 rounded-lg">
                <p className="text-sm sm:text-base text-black leading-relaxed font-bold">
                  ✓ Mom's Kitchen does not sell your personal information.
                </p>
              </div>

              <p className="text-sm sm:text-base text-black leading-relaxed font-semibold">
                Information may be shared with:
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-red-600 font-bold flex-shrink-0">
                    •
                  </span>
                  <p className="text-sm sm:text-base text-black leading-relaxed">
                    <strong>Payment processors</strong> for transactions
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <span className="text-red-600 font-bold shrink-0">•</span>
                    <p className="text-sm sm:text-base text-black leading-relaxed">
                      <strong>Legal authorities</strong> if required by law
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-red-600 font-bold flex-shrink-0">
                    •
                  </span>
                  <p className="text-sm sm:text-base text-black leading-relaxed">
                    <strong>Service providers</strong> to maintain the platform
                    (e.g., hosting, analytics)
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* D. Data Retention */}
          <section className="mb-8">
            <div className="bg-red-600 text-white p-5 sm:p-6 rounded-lg shadow-md mb-4">
              <div className="flex items-center gap-3">
                <Database className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold">
                  Data Retention
                </h3>
              </div>
            </div>

            <div className="ml-0 sm:ml-4 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-red-600 font-bold flex-shrink-0">•</span>
                <p className="text-sm sm:text-base text-black leading-relaxed">
                  Your personal and kitchen data is stored as long as your
                  account is active.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-red-600 font-bold flex-shrink-0">•</span>
                <p className="text-sm sm:text-base text-black leading-relaxed">
                  After account deletion, data is permanently removed, except
                  where legal obligations require retention.
                </p>
              </div>
            </div>
          </section>

          {/* E. Security */}
          <section className="mb-8">
            <div className="bg-red-600 text-white p-5 sm:p-6 rounded-lg shadow-md mb-4">
              <div className="flex items-center gap-3">
                <Lock className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold"> Security</h3>
              </div>
            </div>

            <div className="ml-0 sm:ml-4 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-red-600 font-bold flex-shrink-0">•</span>
                <p className="text-sm sm:text-base text-black leading-relaxed">
                  We implement reasonable technical and administrative measures
                  to protect your information.
                </p>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-400 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold flex-shrink-0">
                    •
                  </span>
                  <p className="text-sm sm:text-base text-black leading-relaxed">
                    <strong>No system is 100% secure</strong>, so use strong
                    passwords and protect your account.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* F. Your Rights */}
          <section className="mb-8">
            <div className="bg-red-600 text-white p-5 sm:p-6 rounded-lg shadow-md mb-4">
              <div className="flex items-center gap-3">
                <Shield className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold">Your Rights</h3>
              </div>
            </div>

            <div className="ml-0 sm:ml-4 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-red-600 font-bold flex-shrink-0">•</span>
                <p className="text-sm sm:text-base text-black leading-relaxed">
                  Access your personal data.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-red-600 font-bold flex-shrink-0">•</span>
                <p className="text-sm sm:text-base text-black leading-relaxed">
                  Request corrections.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-red-600 font-bold flex-shrink-0">•</span>
                <p className="text-sm sm:text-base text-black leading-relaxed">
                  Delete your account (see the account deletion page).
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-red-600 font-bold flex-shrink-0">•</span>
                <p className="text-sm sm:text-base text-black leading-relaxed">
                  Opt out of communications.
                </p>
              </div>
            </div>
          </section>

          {/* G. Children's Privacy */}
          <section className="mb-8">
            <div className="bg-red-600 text-white p-5 sm:p-6 rounded-lg shadow-md mb-4">
              <div className="flex items-center gap-3">
                <User className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold">
                  Children's Privacy
                </h3>
              </div>
            </div>

            <div className="ml-0 sm:ml-4 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-red-600 font-bold flex-shrink-0">•</span>
                <p className="text-sm sm:text-base text-black leading-relaxed">
                  Mom's Kitchen is not intended for users under 18.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-red-600 font-bold flex-shrink-0">•</span>
                <p className="text-sm sm:text-base text-black leading-relaxed">
                  We do not knowingly collect data from minors.
                </p>
              </div>
            </div>
          </section>

          {/* H. Policy Updates */}
          <section className="mb-8">
            <div className="bg-red-600 text-white p-5 sm:p-6 rounded-lg shadow-md mb-4">
              <div className="flex items-center gap-3">
                <Activity className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold">
                  Policy Updates
                </h3>
              </div>
            </div>

            <div className="ml-0 sm:ml-4 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-red-600 font-bold flex-shrink-0">•</span>
                <p className="text-sm sm:text-base text-black leading-relaxed">
                  Privacy Policy may be updated periodically.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-red-600 font-bold flex-shrink-0">•</span>
                <p className="text-sm sm:text-base text-black leading-relaxed font-semibold">
                  Continued use of Mom's Kitchen implies acceptance of updated
                  policies.
                </p>
              </div>
            </div>
          </section>

          {/* I. Contact Information */}
          <section className="mb-8">
            <div className="bg-green-50 border-2 border-green-600 p-6 sm:p-8 rounded-lg shadow-md">
              <div className="flex items-start gap-3 mb-4">
                <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-green-600 flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold text-black">
                  I. Contact Information
                </h3>
              </div>

              <div className="space-y-2">
                <p className="text-sm sm:text-base text-black leading-relaxed">
                  Questions or concerns regarding your privacy?
                </p>
                <p className="text-sm sm:text-base text-black leading-relaxed">
                  Contact us:{" "}
                  <a
                    href="mailto:support@foodbnb.com"
                    className="inline-flex items-center gap-1 text-red-600 font-bold hover:underline hover:text-red-700 transition-colors">
                    📧 support@foodbnb.com
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-300 px-4 sm:px-6 py-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <ChefHat className="w-5 h-5 text-red-600" />
            <p className="text-sm font-bold text-black">Mom's Kitchen</p>
          </div>
          <p className="text-xs sm:text-sm text-gray-600">
            © 2026 Mom's Kitchen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
