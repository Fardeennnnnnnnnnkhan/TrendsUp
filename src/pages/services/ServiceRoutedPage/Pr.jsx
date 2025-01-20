import React from "react";
import Dub from "../../../assets/pr.jpg";
import { IoIosArrowForward } from "react-icons/io";
import Form from "../../../components/LetTalkForm";
import "./flip.css";
import Proof from "../FAQ/Proof";
import Dube from "../Industry/Dube";

const steps = [
  {
    id: 1,
    title: "Consultation",
    description:
      "Discuss your project requirements, including the type of content, target audience, and desired turnaround time.over a call or in person, we’re all ears.",
  },
  {
    id: 2,
    title: "Content Submission",
    description: "Submit your written content for proofreading.",
  },
  {
    id: 3,
    title: "Proofreading",
    description:
      "  Our proofreaders will check for errors in grammar, spelling, punctuation, and formatting.",
  },
  {
    id: 4,
    title: "Feedback & Revisions",
    description:
      "Provide feedback and suggestions for improvement, if necessary.",
  },
  {
    id: 5,
    title: "Final Review",
    description:
      "Conduct a final review to ensure all corrections have been implemented.",
  },
  {
    id: 6,
    title: "Delivery",
    description:
      "Deliver the polished and error-free content in the original format.",
  },
];
const title ="Our proofreading expertise extends to various content domains, including:";
const list= [{content:"Academic: Research papers, dissertations, theses, essays, and academic publications."},
  {content:"Business: Reports, presentations, proposals, emails, marketing materials, and website content."},
  {content:"Creative: Novels, short stories, poems, scripts, and other creative writing."},
  {content:"Legal: Contracts, legal documents, and court filings."}

];
const description ="";
const Pr = () => {
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
            <span style={{ color: "indigo" }}>PROOFREADING</span>
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
              PROOFREADING
            </h1>

            <h2 className=" sm:max-w-[630px] text-[30px] sm:text-[40px] text-[#454EFF] font-semibold font-helvetica tracking-wide leading-relax uppercase z-10">
              About Proofreading
            </h2>
            <h1 className="text-2xl w-2/2 text-nowrap font-semibold md:text-2xl lg:text-2xl">
            Boost The Credibility Of Your <br /> Work With ProofReading
      </h1>
            <p className="text-[16px] w-full sm:max-w-[450px] text-black leading-7 z-10">
              Give us your written content to meticulously check for errors in
              grammar, spelling, punctuation, and formatting. We ensure that
              your message is polished, professional, and with enhanced clarity
              and coherence. By addressing even the smallest mistakes, we help
              you leave a lasting positive impression on your audience. Whether
              it's articles, reports, or any written material, our thorough
              proofreading ensures that your content meets high standards of
              quality.
            </p>
            
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] py-12">
        <div className="flex flex-col gap-[10px] relative items-center">
          <h1 className="absolute left-[20px] sm:left-[105px] sm:top-[-70px] top-[-30px]  text-[50px] sm:text-[130px] text-bg-gray-100 font-medium uppercase z-0 opacity-15">
            PROOFREADING
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
     < Proof />
  
    </div>
  );
};

export default Pr;
