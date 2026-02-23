import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  Lock,
  CheckCircle,
  Eye,
  Users,
  CreditCard,
  FileCheck,
  Star,
  Database,
  PhoneCall,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";
import Security from "../../assets/security.jpg";
import Security2 from "../../assets/Image/Security 2.jpg";

function FoodbnbSecurity() {
  const [activeSection, setActiveSection] = useState("customer");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const customerFeatures = [
    {
      icon: CreditCard,
      title: "Safe & Secure Payments",
      points: [
        "All payments are processed through trusted payment gateways",
        "Card and UPI details are never stored on Foodbnb servers",
        "End-to-end encrypted transactions protect financial data",
      ],
    },
    {
      icon: Users,
      title: "Verified Moms & Kitchens",
      points: [
        "Only verified moms can sell food",
        "Identity checks and contact verification are completed before approval",
        "Kitchens are reviewed before being listed on Foodbnb",
      ],
    },
    {
      icon: FileCheck,
      title: "Food Safety Assurance",
      points: [
        "Moms must follow hygiene and food safety guidelines",
        "Food is freshly prepared for each order",
        "Continuous monitoring through customer feedback and ratings",
      ],
    },
    {
      icon: Eye,
      title: "Order & Delivery Protection",
      points: [
        "Order confirmation and tracking for every purchase",
        "Limited sharing of personal information with moms",
        "Masked phone numbers to protect customer privacy",
      ],
    },
    {
      icon: Star,
      title: "Transparent Reviews & Reporting",
      points: [
        "Customers can rate and review every order",
        "Easy reporting for issues related to food quality, hygiene, or behavior",
        "Quick action on complaints, including suspension if needed",
      ],
    },
  ];

  const momFeatures = [
    {
      icon: CreditCard,
      title: "Secure Earnings & Payments",
      points: [
        "Payments are handled securely and transferred directly to moms' accounts",
        "Clear payout schedules and transaction history",
        "Protection against fake or fraudulent orders",
      ],
    },
    {
      icon: Database,
      title: "Personal Data Protection",
      points: [
        "Mom's personal information is protected and not publicly shared",
        "Customer contact details are masked",
        "Location details are shared only for delivery purposes",
      ],
    },
    {
      icon: CheckCircle,
      title: "Order & Cancellation Protection",
      points: [
        "Clear order confirmation before food preparation",
        "Defined cancellation and refund policies to avoid losses",
        "Support in case of disputes or non-delivery issues",
      ],
    },
    {
      icon: PhoneCall,
      title: "Safe Communication",
      points: [
        "In-app chat or call masking prevents misuse of personal numbers",
        "All communication is monitored for abuse or fraud",
      ],
    },
    {
      icon: Star,
      title: "Fair Ratings & Support",
      points: [
        "Protection against fake reviews",
        "Support team review in case of disputes",
        "Ability to report abusive customers",
      ],
    },
  ];

  const trustBadges = [
    { icon: ShieldCheck, label: "TRUST-E CERTIFIED" },
    { icon: Lock, label: "256-BIT SSL" },
    { icon: Shield, label: "PCI COMPLIANT" },
    { icon: FileCheck, label: "FOOD SAFETY ISO" },
  ];

  const commitmentItems = [
    {
      t: "24/7 Support Team",
      d: "Our dedicated safety team is available round-the-clock to assist with any concerns.",
    },
    {
      t: "Hygiene Certifications",
      d: "Moms are required to provide local health certifications where applicable.",
    },
    {
      t: "Secure Data Storage",
      d: "Bank-level encryption protocols for all stored sensitive information.",
    },
    {
      t: "Encrypted Login & Password Protection",
      d: "All accounts are secured with industry-standard encryption protocols.",
    },
    {
      t: "Activity Monitoring",
      d: "Continuous monitoring of platform activity to detect and prevent misuse.",
    },
    {
      t: "Dedicated Customer & Mom Support Team",
      d: "A dedicated team ready to resolve issues for both customers and moms.",
    },
  ];

  const features =
    activeSection === "customer" ? customerFeatures : momFeatures;

  return (
    <div className="select-none">
    <div className="font-sans bg-stone-100 text-gray-900 min-h-screen">
      {/* HERO */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 py-20 min-h-[420px] overflow-hidden"
        style={{
          background:
            "linear-gradient(170deg, #1a1a1a 0%, #2d1a1a 60%, #3d1a10 100%)",
        }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 70% 50%, rgba(232,55,42,0.18) 0%, transparent 65%)",
          }}
        />
        {/* Back Arrow Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
          style={{
            background: "rgba(232,55,42,0.15)",
            border: "1px solid rgba(232,55,42,0.4)",
            color: "#ff6b5b",
          }}>
          <ArrowLeft size={16} />
          Back
        </button>
        <div className="relative z-10 flex flex-col items-center">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-7 border"
            style={{
              background: "rgba(232,55,42,0.2)",
              borderColor: "rgba(232,55,42,0.5)",
              color: "#ff6b5b",
            }}>
            <Shield size={11} /> Trusted by Thousands
          </span>
          <h1
            className="text-6xl md:text-8xl font-black leading-tight text-white mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Our{" "}
            <em className="not-italic" style={{ color: "#e8372a" }}>
              Security
            </em>
            <br />
            Promise
          </h1>
          <p
            className="max-w-md text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.62)" }}>
            At FoodBnB &amp; Mom's Kitchen, your safety is our ingredient for
            success. We've crafted a security layer as authentic as our meals.
          </p>
        </div>
      </section>

      {/* TOGGLE */}
      <div className="sticky top-0 z-50 bg-white border-b-2 border-red-500 shadow-md flex justify-center gap-3 px-6 py-4">
        <button
          onClick={() => setActiveSection("customer")}
          className={`px-7 py-2.5 rounded-lg text-sm font-semibold border-2 border-red-500 transition-all duration-200 ${activeSection === "customer" ? "bg-red-500 text-white shadow-lg scale-105" : "bg-white text-gray-900 hover:bg-red-50"}`}>
          🔐 For Customers
        </button>
        <button
          onClick={() => setActiveSection("mom")}
          className={`px-7 py-2.5 rounded-lg text-sm font-semibold border-2 border-red-500 transition-all duration-200 ${activeSection === "mom" ? "bg-red-500 text-white shadow-lg scale-105" : "bg-white text-gray-900 hover:bg-red-50"}`}>
          👩‍🍳 For Moms
        </button>
      </div>

      {/* INTRO */}
      <div className="max-w-5xl mx-auto px-10 pt-14 pb-3">
        <h2
          className="text-4xl font-black leading-tight text-gray-900 mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}>
          Crafted with{" "}
          <em className="italic" style={{ color: "#e8372a" }}>
            Rigorous
          </em>
          <br />
          Standards
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-md">
          Every meal is a guest in your home. We ensure every transaction and
          every kitchen meets our high-bar editorial standards.
        </p>
      </div>

      {/* FEATURE GRID */}
      <div className="max-w-5xl mx-auto px-10 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <div
              key={i}
              className="group bg-white rounded-2xl p-7 border border-stone-200 shadow-sm cursor-default transition-all duration-300 hover:-translate-y-1 hover:bg-red-500 hover:border-red-500 hover:shadow-xl"
              style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 bg-red-50 text-red-500 transition-all duration-300 group-hover:bg-white/20 group-hover:text-white">
                <Icon size={20} />
              </div>
              <h3
                className="text-base font-bold mb-2.5 text-gray-900 transition-colors duration-300 group-hover:text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                {f.title}
              </h3>
              <ul className="space-y-1.5">
                {f.points.map((pt, j) => (
                  <li
                    key={j}
                    className="text-xs text-gray-500 leading-relaxed transition-colors duration-300 group-hover:text-white/85">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* SAFETY IS PERSONAL */}
      <section className="bg-white px-10 py-16 flex flex-col md:flex-row gap-16 items-center">
        <div className="relative flex-shrink-0 w-72 h-72 rounded-2xl overflow-hidden border border-stone-200">
          <img
            src={Security}
            alt="Security"
            className="w-full h-full object-cover"
          />
          <div className="absolute -bottom-4 -right-4 bg-gray-900 text-white rounded-xl px-5 py-3.5 text-center shadow-xl">
            <div
              className="text-2xl font-black leading-none"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#e8372a",
              }}>
              24/7
            </div>
            <div className="text-xs text-gray-400 tracking-widest uppercase mt-1">
              Human Support
            </div>
          </div>
        </div>
        <div className="flex-1">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: "#e8372a" }}>
            Human-Centric
          </p>
          <h2
            className="text-3xl md:text-4xl font-black leading-tight text-gray-900 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Safety is Personal,
            <br />
            Not Just Protocols.
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-8">
            Behind every algorithm is a dedicated team of food lovers and safety
            experts. We manually review complaints, conduct spot checks, and
            support our community around the clock.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {activeSection === "customer" ? (
              <>
                <div>
                  <strong className="block text-sm font-semibold text-gray-900 mb-1">
                    Manual Review
                  </strong>
                  <span className="text-xs text-gray-500 leading-relaxed">
                    Every feedback is read by a human being, ensuring nuanced
                    resolutions.
                  </span>
                </div>
                <div>
                  <strong className="block text-sm font-semibold text-gray-900 mb-1">
                    Verified Profiles
                  </strong>
                  <span className="text-xs text-gray-500 leading-relaxed">
                    Every chef completes identity and contact verification
                    before listing on Foodbnb kitchens.
                  </span>
                </div>
              </>
            ) : (
              <>
                <div>
                  <strong className="block text-sm font-semibold text-gray-900 mb-1">
                    Earnings Protection
                  </strong>
                  <span className="text-xs text-gray-500 leading-relaxed">
                    Your payouts are processed securely and on a clear,
                    predictable schedule.
                  </span>
                </div>
                <div>
                  <strong className="block text-sm font-semibold text-gray-900 mb-1">
                    Dispute Support
                  </strong>
                  <span className="text-xs text-gray-500 leading-relaxed">
                    Our team steps in to mediate fairly whenever a dispute or
                    complaint arises.
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* GOLD STANDARD */}
      <section className="px-10 py-16 flex flex-col md:flex-row-reverse gap-16 items-center">
        <div className="flex-shrink-0 w-72 h-72 rounded-2xl overflow-hidden border border-stone-200">
          <img
            src={Security2}
            alt="Security 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h2
            className="text-3xl md:text-4xl font-black leading-tight text-gray-900 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            The Gold Standard
            <br />
            of Home Dining
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-7">
            From the moment you browse to the moment you take your first bite,
            our multi-layered framework acts as your invisible concierge.
          </p>
          <div className="space-y-5">
            {commitmentItems.map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "#fef2f1", color: "#e8372a" }}>
                  <CheckCircle size={14} />
                </div>
                <div>
                  <strong className="block text-sm font-semibold text-gray-900 mb-0.5">
                    {item.t}
                  </strong>
                  <span className="text-xs text-gray-500 leading-relaxed">
                    {item.d}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <div className="bg-white border-t border-b border-stone-200 py-8 px-6 text-center">
        <p className="text-xs tracking-widest uppercase text-gray-300 font-semibold mb-5">
          Certified Security Partners
        </p>
        <div className="flex justify-center gap-12 flex-wrap">
          {trustBadges.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-2 text-gray-400 text-xs font-semibold tracking-widest uppercase">
                <Icon size={16} />
                {b.label}
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA FOOTER */}
      <div
        className="text-center px-6 py-20"
        style={{
          background: "linear-gradient(160deg, #1a1a1a 0%, #2d1410 100%)",
        }}>
        <h2
          className="font-black leading-tight text-white mb-2 text-4xl md:text-5xl"
          style={{ fontFamily: "'Playfair Display', serif" }}>
          Tastier with
          <br />
          <em className="italic" style={{ color: "#e8372a" }}>
            Peace of Mind.
          </em>
        </h2>
        <p
          className="text-sm leading-relaxed max-w-md mx-auto mt-4"
          style={{ color: "rgba(255,255,255,0.6)" }}>
          Join thousands of families who trust us for their daily nourishment.
          Authentic, safe, and secure.
        </p>
        <p className="mt-6 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          We continuously work to improve safety and transparency for everyone
          on Foodbnb.
        </p>
      </div>

      {/* LEGAL */}
      <div
        className="bg-black text-center px-6 py-4 text-xs border-t border-white/5"
        style={{ color: "rgba(255,255,255,0.35)" }}>
        © 2024 FoodBnB &amp; Mom's Kitchen. All rights reserved. Your security
        is our promise.
      </div>
    </div>
    </div>
  );
}

export default FoodbnbSecurity;
