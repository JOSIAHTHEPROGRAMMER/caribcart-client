import React from "react";
import { toast } from "react-hot-toast";
import { dummyPlans } from "../assets/assets";
import { PricingTable } from "@clerk/clerk-react";

const Plans = () => {
    //const plans = dummyPlans;
  

    return (
        <div className="max-w-7xl min-h-screen mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* HEADER */}
            <h2 className="
  text-3xl md:text-4xl font-bold text-center mb-6
  text-transparent bg-clip-text
  bg-linear-to-r from-[#FF6B35] via-[#F7C948] to-[#00B4D8]
">
                Choose Your Plan
            </h2>

            <p className="
  max-w-[560px] mx-auto text-center
  text-gray-600 
  text-sm sm:text-base leading-relaxed
  mb-14 px-4
  before:block before:mx-auto before:mb-4
  before:h-1 before:w-12 before:rounded-full
  before:bg-linear-to-r before:from-[#06D6A0] before:to-[#00B4D8]
">
                Start free today and ride the wave as you grow your content, your way.
            </p>


            {/* PLANS */}
            <div>
                <PricingTable/>
            </div>
        </div>
    );
};

export default Plans;
