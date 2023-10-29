import React from "react";

interface Props {
  title?: string;
  btnCls?: string;
  className?: string;
}

export default function OnlyTheBest({ title, btnCls, className }: Props) {
  return (
    <div className={`px-8 w-full md:w-[40%] ${className}`}>
      <h1 className={`text-3xl font-semibold ${title}`}>Only The Best</h1>
      <div className="ml-5">
        <h2 className="text-lg font-semibold my-5">Eco Friendly Construction</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, repudiandae!</p>
      </div>
      <div className="ml-5">
        <h2 className="text-lg font-semibold my-5">The Neweast Technology Repairs</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, repudiandae!</p>
      </div>
      <div className="ml-5">
        <h2 className="text-lg font-semibold my-5">High Quality Construction Management</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, repudiandae!</p>
      </div>
      <button className={`py-2 px-4 rounded border border-yellow-500 text-yellow-500 font-semibold text-lg mt-8 ${btnCls}`}>FREE QUOTE</button>
    </div>
  );
}
