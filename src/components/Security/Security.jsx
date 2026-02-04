import React, { useState, useEffect } from "react";
import {
  Shield,
  Lock,
  CheckCircle,
  Eye,
  Users,
  CreditCard,
  FileCheck,
  Star,
  MessageSquare,
  Database,
  PhoneCall,
  AlertTriangle,
} from "lucide-react";
import Logo from "../../assets/Image/foodbnb.svg";

function FoodbnbSecurity() {
  const [activeSection, setActiveSection] = useState("customer");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top when component mounts
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

  const platformSecurity = [
    { icon: Lock, text: "Encrypted login & password protection" },

    { icon: Eye, text: "Activity monitoring" },
    { icon: MessageSquare, text: "Dedicated customer & mom support team" },
  ];

  return (
    <>
      {/* Standalone Header like Terms page */}
      <header className="bg-red-600 text-white px-4 sm:px-6 py-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center gap-3">
          <img
            src={Logo}
            alt="FoodBNB Logo"
            className="w-8 h-8 sm:w-10 sm:h-10 shrink-0"
          />
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">FoodBNB</h1>
            <p className="text-xs sm:text-sm text-red-100">
              Security & Protection
            </p>
          </div>
        </div>
      </header>
      <hr className="border-2 border-slate-500"></hr>
      <div className="min-h-screen bg-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full opacity-5 blur-3xl"
            style={{
              transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.15}px)`,
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 bg-red-500 rounded-full opacity-5 blur-3xl"
            style={{
              transform: `translate(-${scrollY * 0.08}px, -${scrollY * 0.1}px)`,
            }}
          />
        </div>

        {/* Hero Section */}
        <div className="relative bg-red-600 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-40 h-40 border-4 border-white rounded-full" />
            <div className="absolute bottom-20 right-20 w-32 h-32 border-4 border-white rounded-full" />
            <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-white rounded-full" />
          </div>
        </div>

        {/* Toggle Section */}
        <div className="sticky top-0 z-40 bg-white border-b-4 border-red-600 shadow-lg">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setActiveSection("customer")}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  activeSection === "customer"
                    ? "bg-red-600 text-white shadow-xl scale-105"
                    : "bg-white text-black border-2 border-red-600 hover:bg-red-50"
                }`}>
                🔐 For Customers
              </button>
              <button
                onClick={() => setActiveSection("mom")}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  activeSection === "mom"
                    ? "bg-red-600 text-white shadow-xl scale-105"
                    : "bg-white text-black border-2 border-red-600 hover:bg-red-50"
                }`}>
                👩‍🍳 For Moms
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid gap-8">
            {(activeSection === "customer"
              ? customerFeatures
              : momFeatures
            ).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border-2 border-black rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 bg-red-600 text-white p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-black">
                        {feature.title}
                      </h3>
                      <ul className="space-y-3">
                        {feature.points.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-black">
                            <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <span className="text-lg leading-relaxed">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Platform Security Section */}
        <div className="bg-red-600 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)",
              }}
            />
          </div>

          <div className="max-w-6xl mx-auto px-6 relative">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                🛡️ Platform-Wide Security
              </h2>
              <p className="text-xl opacity-95 font-light">
                Protection measures for everyone
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platformSecurity.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white text-black p-6 rounded-xl border-2 border-white hover:bg-red-50 transition-all duration-300 hover:scale-105"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                    }}>
                    <div className="flex items-center gap-4">
                      <div className="bg-red-600 text-white p-3 rounded-lg">
                        <Icon className="w-6 h-6" />
                      </div>
                      <p className="font-semibold text-lg">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Trust Promise */}

        {/* Footer CTA */}
        <hr className="border-2 border-white"></hr>
        <div className="bg-black text-white py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Safe Home Cooking?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands who trust Foodbnb for authentic, secure meals
            </p>
            <button className="bg-red-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-xl">
              Get Started Today
            </button>
            <p className="text-lg text-white">
              We continuously work to improve safety and transparency for
              everyone on Foodbnb.
            </p>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes pulse {
            0%,
            100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.05);
              opacity: 0.8;
            }
          }
        `}</style>
      </div>
    </>
  );
}

export default FoodbnbSecurity;
