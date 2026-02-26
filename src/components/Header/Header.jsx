import React, { useEffect, useRef } from "react";
import { ChevronsDown } from "lucide-react";
import intro from "../../assets/new_Header_video.mp4";
import app_store from "../../assets/app.avif";
import play_store from "../../assets/play.avif";
import foodbnb from "../../assets/foodbnb1.svg";
import video from "../../assets/intro_mobile_Video.mp4";

const Header = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <>
      <style>{`
        .scroll-bounce {
          animation: scrollBounce 1.8s ease-in-out infinite;
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(5px); }
        }
      `}</style>

      <header className="relative w-full h-screen min-h-[500px] overflow-hidden select-none">
        {/* Mobile Background Video — visible below sm */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover block sm:hidden"
          src={video}
        />

        {/* Desktop Background Video — visible at sm and above */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover hidden sm:block"
          src={intro}
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Content pinned to bottom-center */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 sm:pb-12 md:pb-14 lg:pb-16 xl:pb-5 2xl:pb-6 px-4">
          {/* Logo icon */}
          <img
            src={foodbnb}
            alt="FoodBnb logo icon"
            className="
              w-18 h-18
              sm:w-22 sm:h-22
              md:w-24 md:h-24
              lg:w-28 lg:h-28
              xl:w-38 xl:h-38
              2xl:w-42 2xl:h-42
              mb-2 object-contain
            "
          />

          {/* FOODBNB wordmark */}
          <h1
            className="leading-none tracking-wide font-extrabold
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              xl:text-[10rem]
              2xl:text-[12rem]"
            style={{ color: "#FFF4E6", fontFamily: "Geom, sans-serif" }}>
            foodbnb
          </h1>

          {/* Tagline */}
          <p
            className="mt-1 text-white font-bold tracking-wide
            text-xs
            sm:text-sm
            md:text-base
            lg:text-lg
            xl:text-xl
            2xl:text-2xl">
            Taste the{" "}
            <em
              className="font-extrabold not-italic"
              style={{ color: "#FF2D2D" }}>
              comfort
            </em>{" "}
            of Home
          </p>

          {/* Store badges */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-4 sm:mt-5 md:mt-6">
            <a
              href="#"
              className="hover:opacity-80 active:scale-95 hover:scale-110 transition-all duration-150">
              <img
                src={play_store}
                alt="Get it on Google Play"
                className="h-9 w-auto sm:h-11 md:h-12 lg:h-14 xl:h-16 2xl:h-[4.5rem] object-contain"
              />
            </a>
            <a
              href="#"
              className="hover:opacity-80 active:scale-95 hover:scale-110 transition-all duration-150">
              <img
                src={app_store}
                alt="Download on the App Store"
                className="h-9 w-auto sm:h-11 md:h-12 lg:h-14 xl:h-16 2xl:h-[4.5rem] object-contain"
              />
            </a>
          </div>

          {/* Scroll down */}
          <div
            className="flex flex-col items-center mt-6 sm:mt-8 text-white/70 scroll-bounce cursor-pointer"
            onClick={() => {
              const nextSection = document.getElementById("hero-section");
              if (nextSection) {
                const start = window.scrollY;
                const end =
                  nextSection.getBoundingClientRect().top + window.scrollY;
                const duration = 6000;
                const startTime = performance.now();

                const easeInOut = (t) =>
                  t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

                const scroll = (currentTime) => {
                  const elapsed = currentTime - startTime;
                  const progress = Math.min(elapsed / duration, 1);
                  window.scrollTo(
                    0,
                    start + (end - start) * easeInOut(progress),
                  );
                  if (progress < 1) requestAnimationFrame(scroll);
                };

                requestAnimationFrame(scroll);
              }
            }}>
            <span className="text-[11px] sm:text-xs md:text-sm tracking-wide uppercase mb-0.5 font-bold">
              Scroll down
            </span>
            <ChevronsDown
              className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 xl:w-10 xl:h-8"
              strokeWidth={2.5}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
