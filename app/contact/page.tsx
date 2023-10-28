import Ask from "@/components/Fragments/Ask";
import HeaderTwoPage from "@/components/Fragments/HeaderTwoPage";
import React from "react";

export default function ContactPage() {
  return (
    <>
      <section className="bg-home7 bg-cover bg-center">
        <HeaderTwoPage title="Constact Us" paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolores cupiditate facilis ut maxime adipisci consectetur quasi." button="SEND A MESSAGE" />
      </section>

      <section className="w-4/5 mx-auto py-8 flex flex-col md:flex-row md:justify-between gap-6">
        <div>
          <h1 className="text-2xl font-semibold text-yellow-500">Call: +62 831 3744 6693</h1>
          <p className="font-semibold">We Can`t Wait Make Your Ideas a Reality</p>
        </div>
        <div>
          <button type="button" className="p-3 border border-yellow-500 rounded ">
            ONLINE ESTIMATE FONT
          </button>
        </div>
      </section>

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

      <section className="py-12 px-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63422.031743031905!2d106.7843584!3d-6.537215999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1698477310024!5m2!1sid!2sid"
          className="rounded mx-auto w-full h-[35vh]"
          style={{ border: 0 }}
          loading="lazy"
        />
      </section>
    </>
  );
}
