import React from "react";

export default function Quote() {
  return (
    <div className="flex flex-col md:flex-row md:items-center p-4 md:justify-around my-8">
      <h1 className="font-semibold text-2xl md:text-3xl">Get a Quote For Your Project</h1>
      <button className="border-2 max-w-max border-yellow-500 rounded py-2 px-6 font-semibold">Free Quote</button>
    </div>
  );
}
