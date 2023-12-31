import { getData } from "@/common/service";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function ProjectsPortofolio() {
  const project = await getData(`${process.env.API_KEY_URL}/api/portofolio`);
  const projects = project.data;
  return (
    <section className="my-12">
      <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.length > 0 &&
          projects.map((project: { id: number; desc: string; img: string; alt: string }) => (
            <div key={project.id} className="pb-12 rounded">
              <Image src={project.img} width={600} height={600} alt={project.alt} className="rounded h-[35vh] w-full" />

              <div className="p-4 border border-slate-800 rounded flex flex-col gap-4 mt-4">
                <div className="h-48 lg:h-40">
                  <h1 className="text-lg font-semibold">Service Title</h1>
                  <p className="text-sm text-slate-700 line-clamp-5">{project.desc}</p>
                </div>

                <Link href={`/portfolio/details/${project.id}`} className="border border-slate-800 hover:border-slate-900 py-2 px-4 rounded text-center">
                  LEARN MORE
                </Link>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
