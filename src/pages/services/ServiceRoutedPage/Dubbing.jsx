import React from "react";
import Dub from "../../../assets/Dubbing.png";
import { IoIosArrowForward } from "react-icons/io";
import Form from "../../../components/LetTalkForm";
import Faq from "../FAQ/Faq";
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
    title: "Script Adaption",
    description:
      "After understanding your goals, we adapt your script with cultural nuances and lip-sync in mind. This step ensures a natural fit for the target language and local audience.",
  },
  {
    id: 3,
    title: "Voice Casting",
    description:
      "Our casting process selects professional voice actors who match exactly with the character's personality and tone. This step is done to enhance the emotional connection with viewers.",
  },
  {
    id: 4,
    title: "Recording",
    description:
      "Our directors work closely with voice actors in the studio. They oversee every detail to ensure clear pronunciation, emotional authenticity, and a perfect match with your vision.",
  },
  {
    id: 5,
    title: "Audio Editing & Mixing",
    description:
      "Team of skilled editors synchronize the recorded audio to match the video. This step adjusts levels and adds sound effects to create a seamless experience..",
  },
  {
    id: 6,
    title: "Quality Control",
    description:
      "A dedicated human QC team reviews your project for accuracy, synchronization, and overall quality, with AI support for a final polish.",
  },
  {
    id: 7,
    title: "Delivery",
    description:
      "Receive your final product in the format of your choice. This final document would be according to the standards set during our initial consultation.",
  },
];
const titel = "Domains We Cover In Dubbing";
const description ="";
const list = [
  {
    content:
      "Entertainment: Movies, TV shows, and animation brought to life with voices that capture cultural nuances.",
  },
  {
    content:
      "E-learning: Globalize your educational content for diverse learners.",
  },
  {
    content:
      "Marketing & Advertising: Create ad content that resonates with target regions.",
  },
  {
    content:
      "Corporate: Localize internal communications, training videos, and presentations.",
  },
  {
    content:
      "Gaming: Let players connect with characters and stories through native voices.",
  },
  {
    content:
      "Documentaries: Share powerful stories across languages and cultures.",
  },
  {
    content:
      "YouTube & Social Media: Broaden the reach of your online videos effortlessly.",
  },
];
const Dubbing = () => {
  return (
    <div>
      <section className="h-[500px] flex items-center justify-center  bg-gradient-radial from-green-100 via-blue-200 to-white sm:bg-[url('./assets/pagetitle-1.jpg')] bg-cover bg-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-black mb-4 tracking-[5px]">
            SERVICES
          </h1>
          <p className="text-2xl text-black flex text-center mx-[40px] font-mono">
            SERVICES{" "}
            <IoIosArrowForward style={{ fontSize: "33px", color: "indigo" }} />
            <span style={{ color: "indigo" }}>DUBBING</span>
          </p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-0">
        <div className="sm:px-[70px] bg-[#FFFFFF] pt-[150px] pb-[60px] flex flex-col sm:flex-row justify-between items-center gap-[10px]">
          <div className="flex  justify-center items-center relative  ">
            <img src={Dub} className="w-full max-w-[550px] rounded-xl"></img>
          </div>

          <div className="flex flex-col  gap-[20px] relative">
            <h1 className="hidden sm:block absolute left-[-30px] top-[-120px] text-[160px] text-[#4CA4FF] opacity-20 font-medium uppercase z-0">
              DUB
            </h1>

            <h2 className=" sm:max-w-[630px] text-[30px] sm:text-[40px] text-[#454EFF] font-semibold font-helvetica tracking-wide leading-relax uppercase z-10">
              About Dubbing
            </h2>
            <h1 className="text-2xl w-2/2 text-nowrap font-semibold md:text-2xl lg:text-2xl">
        Dubbing Is Not About Sounding <br /> Right – It Is About Feeling Right
      </h1>

            <p className="text-[16px] sm:max-w-[450px] text-black leading-7 z-10">
              We work with experienced, native-speaking voice actors with 3-5
              years in the field, who bring your content to life. They replace
              original voices with authenticity and emotion. Unlike AI, our
              dubbing captures subtle emotions, tone, timing, and cultural
              nuances which confirms that your content resonates deeply with the
              targeted audience.
            </p>
           
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] py-12">
        <div className="flex flex-col gap-[10px] relative items-center">
          <h1 className="absolute left-[30px] sm:left-[105px] sm:top-[-70px] top-[-30px]  text-[50px] sm:text-[130px] text-bg-gray-100 font-medium uppercase z-0 opacity-15">
            Dubbing
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
                  <div className="flip-card-back bg-[#14133B] p-3 rounded-lg shadow-lg flex items-center justify-center">
                    <p className="text-white">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Dube title={titel} description={description} list={list} />
      <Faq />
    
    </div>
  );
};

export default Dubbing;
