import React, { useEffect, useState } from 'react';

const MiddleBar = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounting(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(document.querySelector('.middle-bar'));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (startCounting) {
      let num1 = 0;
      let num2 = 0;
      let num3 = 0;
      const interval = setInterval(() => {
        if (num1 < 170) {
          num1++;
          setNumber1(num1);
        }
        if (num2 < 80) {
          num2++;
          setNumber2(num2);
        }
        if (num3 < 800) {
          num3++;
          setNumber3(num3);
        }
        if (num1 === 170 && num2 === 80 && num3 === 800) {
          clearInterval(interval);
        }
      }, 5);
    }
  }, [startCounting]);

  return (
    <div className="middle-bar relative w-full h-48 md:h-52 lg:h-64 mt-20">
      {/* Outer Wave Layer */}
      <div className="absolute w-full h-56 md:h-64 lg:h-72 bg-blue-300 opacity-50 transform -skew-y-0 top-4"></div>
      {/* Middle Wave Layer */}
      <div className="absolute w-full h-48 md:h-52 lg:h-64 bg-blue-500 opacity-50 transform -skew-y-0 top-4"></div>
      {/* Inner Wave Layer */}
      <div className="absolute w-full h-40 md:h-40 lg:h-48 bg-indigo-800 opacity-90 transform top-4"></div>

      {/* Numbers and Subheading */}
      <div className="relative z-10 flex flex-row items-center justify-evenly h-full">
        {/* Number 1 */}
        <div className="flex flex-col items-center mb-4">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFFFFF]">{number1}+</div>
          <p className="text-xs md:text-sm lg:text-lg font-bold text-white">BRANDS SERVED</p>
        </div>

        {/* Number 2 */}
        <div className="flex flex-col items-center mb-4">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFFFFF]">{number2}+</div>
          <p className="text-xs md:text-sm lg:text-lg font-bold text-[#4CA4FF]">LANGUAGES</p>
        </div>

        {/* Number 3 */}
        <div className="flex flex-col items-center mb-4">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFFFFF]">{number3}+</div>
          <p className="text-xs md:text-sm lg:text-lg font-bold text-white">PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default MiddleBar;
