import Ask from "@/components/Elements/Ask";
import React from "react";

export default function ContactForm() {
  return (
    <section className="p-8 flex flex-col md:flex-row gap-8 mb-8">
      <div className="placeholder:text-slate-500 outline-none flex flex-col w-full md:w-1/2 gap-6 ">
        <h1 className="text-2xl font-semibold">Get In Touch</h1>
        <div className="w-12 h-1 bg-yellow-500" />
        <input type="text" placeholder="Your Name" className="rounded p-2" />
        <input type="email" placeholder="Email@example.com" className="rounded p-2" />
        <textarea placeholder="Message" cols={30} rows={10} className="rounded p-2" />
        <button className="border border-slate-800 rounded mx-auto max-w-max py-2 px-4">SEND MESSAGE</button>
      </div>
      <Ask />
    </section>
  );
}
