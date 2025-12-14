import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      img: "https://b.zmtcdn.com/data/o2_assets/82f145180cd6f920a8a8617dda366a0a1742455963.png",
      name: "Veg Mode",
    },
    {
      img: "https://b.zmtcdn.com/data/o2_assets/d0f1639403f80f8f2c19e0d538222e661742455804.png",
      name: "Healthy",
    },
    {
      img: "https://b.zmtcdn.com/data/o2_assets/5e973dd10c387878009c66d625ae541a1746550690.png",
      name: "Collections",
    },
    {
      img: "https://b.zmtcdn.com/data/o2_assets/cc1caf220c91be38dd94cce12b416fcd1746550226.png",
      name: "Schedule your order",
    },
    {
      img: "https://b.zmtcdn.com/data/o2_assets/5e7aab0f183b36fc12c29279f0cb55181742462245.png",
      name: "Plan a Party",
    },
    {
      img: "https://b.zmtcdn.com/data/o2_assets/813952c961fd13588cb71867d84ea7dc1742455815.png",
      name: "Offers",
    },
    {
      img: "https://b.zmtcdn.com/data/o2_assets/06d090307e02772693ac06123b53459b1742455939.png",
      name: "Food on Train",
    },
    {
      img: "https://b.zmtcdn.com/data/o2_assets/6e27c9acde6045c272a28e6eb275727e1742455789.png",
      name: "Gourmet",
    },
    {
      img: "https://b.zmtcdn.com/data/o2_assets/867f86a10503998e437963bb37c451591742455764.png",
      name: "Gift Cards",
    },
  ];

  return (
    <div className="features-container">
      <div className="features-header">
        <div className="features-title">
          What's waiting for you
          <br />
          on the app?
        </div>
        <div className="features-subtitle">
          Our app is packed with features that enable you to experience food
          delivery like never before
        </div>
      </div>

      <div className="features-grid">
        {features.map((feature, idx) => (
          <div key={idx} className="feature-card">
            <img
              src={feature.img}
              className="feature-image"
              alt={feature.name}
            />
            <div className="feature-name">{feature.name}</div>
          </div>
        ))}
      </div>

      <div className="features-footer">...and a lot more</div>
    </div>
  );
};

export default Features;