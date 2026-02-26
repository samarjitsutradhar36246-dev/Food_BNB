import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Link import hata sakte ho ya rakho
import background from "../../assets/Image/Background.png";
import {
  ArrowLeft,
  Heart,
  Home,
  Users,
  ShieldCheck,
  Star,
  Truck,
  BookOpen,
  Flame,
} from "lucide-react";

const Partners = () => {
  const navigate = useNavigate();
  // ...baaki code same
  return (
    <div className="select-none cursor-pointer">
      <div className="min-h-screen bg-white font-sans">
        {/* ── HERO HEADER ── */}
        <header className="relative overflow-hidden bg-white min-h-[300px] sm:min-h-[380px] md:min-h-[500px] flex items-center">
          {/* Background image — all screen sizes */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: "60%",
              backgroundPosition: "right top",
              backgroundRepeat: "no-repeat",
            }}
          />
          {/* Fade overlay — left solid white fading to transparent right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #ffffff 0%, #ffffff 30%, rgba(255,255,255,0.5) 55%, rgba(255,255,255,0) 80%)",
            }}
          />

          {/* Text content — all screen sizes */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-10 sm:py-14 md:py-16 w-full">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 sm:mb-6"
              style={{
                background: "#fff3ed",
                color: "#ea580c",
                border: "1px solid #fed7aa",
              }}>
              A Culinary Collaboration
            </span>
            <h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-none mb-4 sm:mb-6"
              style={{ fontFamily: "Georgia, serif" }}>
              FoodBnB{" "}
              <span
                style={{
                  color: ["#ea580c"],
                  WebkitBackgroundClip: "text",
                }}>
                &
              </span>
              <br />
              Mom's Kitchen
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xs sm:max-w-sm leading-relaxed mb-6 sm:mb-8">
              Bringing the warmth of home to your table through technology and
              tradition. A partnership built on the shared belief that the best
              meals are made with love and shared with community.
            </p>
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(160deg, #1c1c1c 0%, #2d1810 50%, #1a0f0a 100%)",
                }}>
                <Heart
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  fill="white"
                />
              </div>
              <p className="text-xs sm:text-sm text-gray-500 font-medium">
                Two brands, one mission: authentic home-cooked food for all.
              </p>
            </div>
          </div>
        </header>

        {/* ── TWO COLUMN CARDS ── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="rounded-2xl border border-gray-100 p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 sm:mb-5"
              style={{ background: "#fff3ed" }}>
              <Flame className="w-5 h-5" style={{ color: "#ea580c" }} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
              FoodBnB: The Platform
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4 sm:mb-5">
              FoodBnB provides the sophisticated digital infrastructure that
              connects hungry foodies with local flavors. Our marketplace
              technology handles logistics, ordering, and community engagement,
              ensuring that every user has a seamless experience from discovery
              to delivery.
            </p>
            <div className="space-y-2">
              {[
                "Seamless Mobile Experience",
                "Smart Logistics Engine",
                "Community Review System",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-gray-700">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #fed7aa 0%, #fb923c 40%, #ea580c 70%, #c2410c 100%)",
                    }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 sm:mb-5"
              style={{ background: "#fff3ed" }}>
              <Heart className="w-5 h-5" style={{ color: "#ea580c" }} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
              Mom's Kitchen: The Culinary Heart
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4 sm:mb-5">
              Mom's Kitchen is our dedicated partner facility where traditional
              recipes are brought to life. It is not just a kitchen; it's a
              sanctuary for culinary heritage where experienced cooks prepare
              every dish using time-honored techniques and the freshest local
              ingredients.
            </p>
            <div className="space-y-2">
              {[
                "Authentic Family Recipes",
                "Small-Batch Preparation",
                "Ethical Ingredient Sourcing",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-gray-700">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #fed7aa 0%, #fb923c 40%, #ea580c 70%, #c2410c 100%)",
                    }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FROM OUR STOVE TO YOUR TABLE ── */}
        <section className="bg-gray-50 py-10 sm:py-14 lg:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3"
                style={{ fontFamily: "Georgia, serif" }}>
                From Our Stove to Your Table
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
                How FoodBnB and Mom's Kitchen work in perfect harmony to deliver
                quality home-cooked meals.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
              {[
                {
                  icon: BookOpen,
                  title: "Heritage Recipe",
                  desc: "Mom's Kitchen selects a traditional recipe passed down through generations.",
                },
                {
                  icon: Flame,
                  title: "Authentic Cooking",
                  desc: "The meal is prepared in small batches using slow-cooking methods for maximum flavor.",
                },
                {
                  icon: Star,
                  title: "Digital Marketplace",
                  desc: "FoodBnB makes the meal available for order through our intuitive marketplace app.",
                },
                {
                  icon: Truck,
                  title: "Doorstep Delivery",
                  desc: "Our logistics network ensures the meal arrives fresh and warm, just like home.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4"
                    style={{
                      background: "#fff3ed",
                      border: "1px solid #fed7aa",
                    }}>
                    <Icon
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      style={{ color: "#ea580c" }}
                    />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-2">
                    {title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── QUOTE BANNER ── */}
        <section
          className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg, #1c1c1c 0%, #2d1810 50%, #1a0f0a 100%)",
          }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 30% 60%, rgba(234,88,12,0.15) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span
              className="text-5xl sm:text-6xl font-black leading-none"
              style={{
                background:
                  "linear-gradient(135deg, #fed7aa 0%, #fb923c 40%, #ea580c 70%, #c2410c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "Georgia, serif",
              }}>
              "
            </span>
            <p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight -mt-4"
              style={{ fontFamily: "Georgia, serif" }}>
              Our goal wasn't just to sell food, but to preserve the soul of
              home cooking in an increasingly fast-paced world.
            </p>
            <div
              className="w-16 h-1 mx-auto mt-6 sm:mt-8 rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, #fed7aa 0%, #fb923c 40%, #ea580c 70%, #c2410c 100%)",
              }}
            />
          </div>
        </section>

        {/* ── THE CORE OF OUR PARTNERSHIP ── */}
        <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3"
                style={{ fontFamily: "Georgia, serif" }}>
                The Core of Our Partnership
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                Three pillars that define every decision we make together.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: ShieldCheck,
                  title: "Uncompromising Quality",
                  desc: "FoodBnB's rigorous quality control systems meet Mom's Kitchen's exacting culinary standards. From farm to fork, we monitor every step of the journey.",
                },
                {
                  icon: Heart,
                  title: "Authentic Connection",
                  desc: "We believe food is a bridge. By digitalizing the reach of Mom's Kitchen, we're fostering deeper connections between cultural heritages and modern neighborhoods.",
                },
                {
                  icon: Star,
                  title: "Ethical Sourcing",
                  desc: "Together, we support local farmers and small-scale producers. Mom's Kitchen chooses the ingredients, and FoodBnB helps scale that positive impact.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="text-center px-2 sm:px-4 py-6 rounded-2xl shadow-sm cursor-default"
                  style={{
                    transition:
                      "transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 3s ease",
                    background: "#e2e8f0",
                    border: "2px solid transparent",
                    backgroundImage:
                      "linear-gradient(#e2e8f0, #e2e8f0), linear-gradient(135deg, #fed7aa, #fb923c, #ea580c, #c2410c)",
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "scale(1.06) rotate(2deg)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px rgba(0,0,0,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                    e.currentTarget.style.boxShadow = "";
                  }}>
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5"
                    style={{ background: "#fff3ed" }}>
                    <Icon
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      style={{ color: "#ea580c" }}
                    />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-2 sm:mb-3">
                    {title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SAFETY & TRANSPARENCY ── */}
        <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-10 items-center">
            <div
              className="w-full sm:w-3/4 md:w-80 h-52 sm:h-64 rounded-2xl flex-shrink-0 flex items-center justify-center relative overflow-hidden mx-auto md:mx-0"
              style={{
                background:
                  "linear-gradient(160deg, #1c1c1c 0%, #2d1810 50%, #1a0f0a 100%)",
              }}>
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 60%)",
                }}
              />
              <div className="relative z-10 text-center text-white">
                <ShieldCheck className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 opacity-90" />
                <p className="text-base sm:text-lg font-bold">Safety First</p>
                <p className="text-xs sm:text-sm opacity-80">
                  Always & Forever
                </p>
              </div>
            </div>
            <div className="flex-1 w-full">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "Georgia, serif" }}>
                Safety & Transparency: Our Shared Commitment
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-5 sm:mb-6">
                At the heart of our partnership is a commitment to safety that
                exceeds industry standards. Mom's Kitchen operates under strict
                health regulations, with FoodBnB providing real-time
                transparency into the kitchen operations for our users.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Rigorous Inspections",
                    desc: "Weekly safety audits conducted by independent food safety professionals.",
                  },
                  {
                    icon: Star,
                    title: "Open Kitchen Policy",
                    desc: "Transparent sourcing and preparation data available for every meal through the FoodBnB app.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-3 sm:gap-4 items-start">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "#fff3ed" }}>
                      <Icon className="w-4 h-4" style={{ color: "#ea580c" }} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 mb-1">
                        {title}
                      </p>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY MOM'S KITCHEN EXISTS ── */}
        <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-8 sm:mb-10 text-center"
              style={{ fontFamily: "Georgia, serif" }}>
              Why Mom's Kitchen Exists
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                "To support home cooks and moms",
                "To bring real homemade food to customers",
                "To preserve traditional recipes",
                "To create earning opportunities from home kitchens",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <span
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #fed7aa 0%, #fb923c 40%, #ea580c 70%, #c2410c 100%)",
                    }}
                  />
                  <p className="text-sm text-gray-800 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT MAKES MOM'S KITCHEN SPECIAL ── */}
        <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-8 sm:mb-12 text-center"
              style={{ fontFamily: "Georgia, serif" }}>
              What Makes Mom's Kitchen Special
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
              {[
                {
                  icon: Home,
                  title: "Home-Cooked Meals",
                  desc: "Authentic dishes prepared in real home kitchens",
                },
                {
                  icon: Heart,
                  title: "Freshly Prepared",
                  desc: "Made to order with fresh ingredients and love",
                },
                {
                  icon: Users,
                  title: "Limited Daily Quantities",
                  desc: "Small batches ensure quality and freshness",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center">
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
                    style={{
                      background:
                        "linear-gradient(135deg, #fed7aa 0%, #fb923c 40%, #ea580c 70%, #c2410c 100%)",
                    }}>
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-2">
                    {title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto">
              {[
                {
                  icon: ShieldCheck,
                  title: "Traditional & Regional Dishes",
                  desc: "Recipes passed down through generations",
                },
                {
                  icon: Heart,
                  title: "Verified Home Kitchens",
                  desc: "Cooked by trusted, verified partners",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center">
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
                    style={{
                      background:
                        "linear-gradient(135deg, #fed7aa 0%, #fb923c 40%, #ea580c 70%, #c2410c 100%)",
                    }}>
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-2">
                    {title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS TOGETHER ── */}
        <section
          className="py-10 sm:py-14 px-4 sm:px-6 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg, #1c1c1c 0%, #2d1810 50%, #1a0f0a 100%)",
          }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 30% 60%, rgba(234,88,12,0.15) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h3
              className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-3 sm:mb-4"
              style={{ fontFamily: "Georgia, serif" }}>
              How Mom's Kitchen Works With foodBnB
            </h3>
            <p className="text-sm sm:text-base text-orange-100 leading-relaxed">
              FoodBnB acts as the platform that helps Mom's Kitchen partners
              reach customers, manage orders, and ensure a smooth experience —
              while the cooking stays personal and homemade.
            </p>
          </div>
        </section>

        {/* ── TRUST & QUALITY ── */}
        <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div
            className="rounded-2xl p-5 sm:p-8 border-l-4"
            style={{
              background: "#fff3ed",
              borderColor: "transparent",
              borderImage:
                "linear-gradient(135deg, #fed7aa, #fb923c, #ea580c, #c2410c) 1",
            }}>
            <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 sm:gap-3">
              <ShieldCheck
                className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                style={{ color: "#ea580c" }}
              />
              Trust & Quality
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              All Mom's Kitchen partners follow basic hygiene and quality
              standards to ensure every meal is safe, fresh, and satisfying.
            </p>
          </div>
        </section>

        {/* ── BACK BUTTON ── */}
        <div className="text-center pb-12 sm:pb-16 px-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all hover:scale-105"
            style={{
              background:
                "linear-gradient(160deg, #1c1c1c 0%, #2d1810 50%, #1a0f0a 100%)",
            }}>
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            Back to FoodBnB
          </button>
        </div>

        {/* ── FOOTER ── */}
        <footer
          className="py-6 px-4 sm:px-6 text-center"
          style={{ background: "#111" }}>
          <p className="text-gray-600 text-xs">
            © 2026 foodBnB. Supporting home kitchens with love.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Partners;
