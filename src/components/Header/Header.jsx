import React from "react";
import { ChevronDown } from "lucide-react";
import intro from "../../assets/new_Header_video.mp4";
import app_store from "../../assets/app.avif";
import play_store from "../../assets/play.avif";
import foodbnb from "../../assets/foodbnb1.svg";

const Header = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-end overflow-hidden font-sans">
      {/* Logo - Responsive using viewport units */}
      <img
        src={foodbnb}
        alt="FoodBNB Logo"
        className="absolute top-[25%] left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 
                   w-[12vw] h-[12vw] min-w-[50px] min-h-[50px] max-w-[140px] max-h-[140px]"
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

      {/* Hero Content - Using viewport units for consistent scaling */}
      <div className="z-20 flex w-full flex-col items-center justify-end pb-[2vh] px-4">
        <div className="flex w-full flex-col items-center justify-center text-white mb-[2vh]">
          {/* Main Title */}
          <h1
            className="text-center font-semibold tracking-tight
                       font-['Bungee_Tint'] text-[#ff4c35] [text-shadow:_0_0_10px_rgba(255,76,53,0.7)]
                       text-[clamp(2rem,10vw,8rem)]">
            FoodBNB
          </h1>

          {/* Subtitle */}
          <div
            className="font-bold text-center font-['Geom'] mt-[1vh]
                       text-[clamp(0.875rem,3.5vw,1.5rem)]">
            Taste the{" "}
            <span
              className="text-[#ff4c35] font-bold
                         text-[clamp(1.25rem,5vw,2.5rem)]">
              comfort
            </span>{" "}
            of Home
          </div>
        </div>

        {/* App Store Buttons */}
        <div className="mt-[2vh] mb-[1vh] flex w-full justify-center gap-[3vw] max-w-md">
          <a href="#" className="group flex-shrink-0">
            <img
              src={play_store}
              alt="Google Play"
              className="h-[clamp(2rem,8vw,3.5rem)] w-auto transition-transform group-hover:scale-110"
            />
          </a>
          <a href="#" className="group flex-shrink-0">
            <img
              src={app_store}
              alt="App Store"
              className="h-[clamp(2rem,8vw,3.5rem)] w-auto transition-transform group-hover:scale-110"
            />
          </a>
        </div>

        {/* Scroll Indicator - Hidden on very small screens */}
        <div
          className="mb-[2vh] mt-[2vh] flex items-center cursor-pointer animate-bounce
                        hidden sm:flex">
          <div className="text-white font-['Geom'] flex items-center text-[clamp(1rem,4vw,1.625rem)]">
            Scroll down
            <ChevronDown className="ml-2" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
