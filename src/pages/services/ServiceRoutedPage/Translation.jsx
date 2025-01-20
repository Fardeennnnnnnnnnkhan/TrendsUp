import React from "react";
import Dub from "../../../assets/traslate.png";
import { IoIosArrowForward } from "react-icons/io";
import Form from "../../../components/LetTalkForm";
import "./flip.css";
import Transla from "../FAQ/Transla";
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
    title: "Content Analysis",
    description:
      "We’ll take a look at your content to understand what it’s all about and make sure we get the nuances right.",
  },
  {
    id: 3,
    title: "Translation",
    description:
      "In this process, we ensure that your content fits culturally and maintains your original intent.",
  },
  {
    id: 4,
    title: "Review & Editing",
    description:
      " We’ll go over everything in multiple rounds to make sure it’s perfect.",
  },
  {
    id: 5,
    title: "Quality Control",
    description:
      " Final check for accuracy, fluency, and cultural appropriateness.",
  },
  {
    id: 6,
    title: "Quality Control",
    description:
      " We’ll go through everything one more time to make sure it’s all good - consistent, clear, and high quality.",
  },
  {
    id: 7,
    title: "Delivery",
    description:
      "We’ll send you the final translated/transcreated content in whatever format works for you.",
  },
];
const title ="What We Translate";
const list= [{content:"Marketing & Ads: Websites, social media posts, slogans, product descriptions, email campaigns."},
  {content:"E-learning: Courses, tutorials, presentations, educational videos."},
  {content:"Media & Entertainment: Films, TV shows, subtitles, video games, animations."},
  {content:"Legal & Contracts: Legal documents, agreements, patents."},
  {content:"Tech & Engineering: Manuals, guides, specs, reports."},
  {content:"Medical & Healthcare: Patient records, clinical documents, medical reports."},
  { content:"Finance & Banking: Reports, investment docs, banking materials."},
  {content:"Travel & Tourism: Travel guides, brochures, hotel descriptions."},
  {content:"And more! We can help with pretty much anything—just ask!"}
];
const description ="";
const Translation = () => {
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
            <span style={{ color: "indigo" }}>TRANSLATION</span>
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
              TRANSLATION
            </h1>

            <h2 className=" sm:max-w-[630px] text-[30px] sm:text-[40px] text-[#454EFF] font-semibold font-helvetica tracking-wide leading-relax uppercase z-10">
              About Translation
            </h2>
            <h1 className="text-2xl w-1/2 text-nowrap font-semibold md:text-2xl lg:text-2xl">
            Translation & Transcreation to<br /> Make Your  Content As Authentic<br /> As Original
      </h1>
       
            <p className="text-[16px] w-full sm:max-w-[450px] text-black leading-7 z-10">
              Translation is all about taking your content and converting it
              into another language while keeping the meaning exactly the same.
              Transcreation goes beyond this. It makes sure your message doesn’t
              just get understood, it feels right in the new language. This is
              crucial when it comes to creative content like marketing slogans,
              advertisements, or brand messaging, where cultural nuances can
              make or break how your message is received. Whether it’s a fun,
              catchy slogan or a more serious business report, we make sure your
              content feels authentic to the new audience, while staying true to
              your original message.
            </p>
            
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] py-12">
        <div className="flex flex-col gap-[10px] relative items-center">
          <h1 className="absolute left-[30px] sm:left-[105px] sm:top-[-70px] top-[-30px]  text-[50px] sm:text-[130px] text-bg-gray-100 font-medium uppercase z-0 opacity-15">
            TRANSLATION
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
      <Transla />
   
    </div>
  );
};

export default Translation;
