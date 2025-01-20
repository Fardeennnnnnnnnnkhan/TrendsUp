import React from "react";
import Dub from "../../../assets/cr.png";
import { IoIosArrowForward } from "react-icons/io";
import Form from "../../../components/LetTalkForm";
import "./flip.css";
import Content from "../FAQ/Content";
import Dube from "../Industry/Dube";

const steps = [
  {
    id: 1,
    title: "Consultation",
    description:
      "Understand your brand voice, target audience, and content goals.Whether over a call or in person, we’re all ears.",
  },
  {
    id: 2,
    title: "Brainstorming & Research",
    description:
      "Develop ideas and conduct research to inform the writing process.",
  },
  {
    id: 3,
    title: "Content Creation",
    description:
      "Write original and engaging content that aligns with your brand and resonates with your audience.",
  },
  {
    id: 4,
    title: "Review & Editing",
    description:
      "Multiple rounds of review and editing to refine the content and ensure quality.",
  },
  {
    id: 5,
    title: "Final Approval",
    description: "Get your feedback and make any necessary revisions.",
  },
  {
    id: 6,
    title: "Delivery",
    description: " Provide the final, polished content in the required format.",
  },
];
const title ="Our Content and Creative Writing Services Include";
const list= [{content:"Website Content: We create website copy that is both informative and engaging, ensuring your online presence makes a lasting impression. "},
  {content:"Blog Posts & Articles: We produce high-quality blog posts and articles tailored to your target audience and optimized for search engines."},
  {content:"Marketing & Advertising Copy: We write persuasive marketing materials, including brochures, flyers, email campaigns, and social media content, designed to drive conversions."},
  {content:"Scripts: We develop engaging scripts for videos, podcasts, animations, and audio dramas, bringing your stories to life."},
  {content:"E-learning Content: We create interactive and informative e-learning materials, including course modules, quizzes, and assessments."},
  {content:"Creative Writing: We craft captivating short stories, poems, and other creative content that sparks imagination and emotion."},
  { content:"Technical Writing: We produce clear and concise technical documentation, including user manuals, white papers, and reports."},
  {content:"Speechwriting: We write impactful speeches for various occasions, ensuring your message is delivered with clarity and conviction."}
];
const description ="";
const Cr = () => {
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
            <span style={{ color: "indigo" }}>CONTENT WRITING</span>
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
              WRITING
            </h1>

            <h2 className=" sm:max-w-[630px] text-[30px] sm:text-[40px] text-[#454EFF] font-semibold font-helvetica tracking-wide leading-relax uppercase z-10">
              About Content writing
            </h2>
            <h1 className="text-2xl text-nowrap w-1/2 font-semibold md:text-2xl  lg:text-2xl  ">
            Engage Your Audience With <br /> Impactful Promotional Materials, <br />
              CompellingStorytelling, and<br /> Educational Content Through <br /> Our
              Content and Creative <br />Writing Services
      </h1>
            <p className="text-[16px] w-full sm:max-w-[450px] text-black leading-7 z-10">
            
            </p>
            <p className="text-[16px] sm:max-w-[450px] text-black leading-7 z-10">
              We help the clients in writing compelling copy, engaging scripts,
              and informative blog posts. Our skilled writers create 100%
              original content that specifically tailors to unique brand voices
              and resonate with your target audience. Let’s have a meeting where
              we will understand your unique goals and style.
            </p>
           
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] py-12">
        <div className="flex flex-col gap-[10px] relative items-center">
          <h1 className="absolute left-[50px] sm:left-[105px] sm:top-[-70px] top-[-30px]  text-[50px] sm:text-[130px] text-bg-gray-100 font-medium uppercase z-0 opacity-15">
            CONTENT
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
     < Content />
   
    </div>
  );
};

export default Cr;
