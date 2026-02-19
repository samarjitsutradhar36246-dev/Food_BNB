import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, ChefHat, Utensils } from "lucide-react";
import "./CTASection.css";
import phone from "../../assets/phone_img.png";

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneRef = useRef(null);
  const hasAnimated = useRef(false); // Track if animation has played

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only animate once when first entering viewport
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true);
            hasAnimated.current = true;
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before fully visible
      },
    );

    if (phoneRef.current) {
      observer.observe(phoneRef.current);
    }

    return () => {
      if (phoneRef.current) {
        observer.unobserve(phoneRef.current);
      }
    };
  }, []);

  return (
    <section className="relative overflow-hidden no-select border-b-0 border-black">
      {/* Dotted background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-1">
        <div
          className="absolute w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255, 255, 255, 0.3) 1.5px, transparent 1.5px)",
            backgroundSize: "20px 20px",
            backgroundPosition: "center center",
          }}
        />
      </div>

      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-95"
        style={{
          background: "linear-gradient(135deg, #c90900, #ff865a)",
        }}
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circles */}
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white/10 rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-white/10 rounded-full" />

        {/* Blur effects */}
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/8 blur-[30px] rounded-full" />
        <div className="absolute right-1/3 bottom-[30%] w-32 h-32 bg-white/8 blur-[30px] rounded-full" />

        {/* Floating icons */}
        <div className="absolute top-15 right-[60px] opacity-20 float-animation">
          <ChefHat className="w-[70px] h-[70px] text-white" />
        </div>
        <div className="absolute bottom-[60px] left-[60px] opacity-20 float-animation float-delay">
          <Utensils className="w-[70px] h-[70px] text-white" />
        </div>
      </div>

      {/* Container */}
      <div className="relative z-[5] max-w-[1100px] mx-auto px-5 py-30 md:py-24 lg:py-28">
        <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row items-center lg:items-center xl:items-center 2xl:items-center justify-center gap-8 lg:gap-12 xl:gap-16 2xl:gap-20">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left xl:text-left 2xl:text-left lg:max-w-[500px] xl:max-w-[550px] 2xl:max-w-[600px]">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[52px] xl:text-[58px] 2xl:text-[64px] font-extrabold text-white leading-tight mb-6 md:mb-8 font-[Geom]">
              Be the first,
              <br />
              taste the difference.
            </h2>

            <p className="text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[19px] 2xl:text-[20px] text-white/85 max-w-[700px] mx-auto lg:mx-0 xl:mx-0 2xl:mx-0 mb-10 md:mb-14 font-[Geom]">
              Join our waitlist to get early access when we launch. Whether you
              want home-cooked meals or want to become a cook — we'd love to
              have you!
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start xl:justify-start 2xl:justify-start mb-10 md:mb-12">
              <button className="flex items-center justify-center gap-2 px-8 py-4 text-base sm:text-lg md:text-xl lg:text-lg xl:text-lg 2xl:text-xl bg-white text-[#ff4c24] rounded-xl font-[Geom] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                Join the Waitlist
                <ArrowRight className="w-5 h-5" />
              </button>

              <button className="flex items-center justify-center gap-2 px-8 py-4 text-base sm:text-lg md:text-xl lg:text-lg xl:text-lg 2xl:text-xl bg-transparent text-white border-2 border-white rounded-xl font-[Geom] hover:-translate-y-1 hover:bg-white/15 transition-all duration-300">
                Register as a Cook
                <ChefHat className="w-5 h-5" />
              </button>
            </div>

            {/* Launch info - Centered for all screen sizes */}
            <div className="flex justify-center lg:ml-[-50px]">
              <div className="bg-white/12 backdrop-blur-sm px-6 py-3 rounded-2xl text-center">
                <p className="text-xs text-white/60 mb-1 font-[Geom]">
                  Launching in
                </p>
                <p className="text-base sm:text-lg text-white font-semibold font-[Geom]">
                  Tripura, India
                </p>
              </div>
            </div>
          </div>

          {/* Right phone image - WITH ONE-TIME ANIMATION */}
          <div
            ref={phoneRef}
            className={`flex-shrink-0 flex justify-center lg:justify-end xl:justify-end 2xl:justify-end transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-24 opacity-0"
            }`}>
            <img
              src={phone}
              alt="Phone"
              className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[380px] xl:max-w-[420px] 2xl:max-w-[450px] h-auto contrast-130 brightness-90"
            />
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-[2] translate-y-[1px] sm:translate-y-[2px] md:translate-y-[3px] lg:translate-y-[4px] xl:translate-y-[5px]">
        <svg
          className="block w-full h-[80px] sm:h-[100px] md:h-[120px] lg:h-[130px] scale-y-[1.02]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          <defs>
            <radialGradient
              id="waveGrad"
              cx="50%"
              cy="0%"
              r="100%"
              fx="50%"
              fy="0%">
              <stop offset="20%" stopColor="#1a1a1a" />
              <stop offset="60%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#1a1a1a" />
            </radialGradient>
          </defs>
          <path
            fill="#1a1a1a"
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default CTASection;
