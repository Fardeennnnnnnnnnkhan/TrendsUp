import React from "react";
import { GirlTyping } from "../../assets/export";





const FormSection = () => {
  return (
    <section
      id="form"
      className="bg-[#F0F0FB] py-12 px-4 flex flex-col lg:flex-row justify-evenly items-center "
    >
      {/* Left Section */}
      <div className="left-section mb-12 lg:mb-0 lg:max-w-[50%]">
        {/* Heading */}
        <div className=" ">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 ">
            Ready to Globalize Your Content?
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Whether you’re ready to start a project or just want to learn more,
            we’re here to help. Book a call today, and let’s talk about how we
            can take your content global, without losing any of its impact.
          </p>

          <button className="h-[40px] px-2 bg-[#4CA4FF] rounded-[5px] flex justify-center items-center transition-all hover:bg-[#666AE5] mt-3">
              <p className="text-[15px] text-[#FFFFFF] font-semibold font-helvetica">
              <a href="tel:+919057296732">Book Your Free Consultation Now</a>
              </p>
            </button>
          
        </div>
      </div>
      <img
            src={GirlTyping}
            alt="Digital-Services-Banner"
            className="w-full max-w-xs md:max-w-md lg:max-w-lg mt-8 mx-auto lg:mx-0"
          />
           </section>
  );
};

      {/*   
      <div className="right-section w-full lg:w-[50%]">
      
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
        
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
                required
              />
            </div>

        
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
                required
              />
            </div>

        
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="123-456-7890"
                required
              />
            </div>

    
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                How can we help you?
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your message here..."
              ></textarea>
            </div>


            <div className="text-center">
              <button
                type="submit"
                className="w-[150px] bg-[#666AE5] text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div> */}
   
export default FormSection;
