import React from "react";
import Dub from "../../../assets/subtitle.png";
import { IoIosArrowForward } from "react-icons/io";
import Form from "../../../components/LetTalkForm";
import "./flip.css";
import Subti from "../FAQ/Subti";
import Dube from "../Industry/Dube";

const steps = [
  {
    id: 1,
    title: "Consultation",
    description:
      " We begin with a deep dive into your project’s goals, target audience, desired tone, and any other details that help us understand your needs. Whether over a call or in person, we’re all ears.",
  },
  {
    id: 2,
    title: "Video & Script Submission",
    description:
      "Send the video files and any scripts or transcripts available.",
  },
  {
    id: 3,
    title: "Translation & Adaptation",
    description:
      "Translate and adapt the dialogue for subtitles, ensuring readability and smooth synchronization.",
  },
  {
    id: 4,
    title: "Timing & Synchronization",
    description:
      "Carefully time the subtitles to align with the on-screen action and dialogue.",
  },
  {
    id: 5,
    title: "Quality Control",
    description:
      "Double-check accuracy, timing, and visual appeal to make sure everything’s on point.",
  },
  {
    id: 6,
    title: "Integration",
    description:
      "Embed subtitles directly into the video or provide them as separate files—whatever works best.",
  },
  {
    id: 7,
    title: "Delivery",
    description:
      "Receive the subtitled video or files in the format needed.",
  },
];
const title ="Domains Where Subtitling is Available";
const list= [{content:"Films & TV Shows: Ready your film or show for international audiences."},
  {content:"E-learning: Make educational content accessible for all learners."},
  {content:"Corporate Videos: Ensure internal and external communications are understood."}
  
];
const description ="";
const Subtitle = () => {
  return (
    <div className="  overflow-hidden">
      <section className="h-[500px] flex items-center justify-center  bg-gradient-radial from-green-100 via-blue-200 to-white sm:bg-[url('./assets/pagetitle-1.jpg')] bg-cover bg-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-black mb-4 tracking-[5px]">
            SERVICES
          </h1>
          <p className="text-2xl text-black flex text-center mx-[40px] font-mono">
            SERVICES{" "}
            <IoIosArrowForward style={{ fontSize: "33px", color: "indigo" }} />
            <span style={{ color: "indigo" }}>SUBTITLE</span>
          </p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-0 ">
        <div className="sm:px-[70px] bg-[#FFFFFF] sm:pt-[150px] pb-[60px] flex flex-col sm:flex-row justify-between items-center gap-[10px] ">
          <div className="flex  justify-center items-center relative  ">
            <img src={Dub} className="w-full max-w-[550px] rounded-xl"></img>
          </div>

          <div className="flex flex-col  gap-[20px] relative">
            <h1 className="hidden  sm:block absolute left-[-80px] top-[-120px] text-[160px] text-[#4CA4FF] opacity-20 font-medium uppercase z-0 ">
              SUBTITLE
            </h1>

            <h2 className=" sm:max-w-[630px] text-[30px] sm:text-[40px] text-[#454EFF] font-semibold font-helvetica tracking-wide leading-relax uppercase z-10">
              About Subtitle
            </h2>
            <h1 className="text-2xl w-2/2 text-nowrap font-semibold md:text-2xl lg:text-2xl">
            Subtitles Make Your Videos <br /> Accessible To Everyone
      </h1>
       
            <p className="text-[16px] w-full sm:max-w-[450px] text-black leading-7 z-10">
              If you want to expand your content to specially abled audiences
              like the ones who are either deaf, or simply speak a different
              language, we can help you.
            </p>
            <p className="text-[16px] sm:max-w-[450px] text-black leading-7 z-10">
              We are here to provide accurate translations, proper timing, and
              synchronization to provide subtitles that makes the content
              accessible for this type of audience. From films to educational
              content, subtitling breaks down language barriers, boosts
              engagement, and helps your content connect with viewers around the
              world.
            </p>
           
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] py-12">
        <div className="flex flex-col gap-[10px] relative items-center">
          <h1 className="absolute left-[60px] sm:left-[105px] sm:top-[-70px] top-[-30px]  text-[50px] sm:text-[130px] text-bg-gray-100 font-medium uppercase z-0 opacity-15">
            SUBTITLE
          </h1>

          <h2 className="max-w-5xl text-[30px] sm:text-[40px] mt-[42px] text-gray-900 font-semibold font-helvetica tracking-wide leading-snug uppercase z-10">
            OUR PROCESS
          </h2>
        </div>
        <div className="container mx-auto px-6 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {steps.map((step) => (
              <div key={step.id} className="flip-card">
                <div className="flip-card-inner">
                  {/* Front side */}
                  <div className="flip-card-front bg-white p-24 rounded-lg shadow-lg flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-gray-800 ">
                      {step.title}
                    </h3>
                  </div>
                  {/* Back side */}
                  <div className="flip-card-back bg-[#14133B] p-2 rounded-lg shadow-lg flex items-center justify-center">
                    <p className="text-white">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Dube title={title} description={description} list={list}></Dube>
     < Subti />
     
    </div>
  );
};

export default Subtitle;
