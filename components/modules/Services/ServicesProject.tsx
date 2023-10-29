import ProjectMain from "@/components/Elements/ProjectMain";
import Title from "@/components/Elements/Title";
import React from "react";

export default function ServicesProject() {
  return (
    <section className=" py-12">
      <Title title="Latest Projects" />

      <div className="w-4/5 mx-auto mt-12 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectMain src={"/images/project4.jpg"} alt="image of service 1" title="Service Title" btnName="LEARN MORE" />
          <ProjectMain src={"/images/project5.jpg"} alt="image of service 2" title="Service Title" btnName="LEARN MORE" />
          <ProjectMain src={"/images/project6.jpg"} alt="image of service 3" title="Service Title" btnName="LEARN MORE" />
        </div>
      </div>

      <div className="text-center">
        <button className="py-2 px-8 border border-slate-800 rounded">VIEW ALL</button>
      </div>
    </section>
  );
}
