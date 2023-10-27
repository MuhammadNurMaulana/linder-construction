import React from "react";

export default function ServicesContent({ title }: { title: string }) {
  return (
    <section className="w-full md:w-[90%] mx-auto text-justify mt-8">
      <div className="w-4/5 mx-auto">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <div className="w-12 h-1 bg-yellow-500 mt-5 mb-9" />

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eius odio necessitatibus facere cum porro. Sapiente, debitis quis atque dolorum nesciunt tempore libero, in ex recusandae commodi ut natus fugiat!</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consequatur odit sed sequi ab similique, facere aut enim harum autem.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aspernatur tempore ullam eligendi! Eius, illo!</p>
      </div>

      <div className="flex items-center mt-8">
        <div className="bg-slate-800 w-1/2 py-8 text-center">
          <button type="button" className="border py-1 px-3 text-sm md:text-lg md:py-2 md:px-5 rounded border-white text-white font-semibold">
            GET A QUOTE
          </button>
        </div>
        <div className="bg-yellow-500 w-1/2 py-8 text-center">
          <button type="button" className="border py-1 px-3 text-sm md:text-lg md:py-2 md:px-5 rounded border-white text-white font-semibold">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
}
