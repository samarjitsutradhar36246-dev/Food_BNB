import React, { useEffect, useState } from "react";
import paymentImg from "../../assets/payment.jpg";
import cook from "../../assets/cooking.png";
import food1 from "../../assets/kfc.png";
import food2 from "../../assets/pasta.jpg";
import food3 from "../../assets/rice_bowl_new.png";
import food4 from "../../assets/naan.png";
import food5 from "../../assets/tomato.jpg";
import food6 from "../../assets/soup_veggies.jpg";
import food7 from "../../assets/ots.png";
import food8 from "../../assets/Onion_ring.jpg";
import food9 from "../../assets/momo.png";
import food10 from "../../assets/burger.png";
import food11 from "../../assets/chole.png";
import food12 from "../../assets/fish.png";
import "./Hero_section.css";

const FOOD_ITEMS = [
  { name: "kfc", src: food1 },
  { name: "pasta", src: food2 },
  { name: "rice-bowl", src: food3 },
  { name: "naan", src: food4 },
  { name: "tomato", src: food5 },
  { name: "soup", src: food6 },
  { name: "ots", src: food7 },
  { name: "onion-ring", src: food8 },
  { name: "momo", src: food9 },
  { name: "burger", src: food10 },
  { name: "chole", src: food11 },
  { name: "fish", src: food12 },
];

const ROTATING_TEXTS = [
  "Meals that feel like a hug💝",
  "Flavours that remind you of home.",
  "Meals that make a new city feel familiar",
  "Eat just not to fill your stomach, but to celebrate heart!",
  "Made with Love",
  "Support a kitchen, nourish your soul",
  "Always Fresh, Always Delicious",
];

const STEPS = [
  {
    title: "Select Location",
    desc: "Enter your pincode to find verified home kitchens in your neighborhood.",
    image:
      "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Choose Kitchen",
    desc: "Browse menus, read chef profiles, and choose a One-time meal or Monthly Dabba.",
    image: cook,
  },
  {
    title: "Secure Checkout",
    desc: "Pay securely online. Customize your delivery schedule for subscriptions.",
    image: paymentImg,
  },
  {
    title: "Fast Delivery",
    desc: "Sit back! Hot, homemade food is delivered to your door via live tracking.",
    image:
      "https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&fit=crop&w=400&q=80",
  },
];

