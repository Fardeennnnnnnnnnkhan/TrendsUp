import { useState } from "react";
import React from "react";
import { useEffect } from "react";

const Dube = ({ title = "", list = [], description = "" }) => {
  return (
    <>
      <div className="bg-gray-200 text-black py-10 px-5  ">
        <div className="max-w-4xl text-start mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6  text-left">
            {title}
          </h1>
          <p className="text-lg md:text-xl mb-6 text-left">
            {description}
          </p>
          <ul className="space-y-2 text-base mt-10 md:text-lg list-disc text-left">
            {list.map((item, index) => {
              return <li key={index}>{item.content}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dube;
