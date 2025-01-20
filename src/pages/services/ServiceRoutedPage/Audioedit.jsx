import React from "react";
import Dub from "../../../assets/audio-edit.png";
import { IoIosArrowForward } from "react-icons/io";
import Form from "../../../components/LetTalkForm";
import "./flip.css";
import Audioedi from "../FAQ/Audioedi";
import Dube from "../Industry/Dube";

const steps = [
  {
    id: 1,
    title: "Consultation",
    description:
      "Understand the project's audio requirements and desired outcome.",
  },
  {
    id: 2,
    title: "Audio Analysis",
    description:
      " Review the raw audio files and identify areas for improvement.",
  },
  {
    id: 3,
    title: "Editing",
    description:
      " Clean up recordings, remove noise, and adjust levels for clarity.",
  },
  {
    id: 4,
    title: "Sound Design",
    description:
      "Create or source sound effects and music to enhance the audio experience.",
  },
  {
    id: 5,
    title: "Mixing & Mastering",
    description:
      "Balance audio elements, adjust frequencies, and optimize the overall sound for different playback environments.",
  },
  {
    id: 6,
    title: "Quality Control",
    description:
      "Listen to the final audio mix on various devices to ensure consistency and quality.",
  },
  {
    id: 7,
    title: "Delivery",
    description: "Provide the final audio files in the required formats.",
  },
];

const title = "Our Areas Of Expertise ";
const list = [
  { content: "Podcasts " },
  { content: "E-Learning Content" },
  { content: "Corporate Videos" },
  { content: "Film & Animation" },
  { content: "YouTube Videos" },
  { content: "Audiobooks" },
  { content: "Music Production" },
];
const description = "";
const Audioedit = () => {
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
            <span style={{ color: "indigo" }}>AUDIO EDIT</span>
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
              AUDIO EDIT
            </h1>

            <h2 className=" sm:max-w-[630px] text-[30px] sm:text-[40px] text-[#454EFF] font-semibold font-helvetica tracking-wide leading-relax uppercase z-10">
              About Audio Edit
            </h2>
            <h1 className="text-2xl w-2/2 text-nowrap font-semibold md:text-2xl lg:text-2xl">
              Transform Your Raw Audio Into <br /> Professional, Studio-Quality
              Sound
            </h1>
            <p className="text-[16px] w-full sm:max-w-[450px] text-black leading-7 z-10">
              Whether you're recording a podcast, creating course content, or
              producing professional videos, we turn raw recordings into
              polished, professional audio that commands attention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] py-12">
        <div className="flex flex-col gap-[10px] relative items-center">
          <h1 className="absolute left-[30px] sm:left-[105px] sm:top-[-70px] top-[-30px]  text-[50px] sm:text-[130px] text-bg-gray-100 font-medium uppercase z-0 opacity-15">
            AUDIO EDIT
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
                  <div className="flip-card-back bg-[#14133B] p-6 rounded-lg shadow-lg flex items-center justify-center">
                    <p className="text-white">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Dube title={title} description={description} list={list}></Dube>
      <Audioedi />
     
    </div>
  );
};

export default Audioedit;
