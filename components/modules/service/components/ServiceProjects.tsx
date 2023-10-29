import ProjectMain from "@/components/elements/ProjectMain";
import Title from "@/components/elements/Title";
import React from "react";

export default function ServiceProjects() {
  return (
    <section className="py-12">
      <div className="py-12">
        <Title title="Related Projects" />

        <div className="w-4/5 mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectMain src={"/images/service2.webp"} alt="image of project 1" title="Project Title" btnName="LEARN MORE" />
            <ProjectMain src={"/images/service3.webp"} alt="image of project 2" title="Project Title" btnName="LEARN MORE" />
            <ProjectMain src={"/images/service4.webp"} alt="image of project 3" title="Project Title" btnName="LEARN MORE" />
          </div>
        </div>
      </div>

      <div className="text-center">
        <button className="py-2 px-8 border border-slate-800 rounded">VIEW ALL</button>
      </div>
    </section>
  );
}
