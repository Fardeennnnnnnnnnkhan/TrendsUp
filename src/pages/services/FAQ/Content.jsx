import { useState } from "react";
import React from "react";
import { useEffect } from "react";

const FAQ = () => {
  const [acc, setAcc] = useState({});

  const qa = [
    {
      id: 1,
      ques: "What types of content do you specialize in?",
      ans: "We specialize in a wide range of content, including website copy, blog posts, marketing materials, scripts, e-learning content, creative writing, technical writing, and more. ",
    },
    {
      id: 2,
      ques: "How do you ensure the quality of your writing?",
      ans: "Our team comprises experienced writers with excellent language skills and subject matter expertise. We also have a rigorous editing and quality control process to ensure all content is error-free, engaging, and tailored to your specific requirements.",
    },
    {
      id: 3,
      ques: "How do you handle revisions and feedback?",
      ans: "We welcome your feedback and are happy to make revisions to ensure your complete satisfaction with the final product.",
    },
    {
      id: 4,
      ques: " What is your pricing structure for content writing services?",
      ans: "Our pricing varies depending on the type of content, length, complexity, and turnaround time. We offer competitive rates and flexible pricing models to suit your budget and project needs. ",
    },
    {
      id: 5,
      ques: "Can you write in different tones and styles?",
      ans: "Absolutely! We can adapt our writing style to match your brand voice and target audience, whether it's formal, informal, humorous, informative, or persuasive.",
    },
    {
      id: 6,
      ques: "Do you offer content strategy and planning services?",
      ans: "Yes, we can help you develop a content strategy that aligns with your overall marketing goals and target audience.",
    },
    {
      id: 7,
      ques: "How do I get started with your content writing services?",
      ans: "Simply contact us with your project details, and we'll be happy to discuss your needs and provide a customized quote.",
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
