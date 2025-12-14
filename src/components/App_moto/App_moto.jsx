import React from "react";
import { Heart, Calendar, Truck, Smile, Menu, IndianRupeeIcon } from "lucide-react";
import "./App_moto.css";


const App_moto = () => {
  return (
    <section className="why-section">
      <div className="container">
        
        {/* Header */}
        <div className="why-header">
          <span className="section-subtitle">THE FOODBNB PROMISE</span>
          <h2 className="section-title">More than just a Dabba Service.</h2>
          <p className="why-description">
            We bridge the gap between craving home food and actually getting it.
            Whether you are a student, a bachelor, or a busy family—we bring the 
            warmth of a mother's kitchen right to your doorstep.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="why-grid">

          <div className="why-card">
            <div className="feature-icon"><Heart size={32} /></div>
            <h4 className="why-title">100% Guilt-Free</h4>
            <p className="why-text">
              No floating oil. No baking soda. Just fresh ingredients cooked in small batches by real families.
            </p>
          </div>

          {/* <div className="why-card">
            <div className="feature-icon"><Calendar size={32} /></div>
            <h4 className="why-title">Smart Subscription</h4>
            <p className="why-text">
              Going out of town? Pause your plan with one tap. Your money carries forward automatically.
            </p>
          </div> */}

          <div className="why-card">
            <div className="feature-icon"><Truck size={32} /></div>
            <h4 className="why-title">Reliable Live Delivery</h4>
            <p className="why-text">
              Live tracking ensures your food is picked up hot and reaches you before it gets cold.
            </p>
          </div>

          <div className="why-card">
            <div className="feature-icon"><Smile size={32} /></div>
            <h4 className="why-title">Empowering Homemakers</h4>
            <p className="why-text">
              Every meal supports a housewife or stay-at-home mom in becoming financially independent.
            </p>
          </div>

          <div className="why-card">
            <div className="feature-icon"><Menu size={32} /></div>
            <h4 className="why-title">No "Mess" Fatigue</h4>
            <p className="why-text">
              Switch your subscription to a different home chef instantly without penalties.
            </p>
          </div>

          <div className="why-card">
            <div className="feature-icon"><IndianRupeeIcon size={32} /></div>
            <h4 className="why-title">Pocket Friendly</h4>
            <p className="why-text">
              Meals at low prices—cheaper than restaurants because we skip commercial overheads.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default App_moto;
