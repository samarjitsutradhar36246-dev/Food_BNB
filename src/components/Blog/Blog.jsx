import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import food1 from "../../assets/Image/food 1.jpg";
import food2 from "../../assets/Image/food 2.jpg";
import food3 from "../../assets/Image/food 3.jpg";
import food4 from "../../assets/Image/food 4.jpg";
import food5 from "../../assets/Image/food 5.jpg";
import food6 from "../../assets/Image/food 6.jpg";
import food7 from "../../assets/Image/food 7.jpg";
import food8 from "../../assets/Image/food 8.jpg";

const blogPosts = [
  {
    id: 1,
    image: food1,
    category: "Recipes",
    title: "5 Quick Breakfasts for Busy Mornings",
    excerpt:
      "Start your day right with these delicious and easy-to-make breakfast recipes that take less than 15 minutes.",
    featured: true,
  },
  {
    id: 2,
    image: food2,
    category: "Hosting Tips",
    title: "Creating the Perfect Dinner Party Atmosphere",
    excerpt:
      "Learn how to set the mood, plan your menu, and make your guests feel welcome with our expert hosting tips.",
    featured: true,
  },
  {
    id: 3,
    image: food3,
    category: "Stories",
    title: "A Culinary Journey Through Kitchen",
    excerpt:
      "Join us as we explore traditional Indian recipes and the stories behind them from our FoodBnB hosts.",
    featured: true,
  },
  {
    id: 4,
    image: food4,
    category: "Recipes",
    title: "Weekend Brunch Ideas That Impress",
    excerpt:
      "Elevate your weekend brunch game with these crowd-pleasing recipes that look as good as they taste.",
    featured: true,
  },
  {
    id: 5,
    image: food5,
    category: "Tips",
    title: "Kitchen Organization Hacks for Home Cooks",
    excerpt:
      "Transform your cooking space with these simple yet effective organization tips from professional chefs.",
    featured: true,
  },
  {
    id: 6,
    image: food6,
    category: "Recipes",
    title: "Comfort Food Classics Reimagined",
    excerpt:
      "Discover modern twists on your favorite comfort foods that maintain all the warmth and nostalgia.",
    featured: false,
  },
  {
    id: 7,
    image: food7,
    category: "Hosting Tips",
    title: "Setting a Beautiful Table on Any Budget",
    excerpt:
      "Create an Instagram-worthy tablescape without breaking the bank with these creative ideas.",
    featured: false,
  },
  {
    id: 8,
    image: food8,
    category: "Stories",
    title: "From Farm to Table: A Host's Story",
    excerpt:
      "Meet Maria, a FoodBnB host who grows her own ingredients and shares her passion for sustainable cooking.",
    featured: false,
  },
  {
    id: 9,
    image: food1,
    category: "Recipes",
    title: "One-Pot Wonders for Easy Cleanup",
    excerpt:
      "Delicious meals that require minimal cleanup - perfect for weeknight dinners or lazy Sundays.",
    featured: false,
  },
];

const FeaturedCarousel = ({ posts }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredPosts = posts.filter((post) => post.featured);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev < featuredPosts.length - 1 ? prev + 1 : prev,
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Stories</h2>

      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {featuredPosts.map((post) => (
            <div key={post.id} className="min-w-full px-4">
              <div className="bg-white rounded-xl overflow-hidden shadow-xl">
                <div className="grid md:grid-cols-2 gap-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-80 md:h-96 object-cover"
                  />
                  <div className="p-8 flex flex-col justify-center">
                    <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
                      {post.category}
                    </span>
                    <h3 className="text-3xl font-bold mt-3 mb-4 text-slate-800">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    {/* <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition w-fit">
                      Read Full Story →
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
          aria-label="Previous slide">
          <ChevronLeft className="w-6 h-6 text-slate-800" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
          aria-label="Next slide">
          <ChevronRight className="w-6 h-6 text-slate-800" />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {featuredPosts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition ${
                currentSlide === index ? "bg-red-600 w-8" : "bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogCard = ({ post }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
      />
      <div className="p-6">
        <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
          {post.category}
        </span>
        <h3 className="text-xl font-semibold mt-2 mb-2 text-slate-800">
          {post.title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
        <button className="text-red-600 font-semibold hover:text-red-700 transition flex items-center gap-1">
          Read More →
        </button>
      </div>
    </div>
  );
};

const FoodBnBBlog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visiblePosts, setVisiblePosts] = useState(9);

  const categories = ["All", "Recipes", "Hosting Tips", "Stories", "Tips"];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleLoadMore = () => {
    setVisiblePosts((prev) => prev + 6);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <section className="bg-gradient-to-r from-red-50 to-orange-50 text-center py-20 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-slate-800">
          Food Stories & Recipes
        </h1>
        <hr className="w-168 mx-auto border-t-2 border-slate-800 rounded-full" />
        <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Discover delicious recipes, cooking tips, and hosting inspiration from
          our FoodBnB community.
        </p>
      </section>

      <FeaturedCarousel posts={blogPosts} />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>

          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  selectedCategory === category
                    ? "bg-red-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}>
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            All Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(0, visiblePosts).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {visiblePosts < filteredPosts.length && (
            <div className="text-center mt-12">
              <button
                onClick={handleLoadMore}
                className="bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition">
                Load More Articles
              </button>
            </div>
          )}

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No articles found matching your search.
              </p>
            </div>
          )}
        </div>
      </div>

      <section className="bg-gradient-to-r from-red-50 to-orange-50 py-16 px-4 text-center rounded-2xl max-w-6xl mx-auto my-16">
        <h2 className="text-4xl font-bold mb-4 text-slate-800">
          Never Miss a Recipe!
        </h2>
        <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Subscribe to our newsletter for weekly culinary inspiration, exclusive
          recipes, and hosting tips straight to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button className="w-full sm:w-auto bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition whitespace-nowrap">
            Subscribe Now
          </button>
        </div>
      </section>

      <footer className="bg-slate-800 text-white py-8 px-4 text-center mt-16">
        <p className="text-gray-300">© 2026 FoodBnB. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FoodBnBBlog;
