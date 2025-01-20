import { useState } from "react";
import React from "react";
import { useEffect } from "react";

const FAQ = () => {
  const [acc, setAcc] = useState({});

  const qa = [
    {
      id: 1,
      ques: " How do I know what parts of my video require audio descriptions?",
      ans: "During the video analysis phase, our experts carefully review your video to identify all key visual elements that are essential for understanding the content. This includes actions, on-screen text, settings, and visual cues that are not conveyed through the existing audio. We work closely with you to ensure nothing important is overlooked. ",
    },
    {
      id: 2,
      ques: "Will adding audio descriptions interfere with the original audio or dialogue?",
      ans: " Not at all! Our team ensures that audio descriptions are seamlessly integrated during natural pauses in the dialogue or audio. This preserves the flow of your original content while making it accessible to visually impaired audiences.",
    },
    {
      id: 3,
      ques: " My video is already long. Won’t audio descriptions make it too lengthy?",
      ans: "Audio descriptions are crafted to be concise and clear, fitting naturally within the existing structure of your video. If needed, we can recommend edits to optimize timing while ensuring the content remains engaging and informative.",
    },
    {
      id: 4,
      ques: " How can I be sure the descriptions will match the tone of my video?",
      ans: "During the video analysis phase, our experts carefully review your video to identify all key visual elements that are essential for understanding the content. This includes actions, on-screen text, settings, and visual cues that are not conveyed through the existing audio. We work closely with you to ensure nothing important is overlooked. ",
    },
    {
      id: 5,
      ques: "I have specific accessibility guidelines to follow. Can you accommodate them?",
      ans: " Not at all! Our team ensures that audio descriptions are seamlessly integrated during natural pauses in the dialogue or audio. This preserves the flow of your original content while making it accessible to visually impaired audiences.",
    },
    {
      id: 6,
      ques: "  How do I know the audio description quality will meet my standards?",
      ans: "Audio descriptions are crafted to be concise and clear, fitting naturally within the existing structure of your video. If needed, we can recommend edits to optimize timing while ensuring the content remains engaging and informative.",
    },
    {
      id: 7,
      ques: " What formats can you deliver the final audio-described video in?",
      ans: "During the video analysis phase, our experts carefully review your video to identify all key visual elements that are essential for understanding the content. This includes actions, on-screen text, settings, and visual cues that are not conveyed through the existing audio. We work closely with you to ensure nothing important is overlooked. ",
    },
    {
      id: 8,
      ques: "Why should I invest in audio descriptions when my current audience is not visually impaired?",
      ans: " Adding audio descriptions not only promotes inclusivity but also broadens your audience reach, enhances your brand reputation, and complies with accessibility regulations. It shows your commitment to creating an equal experience for all viewers, which can positively impact your brand image and appeal.",
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
