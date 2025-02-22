import React from "react";
import { coffeeTable } from "../../assets/export";

const SessionBooking=()=>{
    return   <section className="bg-[#14133B] py-8">
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-2">
      {/* Image on the left side */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 ">
        <img
          src={coffeeTable}
          alt="Coffee discussion"
          className="w-full h-auto rounded-full"
        />
      </div>

      {/* Content on the right side */}
      <div className="w-full lg:w-1/2 text-center lg:text-center">
        {/* Bouncing Heading */}
        <h1 className="text-7xl  mb-4 animate-bounce-slow text-[#FFFFFF] italic font-medium z-0">
          Have a project?
        </h1>

        {/* Subheading */}
        <p className="text-2xl text-[#5458D8] mb-6">
          Let's connect over a cup of coffee.
        </p>

        {/* Book Session Button */}
        <a
          href="https://calendly.com/trendsupmedia/strategy_session" target="_blank"
          className="inline-block bg-blue-500 text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-blue-600 transition-transform transform hover:scale-105"
        >
          Book a Session
        </a>
      </div>
    </div>
  </section>
}

export default SessionBooking;