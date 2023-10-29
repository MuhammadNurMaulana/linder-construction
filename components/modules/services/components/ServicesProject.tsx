import ProjectMain from "@/components/elements/ProjectMain";
import Title from "@/components/elements/Title";
import React from "react";

export default function ServicesProject() {
  return (
    <section className=" py-12">
      <Title title="Latest Projects" />

      <div className="w-4/5 mx-auto mt-12 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectMain src={"/images/services1.webp"} alt="image of service 1" title="Service Title" btnName="LEARN MORE" />
          <ProjectMain src={"/images/services2.webp"} alt="image of service 2" title="Service Title" btnName="LEARN MORE" />
          <ProjectMain src={"/images/services3.webp"} alt="image of service 3" title="Service Title" btnName="LEARN MORE" />
        </div>
      </div>

      <div className="text-center">
        <button className="py-2 px-8 border border-slate-800 rounded">VIEW ALL</button>
      </div>
    </section>
  );
}