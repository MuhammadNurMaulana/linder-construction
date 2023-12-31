import LeftNoProject from "@/common/elements/LeftNoProject";
import Quote from "@/common/elements/Quote";
import Image from "next/image";
import React from "react";

export default function NoProject() {
  return (
    <section>
      <Quote />
      <div className="flex flex-col lg:flex-row w-full">
        <Image src={"/images/main4.webp"} alt="construction" width={1080} height={650} className="rounded mx-auto lg:mx-0 object-cover w-4/5 h-[200px] lg:h-auto lg:w-1/3" />

        <div className="flex flex-col justify-between lg:w-2/3 bg-[#F7F7F7]">
          <LeftNoProject />
          <div className="flex items-center box-border text-center">
            <div className="w-1/2 bg-yellow-500 text-slate-950 py-8">
              <h1 className="font-semibold text-3xl">12</h1>
              <p className="font-semibold text-xs">YEARS ESTABLISIHED</p>
            </div>
            <div className="w-1/2 bg-black text-white py-8">
              <h1 className="font-semibold text-3xl">250</h1>
              <p className="font-semibold text-xs">COMPLETED PROJECTS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
