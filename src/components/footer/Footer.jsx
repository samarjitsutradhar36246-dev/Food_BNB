import React from "react";
import { Linkedin, Instagram, Youtube, Facebook } from "lucide-react";
import app_store from "../../assets/app.avif";
import play_store from "../../assets/play.avif";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="footer-brand">
              <h1 className="footer-logo">FoodBNB</h1>
              <p className="footer-tagline">Made with ❤️</p>
            </div>
          </div>

          {/* For Delivery Partners Section */}
          <div className="footer-section">
            <h3 className="footer-heading">For Delivery Partners</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">
                Partner With Us
              </a>
              <a href="#" className="footer-link">
                Apps For You
              </a>
            </div>
          </div>

          {/* Learn More Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Learn More</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">
                Privacy
              </a>
              <a href="#" className="footer-link">
                Security
              </a>
              <a href="#" className="footer-link">
                Terms of Service
              </a>
            </div>
          </div>

          {/* Help & Support Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Help & Support</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">
                Report a Fraud
              </a>
              <a href="#" className="footer-link">
                Blog
              </a>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Social Links</h3>
            <div className="footer-social">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="footer-social-link"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="footer-social-link"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="footer-social-link"
              >
                <Youtube size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="footer-social-link"
              >
                <Facebook size={20} />
              </a>
            </div>

            {/* App Badges */}
            <div className="footer-app-badge-container">
              <a href="">
                <img
                  src={play_store}
                  alt="Google Play"
                  className="footer-app-badge"
                />
              </a>
              <a href="">
                <img
                  src={app_store}
                  alt="App Store"
                  className="footer-app-badge"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners. 2025-2026 © FoodBNB™ Ltd.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;