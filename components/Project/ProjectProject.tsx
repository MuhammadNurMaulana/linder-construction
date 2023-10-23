import React from "react";
import ProjectMain from "../Fragments/ProjectMain";
import Title from "../Atoms/Title";

export default function ProjectProject() {
  return (
    <section className=" py-12">
      <Title title="Related Projects" />

      <div className="w-4/5 mx-auto mt-12 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectMain src={"/images/project1.jpg"} alt="image of project 1" />
          <ProjectMain src={"/images/project2.jpg"} alt="image of project 2" />
          <ProjectMain src={"/images/project3.jpg"} alt="image of project 3" />
        </div>
      </div>

      <div className="text-center">
        <button className="py-2 px-8 border border-slate-800 rounded">VIEW ALL</button>
      </div>
    </section>
  );
}
