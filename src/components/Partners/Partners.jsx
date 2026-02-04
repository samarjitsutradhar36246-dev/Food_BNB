import React from "react";
import "./Partner.css";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Home, Users, ShieldCheck } from "lucide-react";

const MomsKitchenInfo = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Partners</h1>
          <p className="text-xl md:text-2xl text-red-50 leading-relaxed">
            FoodBnB works with trusted home kitchens to bring you fresh,
            homemade food.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-16">
        {/* Mom's Kitchen Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <Heart className="w-10 h-10 text-red-600" fill="#dc2626" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Mom's Kitchen
              </h2>
            </div>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Mom's Kitchen is a FoodBnB partner initiative that connects
              home-based moms and home cooks with customers who love authentic,
              homemade food.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mt-4">
              Every dish comes from a real home kitchen, prepared with care,
              tradition, and love—just like food made for family.
            </p>
          </div>
        </section>

        {/* Why Mom's Kitchen Exists */}
        <section className="mb-20 bg-red-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Mom's Kitchen Exists
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-800 text-lg">
                  To support home cooks and moms
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-800 text-lg">
                  To bring real homemade food to customers
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-800 text-lg">
                  To preserve traditional recipes
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-800 text-lg">
                  To create earning opportunities from home kitchens
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Mom's Kitchen Special */}
        <section className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            What Makes Mom's Kitchen Special
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Home-Cooked Meals
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Authentic dishes prepared in real home kitchens
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Freshly Prepared
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Made to order with fresh ingredients and love
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Limited Daily Quantities
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Small batches ensure quality and freshness
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Traditional & Regional Dishes
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Recipes passed down through generations
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" fill="white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Verified Home Kitchens
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Cooked by trusted, verified partners
              </p>
            </div>
          </div>
        </section>

        {/* How Mom's Kitchen Works With FoodBnB */}
        <section className="mb-20 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            How Mom's Kitchen Works With FoodBnB
          </h3>
          <p className="text-lg md:text-xl text-red-50 leading-relaxed text-center max-w-3xl mx-auto">
            FoodBnB acts as the platform that helps Mom's Kitchen partners reach
            customers, manage orders, and ensure a smooth experience—while the
            cooking stays personal and homemade.
          </p>
        </section>

        {/* Trust & Quality Note */}
        <section className="mb-16">
          <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-red-600" />
              Trust & Quality
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              All Mom's Kitchen partners follow basic hygiene and quality
              standards to ensure every meal is safe, fresh, and satisfying.
            </p>
          </div>
        </section>

        {/* Back Navigation */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to FoodBnB
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 text-center mt-16">
        <p className="text-white text-l font-moon-dance tracking-wider">
          © 2026 FoodBnB. Supporting home kitchens with love.
        </p>
      </footer>
    </div>
  );
};

export default MomsKitchenInfo;
