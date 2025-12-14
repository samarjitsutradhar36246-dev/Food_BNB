import React from "react";
import { Star, Calendar, User } from "lucide-react";
import "./Top_Dishes.css";

const Top_Dishes = () => {
  const dishes = [
    {
      id: 1,
      title: "Priya's North Indian Thali",
      type: "Pure Veg • 5 Items",
      chef: "Priya S.",
      rating: 4.9,
      distance: "2.5 km away",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
      dabba: true,
    },
    {
      id: 2,
      title: "Grandma's Chicken Curry",
      type: "Assamese Style • Spicy",
      chef: "Mrs. Das",
      rating: 4.8,
      distance: "1.2 km away",
      image:
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
      dabba: false,
    },
    {
      id: 3,
      title: "Keto Fitness Bowl",
      type: "Low Carb • Healthy",
      chef: "HOB",
      rating: 4.7,
      distance: "3.0 km away",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
      dabba: true,
    },
    {
      id: 4,
      title: "Bengali Fish Curry",
      type: "Non-Veg • Authentic",
      chef: "Bappi Roy",
      rating: 4.9,
      distance: "1.8 km away",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
      dabba: true,
    },
    {
      id: 5,
      title: "Homemade Biryani",
      type: "Rice • Special",
      chef: "Amina Khan",
      rating: 4.8,
      distance: "2.1 km away",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
      dabba: true,
    },
    {
      id: 6,
      title: "Organic Salad Bowl",
      type: "Fresh • Healthy",
      chef: "Green Kitchen",
      rating: 4.7,
      distance: "0.9 km away",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
      dabba: false,
    },
    {
      id: 7,
      title: "Spicy Butter Chicken",
      type: "Non-Veg • Creamy",
      chef: "Rajesh Kumar",
      rating: 4.9,
      distance: "1.5 km away",
      image:
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
      dabba: true,
    },
    {
      id: 8,
      title: "Vegan Pasta Delight",
      type: "Veg • Italian",
      chef: "Marco's Kitchen",
      rating: 4.6,
      distance: "2.3 km away",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
      dabba: false,
    },
    {
      id: 9,
      title: "Vegan Pasta Delight",
      type: "Veg • Italian",
      chef: "Marco's Kitchen",
      rating: 4.6,
      distance: "2.3 km away",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
      dabba: false,
    },
    {
      id: 10,
      title: "Vegan Pasta Delight",
      type: "Veg • Italian",
      chef: "Marco's Kitchen",
      rating: 4.6,
      distance: "2.3 km away",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
      dabba: false,
    },
  ];
  return (
    <div>
      <section className="section container">
        <span className="section-subtitle">Fresh from the Neighborhood</span>
        <h2 className="section-title">Top 10 Mom's Kitchens</h2>

        <div className="scroll-container">
          {dishes.map((dish) => (
            <div key={dish.id} className="food-card">
              <div className="card-image">
                <img src={dish.image} alt={dish.title} />
                <span className="badge">{dish.distance}</span>

                <button className="heart-btn">
                  {/* Heart Icon goes here */}
                </button>
              </div>

              <div className="card-content">
                <div className="card-header">
                  <div>
                    <h3 className="dish-title">{dish.title}</h3>
                    <p className="dish-type">{dish.type}</p>
                  </div>

                  <div className="rating">
                    <Star size={14} fill="#FF385C" color="#FF385C" />
                    {dish.rating}
                  </div>
                </div>

                {dish.dabba && (
                  <div className="dabba-tag">
                    <Calendar size={12} /> Monthly Dabba Available
                  </div>
                )}

                <div className="card-footer">
                  <div className="chef-info">
                    <User size={16} /> {dish.chef}
                  </div>
                  <span className="dish-price">{dish.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Top_Dishes;
