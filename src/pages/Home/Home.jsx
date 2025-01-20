import { useState } from "react";
import { FaLongArrowAltRight, FaLocationArrow } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import {
  CircleIcon,
  CubeIcon1,
  CubeIcon2,
  CultureBanner,
  DigitalServicesBanner,
  DigitalServicesIcon,
  EnhancedContent,
  HelpBanner,
  HomeBanner,
  SpecialityIcon1,
  SpecialityIcon2,
  SpecialityIcon3,
} from "../../assets/export.js";
import video1 from "../../assets/video1.mp4";
import thumbnail from "../../assets/thumbnail2.png";
import MiddleBar from "./MiddleBar.jsx";
import Stats from "../services/StatsBox.jsx";
import ClientsSection from "./ClientsSection.jsx";
import BlogSection from "./BlogSection.jsx";
import { Link } from "react-router-dom";
import FormSection from "./FormSection.jsx";
import { GoCheckCircleFill } from "react-icons/go";

import TestimonialSection from "./TestimonialSection.jsx";

const Home = () => {
  const list = [
    {
      heading: "All-in-One Service",
      description:
        "From dubbing, voiceover, translation, audio production, or creative adaptation, we handle the entire process so you get a final product ready to be uploaded.",
    },
    {
      heading: "Native Expertise",
      description:
        "With a team of 350 experts who speak over 80 languages natively, we ensure that your content speaks naturally and authentically to any audience.",
    },
    {
      heading: "Human Touch That Matters",
      description:
        "Every project gets the careful attention of our skilled professionals, ensuring accuracy, cultural depth, and an engaging flow, something that AI can’t match.",
    },
    {
      heading: "Proven Results",
      description:
        "We’ve completed over 3500 successful projects for major brands like Discovery Education, Kuku FM, L&T and Pocket FM. Whether in e-learning, audiobooks, YouTube, or advertising, we’ve got a track record of excellence.",
    },
    {
      heading: "Client-Centric Approach",
      description:
        "We don’t just work for you, we work with you. We take the time to understand your goals, communicate openly, and adjust our services to deliver exactly what you’re looking for.",
    },
    {
      heading: "Fair Pricing with High Value",
      description:
        "Quality doesn’t have to break the bank. We get you transparent and flexible pricing which means you get the best return on your investment without cutting corners.",
    },
    {
      heading: "Passionate Storytellers",
      description:
        "We’re here to tell stories that connect. Our team is passionate about helping your brand speak to people in a way that feels genuine and culturally rich.",
    },
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const [specialityData, setSpecialityData] = useState([
    {
      banner:
        "https://askproject.net/foices/wp-content/uploads/sites/91/2022/07/icon2_6.png",
      title: "Dubbing",
      description:
        "Replace the original voices in your content with professional, native voice actors in your target language.",
      link: "",
    },
    {
      banner:
        "https://askproject.net/foices/wp-content/uploads/sites/91/2022/07/icon2_2.png",
      title: "Voiceover",
      description:
        "Get clear, engaging voice overs that match your visuals perfectly (available on-demand).",
      link: "",
    },
    {
      banner:
        "https://askproject.net/foices/wp-content/uploads/sites/91/2022/07/icon2_3.png",
      title: "Subtitling",
      description:
        "Get accurate, clear subtitles in over 80 languages to make your content accessible to a global audience.",
      link: "",
    },
    {
      banner:
        "https://askproject.net/foices/wp-content/uploads/sites/91/2022/07/icon2_1.png",
      title: "Localization",
      description:
        "Ensure cultural relevance in every step of your global expansion journey.",
      link: "",
    },
    {
      banner:
        "https://askproject.net/foices/wp-content/uploads/sites/91/2022/07/icon2_4.png",
      title: "Translation & Transcreation",
      description:
        "Preserve the full impact of your messaging across languages. Make sure your content is culturally relevant and impactful.",
      link: "",
    },
    {
      banner:
        "https://askproject.net/foices/wp-content/uploads/sites/91/2022/07/icon2_7.png",
      title: "Audio Production",
      description:
        "Our expert audio production team enhances your audio quality with editing, mixing, and sound design that brings your content to life.",
      link: "",
    },
  ]);

  const [helpBusinessGrowingData, setHelpBusinessGrowingData] = useState([
    "Dubbing: Replace the original voices in your content with professional, native voice actors in your target language.",
    "Voiceover: Get clear and engaging voiceovers that match your visuals perfectly (available on-demand).",
    "Subtitling: Get accurate, clear subtitles in over 80 languages to make your content accessible to a global audience.",
    "Localization: Ensure cultural relevance in whatever step you take for your global expansion journey.",
    "Translation & Transcreation: Preserve the full impact of your messaging across languages. Make sure your content is culturally relevant and impactful.",
    "Audio Production: Our expert audio production team enhances your audio quality with editing, mixing, and sound design that provides oxygen to your content.",
  ]);

  const handleVideoPlay = () => {
    const video = document.getElementById("video");
    if (!isPlaying) {
      video.play();
    } else {
      video.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div
        className="mt-[75px] md:pl-[70px] px-5 pt-[60px] md:pt-[-0px]  flex md:flex-row flex-col justify-between items-center overflow-hidden"
        style={{ background: "linear-gradient(180deg, #F0F0FB, #FFFFFF)" }}
      >
        {/* Left Section */}
        <div className="left_section flex flex-col gap-[20px] relative z-20">
          {/* Digital Text */}
          <h1 className="absolute left-[10px] md:left-[-60px] top-[-80px] md:top-[-180px] text-[60px] md:text-[180px] text-[#4CA4FF] opacity-20 font-semibold uppercase z-0">
            Digital
          </h1>

          {/* Main Heading */}
          <h2 className="max-w-[350px] md:max-w-[650px] text-[18px] md:text-[40px] font-bold tracking-wide leading-snug uppercase z-10">
            <span className="text-[#454EFF]">TrendsUp Media, </span>
            <span>
              Have Your Content Understood Worldwide—Naturally, Fluently, and
              Without Losing Impact?
            </span>
          </h2>

          <p className="max-w-xl">Expert team at TrendsUp Media has been turning websites, videos, and marketing content into culturally rich and engaging experiences in 80+ languages for over a decade.
          </p>

          {/* Button and Link */}
          <div className="flex items-center gap-[20px] z-10">
            <button className="h-[45px] md:h-[50px] w-[150px] md:w-[170px] bg-[#4CA4FF] rounded-[5px] flex justify-center items-center transition-all hover:bg-[#666AE5]">
              <p className="text-[16px] md:text-[20px] capitalize text-[#FFFFFF] font-semibold">
                <a href="https://calendly.com/trendsupmedia/strategy_session">Get Free Quote</a>
              </p>
            </button>

            <div className="flex items-center gap-[5px] cursor-pointer">
              <a
                href="https://calendly.com/trendsupmedia/strategy_session"
                target="_blank"
              >
                <p className="text-[14px] md:text-[16px] font-semibold hover:text-[#666AE5]">
                  Book Free Strategy Session
                </p>
              </a>
              <FaLocationArrow className="text-[#5b9ff2] text-[20px] ml-2 md:text-[30px]" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right_section relative mt-[50px] md:mt-16">
          {!isPlaying && (
            <div className="relative">
              <video
                className="md:w-[558px] w-full h-auto md:h-[572px] cursor-pointer"
                id="video"
                poster={thumbnail}
                onClick={handleVideoPlay}
              >
                <source src={video1} type="video/mp4"></source>
                Your browser does not support the video tag.
              </video>
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                onClick={handleVideoPlay}
              >
                <button className="bg-black text-white p-4 rounded-full opacity-75 hover:opacity-100 transition">
                  ► Play
                </button>
              </div>
            </div>
          )}
          {isPlaying && (
            <div className="relative">
              <video
                className="md:w-[768px] w-full h-auto md:h-[572px] cursor-pointer"
                id="video"
                autoPlay
                loop
              >
                <source src={video1} type="video/mp4"></source>
                Your browser does not support the video tag.
              </video>

              <div
                className="absolute inset-0 flex items-center justify-center"
                onClick={handleVideoPlay}
              >
                <button className="bg-black text-white p-4 rounded-full opacity-50 hover:opacity-100 transition">
                  || Pause
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        {/* <MiddleBar /> */}
        <Stats />
      </div>

      <div>
        <ClientsSection />
      </div>
      {/*    Services We Offer */}
      <div className="container mx-auto p-6 mb-[30px]">
        <div className="text-center mb-8">
          <h2 className="text-[40px] font-bold text-[#454EFF] font-helvetica p-2 ">
            Services We Offer
          </h2>
        </div>

        <div
          className="grid grid-cols-1  md:grid-cols-3 gap-6   "
          style={{ boxShadow: "7px 5px 30px 0px rgba(0, 0, 0, 0.12)" }}
        >
          {specialityData.map((item, index) => (
            <div
              key={index}
              className=" bg-[#FFFFFF] text-white p-5   rounded-lg shadow-md flex flex-col items-center justify-center text-center 
            hover:border-transparent hover:bg-gradient-to-b hover:opacity-100 hover:from-blue-400 hover-via-blue-200 via-blue-100 hover:to-blue-50 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={item.banner}
                alt="Speciality-Banner"
                className="w-full max-w-[105px] p-2"
              />
              <h3 className="text-[17px] text-[#262626] font-bold uppercase">
                {item.title}
              </h3>
              <p className="mt-[10px] text-[14px] text-[#696969] text-center">
                {item.description}
              </p>

              {/* <button className="mt-[15px] text-[14px]  text-[#666AE5] font-semibold flex justify-center items-center gap-[5px] hover:text-[#040404]">
                <a href="/services">Learn More</a>

                <FaLongArrowAltRight className="text-[18px]" />
              </button> */}
            </div>
          ))}
        </div>

        <button className=" mx-auto   mt-10 h-[45px] md:h-[50px] w-[150px] md:w-[170px] bg-[#4CA4FF] rounded-[5px] flex justify-center items-center transition-all hover:bg-[#666AE5]">
          <Link to="services">
            {" "}
            <p className="text-[16px] md:text-[20px] text-[#FFFFFF] font-semibold">
              View All Services
            </p>{" "}
          </Link>
        </button>
      </div>
      {/*  Generating Revenue in Any Language Content */}
      <div className="overflow-hidden px-6 sm:px-12 lg:pl-[70px] lg:pr-0 pt-16 pb-12 lg:pt-[70px] lg:pb-[50px] bg-[#666AE5] flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-[20px]">
        <div className="flex flex-col gap-4 lg:gap-[10px] relative">
          <h1 className="absolute left-0 md:left-[-35px] top-[-80px] lg:top-[-120px] text-[80px] lg:text-[150px] text-[#5458D8] font-medium uppercase z-0">
            Content
          </h1>

          <h2 className="max-w-full sm:max-w-[400px] lg:max-w-[550px] text-nowrap text-[30px] sm:text-[40px] lg:text-[50px] text-[#ffffff] font-semibold font-helvetica tracking-wide leading-snug uppercase z-10">
            We’ve Transformed <br /> 3500+ Projects <br />
            in 80+ Languages
          </h2>
          <p className="text-[14px] sm:text-[16px] max-w-full sm:max-w-[400px] lg:max-w-[450px] text-[#ffffff] leading-6 sm:leading-7 z-10">
            If you have got a specific language or project in mind, click below
            to see if we can help you reach your global audience.
          </p>
          <button className="  mt-10 h-[45px] md:h-[50px] w-[150px] md:w-[170px] bg-[#4CA4FF] rounded-[5px] flex justify-center items-center transition-all hover:bg-[#FFFFFF] ">
            <Link to="language">
              <p className="text-[16px] md:text-[20px] text-[#FFFFFF] font-semibold hover:text-[#262626]">
                Check Languages
              </p>
            </Link>
          </button>
        </div>

        <div className="flex justify-center items-center relative w-full max-w-[350px] sm:max-w-[450px] lg:max-w-[480px]">
          <img
            src={DigitalServicesBanner}
            alt="Digital-Services-Banner"
            className="w-full lg:mr-36"
          />
          <img
            src={DigitalServicesIcon}
            alt="Digital-Services-Icon"
            className="w-[55%]  mr-28 lg:mr-16  absolute  right-0 top-0"
          />
        </div>
      </div>

      {/*     Experts in Enhancing your content */}
      <div className="px-6 sm:px-12 lg:px-[70px] bg-[#FFFFFF] pt-12 lg:pt-[70px] pb-8 lg:pb-[30px] flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-[20px]">
        <div className="flex flex-col gap-6 lg:gap-[20px] relative mt-8 lg:mt-0">
          <h1 className="absolute left-[-10px] sm:left-[-60px] lg:left-[-25px] top-[-80px] sm:top-[-100px] lg:top-[-120px] text-[80px] sm:text-[100px] lg:text-[130px] text-[#4CA4FF] opacity-20 font-medium uppercase z-0">
            Why
          </h1>

          <h2 className="max-w-full lg:max-w-[630px] text-[28px] sm:text-[36px] lg:text-[40px] text-[#454EFF] font-semibold tracking-wide leading-snug uppercase z-10">
            This is Your One Stop Shop For the Content Localization
          </h2>

          <div className="flex flex-col gap-4 lg:gap-[20px] z-10">
            {helpBusinessGrowingData.map((item, index) => (
              <div
                className="flex items-center gap-4 lg:gap-[10px]"
                key={index}
              >
                <div className="h-[30px] w-[30px] rounded-full bg-[#666AE5] flex justify-center items-center shrink-0">
                  <FaCheck className="text-[#ffffff] text-[16px]" />
                </div>

                <p className="text-[14px] sm:text-[16px] text-[#696969]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*   About */}
      <div className="w-full px-4 sm:px-8 md:px-16 lg:pl-[70px] pt-16 sm:pt-[70px] md:pt-[110px] pb-8 sm:pb-[40px] md:pb-[50px] bg-[#14133B] flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-[20px]">
        {/* Text Section */}
        <div className="flex flex-col gap-4 sm:gap-[10px] relative w-full">
          {/* Background "Why" Text */}
          <h1 className="absolute left-[-10px] sm:left-[80px] md:left-[0px] top-[-70px] sm:top-[-80px] md:top-[-150px] text-[80px] sm:text-[120px] md:text-[150px] text-[#343ecc] opacity-40 font-medium uppercase z-0">
            Why
          </h1>

          {/* Main Heading */}
          <h2 className="max-w-full sm:max-w-[400px] md:max-w-[550px] text-[24px] sm:text-[32px] md:text-[40px] text-white font-semibold font-helvetica tracking-normal leading-snug uppercase z-10">
            Here’s Why Our Clients Have Been Choosing Us Over Everyone Else
          </h2>

          {/* List Section */}
          <div className="my-[20px] sm:my-[25px] md:my-[30px] space-y-6">
            {list.map((item, index) => (
              <div className="flex flex-col gap-4" key={index}>
                <h1 className="flex items-center text-white uppercase tracking-[1px] sm:tracking-[2px] md:tracking-[3px] font-helvetica hover:text-green-300">
                  <GoCheckCircleFill
                    style={{ fontSize: "30px", marginRight: "10px" }}
                  />
                  {item.heading}
                </h1>
                <p className="text-white max-w-full sm:max-w-[400px] md:max-w-full    mx-auto sm:mx-[20px] md:mx-[50px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <TestimonialSection />
      </div>
      <div>
        <BlogSection />
      </div>
      <section id="form">
        <FormSection />
      </section>
    </>
  );
};

export default Home;
