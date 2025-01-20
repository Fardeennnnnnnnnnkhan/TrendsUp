import { useState } from "react";
import React from "react";
import { useEffect } from "react";

const FAQ = () => {
  const [acc, setAcc] = useState({});


  
  const qa = [
    {
      id: 1,
      ques: " What’s the difference between subtitles and closed captions?",
      ans: " Subtitles are for viewers who can hear but don’t understand the language. Closed captions are for those who are deaf or hard of hearing, including sound effects and music cues. ",
    },
    {
      id: 2,
      ques: " What video formats are supported for subtitling?",
      ans: " Supported formats include MP4, MOV, AVI, and others. Let us know if you need a specific format.",
    },
    {
      id: 3,
      ques: " Can you subtitle videos in multiple languages?",
      ans: " Yes! Subtitles can be provided in various languages, with translations that stay true to the original message.",
    },
    {
      id: 4,
      ques: "How long does it take to subtitle a video?",
      ans: "Typically 2-4 business days per hour of video, depending on the complexity of the content. ",
    },
    {
      id: 5,
      ques: "How much do subtitling services cost?",
      ans: "Pricing depends on the video length, number of languages, and turnaround time. Get in touch for a personalized quote.",
    },
    {
      id: 6,
      ques: "How do I submit a video for subtitling?",
      ans: " Send video files via Google Drive, Dropbox, or WeTransfer—whichever platform works best for you.",
    },
    {
      id: 7,
      ques: "Can you integrate subtitles directly into the video?",
      ans: "Yes, subtitles can be embedded into the video or provided as separate files, such as .srt or .vtt.",
    },
    {
      id: 8,
      ques: " Do you offer discounts for bulk orders or long-term projects?",
      ans: "Discounts are available for larger or ongoing projects. Reach out to discuss specific needs.",
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


