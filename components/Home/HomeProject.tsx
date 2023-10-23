import React from "react";
import ProjectHome from "../Fragments/ProjectHome";

export default function HomeProject() {
  return (
    <section>
      <div className="my-12">
        <h1 className="text-center text-3xl font-semibold mb-4">Latest Projects</h1>
        <div className="w-12 h-1 bg-yellow-500 mx-auto" />

        <div className="w-4/5 mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectHome src={"/images/project1.jpg"} alt="image of project 1" />
            <ProjectHome src={"/images/project2.jpg"} alt="image of project 2" />
            <ProjectHome src={"/images/project3.jpg"} alt="image of project 3" />
          </div>
        </div>
      </div>

      <div className="text-center">
        <button className="py-2 px-8 border border-slate-800 rounded">VIEW ALL</button>
      </div>
    </section>
  );
}
