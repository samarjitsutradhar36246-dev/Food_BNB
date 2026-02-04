import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Linkedin,
  Instagram,
  Youtube,
  Facebook,
  ChevronDown,
} from "lucide-react";
import app_store from "../../assets/app.avif";
import play_store from "../../assets/play.avif";

function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const privacyDropdownRef = useRef(null);
  const termsDropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        privacyDropdownRef.current &&
        !privacyDropdownRef.current.contains(event.target)
      ) {
        setIsPrivacyOpen(false);
      }
      if (
        termsDropdownRef.current &&
        !termsDropdownRef.current.contains(event.target)
      ) {
        setIsTermsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <footer className="bg-[#111827] border-t border-[#e8e8e8] pt-15 pb-12.5 font-sans text-left relative bottom-0 w-full m-0 box-border select-none">
      <div className="max-w-300 mx-auto px-0 lg:px-7.5">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,0.5fr))] gap-x-2.5 gap-y-px justify-items-start mb-6.25 max-md:grid-cols-[repeat(auto-fit,minmax(120px,1fr))] max-md:gap-y-3 max-[480px]:grid-cols-1 max-[900px]:*:flex-[1_1_100%] max-[900px]:*:text-center">
          {/* Brand Section */}
          <div className="flex-[1_1_200px] min-w-45 flex flex-col items-start">
            <div>
              <h1 className="text-[28px] font-bold text-[#ef4f5f] mt-1.25 mb-0 font-['Geom',sans-serif] max-md:text-2xl max-[480px]:text-[22px] max-[600px]:text-2xl">
                FoodBNB
              </h1>
              <p className="text-xl font-normal text-white m-0 leading-[1.3] font-['Geom',sans-serif] max-md:text-lg max-[480px]:text-base">
                Made with ❤️
              </p>
            </div>
          </div>

          {/* For Delivery Partners Section */}
          <div className="flex-[1_1_200px] min-w-45 flex flex-col items-start ">
            <h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-[1px] font-['Geom',sans-serif] max-[600px]:text-[17px]">
              For Our Partners
            </h3>
            <div className="flex flex-col gap-1.25 items-start font-['Geom',sans-serif]">
              <Link
                to="/partners"
                className="text-sm text-white no-underline transition-colors duration-200 hover:text-[#ef4f5f] select-none pointer-events-auto max-[600px]:text-sm">
                Partners
              </Link>
              <a
                href="#"
                className="text-sm text-white no-underline transition-colors duration-200 hover:text-[#ef4f5f] select-none pointer-events-auto max-[600px]:text-sm">
                Apps For You
              </a>
            </div>
          </div>

          {/* Learn More Section */}
          <div className="flex-[1_1_200px] min-w-[180px] flex flex-col items-start">
            <h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-[1px] font-['Geom',sans-serif] max-[600px]:text-[17px]">
              Learn More
            </h3>
            <div className="flex flex-col gap-[5px] items-start font-['Geom',sans-serif] relative">
              {/* Privacy with Dropdown */}
              <div className="relative w-full" ref={privacyDropdownRef}>
                <span
                  onClick={() => setIsPrivacyOpen(!isPrivacyOpen)}
                  className="flex items-center gap-1 text-sm text-white no-underline transition-colors duration-200 hover:text-[#ef4f5f] select-none pointer-events-auto max-[600px]:text-sm bg-transparent border-none cursor-pointer p-0">
                  Privacy
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isPrivacyOpen ? "rotate-180" : ""}`}
                  />
                </span>

                {/* Privacy Dropdown Menu */}
                {isPrivacyOpen && (
                  <div className="mt-2 bg-[#1f2937] rounded-md shadow-lg py-2 min-w-[160px] mb-2">
                    <Link
                      to="/privacy-policy"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-white no-underline transition-colors duration-200 hover:bg-[#ef4f5f] hover:text-white"
                      onClick={() => setIsPrivacyOpen(false)}>
                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      Mom's Kitchen
                    </Link>
                    <a
                      href="#"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-white no-underline transition-colors duration-200 hover:bg-[#ef4f5f] hover:text-white"
                      onClick={() => setIsPrivacyOpen(false)}>
                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      FoodBNB
                    </a>
                  </div>
                )}
              </div>

              <Link
                to="/security"
                className="text-sm text-white no-underline transition-colors duration-200 hover:text-[#ef4f5f] select-none pointer-events-auto max-[600px]:text-sm">
                Security
              </Link>

              {/* Terms & Conditions with Dropdown */}
              <div className="relative w-full" ref={termsDropdownRef}>
                <span
                  onClick={() => setIsTermsOpen(!isTermsOpen)}
                  className="flex items-center gap-1 text-sm text-white no-underline transition-colors duration-200 hover:text-[#ef4f5f] select-none pointer-events-auto max-[600px]:text-sm bg-transparent border-none cursor-pointer p-0">
                  Terms & Conditions
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isTermsOpen ? "rotate-180" : ""}`}
                  />
                </span>

                {/* Terms & Conditions Dropdown Menu */}
                {isTermsOpen && (
                  <div className="mt-2 bg-[#1f2937] rounded-md shadow-lg py-2 min-w-[160px] mb-2">
                    <Link
                      to="/terms-conditions"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-white no-underline transition-colors duration-200 hover:bg-[#ef4f5f] hover:text-white"
                      onClick={() => setIsTermsOpen(false)}>
                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      Mom's Kitchen
                    </Link>
                    <a
                      href="#"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-white no-underline transition-colors duration-200 hover:bg-[#ef4f5f] hover:text-white"
                      onClick={() => setIsTermsOpen(false)}>
                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      FoodBNB
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Help & Support Section */}
          <div className="flex-[1_1_200px] min-w-[180px] flex flex-col items-start">
            <h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-[1px] font-['Geom',sans-serif] max-[600px]:text-[17px]">
              Help & Support
            </h3>
            <div className="flex flex-col gap-[5px] items-start font-['Geom',sans-serif]">
              <Link
                to="/report-fraud"
                className="text-sm text-white no-underline transition-colors duration-200 hover:text-[#ef4f5f] select-none pointer-events-auto max-[600px]:text-sm">
                Report a Fraud
              </Link>
              <Link
                to="/blog"
                className="text-sm text-white no-underline transition-colors duration-200 hover:text-[#ef4f5f] select-none pointer-events-auto max-[600px]:text-sm">
                Blog
              </Link>
              <Link
                to="/partners"
                className="text-sm text-white no-underline transition-colors duration-200 hover:text-[#ef4f5f] select-none pointer-events-auto max-[600px]:text-sm">
                Partners
              </Link>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="flex-[1_1_200px] min-w-[180px] flex flex-col items-center">
            <h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-[1px] font-['Geom',sans-serif] max-[600px]:text-[17px]">
              Social Links
            </h3>
            <div className="flex gap-2 justify-center max-[900px]:flex-wrap">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-[#1c1c1c] flex items-center justify-center text-white transition-all duration-300 hover:bg-[#ef4f5f] hover:-translate-y-0.5 hover:text-white hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#1c1c1c] flex items-center justify-center text-white transition-all duration-300 hover:bg-[#ef4f5f] hover:-translate-y-0.5 hover:text-white hover:scale-110">
                <Instagram size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-[#1c1c1c] flex items-center justify-center text-white transition-all duration-300 hover:bg-[#ef4f5f] hover:-translate-y-0.5 hover:text-white hover:scale-110">
                <Youtube size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#1c1c1c] flex items-center justify-center text-white transition-all duration-300 hover:bg-[#ef4f5f] hover:-translate-y-0.5 hover:text-white hover:scale-110">
                <Facebook size={20} />
              </a>
            </div>

            {/* App Badges */}
            <div className="flex flex-wrap justify-center gap-[10px] mt-[15px] max-[900px]:flex-wrap">
              <a href="">
                <img
                  src={play_store}
                  alt="Google Play"
                  className="h-10 my-[5px] mx-1 rounded-[5px] shadow-[0_2px_6px_rgba(0,0,0,0.2)] transition-transform duration-200 hover:scale-105 max-w-[115px] max-[1100px]:max-w-[100px] max-[900px]:max-w-[90px] max-[600px]:max-w-[80px]"
                />
              </a>
              <a href="">
                <img
                  src={app_store}
                  alt="App Store"
                  className="h-10 my-[5px] mx-1 rounded-[5px] shadow-[0_2px_6px_rgba(0,0,0,0.2)] transition-transform duration-200 hover:scale-105 max-w-[115px] max-[1100px]:max-w-[100px] max-[900px]:max-w-[90px] max-[600px]:max-w-[80px]"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-[15px] text-center">
          <p className="text-xs text-white m-0 mx-auto max-w-[900px] leading-[1.6] font-['Geom',sans-serif] break-words max-[480px]:text-[10px] max-[480px]:max-w-[280px] max-[480px]:px-[10px]">
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
