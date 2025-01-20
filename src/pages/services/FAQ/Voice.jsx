import { useState } from "react";
import React from "react";
import { useEffect } from "react";

const FAQ = () => {
  const [acc, setAcc] = useState({});

  const qa = [
    {
      id: 1,
      ques: "What languages do you offer voiceovers in?",
      ans: "We provide voiceovers in many languages. If you need something not listed, just ask—we’ll find a solution. ",
    },
    {
      id: 2,
      ques: " What’s the typical turnaround time?",
      ans: " We usually deliver within 24-48 hours. If you need it quicker, let us know—we’ll do our best to meet your deadline.",
    },
    {
      id: 3,
      ques: "How do you choose the right voice actor?",
      ans: " We match the voice actor to your project based on the target audience, tone, and style needed.",
    },
    {
      id: 4,
      ques: "What audio formats can I receive my voiceover in?",
      ans: "We offer MP3, WAV, and AIFF formats. Just let us know which one works best for you. ",
    },
    {
      id: 5,
      ques: "Can you help with script writing or adaptation?",
      ans: " Yes! We can assist with scriptwriting, translation, and adaptation to make sure your script is ready for voiceover.",
    },
    {
      id: 6,
      ques: "What if I need revisions?",
      ans: " We provide revisions until you're 100% happy with the final recording.",
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
