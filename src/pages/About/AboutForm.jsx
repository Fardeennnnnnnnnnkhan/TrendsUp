import React from 'react';

const FormSection = () => {
  return (
    <section id='form' className="bg-[#FOFOFB] py-12 flex justify-evenly items-center">
      <div className='left-section'>
{/* Heading */}
<div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Let's Talk</h2>
        <p className="text-lg text-gray-600 mt-2">We'd love to hear from you! Please fill out the form.</p>
        <img src={GirlTyping} alt="Digital-Services-Banner" className="w-full max-w-[550px] mt-8" />
      </div>

      </div>
      <div className='right-section '>
 {/* Form Container */}
 <div className="min-w-[800px] mx-auto bg-white p-8 rounded-lg ">
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 ">
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

          {/* Email Field */}
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

          {/* Phone Field */}
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

          {/* Services Dropdown 
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700">
              Select a Service
            </label>
            <select
              id="service"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="" disabled selected>
                Choose a service
              </option>
              <option value="dubbing">Dubbing</option>
              <option value="voiceover">Voiceover</option>
              <option value="translation">Translation</option>
              <option value="Audio-production">Audio Production</option>
            </select>
          </div>*/}

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              How can we help you ?
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your message here..."
            ></textarea>
          </div>

          {/* Submit Button */}
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
      </div>
      

     
    </section>
  );
};

export default FormSection;
