import React from "react";
import BuildLeft from "../Atoms/BuildLeft";
import Ask from "../Fragments/Ask";

export default function MainAsk() {
  return (
    <section className="bg-[#F7F7F7] py-12">
      <div className="mx-auto md:w-4/5 flex flex-col gap-8 lg:gap-0 lg:flex-row">
        <BuildLeft title="Let`s Build Something Together" button="GET IN TOUCH" bgAndTextColor="text-slate-900 lg:w-1/2" />

        <Ask />
      </div>
    </section>
  );
}
