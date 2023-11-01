import PageProject from "@/common/elements/PageProject";
import TitlePage from "@/common/elements/TitlePage";
import { getData } from "@/common/service";
import React from "react";

export default async function Project() {
  const project = await getData("http://localhost:3000/api/main");
  const projects = project.data;

  return (
    <section className="py-12">
      <div className="py-12">
        <TitlePage title="Latest Projects" />

        <div className="w-4/5 mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.length > 0 &&
              projects.map((project: any) => (
                <div key={project.id}>
                  <PageProject href={`/main/${project.id}`} src={project.img} alt={`image of project ${project.id}`} title={project.title} btnName="VIEW PROJECT" />
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="text-center">
        <button className="py-2 px-8 border border-slate-800 rounded">VIEW ALL</button>
      </div>
    </section>
  );
}