export default function OrbitingSection() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = ROTATING_TEXTS[textIndex];
    const typingSpeed = isDeleting ? 30 : 50;
    const pauseTime = 2000;
    let timer;

    if (!isDeleting && displayedText === currentText) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayedText === "") {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % ROTATING_TEXTS.length);
      }, 50);
    } else {
      const nextLength = isDeleting
        ? displayedText.length - 1
        : displayedText.length + 1;
      timer = setTimeout(() => {
        setDisplayedText(currentText.substring(0, nextLength));
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, textIndex]);

  return (
    <div className="w-full select-none">
      {/* Hero Section with Orbiting Food */}
      <section className="relative min-h-162.5 lg:min-h-187.5 xl:min-h-200 bg-slate-50 overflow-hidden border-b border-gray-200 flex flex-col justify-center items-center px-4">
        {/* Orbiting Container - with proper containment */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="relative w-full h-full max-w-225 max-h-225 flex justify-center items-center">
            {/* Guide Ring */}
            <div
              className="absolute border border-dashed border-gray-300/50 rounded-full"
              style={{
                width: "min(700px, 85vw, 85vh)",
                height: "min(700px, 85vw, 85vh)",
              }}
              z-10
            />
            {/* Center Content - with proper text wrapping and overflow prevention */}
            <div
              className="relative z-10 max-w-md sm:max-w-lg px-4 sm:px-6 text-center"
              z-5>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-3 sm:mb-4 md:mb-6">
                "Better food for <br />
                <span className="text-red-500">more people"</span>
              </h1>

              <div className="flex justify-center px-2 sm:px-4">
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                  <p className="text-xs sm:text-sm md:text-base font-bold text-black/60 min-h-[3rem] sm:min-h-[3.5rem] break-words text-center leading-relaxed px-2">
                    <span className="inline-block max-w-full break-words">
                      {displayedText}
                      <span className="animate-pulse ml-0.5">|</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* Orbiting Food Items */}
            {FOOD_ITEMS.map((item, index) => {
              const delay = -(60 / FOOD_ITEMS.length) * index;

              return (
                <div
                  key={item.name}
                  className="absolute top-1/2 left-1/2 w-0 h-0 animate-orbit"
                  style={{ animationDelay: `${delay}s` }}>
                  <div
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `translate(-50%, -50%) translateX(min(350px, 42.5vw, 42.5vh))`,
                    }}>
                    <div
                      className="w-13.75 h-13.75 sm:w-16.25 sm:h-16.25 md:w-18.75 md:h-18.75 lg:w-21.25 lg:h-21.25 bg-white rounded-lg shadow-lg border border-gray-100 flex items-center justify-center p-1.5 sm:p-2 md:p-2.5 transition-transform hover:scale-110 animate-counter-orbit"
                      style={{ animationDelay: `${delay}s` }}>
                      <img
                        src={item.src}
                        alt={item.name}
                        className="w-full h-full object-contain contrast-120 shadow-lg shadow-slate-500"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fade Gradients */}
        <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-slate-50 to-transparent pointer-events-none z-20" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-slate-50 to-transparent pointer-events-none z-20" />
      </section>

      {/* How It Works Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-white bg-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-wider">
              SIMPLE PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              From Our Home to Yours
            </h2>
          </div>

          {/* Steps Grid */}
          <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-4 max-w-5xl mx-auto">
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-20 left-[10%] right-[10%] h-0.5 bg-gray-200 z-0" />

            {STEPS.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center flex-1 px-4 z-10 group">
                {/* Image Wrapper */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-6 transition-transform hover:-translate-y-1">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover rounded-full shadow-lg  border-white  hover: border-4  hover:border-red-500"
                  />

                  {/* Step Badge */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-sm border-3 border-white shadow-md bg-gray-900 group-hover:bg-red-500 transition-colors duration-300">
                    {index + 1}
                  </div>
                </div>

                {/* Step Content */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 max-w-55 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes counter-orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        .animate-orbit {
          animation: orbit 60s linear infinite;
        }

        .animate-counter-orbit {
          animation: counter-orbit 60s linear infinite;
        }

        .bg-pattern {
          background-color: #ffffff;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260' viewBox='0 0 260 260'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23a19da8' fill-opacity='0.12'%3E%3Cpath d='M24.37 16c.2.65.39 1.32.54 2H21.17l1.17 2.34.45.9-.24.11V28a5 5 0 0 1-2.23 8.94l-.02.06a8 8 0 0 1-7.75 6h-20a8 8 0 0 1-7.74-6l-.02-.06A5 5 0 0 1-17.45 28v-6.76l-.79-1.58-.44-.9.9-.44.63-.32H-20a23.01 23.01 0 0 1 44.37-2zm-36.82 2a1 1 0 0 0-.44.1l-3.1 1.56.89 1.79 1.31-.66a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .86.02l2.88-1.27a3 3 0 0 1 2.43 0l2.88 1.27a1 1 0 0 0 .85-.02l3.1-1.55-.89-1.79-1.42.71a3 3 0 0 1-2.56.06l-2.77-1.23a1 1 0 0 0-.4-.09h-.01a1 1 0 0 0-.4.09l-2.78 1.23a3 3 0 0 1-2.56-.06l-2.3-1.15a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1L.9 19.22a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01zm0-2h-4.9a21.01 21.01 0 0 1 39.61 0h-2.09l-.06-.13-.26.13h-32.31zm30.35 7.68l1.36-.68h1.3v2h-36v-1.15l.34-.17 1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0L2.26 23h2.59l1.36.68a3 3 0 0 0 2.56.06l1.67-.74h3.23l1.67.74a3 3 0 0 0 2.56-.06zM-13.82 27l16.37 4.91L18.93 27h-32.75zm-.63 2h.34l16.66 5 16.67-5h.33a3 3 0 1 1 0 6h-34a3 3 0 1 1 0-6zm1.35 8a6 6 0 0 0 5.65 4h20a6 6 0 0 0 5.66-4H-13.1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
}
