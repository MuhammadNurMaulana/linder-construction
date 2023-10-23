import Image from "next/image";
import React from "react";

export const HomeNoProject = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center p-4 md:justify-around my-8">
        <h1 className="font-semibold text-2xl md:text-3xl">Get a Quote For Your Project</h1>
        <button className="border-2 max-w-max border-yellow-500 rounded py-2 px-6 font-semibold">Free Quote</button>
      </div>

      <section>
        <div className="flex flex-col lg:flex-row w-full">
          <Image src={"/images/component4.jpg"} alt="construction" width={1080} height={500} quality={100} className="rounded mx-auto lg:mx-0 object-cover w-4/5 h-[200px] lg:h-auto lg:w-1/3" />

          <div className="flex flex-col justify-between lg:w-2/3">
            <div className="p-12">
              <h1 className="text-2xl font-semibold mb-8 pb-4 border-b-2 border-yellow-500">No Project Too Big Or Too Small</h1>
              <div className="flex flex-col md:flex-row text-justify gap-4">
                <p className="w-full md:w-1/2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aperiam fugiat maiores? Provident ullam facere a amet nisi ipsa quas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem esse facere quia quas
                  quos placeat, tempora maxime sunt ipsa odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, similique!
                </p>
                <p className="w-full md:w-1/2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam aperiam recusandae quisquam commodi rerum tempore eum voluptas, nemo, esse sit ab atque minima. Sed consectetur corrupti, eaque laborum temporibus
                  quibusdam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sint vitae aliquam atque cum repudiandae nulla aut ratione iure eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nobis.
                </p>
              </div>
              <div className="flex flex-col md:flex-row item-center mt-4 text-justify gap-4">
                <p className="w-full md:w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, illo!</p>
                <div className="w-full md:w-1/2">
                  <button className="border-2 border-slate-800 text-slate-900 px-6 rounded-md max-w-max py-3 max-h-max">LEARN MORE</button>
                </div>
              </div>
            </div>
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
    </>
  );
};
