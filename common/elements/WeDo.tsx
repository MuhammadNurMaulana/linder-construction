import Image from "next/image";
import React from "react";

interface Props {
  clsTitle?: string;
}

export default function Wedo({ clsTitle }: Props) {
  return (
    <div className="flex flex-col justify-center gap-6 w-full lg:w-[40%] text-white px-4">
      <h1 className={`text-2xl text-yellow-600 font-semibold mb-4 ${clsTitle}`}>What We Do</h1>
      {weDo.map((item, index) => (
        <div className="flex gap-3" key={index}>
          <Image src={item.src} alt={item.alt} width={100} height={100} className="w-[70px] h-[70px]" />
          <div>
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const weDo = [
  {
    src: "/images/wedo1.png",
    name: "Building Construction",
    alt: "constructiom",
  },
  {
    src: "/images/wedo3.png",
    name: "Building Repairs",
    alt: "repairs",
  },
  {
    src: "/images/wedo2.png",
    name: "Custom Design",
    alt: "design",
  },
];
