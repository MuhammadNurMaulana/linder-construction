"use client";
import { useState } from "react";
import React from "react";

export default function Ask() {
  const [openAsk, setOpenAsk] = useState(Asks.map(() => false));

  const toggleAsk = (index: number) => {
    const updateAsk = [...openAsk];
    updateAsk[index] = !updateAsk[index];

    setOpenAsk(updateAsk);
  };
  return (
    <div className="bg-white py-8 px-5 rounded flex flex-col gap-6 w-full lg:w-1/2">
      {Asks.map((ask, index) => (
        <div key={index}>
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold w-4/5 lg:w-full">{ask.name}</h1>
            <button type="button" onClick={() => toggleAsk(index)} className="w-10 h-10 rounded-full bg-yellow-500">
              {openAsk[index] ? "-" : "+"}
            </button>
          </div>
          <p className={`${openAsk[index] ? "block" : "hidden"}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur neque sapiente error et quos suscipit.</p>
        </div>
      ))}
    </div>
  );
}

const Asks = [
  {
    name: "Donec rutrum congue leo eget malesuada?",
  },
  {
    name: "Vivamus suscipit tortor eget felis porttitor volutpat?",
  },
  {
    name: "Curabitur non nulla sit amet nisl tempus?",
  },
  {
    name: "Pellentesque in ipsum id orci porta dapibus?",
  },
  {
    name: "Curabitur non nulla sit amet nisl?",
  },
];
