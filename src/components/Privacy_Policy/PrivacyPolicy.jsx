import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChefHat,
  Shield,
  Lock,
  User,
  UtensilsCrossed,
  Activity,
  Share2,
  Database,
  Eye,
  Mail,
} from "lucide-react";

export default function PrivacyPolicy() {
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        ["c", "a", "u", "s", "p"].includes(e.key.toLowerCase())
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const SectionCard = ({ icon: Icon, title, children }) => (
    <div className="bg-white rounded-2xl shadow-sm p-8 mb-5">
      <div className="flex items-center gap-3 mb-4">
        <Icon size={20} className="text-orange-600 shrink-0" />
        <h3 className="text-base font-semibold text-gray-700">{title}</h3>
      </div>
      {children}
    </div>
  );

  const Bullet = ({ children }) => (
    <p className="flex gap-2 text-sm text-gray-700 leading-relaxed mb-2">
      <span className="text-orange-600 font-bold shrink-0">•</span>
      {children}
    </p>
  );

  return (
    <div className="min-h-screen bg-gray-100 select-none">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Hero Card */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-5 relative overflow-hidden">
          <div className="absolute top-6 right-8 opacity-10">
            <UtensilsCrossed size={100} className="text-orange-600" />
          </div>

          {/* Breadcrumb */}
          <div className="text-xs text-gray-500 mb-4">
            <Link
              to="/"
              className="text-gray-500 hover:text-orange-600 transition-colors">
              Home
            </Link>
            {" / "}
            <span className="text-orange-600 font-medium">Privacy Policy</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>

          <div className="border-l-4 border-orange-600 bg-orange-50 px-5 py-5 rounded-r-lg">
            <p className="italic text-gray-600 text-sm">
              "At Mom's Kitchen, we treat your personal data like a secret
              family recipe — with the utmost care, respect, and protection."
            </p>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-5">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>Mom's Kitchen</strong> is committed to protecting the
            privacy of home cooks using our platform. By using Mom's Kitchen,
            you consent to the practices described in this Privacy Policy.
          </p>
        </div>

        {/* Information We Collect */}
        <SectionCard icon={Database} title="Information We Collect">
          <div className="text-sm text-gray-700 leading-relaxed">
            <p className="mb-3">
              When you use Mom's Kitchen, we may collect the following:
            </p>
            <Bullet>
              <span>
                <span className="font-semibold">Account Information:</span>{" "}
                Name, email, password, phone number.
              </span>
            </Bullet>
            <Bullet>
              <span>
                <span className="font-semibold">Kitchen Information:</span>{" "}
                Listings, menus, photos, pricing.
              </span>
            </Bullet>
            <Bullet>
              <span>
                <span className="font-semibold">Usage Data:</span> App
                interactions, login timestamps, error logs.
              </span>
            </Bullet>
            <Bullet>
              <span>
                <span className="font-semibold">Payment Information:</span> Only
                when using payment features (handled securely via payment
                partners).
              </span>
            </Bullet>
          </div>
        </SectionCard>

        {/* How We Use Your Information */}
        <SectionCard icon={Eye} title="How We Use Your Information">
          <div className="text-sm text-gray-700 leading-relaxed">
            <p className="mb-3">
              We use the "ingredients" of your data to serve you better:
            </p>
            {[
              "To provide and maintain Mom's Kitchen services.",
              "To communicate with you (notifications, updates, support).",
              "To improve the platform and user experience.",
              "To process payments securely.",
              "To comply with legal obligations if required.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 mb-2">
                <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Sharing and Disclosure */}
        <SectionCard icon={Share2} title="Sharing and Disclosure">
          <div className="text-sm text-gray-700 leading-relaxed">
            <div className="bg-green-50 border border-green-600 rounded-lg px-4 py-3 text-green-800 font-semibold mb-3">
              ✓ Mom's Kitchen does not sell your personal information.
            </div>
            <p className="font-semibold mb-2">
              Information may be shared with:
            </p>
            <Bullet>
              <span>
                <span className="font-semibold">Payment processors</span> for
                transactions.
              </span>
            </Bullet>
            <Bullet>
              <span>
                <span className="font-semibold">Legal authorities</span> if
                required by law.
              </span>
            </Bullet>
            <Bullet>
              <span>
                <span className="font-semibold">Service providers</span> to
                maintain the platform (e.g., hosting, analytics).
              </span>
            </Bullet>
          </div>
        </SectionCard>

        {/* Data Retention & Security — side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="flex items-center gap-3 mb-4">
              <Database size={20} className="text-orange-600" />
              <h3 className="text-base font-semibold text-gray-700">
                Data Retention
              </h3>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed">
              <Bullet>
                Your data is stored as long as your account is active.
              </Bullet>
              <Bullet>
                After account deletion, data is permanently removed, except
                where legal obligations require retention.
              </Bullet>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="flex items-center gap-3 mb-4">
              <Lock size={20} className="text-orange-600" />
              <h3 className="text-base font-semibold text-gray-700">
                Security
              </h3>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed">
              <Bullet>
                We implement reasonable technical and administrative measures to
                protect your information.
              </Bullet>
              <div className="bg-yellow-50 border border-yellow-400 rounded-lg px-4 py-3 mt-2 text-sm text-gray-700">
                <span className="text-orange-600 font-bold mr-2">•</span>
                <strong>No system is 100% secure</strong>, so use strong
                passwords and protect your account.
              </div>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <SectionCard icon={Shield} title="Your Rights">
          <div className="text-sm text-gray-700 leading-relaxed">
            <Bullet>Access your personal data.</Bullet>
            <Bullet>Request corrections.</Bullet>
            <Bullet>
              Delete your account (see the account deletion page).
            </Bullet>
            <Bullet>Opt out of communications.</Bullet>
          </div>
        </SectionCard>

        {/* Children's Privacy & Policy Updates — side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="flex items-center gap-3 mb-4">
              <User size={20} className="text-orange-600" />
              <h3 className="text-base font-semibold text-gray-700">
                Children's Privacy
              </h3>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed">
              <Bullet>Mom's Kitchen is not intended for users under 18.</Bullet>
              <Bullet>We do not knowingly collect data from minors.</Bullet>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="flex items-center gap-3 mb-4">
              <Activity size={20} className="text-orange-600" />
              <h3 className="text-base font-semibold text-gray-700">
                Policy Updates
              </h3>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed">
              <Bullet>Privacy Policy may be updated periodically.</Bullet>
              <Bullet>
                <strong>
                  Continued use of Mom's Kitchen implies acceptance of updated
                  policies.
                </strong>
              </Bullet>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-5">
          <div className="flex items-center gap-3 mb-3">
            <Mail size={20} className="text-green-600" />
            <h3 className="text-lg font-semibold text-gray-700">
              Contact Information
            </h3>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Questions or concerns regarding your privacy? Contact our Kitchen
            Manager:
          </p>
          <div className="flex items-center gap-2 text-sm">
            <Mail size={15} className="text-orange-600" />
            <a
              href="mailto:support@foodbnb.com"
              className="text-orange-600 font-semibold hover:underline">
              support@foodbnb.com
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-6 text-gray-400 text-xs">
          <div className="flex items-center justify-center gap-2 mb-1 font-semibold text-gray-600 text-sm">
            <ChefHat size={16} className="text-orange-600" />
            Mom's Kitchen
          </div>
          © 2026 Mom's Kitchen. All rights reserved.
        </div>
      </div>
    </div>
  );
}
