import React from "react";
import Dub from "../../../assets/cc.jpg";
import { IoIosArrowForward } from "react-icons/io";
import Form from "../../../components/LetTalkForm";
import "./flip.css";
import Closed from "../FAQ/Closed";
import Dube from "../Industry/Dube";

const steps = [
  {
    id: 1,
    title: "Consultation",
    description:
      "Discuss project specifics, including target languages, video format, and any accessibility guidelines.Whether over a call or in person, we’re all ears.",
  },
  {
    id: 2,
    title: "Video & Script Submission",
    description: "Submit video files and any available scripts or transcripts.",
  },
  {
    id: 3,
    title: "Transcription & Captioning",
    description:
      "Transcribe dialogue and add descriptions of sound effects and music for complete accessibility.",
  },
  {
    id: 4,
    title: "Timing & Synchronization",
    description:
      "Accurately time the captions to match the on-screen elements.",
  },
  {
    id: 5,
    title: "Quality Control",
    description:
      "Review captions for accuracy, timing, and adherence to accessibility standards.",
  },
  {
    id: 6,
    title: "Integration",
    description:
      " Embed closed captions into the video file or provide them as a separate file.",
  },
  {
    id: 7,
    title: "Delivery",
    description:
      "Receive the captioned file in your preferred format (e.g., .doc, .txt, .srt)",
  },
];
const title ="Closed captioning services are offered for various types of content, including";
const list= [{content:"E-learning: Online courses, training videos, educational webinars  "},
  {content:"Entertainment: Movies, TV shows, web series, streaming content"},
  {content:"Marketing & Advertising: Promotional videos, social media content, commercials"},
  {content:"Corporate: Internal training videos, presentations, webinars"},
  {content:"Accessibility: Videos for the deaf and hard-of-hearing community"},
  {content:"Education: Classroom videos, lectures, online learning materials"},
  { content:"Government & Non-profit: Public service announcements, informational videos"},
  {content:"Events: Live events, conferences, presentations"}
];
const description ="";
const Ccaption = () => {
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
            <span style={{ color: "indigo" }}>CLOSED CAPTION</span>
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
              CLOSED CAPTION
            </h1>

            <h2 className=" sm:max-w-[630px] text-[30px] sm:text-[40px] text-[#454EFF] font-semibold font-helvetica tracking-wide leading-relax uppercase z-10">
              About Closed Caption
            </h2>
            <h1 className="text-2xl w-2/2 text-nowrap font-semibold md:text-2xl lg:text-2xl">
            Expand Your Content Among <br /> Specially Abled Viewers!
      </h1>
            <p className="text-[16px] w-full sm:max-w-[450px] text-black leading-7 z-10">
              Closed captioning is designed for viewers who are deaf or hard of
              hearing. It captures not only dialogue but also sound effects and
              music. This service creates a fully inclusive viewing experience
              for them. Whether for films, online videos, or educational
              materials, closed captioning promotes inclusivity as it enables
              viewers to appreciate every aspect of your content without
              barriers.
            </p>
           
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] py-12">
        <div className="flex flex-col gap-[10px] relative items-center">
          <h1 className="absolute left-[0px] sm:left-[105px] sm:top-[-70px] top-[-30px]  text-[50px] sm:text-[130px] text-bg-gray-100 font-medium uppercase z-0 opacity-15">
            CLOSED CAPTION
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
      <Closed />
    
    </div>
  );
};

export default Ccaption;
