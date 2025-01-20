import React from "react";
import Dub from "../../../assets/transcription.png";
import { IoIosArrowForward } from "react-icons/io";
import Form from "../../../components/LetTalkForm";
import "./flip.css";
import Trans from "../FAQ/Trans";
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
    title: "Audio/Video Submission",
    description: "Submit your audio or video files.",
  },
  {
    id: 3,
    title: "Transcription",
    description:
      "Transcriptionists listen to the content and transcribe it into text.",
  },
  {
    id: 4,
    title: "Review & Editing",
    description:
      "Multiple rounds of review ensure accuracy and correct errors.",
  },
  {
    id: 5,
    title: "Timestamping (if required)",
    description: "Add timestamps to the transcript for easy reference.",
  },
  {
    id: 6,
    title: "Quality Control",
    description: "  Final check for accuracy and completeness.",
  },
  {
    id: 7,
    title: "Delivery",
    description:
      "Receive the final transcript in your preferred format (e.g., .doc, .txt, .srt).",
  },
];
const title ="Transcription services are available for a wide range of industries:";
const list= [{content:"Education: Lectures, presentations, webinars, student interviews, focus groups."},
  {content:"Business: Meetings, conferences, presentations, interviews, webinars, podcasts, conference calls."},
  {content:"Legal: Depositions, court hearings, client interviews."},
  {content:"Media & Entertainment: Interviews, documentaries, films, TV shows, podcasts."},
  {content:"Healthcare: Patient interviews, medical dictations, consultations."},
  {content:"Market Research: Focus groups, surveys, interviews."},
  { content:"Government & Non-profit: Public hearings, meetings, speeches."},
  {content:"Personal: Speeches, interviews, family histories."}
];
const description ="";
const Transcrip = () => {
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
            <span style={{ color: "indigo" }}>TRANSCRIPTION</span>
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
              TRANSCRIPTION
            </h1>

            <h2 className=" sm:max-w-[630px] text-[30px] sm:text-[40px] text-[#454EFF] font-semibold font-helvetica tracking-wide leading-relax uppercase z-10">
              About Transcription
            </h2>
            <h1 className="text-2xl w-2/2 text-nowrap font-semibold md:text-2xl lg:text-2xl">
            Create Searchable, Accessible <br /> Records Of Your Materials<br />  Through Transcription
      </h1>
       
            
            <p className="text-[16px] sm:max-w-[450px] text-black leading-7 z-10">
              Transcription involves converting your audio or video content into
              accurate, written text. It is essential for interviews, podcasts,
              webinars, and more as it ensures that your information is easy to
              navigate and share. Transforming spoken words into text enhances
              content usability, extends your reach, and improves audience
              engagement. Whether for documentation, accessibility, or content
              creation, transcription services provide clarity and precision,
              making your content more accessible and impactful.
            </p>
            
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] py-12">
        <div className="flex flex-col gap-[10px] relative items-center">
          <h1 className="absolute left-[20px] sm:left-[105px] sm:top-[-70px] top-[-30px]  text-[50px] sm:text-[130px] text-bg-gray-100 font-medium uppercase z-0 opacity-15">
            TRANSCRIPTION
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
      <Trans />
   
    </div>
  );
};

export default Transcrip;
