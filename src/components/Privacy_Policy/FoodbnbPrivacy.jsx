import React from "react";

import {
  Shield,
  Lock,
  Users,
  FileText,
  Mail,
  Phone,
  MapPin,
  Check,
} from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      id: 1,
      title: "About foodbnb",
      icon: <FileText className="w-6 h-6" />,
      content:
        "Foodbnb is a home food ordering platform that connects customers with trusted home cooks such as Mom's Kitchen. We only facilitate ordering and delivery of homemade food prepared by our partner kitchens.",
    },
    {
      id: 2,
      title: "Information We Collect",
      icon: <Users className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              A. Personal Information
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Full Name</li>
              <li>Phone Number</li>
              <li>Email Address</li>
              <li>Delivery Address</li>
              <li>Payment Information</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              B. Order Information
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Food items ordered</li>
              <li>Order history</li>
              <li>Delivery instructions</li>
              <li>Transaction details</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              C. Device Information
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>IP address</li>
              <li>Device type</li>
              <li>App usage data</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "How We Use Your Information",
      icon: <Check className="w-6 h-6" />,
      content: (
        <div>
          <p className="text-gray-600 mb-3">We use your information to:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>Process and deliver your orders</li>
            <li>
              Share order details with partner kitchens (e.g., Mom's Kitchen)
            </li>
            <li>Communicate order updates</li>
            <li>Improve app performance</li>
            <li>Provide customer support</li>
            <li>Prevent fraud and ensure security</li>
          </ul>
          <p className="text-gray-700 font-medium mt-3">
            We do not sell your personal information to third parties.
          </p>
        </div>
      ),
    },
    {
      id: 4,
      title: "Sharing of Information",
      icon: <Users className="w-6 h-6" />,
      content: (
        <div>
          <p className="text-gray-600 mb-3">
            We may share your information with:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>
              <span className="font-medium">Partner Kitchens</span> – to prepare
              your order
            </li>
            <li>
              <span className="font-medium">Delivery Partners</span> – to
              deliver your food
            </li>
            <li>
              <span className="font-medium">Payment Providers</span> – to
              process transactions
            </li>
            <li>
              <span className="font-medium">Legal Authorities</span> – if
              required by law
            </li>
          </ul>
          <p className="text-gray-600 mt-3">
            All partners are expected to handle your information responsibly.
          </p>
        </div>
      ),
    },
    {
      id: 5,
      title: "Data Security",
      icon: <Lock className="w-6 h-6" />,
      content:
        "We use reasonable security measures to protect your data from unauthorized access, misuse, or disclosure. However, no system is 100% secure.",
    },
    {
      id: 6,
      title: "Data Retention",
      icon: <Shield className="w-6 h-6" />,
      content: (
        <div>
          <p className="text-gray-600 mb-3">
            We retain your information as long as necessary to:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>Provide our services</li>
            <li>Maintain transaction records</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="text-gray-600 mt-3">
            You may request deletion of your account at any time.
          </p>
        </div>
      ),
    },
    {
      id: 7,
      title: "Your Rights",
      icon: <Check className="w-6 h-6" />,
      content: (
        <div>
          <p className="text-gray-600 mb-3">
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>Access your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent</li>
          </ul>
          <p className="text-gray-600 mt-3">
            To exercise these rights, contact us at:{" "}
            <span className="text-orange-600 font-medium">
              @support.foodbnb.com
            </span>
          </p>
        </div>
      ),
    },
    {
      id: 8,
      title: "Third-Party Services",
      icon: <Users className="w-6 h-6" />,
      content:
        "foodbnb may use third-party services for payments, analytics, or notifications. We are not responsible for their independent privacy practices.",
    },
    {
      id: 9,
      title: "Children's Privacy",
      icon: <Shield className="w-6 h-6" />,
      content:
        "foodbnb does not knowingly collect personal information from children under 13. If we become aware of such data, we will delete it.",
    },
    {
      id: 10,
      title: "Changes to This Policy",
      icon: <FileText className="w-6 h-6" />,
      content:
        "We may update this Privacy Policy from time to time. Updates will be posted within the app and on our website.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 py-8">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-orange-500 p-2 rounded-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-orange-600">
                Privacy Policy
              </h1>
              <p className="text-sm text-orange-600 font-medium">foodbnb</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-4"></p>
          <p className="text-gray-700 mb-4">
            Welcome to foodbnb. Your privacy is important to us. This Privacy
            Policy explains how foodbnb collects, uses, and protects your
            information when you use our home food ordering app.
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">
              By using foodbnb, you agree to the practices described below.
            </span>
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-xl shadow-sm border border-orange-100 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg text-orange-600 flex-shrink-0">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    {section.id}. {section.title}
                  </h2>
                  <div className="text-gray-600">
                    {typeof section.content === "string" ? (
                      <p>{section.content}</p>
                    ) : (
                      section.content
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-xl shadow-lg p-8 mt-8 text-white">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Mail className="w-6 h-6" />
            Contact Us
          </h2>
          <p className="mb-6">
            If you have questions about this Privacy Policy, please contact:
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <span>
                <span className="font-semibold">Email:</span> John@example.com
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span>
                <span className="font-semibold">Phone:</span> +91 12345 67890
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              <span>
                <span className="font-semibold">Address:</span> 123 Main Street,
                City, State, ZIP Code Address
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
