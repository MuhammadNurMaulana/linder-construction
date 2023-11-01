import LeftNoProject from "@/common/elements/LeftNoProject";
import OnlyTheBest from "@/common/elements/OnlyTheBest";
import React from "react";

export default function ContentHome() {
  return (
    <section className="my-16">
      <div className="flex flex-col md:flex-row">
        <OnlyTheBest title="hidden" btnCls="hidden" className="bg-yellow-500 text-slate-950" />

        <div className="w-full md:w-[60%]">
          <LeftNoProject btnCls="hidden" />

          <div className="flex w-full p-4 bg-slate-800 text-white justify-between">
            <h1 className="py-2 px-4 font-semibold text-lg border border-none">Get Free Consultant</h1>
            <button className="py-2 px-4 rounded border border-yellow-500 text-yellow-500 font-semibold">ONLINE ESTIMATE FORM</button>
          </div>
        </div>
      </div>
    </section>
  );
}
