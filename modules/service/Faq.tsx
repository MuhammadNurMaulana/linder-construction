import Ask from "@/common/elements/Ask";
import BuildLeft from "@/common/elements/BuildLeft";
import React from "react";

export default function Faq() {
  return (
    <section className="py-12">
      <div className="mx-auto md:w-4/5 flex flex-col gap-8 lg:gap-0 lg:flex-row">
        <BuildLeft title="F.A.Q" button="ASK A QUESTION" bgAndTextColor="text-slate-900 lg:w-1/2" />

        <Ask />
      </div>
    </section>
  );
}
