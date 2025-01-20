import React from "react";
import Dub from "../../../assets/local.png";
import { IoIosArrowForward } from "react-icons/io";
import Form from "../../../components/LetTalkForm";
import "./flip.css";
import Locali from "../FAQ/Locali";
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
    title: "Content Analysis",
    description:
      "We’ll take a look at what you’ve got (text, visuals, audio) and figure out what needs tweaking to make it fit.",
  },
  {
    id: 3,
    title: "Translation & Adaptation",
    description:
      "We’ll translate and adapt your content so it clicks with your audience and feels right for their culture.",
  },
  {
    id: 4,
    title: "Visual & Audio Adaptation (if applicable)",
    description:
      "We might need to change up graphics, colors, and audio to fit better with local tastes.",
  },
  {
    id: 5,
    title: "Localization Testing",
    description:
      "We’ll test it with native speakers to make sure it’s spot-on and works well.",
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
    description: "We’ll send you the final, fully localized content in whatever format works for you.",
  },
];
const title ="We Provide Localization Services in Various Areas, Including:";
const list= [{content:"Software and Apps: User interfaces, documentation, help files, and marketing materials"},
  {content:"Websites and E-commerce: Website content, product descriptions, online stores, and digital marketing campaigns."},
  {content:"Games: Narratives, dialogues, menus, and promotional materials."},
  {content:"Multimedia: Videos, audio recordings, presentations, and e-learning courses."},
  {content:"Marketing & Advertising: Brochures, flyers, social media content, and ad campaigns."},
  {content:"Documents and Publications: Technical manuals, user guides, legal documents, and marketing collaterals."},
  { content:"E-learning: Online courses, training materials, and educational content."},
  {content:"And More: We tailor our services to meet the needs of a variety of industries and content types."}
];
const description ="";
const Localization = () => {
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
            <span style={{ color: "indigo" }}>LOCALIZATION</span>
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
              LOCALIZATION
            </h1>

            <h2 className=" sm:max-w-[630px] text-[30px] sm:text-[40px] text-[#454EFF] font-semibold font-helvetica tracking-wide leading-relax uppercase z-10">
              About Localization
            </h2>
            <h1 className="text-2xl w-2/2 text-nowrap font-semibold md:text-2xl lg:text-2xl">
            This Is Where Your Content Truly <br /> Goes Global With Localization
      </h1>

        
            <p className="text-[16px] w-full sm:max-w-[450px] text-black leading-7 z-10">
              Adapt your text, visuals, and audio to align with the cultural
              norms, humor, and preferences of your target audience. We
              understand that this is not just about translation, this is about
              delivering the content that feels native, authentic, and relevant
              to viewers across various regions. That is why, we take into
              account local dialects, idioms, and cultural nuances because this
              increases engagement and strengthens relationships with viewers.
            </p>

           
           
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] py-12">
        <div className="flex flex-col gap-[10px] relative items-center">
          <h1 className="absolute left-[30px] sm:left-[105px] sm:top-[-70px] top-[-30px]  text-[50px] sm:text-[130px] text-bg-gray-100 font-medium uppercase z-0 opacity-15">
            LOCALIZATION
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
                  <div className="flip-card-back bg-[#14133B] p-2  rounded-lg shadow-lg flex items-center justify-center">
                    <p className="text-white">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Dube title={title} description={description} list={list}></Dube>
      <Locali />
    
    </div>
  );
};

export default Localization;
