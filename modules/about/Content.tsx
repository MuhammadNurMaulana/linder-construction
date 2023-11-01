import OnlyTheBest from "@/common/elements/OnlyTheBest";
import Image from "next/image";
import React from "react";

export default function ContentAbout() {
  return (
    <section className="my-16">
      <div className="flex flex-col md:flex-row gap-8">
        <OnlyTheBest />

        <div className="w-full md:w-[60%]">
          <Image src={"/images/about.webp"} alt="about" width={1080} height={1080} className="rounded object-cover w-full object-center " />
          <div className="flex">
            <div className="w-1/2 text-center py-4 bg-yellow-500 text-slate-800">
              <h1 className="text-xl font-semibold">12</h1>
              <p className="font-semibold">YEARS ESTABLISHED</p>
            </div>
            <div className="w-1/2 text-center py-4 bg-slate-800 text-white">
              <h1 className="text-xl font-semibold">250</h1>
              <p className="font-semibold">COMPLETED PROJECTS</p>
            </div>
          </div>

          <div className="flex">
            <div className="w-1/2 text-center py-4 ">
              <h1 className="text-xl font-semibold">24</h1>
              <p className="font-semibold">FIELD WORKERS</p>
            </div>
            <div className="w-1/2 text-center py-4">
              <h1 className="text-xl font-semibold">18</h1>
              <p className="font-semibold">OFFICE STAFF</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
