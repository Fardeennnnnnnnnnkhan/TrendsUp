import React from "react";
import Dub from "../../../assets/ad.png";
import { IoIosArrowForward } from "react-icons/io";
import Form from "../../../components/LetTalkForm";
import Audio from "../FAQ/Audio";
import Dube from "../Industry/Dube";
import "./flip.css";

const steps = [
  {
    id: 1,
    title: "Consultation",
    description:
      "Discuss your video content and target audience, including any specific accessibility guidelines.",
  },
  {
    id: 2,
    title: "Video Analysis",
    description:
      "Carefully analyze the video to identify key visual elements requiring description.",
  },
  {
    id: 3,
    title: "Scriptwriting",
    description:
      "Craft a descriptive narration that complements the audio and dialogue, conveying visual information clearly and concisely.",
  },
  {
    id: 4,
    title: "Voice Recording",
    description:
      "Record the audio description with a professional voice artist.",
  },
  {
    id: 5,
    title: "Synchronization",
    description:
      " Integrate the audio description track seamlessly with the video, ensuring proper timing and coordination.",
  },
  {
    id: 6,
    title: "Quality Control",
    description:
      "  Review the audio-described video for accuracy, clarity, and overall accessibility.",
  },
  {
    id: 7,
    title: "Delivery",
    description:
      "Deliver the final audio-described video in the required format.",
  },
];
const title ="Domains Where We Provide Audio Description Services";
const list= [{content:"Film and Television"},
  {content:"Educational Videos"},
  {content:"Corporate Videos"},
  {content:"Museum and Cultural Institutions"},
  {content:"Live Events"},
  {content:"Accessibility for User Interfaces (UI)"},
  { content:"Animation and Motion Graphics"},
  {content:"Virtual Reality (VR) and Augmented Reality (AR) Experiences"}
];
const description ="";
const Audiodesc = () => {
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
            <span style={{ color: "indigo" }}>AUDIO DESCRIPTION</span>
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
              AUDIO
            </h1>

            <h2 className=" sm:max-w-[630px] text-[30px] sm:text-[40px] text-[#454EFF] font-semibold font-helvetica tracking-wide leading-relax uppercase z-10">
              About Audio description
            </h2>
            <h1 className="text-2xl w-2/2 text-nowrap font-semibold md:text-2xl lg:text-2xl">
            Expand Your Content Among  <br />  Visually Impaired Viewers Just <br /> Like  Sighted  Audiences
      </h1>
            <p className="text-[16px] sm:max-w-[450px] text-black leading-7 z-10">
              We help make your videos accessible to visually impaired audiences
              by adding a narration track that describes visual elements,
              actions, and on-screen text. This enhances the viewing experience,
              ensuring that everyone can enjoy and understand your content
              fully. By providing detailed descriptions, we help convey
              essential context and narrative. Let’s have a quick call and
              figure out how we can promote inclusivity and broaden your
              audience reach.
            </p>
            {/* <a href="#form">
              <button className="h-[50px] w-[170px] bg-[#4CA4FF] rounded-[5px] flex justify-center items-center transition-all hover:bg-[#666AE5]">
                <p className="text-[15px] text-[#FFFFFF] font-semibold font-helvetica">
                About Audio
                </p>
              </button>
            </a> */}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] py-12">
        <div className="flex flex-col gap-[10px] relative items-center">
          <h1 className="absolute left-[40px] sm:left-[105px] sm:top-[-70px] top-[-30px]  text-[50px] sm:text-[130px] text-bg-gray-100 font-medium uppercase z-0 opacity-15">
            DESCRIPTION
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
      <section className="pt-[30px]">
      <Dube title={title} description={description} list={list}/>
      </section>
   
      <Audio />
     
    </div>
  );
};

export default Audiodesc;
