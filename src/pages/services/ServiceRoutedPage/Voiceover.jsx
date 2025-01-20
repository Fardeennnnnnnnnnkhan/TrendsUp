import React from "react";
import Dub from "../../../assets/voiceover.jpg";
import Form from "../../../components/LetTalkForm";
import Voice from "../FAQ/Voice";
import { IoIosArrowForward } from "react-icons/io";
import "./flip.css";
import Dube from "../Industry/Dube";

const steps = [
  {
    id: 1,
    title: "Consultation",
    description:
      "We begin with a deep dive into your project’s goals, target audience, desired tone, and any other details that help us understand your needs. Whether over a call or in person, we’re all ears.",
  },
  {
    id: 2,
    title: "Script Review",
    description:
      "We review the script to ensure it's clear, the tone is right, and any special instructions are noted.",
  },
  {
    id: 3,
    title: "Voice Casting",
    description:
      "We hand-pick a voice artist whose style matches your project’s needs.",
  },
  {
    id: 4,
    title: "Recording",
    description:
      "In our studio, our directors work closely with the voice artist to capture the right delivery with right emotional tone.",
  },
  {
    id: 5,
    title: "Audio Editing",
    description:
      "We fine-tune the recording, adjusting sound levels and adding effects or music to maximize the quality.",
  },
  {
    id: 6,
    title: "Quality Control",
    description:
      " A dedicated human QC team reviews your project for accuracy, synchronization, and overall quality, with AI support for a final polish.",
  },
  {
    id: 7,
    title: "Delivery",
    description:
      "Receive your final product in the format of your choice. This final document would be according to the standards set during our initial consultation.",
  },
];
const titel = "Where We Provide Voice Over Services";
const description ="";
const list =[
  {
      content: "E-learning & Education: Engaging voices for online courses, explainer videos, and educational content.",
  },
  {
      content: "Marketing & Advertising: Energetic voices for ads, product demos, and social media content.",
  },
  {
      content: "Corporate & Business: Professional voices for presentations, training, and corporate messaging.",
  },
  {
      content: "Animation & Gaming: Unique character voices, narration, and in-game dialogues.",
  },
  {
      content: "Documentaries & Films: Captivating narration, interview voiceovers, and dubbing for films.",
  },
  {
      content: "Audiobooks & Podcasts: Memorable narrations for audiobooks, podcast intros/outros, and audio dramas.",
  },
  {
      content: "IVR & Telephony: Clear, friendly voices for phone systems, on-hold messages, and greetings.",
  },
  {
      content: "Accessibility: Audio descriptions to make content accessible for visually impaired audiences.",
  },
];
const Voiceover = () => {
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
            <span style={{ color: "indigo" }}>VOICEOVER</span>
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
              VOICEOVER
            </h1>

            <h2 className=" sm:max-w-[630px] text-[30px] sm:text-[40px] text-[#454EFF] font-semibold font-helvetica tracking-wide leading-relax uppercase z-10">
              About Voiceover
            </h2>
            <h1 className="text-2xl w-2/2 text-nowrap font-semibold md:text-2xl lg:text-2xl">
            Voiceover Services That Give Your <br /> Content a Voice of Its Own
      </h1>
       
           
            <p className="text-[16px] sm:max-w-[450px] text-black leading-7 z-10">
              Looking for a voice that does more than just talk? Voiceover
              artists at TrendsUp Media bring your project to life with clarity,
              energy, and the perfect tone. Whether it's the strong narration of
              a documentary, the energetic vibe of an explainer video, or the
              calm guidance for an e-learning course, TrendsUp Media has the
              right voice to make your message stand out.
            </p>

          
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] py-12">
        <div className="flex flex-col gap-[10px] relative items-center">
          <h1 className="absolute left-[30px] sm:left-[105px] sm:top-[-70px] top-[-30px]  text-[50px] sm:text-[130px] text-bg-gray-100 font-medium uppercase z-0 opacity-15">
            VOICEOVER
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
      <Dube title={titel} description={description} list={list}></Dube>
<Voice />
     
    </div>
  );
};

export default Voiceover;
