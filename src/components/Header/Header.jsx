import React, { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import intro from "../../assets/new_Header_video.mp4";
import app_store from "../../assets/app.avif";
import play_store from "../../assets/play.avif";
import foodbnb from "../../assets/foodbnb1.svg";

const Header = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <>
      {/* Bungee Tint font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bungee+Tint&display=swap');
        .font-bungee-tint {
          font-family: 'Bungee Tint', cursive;
        }
        .scroll-bounce {
          animation: scrollBounce 1.8s ease-in-out infinite;
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(5px); }
        }
      `}</style>

      <header className="relative w-full h-screen min-h-[500px] overflow-hidden">
        {/* Background Video */}
        <video
          ref={videoRef}
          src={intro}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Content pinned to bottom-center */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 sm:pb-12 md:pb-14 lg:pb-16 xl:pb-20 2xl:pb-24 px-4">
          {/* Logo icon */}
          <img
            src={foodbnb}
            alt="FoodBnb logo icon"
            className="
              w-16 h-16
              sm:w-20 sm:h-20
              md:w-24 md:h-24
              lg:w-28 lg:h-28
              xl:w-32 xl:h-32
              2xl:w-36 2xl:h-36
              mb-2 object-contain
            "
          />

          {/* FOODBNB wordmark */}
          <h1
            className="font-bungee-tint leading-none tracking-widest
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              xl:text-9xl
              2xl:text-[10rem]"
            style={{ color: "#FF2D2D" }}>
            FOODBNB
          </h1>

          {/* Tagline */}
          <p
            className="mt-1 text-white font-light tracking-wide
            text-xs
            sm:text-sm
            md:text-base
            lg:text-lg
            xl:text-xl
            2xl:text-2xl">
            Taste the{" "}
            <em
              className="font-semibold not-italic"
              style={{ color: "#FF2D2D" }}>
              comfort
            </em>{" "}
            of Home
          </p>

          {/* Store badges — pure avif images, no text */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-4 sm:mt-5 md:mt-6">
            <a
              href="#"
              className="hover:opacity-80 active:scale-95 transition-all duration-150">
              <img
                src={play_store}
                alt="Get it on Google Play"
                className="
                  h-9 w-auto
                  sm:h-11
                  md:h-12
                  lg:h-14
                  xl:h-16
                  2xl:h-[4.5rem]
                  object-contain
                "
              />
            </a>

            <a
              href="#"
              className="hover:opacity-80 active:scale-95 transition-all duration-150">
              <img
                src={app_store}
                alt="Download on the App Store"
                className="
                  h-9 w-auto
                  sm:h-11
                  md:h-12
                  lg:h-14
                  xl:h-16
                  2xl:h-[4.5rem]
                  object-contain
                "
              />
            </a>
          </div>

          {/* Scroll down */}
          <div className="flex flex-col items-center mt-6 sm:mt-8 text-white/70 scroll-bounce">
            <span className="text-[11px] sm:text-xs md:text-sm tracking-widest uppercase mb-0.5">
              Scroll down
            </span>
            <ChevronDown
              className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"
              strokeWidth={1.5}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
