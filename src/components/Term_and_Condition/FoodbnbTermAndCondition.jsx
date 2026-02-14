import React from "react";
import { ShieldCheck, Calendar, Mail, Phone, MapPin } from "lucide-react";

export default function FoodbnbTerms() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-amber-100">
      <div className="max-w-4xl mx-auto">
        {/* Header Section with Claude Brand Color Background */}
        <div className="rounded-t-2xl shadow-4xl p-8 sm:p-12 bg-red-500 shadow-red-800">
          <div className="flex items-center justify-center mb-4">
            <ShieldCheck className="w-12 h-12 text-white mr-3" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Foodbnb
            </h1>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white text-center mb-2">
            Terms and Conditions
          </h2>
          <div className="flex items-center justify-center text-white/90 text-sm space-x-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>Effective Date: [Coming Soon]</span>
            </div>
            <span>|</span>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>Last Updated: [13-02-2026]</span>
            </div>
          </div>
        </div>

        {/* Main Content Section with White Background */}
        <div className="bg-white rounded-b-2xl shadow-2xl p-8 sm:p-12">
          <div className="prose prose-slate max-w-none">
            {/* Introduction */}
            <p className="text-slate-700 text-lg mb-8">
              Welcome to Foodbnb. By accessing or using the Foodbnb mobile
              application, website, or services (collectively, the "Platform"),
              you agree to comply with these Terms and Conditions. If you do not
              agree, please do not use the Platform.
            </p>

            {/* Section 1 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                1. About Foodbnb
              </h3>
              <p className="text-slate-700 mb-3">
                Foodbnb is an online platform that connects customers with
                home-based food providers offering homemade meals.
              </p>
              <p className="text-slate-700">
                Foodbnb operates as a marketplace and technology platform and
                does not directly prepare or manufacture food unless clearly
                stated.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                2. Use of the Platform
              </h3>
              <p className="text-slate-700 mb-3">You agree to:</p>
              <ul className="list-disc list-inside text-slate-700 space-y-2 mb-3">
                <li>Provide accurate and complete information</li>
                <li>Use the Platform only for lawful purposes</li>
                <li>Not misuse or attempt to disrupt the Platform</li>
              </ul>
              <p className="text-slate-700">
                Foodbnb reserves the right to suspend or terminate accounts that
                violate these Terms.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                3. Orders and Payments
              </h3>
              <ul className="list-disc list-inside text-slate-700 space-y-2 mb-3">
                <li>All orders are subject to availability.</li>
                <li>Prices and menus may change without notice.</li>
                <li>
                  Payments must be completed through the Platform's approved
                  payment methods.
                </li>
                <li>Service fees, delivery charges, and taxes may apply.</li>
              </ul>
              <p className="text-slate-700">
                Orders cannot be canceled once preparation has started unless
                permitted by the provider.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                4. Food Responsibility
              </h3>
              <p className="text-slate-700 mb-3">
                Food providers listed on Foodbnb are responsible for:
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-2 mb-3">
                <li>Food preparation and hygiene</li>
                <li>Ingredient information</li>
                <li>Compliance with applicable food safety regulations</li>
              </ul>
              <p className="text-slate-700">
                Customers are responsible for reviewing food details and
                informing providers of any allergies or dietary restrictions
                before ordering.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                5. Delivery
              </h3>
              <ul className="list-disc list-inside text-slate-700 space-y-2 mb-3">
                <li>Delivery times are estimates and may vary.</li>
                <li>
                  Delays caused by traffic, weather, or unforeseen circumstances
                  are not the responsibility of Foodbnb.
                </li>
                <li>
                  Responsibility for the order transfers to the customer upon
                  delivery.
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                6. Refunds and Complaints
              </h3>
              <p className="text-slate-700 mb-3">
                Refunds may be considered in cases such as:
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-2 mb-3">
                <li>Non-delivery</li>
                <li>Incorrect items delivered</li>
                <li>
                  Valid quality issues reported within [X hours] of delivery
                </li>
              </ul>
              <p className="text-slate-700">
                All refund decisions are subject to review and approval.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                7. User Conduct
              </h3>
              <p className="text-slate-700 mb-3">Users must not:</p>
              <ul className="list-disc list-inside text-slate-700 space-y-2 mb-3">
                <li>Engage in illegal activities</li>
                <li>Harass or abuse providers or staff</li>
                <li>Post false or misleading reviews</li>
                <li>Attempt to bypass the Platform for direct transactions</li>
              </ul>
              <p className="text-slate-700">
                Violations may result in account suspension or termination.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                8. Intellectual Property
              </h3>
              <p className="text-slate-700">
                All content on the Platform, including logos, branding, design,
                and software, belongs to Foodbnb and may not be copied or used
                without permission.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                9. Limitation of Liability
              </h3>
              <p className="text-slate-700 mb-3">
                Foodbnb provides the Platform on an "as available" basis.
              </p>
              <p className="text-slate-700 mb-3">
                Foodbnb is not responsible for:
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-2 mb-3">
                <li>Food-related health issues</li>
                <li>Allergic reactions</li>
                <li>Actions or negligence of food providers</li>
                <li>Indirect or consequential damages</li>
              </ul>
              <p className="text-slate-700">
                Liability, if any, shall not exceed the amount paid for the
                specific order.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                10. Changes to Terms
              </h3>
              <p className="text-slate-700">
                Foodbnb may update these Terms at any time. Continued use of the
                Platform means you accept the updated Terms.
              </p>
            </div>

            {/* Section 11 - Contact Us */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                11. Contact Us
              </h3>
              <p className="text-slate-700 mb-4">
                If you have any questions or concerns regarding these Terms and
                Conditions, please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-slate-700">
                  <Mail className="w-5 h-5 mr-3" style={{ color: "#CC785C" }} />
                  <span>support@foodbnb.com</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <Phone
                    className="w-5 h-5 mr-3"
                    style={{ color: "#CC785C" }}
                  />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <MapPin
                    className="w-5 h-5 mr-3"
                    style={{ color: "#CC785C" }}
                  />
                  <span>123 Foodbnb Street, City, State, ZIP</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-slate-200 text-center">
            <p className="text-slate-600 text-sm">
              © 2026 Foodbnb. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
