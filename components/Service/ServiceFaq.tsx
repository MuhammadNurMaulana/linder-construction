import React from "react";
import Ask from "../Fragments/Ask";
import BuildLeft from "../Atoms/BuildLeft";

export default function ServiceFaq() {
  return (
    <section className="py-12">
      <div className="mx-auto md:w-4/5 flex flex-col gap-8 lg:gap-0 lg:flex-row">
        <BuildLeft title="F.A.Q" button="ASK A QUESTION" bgAndTextColor="text-slate-900 lg:w-1/2" />

        <Ask />
      </div>
    </section>
  );
}
