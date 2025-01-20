import { useState } from "react";
import React from "react";
import { useEffect } from "react";

const FAQ = () => {
  const [acc, setAcc] = useState({});

  const qa = [
    {
      id: 1,
      ques: "What audio and video formats do you accept?",
      ans: " Accepts MP3, WAV, MP4, MOV, AVI, and more.",
    },
    {
      id: 2,
      ques: " How long does transcription take?",
      ans: "Standard turnaround is 1 hour of content per day per resource. Urgent requests can be accommodated.",
    },
    {
      id: 3,
      ques: " What’s the difference between clean verbatim and edited transcription?",
      ans: " Clean verbatim includes every word spoken, including filler words ( um ah). Edited transcription removes fillers and corrects grammar for readability.",
    },
    {
      id: 4,
      ques: "Do you offer discounts for bulk orders?",
      ans: "Yes, discounts are available for larger projects. ",
    },
    {
      id: 5,
      ques: "How do you ensure transcript accuracy?",
      ans: " Transcriptionists are highly trained, and a quality control team reviews every transcript.",
    },
    {
      id: 6,
      ques: " Can I add timestamps to my transcript?",
      ans: "  Yes, timestamps can be added at regular intervals or at speaker changes.",
    },
    {
      id: 7,
      ques: " How do I submit my files?",
      ans: "Share files securely via platforms like Google Drive, Dropbox, or WeTransfer. ",
    },
    {
      id: 8,
      ques: " What if I have a question or need support?",
      ans: " Support is always available via email or phone.",
    },
    {
      id: 9,
      ques: "Do you offer refunds?",
      ans: "  We'll work to resolve any issues, just drop your concern in the chat box.",
    },
    {
      id: 10,
      ques: "What’s your experience in transcription?",
      ans: "  Extensive experience providing high-quality transcription across industries.",
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
