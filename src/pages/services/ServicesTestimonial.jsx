import React, { useState, useEffect, useRef } from "react";
import ClientReview from "./ClientReview";
import { rating } from "../../assets/export";

const ServicesTestimonial = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef(null);

  // Use IntersectionObserver to detect when the section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Disconnect after triggering the animation
        }
      },
      { threshold: 0.5 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white">
      <div className="px-4 sm:px-8 md:px-[70px] bg-white flex flex-col md:flex-row justify-between items-center overflow-hidden py-12 md:py-16">
        {/* Left Section */}
        <div ref={headingRef} className="flex flex-col gap-4 sm:gap-[10px] relative w-full md:w-1/2">
          {/* Background "Reviews" Text */}
          <h1 className="absolute left-[-5px] sm:left-[50px] md:left-[0px] top-[-50px] sm:top-[-70px] md:top-[-130px] text-[60px] sm:text-[120px] md:text-[180px] text-blue-400 opacity-30 font-semibold uppercase z-0">
            Reviews
          </h1>

          {/* Heading with Animation */}
          <h2
            className={`max-w-full sm:max-w-[400px] md:max-w-[550px] text-[28px] sm:text-[40px] md:text-[40px] text-blue-600 font-semibold tracking-wide leading-snug uppercase z-10 transition-transform duration-1000 ease-out ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
          >
            Hear from our worldwide clients
          </h2>

          <ClientReview />
        </div>

        {/* Right Section with Image */}
        <div className="relative w-full md:w-96 flex justify-center mt-8 md:mt-0 md:right-[0px]">
          <img
            src={rating}
            className="w-[300px] sm:w-[300px] md:w-[500px]"
            alt="Client Ratings"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesTestimonial;
