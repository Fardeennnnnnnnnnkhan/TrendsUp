import { useState } from "react";
import React from "react";
import { useEffect } from "react";

const FAQ = () => {
  const [acc, setAcc] = useState({});

  const qa = [
    {
      id: 1,
      ques: "What is the difference between closed captions and subtitles?",
      ans: " Closed captions are for viewers who are deaf or hard of hearing and include descriptions of sound effects and music. Subtitles typically only transcribe dialogue. ",
    },
    {
      id: 2,
      ques: "Why is closed captioning important?",
      ans: " It makes video content accessible to a wider audience, improves engagement, comprehension, and SEO.",
    },
    {
      id: 3,
      ques: " What video formats do you support?",
      ans: " Support for MP4, MOV, AVI, and other common video formats.",
    },
    {
      id: 4,
      ques: " In what languages can you provide closed captioning?",
      ans: "  Closed captioning is available in numerous languages. Please inquire for specific needs.",
    },
    {
      id: 5,
      ques: "How much does closed captioning cost?",
      ans: " Pricing depends on video length, language complexity, and turnaround time. Contact for a personalized quote.",
    },
    {
      id: 6,
      ques: " How do I get started with closed captioning my videos?",
      ans: "Simply contact with video files and project requirements to receive a quote and timeline.",
    },

  ];

  const toggleAccordion = (id) => {
    setAcc((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div
      name="FAQ"
      className="w-full h-full  bg-gradient-to-r from-blue-400  to-blue-100 py-6 border-t-4 border-white"
    >
      <h1
        className="text-white text-xl md:text-3xl font-bold  text-center"
        data-aos="fade-up"
      >
        <span className="text-white mr-2">▐</span>
        Frequently asked questions
      </h1>
      {qa.map(({ id, ques, ans }) => (
        <div
          key={id}
          data-aos="fade-up"
          className="p-4 bg-white w-5/6 mx-auto rounded-lg shadow-sm shadow-black   mt-[15px]"
        >
          <div className="py-[4px] ">
            <button
              onClick={() => toggleAccordion(id)}
              className="flex justify-between w-full text-left md:text-center"
            >
              <span>{ques}</span>
              <span className="font-bold text-2xl">{acc[id] ? "-" : "+"}</span>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in text-slate-600 text-sm ${
                acc[id]
                  ? " grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className=" overflow-hidden">{ans}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
