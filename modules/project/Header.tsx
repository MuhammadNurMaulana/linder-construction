import PageHeader from "@/common/elements/PageHeader";
import React from "react";

export default function HeaderProject() {
  return (
    <section className="bg-home2 bg-cover bg-center">
      <PageHeader title="Monarch HQ Project" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ipsum. Vitae deserunt placeat quas dignissimos! Lorem ipsum dolor sit amet." btnCls="hidden" to="/">
        <div className="w-full lg:w-[40%]  max-h-max py-8 lg:h-screen flex flex-col px-4 gap-4 lg:justify-center items-start text-sm md:text-lg md:font-semibold text-white ">
          <h4>Date: 22 September 2023</h4>
          <h4>Client: Monarch Group</h4>
          <h4>Project Type: Building Renovation</h4>
        </div>
      </PageHeader>
    </section>
  );
}
