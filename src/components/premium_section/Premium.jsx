// Premium.jsx
import React from "react";
import "./Premium.css";
import logo from "../../assets/foodbnb1.svg";

const Premium = () => (
  <div className="gold-container">

    {/* doted background texture */}
      <div className="ctaX-dotted-bg">
        <div className="ctaX-dotted-grid"></div>
      </div>

    {/* Curved Header SVG */}
    <div className="s-page">
      <svg
        className="s-curve"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <path
          d="
            M0,200
            C360,50  720,350  1080,200
            C1260,150 1380,180 1440,200
            L1440,800
            L0,800
            Z
          "
          fill="black"
        />
      </svg>
    </div>

    {/* Coins */}
    <img src="/Coins_4.png" className="coin-top-left" alt="coin" />
    <img src="/Coins_2.png" className="coin-top-right" alt="coin" />
    <img src="/Coins_2.png" className="coin-bottom-left" alt="coin" />
    <img src="/Coins_1.png" className="coin-bottom-right" alt="coin" />

    <div className="gold-content">
      {/* Logo with rotating circular text */}
      <div className="logo-wrapper">
        <svg className="circular-text" viewBox="0 0 220 220">
          <defs>
            <path
              id="circlePath"
              d="M110,110 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
            />
          </defs>
          <text>
            <textPath href="#circlePath" startOffset="0%">
              FoodBNB * FoodBNB * FoodBNB * FoodBNB * FoodBNB * FoodBNB * FoodBNB * FoodBNB *
            </textPath>
          </text>
        </svg>

        {/* Centered Logo */}
        <div className="gold-logo">
          <img
            src={logo}
            alt="FoodBNB Logo"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      <div className="gold-premium-text">PREMIUM</div>

      <div className="gold-tagline">
        AUTHENTIC HOME-COOKED MEALS. IDEAL FOR STUDENTS AND PROFESSIONALS
      </div>

      <div className="gold-benefits-label">GOLD BENEFITS</div>

      <div className="gold-benefits-container">
        <div className="gold-benefit-card">
          <img
            src="https://b.zmtcdn.com/data/o2_assets/bc9d2a579285cbdaa101b8fe2ba68f601741779645.png"
            className="gold-benefit-icon"
            alt="Free Delivery"
          />
          <div>
            <div className="gold-benefit-title">Free Delivery</div>
          </div>
        </div>

        <div className="gold-benefit-card">
          <img
            src="https://b.zmtcdn.com/data/o2_assets/d668ed26c7d4771318d0aa03b3f905e71741779899.png"
            className="gold-benefit-icon"
            alt="Extra Off"
          />
          <div>
            <div className="gold-benefit-title">
              Daily Dabba Services
              <br />
              From Verified Households
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Premium;
