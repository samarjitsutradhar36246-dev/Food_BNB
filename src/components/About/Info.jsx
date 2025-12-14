import React from "react";
import { MapPin, ArrowRight, ChefHat, Heart, Users, Wallet } from "lucide-react";
import "./Info.css";

const Info = () => {
  return (
  <div>

    {/* info part */}
    <div className="heroX-wrapper">

      {/* doted background texture */}
      <div className="heroX-dotted-bg">
        <div className="dotted-grid"></div>
      </div>

      
      {/* Dynamic Background */}
      <div className="heroX-gradient-bg"></div>

      {/* Abstract Shapes */}
      <div className="heroX-shape heroX-shape-1"></div>
      <div className="heroX-shape heroX-shape-2"></div>

      <div className="heroX-container">
        
        {/* Badge */}
        <div className="heroX-badge">
          <span className="heroX-badge-text">
            <MapPin size={14} /> Coming Soon to Agartala, Tripura
          </span>
        </div>

        {/* Title */}
        <h1 className="heroX-title">
          Not a Restaurant. <br />
          <span className="heroX-title-gradient">
            It's Your Neighbor's Kitchen.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="heroX-description">
          FoodBNB integrates the comfort of home with the speed of delivery.
          Healthy, homemade meals for everyone .
        </p>

        {/* Buttons */}
        {/* <div className="heroX-buttons">
          <button className="heroX-btn-primary">
            Join the Waitlist <ArrowRight size={20} />
          </button>

          <button className="heroX-btn-secondary">
            Become a Chef <ChefHat size={20} />
          </button>
        </div> */}

      </div>

      {/* Curved Bottom Divider */}
      <div className="heroX-bottom-divider">
        <svg
          className="heroX-bottom-svg"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39
            -57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8
            C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="heroX-wave-fill"
          ></path>
        </svg>
      </div>

    </div>



    {/* **************************************************************************** */}
    {/* About part */}
    <section className="storyX-section">
      <div className="storyX-container">
        <div className="storyX-flex">

          {/* Left Image Area */}
          <div className="storyX-left">
            <div className="storyX-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070&auto=format&fit=crop"
                alt="Mother cooking"
                className="storyX-image"
              />

              <div className="storyX-image-gradient">
                <p className="storyX-quote">"Ghar ka khana, ghar se dur."</p>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="storyX-badge">
              <div className="storyX-badge-inner">
                <div className="storyX-badge-icon">
                  <Heart className="storyX-heart-icon" fill="currentColor" />
                </div>
                <div>
                  <p className="storyX-badge-subtext">Hygiene Rating</p>
                  <p className="storyX-badge-title">100% Homemade</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="storyX-right">
            <h4 className="storyX-subtitle">Our Story</h4>

            <h2 className="storyX-heading">
              Bridging the Gap Between <br />
              <span className="storyX-highlight">Hunger & Health.</span>
            </h2>

            <p className="storyX-text">
              Agartala is evolving. With students pouring in and professionals
              working longer hours, the question is always:{" "}
              <strong>"Whats for Breakfast, lunch and Dinner?"</strong>
            </p>

            <p className="storyX-text">
              Restaurant food is tasty but unhealthy for daily consumption.
              Keeping a maid isn't always feasible.{" "}
              <span className="storyX-bold">FoodBNB</span> was born to solve
              this. We connect you with local homemakers who cook extra portions
              of their daily healthy meals just for you.
            </p>

            <div className="storyX-features">
              <div className="storyX-feature-item">
                <div className="storyX-feature-icon storyX-feature-red">
                  <Users size={20} />
                </div>
                <div>
                  <h5 className="storyX-feature-title">Local for Locals</h5>
                  <p className="storyX-feature-desc">
                    Empowering Tripura's Locals.
                  </p>
                </div>
              </div>

              <div className="storyX-feature-item">
                <div className="storyX-feature-icon storyX-feature-orange">
                  <Wallet size={20} />
                </div>
                <div>
                  <h5 className="storyX-feature-title">Pocket Friendly</h5>
                  <p className="storyX-feature-desc">
                    Prices that also fit a student budget.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
  );
};

export default Info;
