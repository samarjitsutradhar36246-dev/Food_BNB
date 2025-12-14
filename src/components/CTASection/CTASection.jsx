import React from "react";
import { ArrowRight, ChefHat, Utensils } from "lucide-react";
import "./CTASection.css";
import phone from "../../assets/phone_img.png";

const CTASection = () => {
  return (
    <div>
      <section className="ctaX-section">
        {/* doted background texture */}
        <div className="ctaX-dotted-bg">
          <div className="ctaX-dotted-grid"></div>
        </div>

        {/* Background gradient */}
        <div className="ctaX-bg-gradient" />

        {/* Decorative elements */}
        <div className="ctaX-decor-wrapper">
          <div className="ctaX-circle ctaX-circle-1" />
          <div className="ctaX-circle ctaX-circle-2" />
          <div className="ctaX-blur ctaX-blur-1" />
          <div className="ctaX-blur ctaX-blur-2" />

          {/* Floating icons */}
          <div className="ctaX-floating-icon ctaX-float-1">
            <ChefHat className="ctaX-icon" />
          </div>
          <div className="ctaX-floating-icon ctaX-float-2">
            <Utensils className="ctaX-icon" />
          </div>
        </div>

        <div className="ctaX-container">
          {/* Left content */}
          <div className="ctaX-content-box">
            <h2 className="ctaX-title">
              Be the first,
              <br /> taste the difference.
            </h2>

            <p className="ctaX-description">
              Join our waitlist to get early access when we launch. Whether you
              want home-cooked meals or want to become a cook — we'd love to
              have you!
            </p>

            <div className="ctaX-buttons">
              <button className="ctaX-btn-primary">
                Join the Waitlist <ArrowRight className="ctaX-btn-icon" />
              </button>

              <button className="ctaX-btn-secondary">
                Register as a Cook <ChefHat className="ctaX-btn-icon" />
              </button>
            </div>

            <div className="ctaX-launch-info">
              <div className="ctaX-info-card">
                <p className="ctaX-info-label">Launching in</p>
                <p className="ctaX-info-value">Tripura, India</p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="ctaX-phone-image-wrapper">
            <img src={phone} alt="Phone" className="ctaX-phone-img" />
          </div>
        </div>

        {/* Curved Bottom Divider */}
        <div className="ctaX-bottom-divider">
          <svg
            className="ctaX-bottom-svg"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39
            -57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8
            C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="ctaX-wave-fill"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default CTASection;