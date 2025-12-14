import React, { useEffect, useState } from "react";
import "./Hero_section.css";
import paymentImg from "../../assets/payment.jpg";
import cook from "../../assets/cooking.png";
import food1 from "../../assets/kfc.png";
import food2 from "../../assets/pasta.jpg";
import food3 from "../../assets/rice_bowl_new.png";
import food4 from "../../assets/naan.png";
import food5 from "../../assets/tomato.jpg";
import food6 from "../../assets/soup_veggies.jpg";
import food7 from "../../assets/ots.png";
import food8 from "../../assets/Onion_ring.jpg";
import food9 from "../../assets/momo.png";
import food10 from "../../assets/burger.png";
import food11 from "../../assets/chole.png";
import food12 from "../../assets/fish.png";

const LOGOS = [
  { name: "kfc", src: food1 },
  { name: "pasta", src: food2 },
  { name: "rice-bowl", src: food3 },
  { name: "naan", src: food4 },
  { name: "tomato", src: food5 },
  { name: "soup", src: food6 },
  { name: "ots", src: food7 },
  { name: "onion-ring", src: food8 },
  { name: "momo", src: food9 },
  { name: "burger", src: food10 },
  { name: "chole", src: food11 },
  { name: "fish", src: food12 },
];

export default function OrbitingSection() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const rotatingTexts = [
    "Meals that feel like a hug💝",
    "Flavours that remind you of home.",
    "Meals that make a new city feel familiar",
    "Eat just not to fill your stomach, but to celebrate heart!",
    "Made with Love",
    "Support a kitchen, nourish your soul",
    "Always Fresh, Always Delicious",
  ];

  useEffect(() => {
    const currentText = rotatingTexts[textIndex];
    const typingSpeed = isDeleting ? 30 : 50;
    const pauseTime = 2000;
    let timer;

    if (!isDeleting && displayedText === currentText) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && displayedText === "") {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
      }, 50);
    } else if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, textIndex]);

  const orbitingLogos = LOGOS.map((logo, index) => {
    const delay = -(60 / LOGOS.length) * index;
    return { ...logo, delay, key: logo.name + index };
  });

  return (
    <div className="orbit-wrapper">
      <section className="hero-section">
        <div className="orbit-container">
          <div
            className="guide-ring"
            style={{
              width: "var(--orbit-size)",
              height: "var(--orbit-size)",
            }}
          />

          {orbitingLogos.map((logo, index) => (
            <div
              key={logo.key}
              className="orbit-ring"
              style={{
                animation: `orbit-cw 60s linear infinite`,
                animationDelay: `${logo.delay}s`,
                "--angle": `${(index / LOGOS.length) * 360}deg`,
              }}
            >
              <div className="orbit-positioner">
                <div
                  className="logo-tile"
                  style={{
                    animation: `counter-orbit-cw 60s linear infinite`,
                    animationDelay: `${logo.delay}s`,
                  }}
                >
                  <img src={logo.src} alt={logo.name} className="logo-image" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center Content */}
        <div className="center-content">
          <h1 className="hero-title">
            "Better food for <br />
            <span className="highlight-text">more people"</span>
          </h1>

          <div className="stats-subtitle">
            <p className="rotating-text">
              {displayedText}
              <span className="cursor">|</span>
            </p>
          </div>
        </div>

        <div className="fade-gradient-top" />
        <div className="fade-gradient-bottom" />
      </section>

      <section
        className="section_container"
        style={{ paddingTop: "40px", paddingBottom: "80px" }}
      >
        <div className="top_text">
          <span className="section-subtitle">SIMPLE PROCESS</span>
          <h2 className="section-title">From Our Home to Yours</h2>
        </div>

        <div className="steps-container">
          <div className="steps-connector-line"></div>

          {/* Step 1 */}
          <div className="step-item">
            <div className="step-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=400&q=80"
                alt="Select Location"
                className="step-image"
              />
              <div className="step-badge badge-dark">1</div>
            </div>
            <h3 className="step-title">Select Location</h3>
            <p className="step-desc">
              Enter your pincode to find verified home kitchens in your
              neighborhood.
            </p>
          </div>

          {/* Step 2 */}
          <div className="step-item">
            <div className="step-image-wrapper">
              <img src={cook} alt="Choose Kitchen" className="step-image" />
              <div className="step-badge badge-dark">2</div>
            </div>
            <h3 className="step-title">Choose Kitchen</h3>
            <p className="step-desc">
              Browse menus, read chef profiles, and choose a One-time meal or
              Monthly Dabba.
            </p>
          </div>

          {/* Step 3 */}
          <div className="step-item">
            <div className="step-image-wrapper">
              <img src={paymentImg} alt="Payment" className="step-image" />
              <div className="step-badge badge-dark">3</div>
            </div>
            <h3 className="step-title">Secure Checkout</h3>
            <p className="step-desc">
              Pay securely online. Customize your delivery schedule for
              subscriptions.
            </p>
          </div>

          {/* Step 4 */}
          <div className="step-item">
            <div className="step-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&fit=crop&w=400&q=80"
                alt="Delivery"
                className="step-image"
              />
              <div className="step-badge badge-highlight">4</div>
            </div>
            <h3 className="step-title">Fast Delivery</h3>
            <p className="step-desc">
              Sit back! Hot, homemade food is delivered to your door via live
              tracking.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
