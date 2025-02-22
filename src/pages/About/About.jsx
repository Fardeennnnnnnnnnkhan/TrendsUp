import React from "react";
import Header from "../../components/Header";
import { IoIosArrowForward } from "react-icons/io";
import { GoCheckCircleFill } from "react-icons/go";
import ServicesTestimonial from "../services/ServicesTestimonial";
import StatsBox from "../services/StatsBox";
import Steps from "./Steps";
import LetTalkForm from "../../components/LetTalkForm";
import { About1 } from "../../assets/export";
import HowitWorks from "./HowItWorks";
import { EnrichDesignBanner } from "../../assets/export.js";

const About = () => {
  const list = [
    {
      heading: "End to end solutions",
      description:
        "From dubbing and voiceover to translation, audio production, and creative writing, we handle every aspect of the process",
    },
    {
      heading: "Proven Track record",
      description:
        "We've successfully completed projects for leading brands and creators, including Discovery Education, Kuku FM, Pocket FM, and more",
    },
    {
      heading: "Client-Centric approach",
      description:
        "Your success is our priority. We take the time to understand your unique goals and tailor our solutions to meet your specific needs",
    },
  ];

  return (
    <div className="w-full  overflow-hidden box-border">
      <Header />
      <section className="h-[400px] flex items-center justify-center bg-gradient-radial from-green-100 via-blue-200 to-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-black mb-4 tracking-[5px]">
            ABOUT US
          </h1>
          <p className="text-2xl text-black flex text-center mx-[40px] font-mono">
            HOME{" "}
            <IoIosArrowForward style={{ fontSize: "33px", color: "indigo" }} />
            <span style={{ color: "indigo" }}>ABOUT US</span>
          </p>
        </div>
      </section>

      <div className="bg-gray-100 text-black py-8 px-4 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto">
          {/* Heading Section */}

          <div className="w-full  py-10 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold ">
              It’s Always Better To Know Each Other!
            </h1>
          </div>
          <p className="text-center text-lg mb-10">
            Before we jump into working on your goals, here’s a little insight
            into who we are and why we do what we do. (We have kept this
            “Introduction” simple & direct, so don’t worry!)
          </p>

          {/* About Section */}
          <div className="flex flex-col lg:flex-row items-center gap-8 bg-white shadow-lg rounded-lg p-6 md:p-12">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                The Story Behind TrendsUp Media
              </h2>
              <p className="text-gray-700 mb-4">
                Back in 2014, Arpit Bhatnagar started TrendsUp Media as a
                one-person operation. Fast forward ten years, and we’ve grown
                into a team of 350+ skilled professionals in 2024. Over the
                years, we’ve helped more than 170 businesses make their mark
                around the world, bringing their messages to life through
                localized content in 80+ languages.
              </p>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                So, What Keeps Our Clients Coming Back?
              </h3>
              <p className="text-gray-700">
                Our Client-First Approach Whether it’s a casual chat or creating
                content, you need to Hold The Authenticity Stick. Our goal
                remains the same: to create content that makes your audience
                keep coming back, no matter where they are. That’s why we give
                110% to ensure your content feels just as genuine and impactful
                in another language as it does in your own.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 flex justify-center">
              <img
                src="https://png.pngtree.com/png-vector/20200713/ourmid/pngtree-web-development-concept-flat-design-png-image_2303316.jpg"
                alt="Working Illustration"
                className="w-full max-w-md rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Mission and Vision Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center">
              Mission & Vision That Drives Us
            </h3>
            <p className="text-gray-700 text-center mb-6">
              We help businesses take their content global, but this is more
              than just translation. Sure, AI or any artist can translate words,
              but we go further. Our goal for every project is to ensure your
              global audience feels the same emotions, impact, and message as
              your local one. Whether it’s through dubbing, voiceover,
              translation, or content rewriting, we make sure your brand
              connects with people everywhere without losing any of its power.
              And we won’t stop until we get it right.
            </p>
            <p className="text-gray-700 text-center">
              Whether it’s through dubbing, voiceover, translation, or content
              rewriting, we make sure your brand connects with people everywhere
              without losing any of its power. And we won’t stop until we get it
              right.
            </p>
          </div>

      
        </div>
      </div>
      <Steps />

   

      
    
      <HowitWorks />

   

      <div style={{ marginTop: "90px" }}>
      
      </div>
       
      <div style={{ marginBottom: "100px" }}>
        <ServicesTestimonial />
           {/* Call to Action */}
           <div className="text-center">
            <h3 className="text-4xl font-bold text-black mb-4">
              Ready to Globalize Your Content With the Same Impact?
            </h3>
            <p className="text-gray-700 mb-6">
              If you’re looking for a partner who’s just as passionate about
              quality and authenticity as you are, let’s chat. Book a quick
              30-minute call, and let’s explore how we can work together.
            </p>
            <a
              href="https://calendly.com/trendsupmedia/strategy_session"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Book My Call
            </a>
          </div>
      </div>
    </div>
  );
};

export default About;
