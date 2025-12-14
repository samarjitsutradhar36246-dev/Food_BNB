import React from "react";
import { ChevronDown } from "lucide-react";
import intro from "../../assets/new_Header_video.mp4";
import app_store from "../../assets/app.avif";
import play_store from "../../assets/play.avif";
import foodbnb from "../../assets/foodbnb1.svg";

import "./Header.css";

const Header = () => (
  <div className="hero-container">
    {/* Logo at top left */}
    <img src={foodbnb} alt="FoodBNB Logo" className="main_icon" />
      
      {/* Circular Text around Logo */}
      {/* <div className="circular-text">
        {"FOODBNB * FOODBNB * FOODBNB * FOODBNB * "
          .split("")
          .map((char, index) => (
            <span
              key={index}
              className="circular-char"
              style={{
                transform: `rotate(${index * (360 / 40)}deg) translateY(-77px)` // Fixed: semicolon and translateY
              }}
            >
              {char}
            </span>
          ))}
      </div> */}


    {/* Video Background */}
    <video autoPlay loop muted className="hero-video">
      <source src={intro} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Gradient overlay for readability */}
    <div className="hero-overlay"></div>

    <div className="hero-content">
      <div className="hero-text-container">
        <h1 className="hero-title main-title">FoodBNB</h1>

        <div className="hero-subtitle-text">
          Taste the <span className=" hero-subtitle-highlight  ">comfort</span> of Home
          
        </div>
      </div>

      <div className="hero-buttons">
        <div className="hero-buttons-inner">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-app-link"
          >
            <img src={play_store} alt="Google Play" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-app-link"
          >
            <img src={app_store} alt="App Store" />
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-text">
          Scroll down
          <ChevronDown className="hero-scroll-icon" size={20} />
        </div>
      </div>
    </div>
  </div>
);

export default Header;
