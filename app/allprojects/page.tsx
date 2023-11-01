import PageProject from "@/common/elements/PageProject";
import TitlePage from "@/common/elements/TitlePage";
import { getData } from "@/common/service";
import { ProjectMain } from "@/common/types/type";
import React from "react";

export default async function AllProjects() {
  const project = await getData(`${process.env.API_KEY_URL}/api/listproject`);
  const projects = project.data;

  return (
    <section className="py-12">
      <div className="py-52">
        <TitlePage title="List Of Projects" />

        <div className="w-4/5 mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.length > 0 &&
              projects.map((project: ProjectMain) => (
                <div key={project.id}>
                  <PageProject href={`/allprojects/details/${project.id}`} src={project.img} alt={`image of project ${project.id}`} title={project.title} btnName="VIEW MORE" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
