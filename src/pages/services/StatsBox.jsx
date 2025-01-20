import React, { useEffect, useState } from 'react';

const StatsBox = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0, 0]);

  const targetValues = [10, 170, 3500, 80, 350]; // Target numbers for the counters

  // Observer to trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger only once
        }
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('counter-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Increment the numbers when section becomes visible
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCounters((prevCounters) =>
          prevCounters.map((counter, index) => {
            // Increase increment speed for "Projects Completed" counter only
            const increment = index === 2 ? 5 : 1; // Faster increment for "Projects Completed"
            return counter < targetValues[index] ? counter + increment : counter;
          })
        );
      }, 30); // Control the speed of counting for others

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section id="counter-section" className="bg-[#4CA4FF] mt-5 py-8 w-full max-w-screen-xl mx-auto rounded-lg">
      <div className="container mx-auto px-6 text-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Years of Experience Counter */}
          <div className="p-6">
            <h3 className="text-4xl lg:text-5xl font-bold text-[#FFFFFF]">{counters[0]}+</h3>
            <p className="mt-2 text-base lg:text-lg font-semibold text-[#FFFFFF] uppercase">Years of Experience</p>
          </div>

          {/* Brands Served Counter */}
          <div className="p-6">
            <h3 className="text-4xl lg:text-5xl font-bold text-[#FFFFFF]">{counters[1]}+</h3>
            <p className="mt-2 text-base lg:text-lg font-semibold text-[#FFFFFF] uppercase">Brands Served</p>
          </div>

          {/* Projects Completed Counter */}
          <div className="p-6">
            <h3 className="text-4xl lg:text-5xl font-bold text-[#FFFFFF]">{counters[2]}+</h3>
            <p className="mt-2 text-base lg:text-lg font-semibold text-[#FFFFFF] uppercase">Projects Completed</p>
          </div>

          {/* Languages Counter */}
          <div className="p-6">
            <h3 className="text-4xl lg:text-5xl font-bold text-[#FFFFFF]">{counters[3]}+</h3>
            <p className="mt-2 text-base lg:text-lg font-semibold text-[#FFFFFF] uppercase">Languages</p>
          </div>
           {/* Inhouse talents */}
           <div className="p-6">
            <h3 className="text-4xl lg:text-5xl font-bold text-[#FFFFFF]">{counters[4]}+</h3>
            <p className="mt-2 text-base lg:text-lg font-semibold text-[#FFFFFF] uppercase">Inhouse Talents</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBox;
