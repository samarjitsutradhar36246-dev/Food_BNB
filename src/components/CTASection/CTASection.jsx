import React from "react";
import { ArrowRight, ChefHat, Utensils } from "lucide-react";
import "./CTASection.css";
import phone from "../../assets/phone_img.png";
import { useInView } from "../../hooks/useInView";

const CTASection = () => {
  const { ref, visible } = useInView(0.2);

  return (
    <section className="relative -mt-12 overflow-hidden no-select">
      {/* Dotted background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-[1]">
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
        <div className="absolute top-[60px] right-[60px] opacity-20 float-animation">
          <ChefHat className="w-[70px] h-[70px] text-white" />
        </div>
        <div className="absolute bottom-[60px] left-[60px] opacity-20 float-animation float-delay">
          <Utensils className="w-[70px] h-[70px] text-white" />
        </div>
      </div>

      {/* Container */}
      <div className="relative z-[5] max-w-[1100px] mx-auto px-5 py-20 md:py-24 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold text-white leading-tight mb-6 md:mb-8 font-[Geom]">
              Be the first,
              <br />
              taste the difference.
            </h2>

            <p className="text-base sm:text-lg md:text-xl lg:text-[22px] text-white/85 max-w-[700px] mx-auto lg:mx-0 mb-10 md:mb-14 font-[Geom]">
              Join our waitlist to get early access when we launch. Whether you
              want home-cooked meals or want to become a cook — we'd love to
              have you!
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 md:mb-12">
              <button className="flex items-center justify-center gap-2 px-8 py-4 text-base sm:text-lg md:text-xl bg-white text-[#ff4c24] rounded-xl font-[Geom] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                Join the Waitlist
                <ArrowRight className="w-5 h-5" />
              </button>

              <button className="flex items-center justify-center gap-2 px-8 py-4 text-base sm:text-lg md:text-xl bg-transparent text-white border-2 border-white rounded-xl font-[Geom] hover:-translate-y-1 hover:bg-white/15 transition-all duration-300">
                Register as a Cook
                <ChefHat className="w-5 h-5" />
              </button>
            </div>

            {/* Launch info */}
            <div className="flex justify-center lg:justify-start">
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

          {/* Right phone image - WITH SCROLL ANIMATION */}
          <div
            ref={ref}
            className={`flex-1 flex justify-center lg:justify-end transition-all duration-700 ${
              visible
                ? "motion-safe:animate-push-up-scroll"
                : "translate-y-24 opacity-0"
            }`}>
            <img
              src={phone}
              alt="Phone"
              className="w-full max-w-70 sm:max-w-[350px] md:max-w-[400px] lg:max-w-full h-auto contrast-120 brightness-90 "
            />
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="block w-full h-[60px] sm:h-[80px] md:h-[100px] lg:h-[110px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="rgb(1, 1, 1)"
          />
        </svg>
      </div>
    </section>
  );
};

export default CTASection;
