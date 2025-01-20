import { useState } from "react";
import React from "react";
import { useEffect } from "react";

const FAQ = () => {
  const [acc, setAcc] = useState({});

  const qa = [
    {
      id: 1,
      ques: "What is the difference between proofreading and editing?",
      ans: "Proofreading focuses on correcting surface-level errors like grammar, spelling, and punctuation. Editing involves a deeper review of the content, including structure, clarity, and style. ",
    },
    {
      id: 2,
      ques: " What types of files do you accept for proofreading?",
      ans: " We accept various file formats, including Microsoft Word (.doc, .docx), PDF (.pdf), plain text (.txt), and more.",
    },
    {
      id: 3,
      ques: "How long will it take to proofread my document?",
      ans: " The turnaround time depends on the length and complexity of your content. We can provide an estimated timeframe once we review your document.",
    },
    {
      id: 4,
      ques: "How much do your proofreading services cost?",
      ans: "Our pricing is competitive and depends on the length of your document, the type of content, and the turnaround time. Contact us for a custom quote. ",
    },
    {
      id: 5,
      ques: "Do you offer discounts for bulk orders?",
      ans: " Yes, we offer discounts for larger projects or ongoing collaborations.",
    },
    {
      id: 6,
      ques: " How do I submit my document for proofreading?",
      ans: " You can securely submit your document through our online portal or via email.",
    },
    {
      id: 7,
      ques: "What if I have questions or need revisions after proofreading?",
      ans: "We are always available to answer your questions and provide support. We also offer a revision round to ensure your complete satisfaction. ",
    },
    {
      id: 8,
      ques: "Do you guarantee confidentiality?",
      ans: " Yes, we treat all client information with the utmost confidentiality and ensure the secure handling of your documents.",
    },
    {
      id: 9,
      ques: ": What experience do your proofreaders have?",
      ans: " Our proofreaders are highly experienced language professionals with expertise in various domains. They are committed to delivering accurate and thorough proofreading services.",
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
