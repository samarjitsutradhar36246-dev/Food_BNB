import React from "react";
import { ChevronDown } from "lucide-react";
import intro from "../../assets/new_Header_video.mp4";
import app_store from "../../assets/app.avif";
import play_store from "../../assets/play.avif";
import foodbnb from "../../assets/foodbnb1.svg";

const Header = () => {
  return (
    <div className="relative flex h-screen min-h-max w-full flex-col items-center justify-end overflow-hidden font-sans">
      {/* Logo: Optimized for all screen sizes including Nest Hub devices */}
      <img
        src={foodbnb}
        alt="FoodBNB Logo"
        className="absolute top-[40%] left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 transition-all duration-300
                   w-[80px] h-[80px] 
                   sm:w-[100px] sm:h-[100px] 
                   md:w-[120px] md:h-[120px] 
                   lg:w-[140px] lg:h-[140px] 
                   xl:w-[160px] xl:h-[160px] 
                   2xl:w-[180px] 2xl:h-[180px]
                   /* Nest Hub (1024x600) */
                   [@media(width:1024px)_and_(height:600px)]:w-[90px] [@media(width:1024px)_and_(height:600px)]:h-[90px]
                   /* Nest Hub Max (1280x800) */
                   [@media(width:1280px)_and_(height:800px)]:w-[110px] [@media(width:1280px)_and_(height:800px)]:h-[110px]
                   /* General short screens */
                   max-h-[600px]:max-h-[12vh] max-h-[600px]:w-auto"
      />

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 h-full w-full object-cover object-center">
        <source src={intro} type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-black via-black/20 to-transparent"></div>

      {/* Hero Content: Optimized for Nest Hub devices */}
      <div
        className="z-20 flex w-full max-h-[85%] flex-col items-center justify-center pb-4 transition-all duration-300
                      /* Standard responsive positioning */
                      translate-y-[2rem] sm:translate-y-[3rem] md:translate-y-[4rem] lg:translate-y-[4.75rem] xl:translate-y-[8rem]
                      /* Nest Hub (1024x600) - compact layout */
                      [@media(width:1024px)_and_(height:600px)]:translate-y-2 [@media(width:1024px)_and_(height:600px)]:scale-90
                      /* Nest Hub Max (1280x800) - slightly more room */
                      [@media(width:1280px)_and_(height:800px)]:translate-y-8 [@media(width:1280px)_and_(height:800px)]:scale-95
                      /* General short screens fallback */
                      max-h-[650px]:translate-y-4 max-h-[650px]:scale-90">
        <div className="flex w-full flex-col items-center justify-center text-white">
          <h1
            className="text-center font-semibold tracking-tight transition-all duration-300 px-5
                         text-[2em] sm:text-[2.5em] md:text-[3em] lg:text-[4em] xl:text-[8em]
                         /* Nest Hub (1024x600) */
                         [@media(width:1024px)_and_(height:600px)]:text-[3em]
                         /* Nest Hub Max (1280x800) */
                         [@media(width:1280px)_and_(height:800px)]:text-[3.5em]
                         /* General short screens */
                         max-h-[650px]:text-[2.8em]
                         font-['Bungee_Tint'] text-[#ff4c35] [text-shadow:_0_0_10px_rgba(255,76,53,0.7)]">
            FoodBNB
          </h1>

          <div
            className="font-bold text-center transition-all duration-300 font-['Geom'] mt-2
                          text-[1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.5rem]
                          /* Nest Hub (1024x600) */
                          [@media(width:1024px)_and_(height:600px)]:text-[0.95rem]
                          /* Nest Hub Max (1280x800) */
                          [@media(width:1280px)_and_(height:800px)]:text-[1.1rem]
                          /* General short screens */
                          max-h-[650px]:text-[0.9rem]">
            Taste the{" "}
            <span
              className="text-[#ff4c35] font-bold transition-all duration-300
                         text-[1.5rem] sm:text-[2rem] md:text-[2.2rem] lg:text-[2.3rem] xl:text-[2.5rem]
                         /* Nest Hub (1024x600) */
                         [@media(width:1024px)_and_(height:600px)]:text-[1.5rem]
                         /* Nest Hub Max (1280x800) */
                         [@media(width:1280px)_and_(height:800px)]:text-[1.8rem]
                         /* General short screens */
                         max-h-[650px]:text-[1.3rem]">
              comfort
            </span>{" "}
            of Home
          </div>
        </div>

        {/* Buttons: Compact on Nest Hub devices */}
        <div
          className="mt-4 md:mt-6 mb-[-4px] flex w-full flex-col justify-center
                        /* Nest Hub adjustments */
                        [@media(width:1024px)_and_(height:600px)]:mt-3
                        [@media(width:1280px)_and_(height:800px)]:mt-4">
          <div
            className="flex w-full justify-center gap-4 sm:gap-6 px-4
                          /* Nest Hub - smaller gaps */
                          [@media(width:1024px)_and_(height:600px)]:gap-3
                          [@media(width:1280px)_and_(height:800px)]:gap-4">
            <a href="#" className="group">
              <img
                src={play_store}
                alt="Google Play"
                className="h-8 sm:h-10 md:h-12 lg:h-14 transition-transform group-hover:scale-110
                           /* Nest Hub (1024x600) */
                           [@media(width:1024px)_and_(height:600px)]:h-9
                           /* Nest Hub Max (1280x800) */
                           [@media(width:1280px)_and_(height:800px)]:h-10
                           /* General short screens */
                           max-h-[650px]:h-8"
              />
            </a>
            <a href="#" className="group">
              <img
                src={app_store}
                alt="App Store"
                className="h-8 sm:h-10 md:h-12 lg:h-14 transition-transform group-hover:scale-110
                           /* Nest Hub (1024x600) */
                           [@media(width:1024px)_and_(height:600px)]:h-9
                           /* Nest Hub Max (1280x800) */
                           [@media(width:1280px)_and_(height:800px)]:h-10
                           /* General short screens */
                           max-h-[650px]:h-8"
              />
            </a>
          </div>
        </div>

        {/* Scroll Indicator: Hidden on very short screens, visible on Nest Hub Max */}
        <div
          className="mb-3 mt-4 flex items-center cursor-pointer animate-bounce
                        /* Hide on Nest Hub (1024x600) */
                        [@media(width:1024px)_and_(height:600px)]:hidden
                        /* Show smaller on Nest Hub Max (1280x800) */
                        [@media(width:1280px)_and_(height:800px)]:flex [@media(width:1280px)_and_(height:800px)]:mb-2 [@media(width:1280px)_and_(height:800px)]:mt-3
                        /* Hide on very short screens */
                        max-h-[550px]:hidden">
          <div
            className="text-white font-['Geom'] flex items-center text-[18px] sm:text-[22px] md:text-[26px]
                          /* Nest Hub Max - smaller text */
                          [@media(width:1280px)_and_(height:800px)]:text-[20px]">
            Scroll down
            <ChevronDown
              className="ml-4
                                   [@media(width:1280px)_and_(height:800px)]:ml-2"
              size={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
