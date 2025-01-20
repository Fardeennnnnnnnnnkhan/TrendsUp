import React from "react";
import Dub from "../../../assets/mtp.png";
import { IoIosArrowForward } from "react-icons/io";
import Form from "../../../components/LetTalkForm";
import "./flip.css";
import Machin from "../FAQ/Machin";
import Dube from "../Industry/Dube";

const steps = [
  {
    id: 1,
    title: "Consultation",
    description:
      "Discuss your project needs, including the source and target languages, content type, and desired quality level.",
  },
  {
    id: 2,
    title: "Machine Translation",
    description:
      "Initial translation through ",
  },
  {
    id: 3,
    title: "Post-Editing",
    description:
      "Skilled linguists refine the ",
  },
  {
    id: 4,
    title: "Quality Control",
    description:
      "Final check to ensure the translation meets the highest standards.",
  },
  {
    id: 5,
    title: "Delivery",
    description:
      "Provide the final, polished translation in the required format.",
  },
];
const title ="We handle MTPE for various industries, including:";
const list= [{content:"General Content: Websites, blogs, and marketing materials."},
  {content:"Legal & Medical: Contracts, medical records, and reports."},
  {content:"Technical & IT: Manuals, software, and documentation."},
  {content:"E-learning & Financial: Training courses and financial reports."},
  {content:"Tourism & Automotive: Travel guides and product descriptions."}
  
];
const description ="";
const Mtpe = () => {
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
            <span style={{ color: "indigo" }}>
              MTPE (Machine Translation Post-Editing)
            </span>
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
              MTPE
            </h1>

            <h2 className=" sm:max-w-[630px] text-[30px] sm:text-[40px] text-[#454EFF] font-semibold font-helvetica tracking-wide leading-relax uppercase z-10">
              About MTPE
            </h2>
            <h1 className="text-2xl w-2/2 text-nowrap font-semibold md:text-2xl lg:text-2xl">
            What is MTPE?
      </h1>

            <p className="text-[16px] w-full sm:max-w-[450px] text-black leading-7 z-10">
              MTPE blends machine translation with human expertise. Initial
              machine-generated translations are refined by skilled linguists to
              eliminate all the nuances of Artificial Intelligence. This process
              maximizes the speed while achieving high-quality, culturally
              relevant translations for various content types.
            </p>
            
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] py-12">
        <div className="flex flex-col gap-[10px] relative items-center">
          <h1 className="absolute left-[80px] sm:left-[105px] sm:top-[-70px] top-[-30px]  text-[50px] sm:text-[130px] text-bg-gray-100 font-medium uppercase z-0 opacity-15">
            MTPE
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
     < Machin />
    
    </div>
  );
};

export default Mtpe;
