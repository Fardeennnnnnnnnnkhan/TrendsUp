import { useState } from "react";
import React from "react";
import { useEffect } from "react";

const FAQ = () => {
  const [acc, setAcc] = useState({});

  const qa = [
    {
      id: 1,
      ques: "What’s the difference between localization and translation?",
      ans: "Translation converts text from one language to another. Localization goes a step further by adapting the content to fit the cultural and market-specific context of a particular region, including local regulations and technical requirements. ",
    },
    {
      id: 2,
      ques: "  Why is localization important for my business?",
      ans: " Localization helps you connect with a broader audience, boost engagement, and build trust with customers in different markets. It shows your commitment to their language and culture, leading to stronger brand perception and more sales.",
    },
    {
      id: 3,
      ques: "What types of content can be localized?",
      ans: " We can localize all types of content, including websites, software, apps, games, multimedia, marketing materials, documents, and e-learning courses.",
    },
    {
      id: 4,
      ques: "How much does localization cost?",
      ans: "The cost of localization depends on factors like content complexity, volume, and language requirements. We offer competitive pricing and flexible packages to suit your budget. ",
    },
    {
      id: 5,
      ques: "How long does localization take?",
      ans: " The timeline depends on the scope of your project. We work efficiently to deliver high-quality results within your desired timeframe.",
    },
    {
      id: 6,
      ques: "How do I get started with localization?",
      ans: "Contact us for a free consultation. We'll discuss your goals, target market, and content needs to develop a personalized localization strategy.",
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
