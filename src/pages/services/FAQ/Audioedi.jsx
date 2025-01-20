import { useState } from "react";
import React from "react";
import { useEffect } from "react";

const FAQ = () => {
  const [acc, setAcc] = useState({});

  const qa = [
    {
      id: 1,
      ques: " My raw audio quality is poor. Can you really improve it?",
      ans: "Yes, we specialize in enhancing raw audio. Our advanced tools and techniques can remove background noise, reduce distortions, and improve clarity, even in recordings with suboptimal quality. While there are limitations to extremely poor audio, we always provide a sample improvement before proceeding to ensure it meets your expectations.",
    },
    {
      id: 2,
      ques: "How can I be sure the final audio will match my expectations?",
      ans: "  We prioritize collaboration at every stage. During the consultation, we understand your vision in detail. After the editing and mixing phase, we provide drafts for your feedback, ensuring the final output aligns with your preferences. You also get multiple revision opportunities for complete satisfaction.",
    },
    {
      id: 3,
      ques: " I need this project completed quickly. Can you meet tight deadlines?",
      ans: " Absolutely! We offer expedited services for time-sensitive projects. Our efficient workflow and experienced team allow us to deliver high-quality results without compromising on quality. Let us know your deadline, and we’ll plan accordingly.",
    },
    {
      id: 4,
      ques: " What if I don’t like the final audio?",
      ans: "Your satisfaction is our priority. We offer revisions to address any concerns and incorporate your feedback until you’re happy with the result. If we’re unable to meet your expectations after reasonable efforts, we’re committed to finding a resolution that works for you.",
    },
    {
      id: 5,
      ques: " Do you work with specific audio formats, or can you handle anything?",
      ans: "We work with all major audio formats, including WAV, MP3, AAC, and more. If you have a unique or less common format, we can accommodate it or convert it into the required format for editing and delivery.",
    },
    {
      id: 6,
      ques: "  Can you handle large-scale projects with multiple files?",
      ans: " Yes, we have the capacity and expertise to manage projects of any size. Whether it’s a podcast series, a course with multiple modules, or an album, we ensure consistency and quality across all files.",
    },
    {
      id: 7,
      ques: "I’m concerned about the cost. How can I ensure this fits my budget?",
      ans: " Our pricing is flexible and tailored to your project’s needs. We provide clear, upfront quotes based on the project scope and offer packages or custom solutions to suit different budgets. Discussing your goals with us ensures we find the most cost-effective approach for you.",
    },
    {
      id: 8,
      ques: " Can you help with creative direction if I don’t have a clear vision for the audio?",
      ans: "Certainly! Our team is skilled in creative sound design and can provide recommendations based on your content type, target audience, and goals. Whether it’s selecting music, creating soundscapes, or advising on audio tone, we’re here to guide you.",
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
