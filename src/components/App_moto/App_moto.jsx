import React from "react";
import { Heart, Truck, Smile, Menu, IndianRupeeIcon } from "lucide-react";

const App_moto = () => {
  return (
    <section className="bg-[#F9FAFB] text-center py-20 font-sans select-none">
      <div className="w-full mx-auto px-4 lg:px-8 xl:px-16 2xl:px-24">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <span className="text-2xl text-[#ff4c24] font-semibold font-['Geom',sans-serif]">
            THE FOODBNB PROMISE
          </span>
          <h2 className="text-4xl mb-6 font-bold font-['Geom',sans-serif] mt-4">
            More than just a Dabba Service.
          </h2>
          <p className="text-[#717171] text-lg leading-relaxed font-['Geom',sans-serif]">
            We bridge the gap between craving home food and actually getting it.
            Whether you are a student, a bachelor, or a busy family—we bring the
            warmth of a mother's kitchen right to your doorstep.
          </p>
        </div>

        {/* Feature Grid - Full width spread */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-12 md:gap-8 lg:gap-6 xl:gap-8 2xl:gap-10 items-start">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-xl flex justify-center items-center shadow-[0_4px_12px_rgba(0,0,0,0.05)] cursor-pointer transition-all duration-300 hover:shadow-[0_6px_16px_rgba(203,85,85,0.1)] hover:-translate-y-0.5 hover:text-[#ff4c24]">
              <Heart size={32} />
            </div>
            <h4 className="text-xl font-bold font-['Geom',sans-serif]">
              100% Guilt-Free
            </h4>
            <p className="text-[15px] text-[#717171] leading-relaxed font-['Geom',sans-serif]">
              No floating oil. No baking soda. Just fresh ingredients cooked in
              small batches by real families.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-xl flex justify-center items-center shadow-[0_4px_12px_rgba(0,0,0,0.05)] cursor-pointer transition-all duration-300 hover:shadow-[0_6px_16px_rgba(203,85,85,0.1)] hover:-translate-y-0.5 hover:text-[#ff4c24]">
              <Truck size={32} />
            </div>
            <h4 className="text-xl font-bold font-['Geom',sans-serif]">
              Reliable Live Delivery
            </h4>
            <p className="text-[15px] text-[#717171] leading-relaxed font-['Geom',sans-serif]">
              Live tracking ensures your food is picked up hot and reaches you
              before it gets cold.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-xl flex justify-center items-center shadow-[0_4px_12px_rgba(0,0,0,0.05)] cursor-pointer transition-all duration-300 hover:shadow-[0_6px_16px_rgba(203,85,85,0.1)] hover:-translate-y-0.5 hover:text-[#ff4c24]">
              <Smile size={32} />
            </div>
            <h4 className="text-xl font-bold font-['Geom',sans-serif]">
              Empowering Homemakers
            </h4>
            <p className="text-[15px] text-[#717171] leading-relaxed font-['Geom',sans-serif]">
              Every meal supports a housewife or stay-at-home mom in becoming
              financially independent.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-xl flex justify-center items-center shadow-[0_4px_12px_rgba(0,0,0,0.05)] cursor-pointer transition-all duration-300 hover:shadow-[0_6px_16px_rgba(203,85,85,0.1)] hover:-translate-y-0.5 hover:text-[#ff4c24]">
              <Menu size={32} />
            </div>
            <h4 className="text-xl font-bold font-['Geom',sans-serif]">
              No "Mess" Fatigue
            </h4>
            <p className="text-[15px] text-[#717171] leading-relaxed font-['Geom',sans-serif]">
              Switch your subscription to a different home chef instantly
              without penalties.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-xl flex justify-center items-center shadow-[0_4px_12px_rgba(0,0,0,0.05)] cursor-pointer transition-all duration-300 hover:shadow-[0_6px_16px_rgba(203,85,85,0.1)] hover:-translate-y-0.5 hover:text-[#ff4c24]">
              <IndianRupeeIcon size={32} />
            </div>
            <h4 className="text-xl font-bold font-['Geom',sans-serif]">
              Pocket Friendly
            </h4>
            <p className="text-[15px] text-[#717171] leading-relaxed font-['Geom',sans-serif]">
              Meals at low prices—cheaper than restaurants because we skip
              commercial overheads.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App_moto;
