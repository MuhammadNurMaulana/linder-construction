import { getData } from "@/services/blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function PortfolioProject() {
  const projects = await getData(`${process.env.API_KEY_URL}/api/portofolio`);

  return (
    <section className="my-12">
      <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.data.length > 0 &&
          projects.data.map((project: { id: number; desc: string; img: string; alt: string }) => (
            <div key={project.id} className="pb-12 rounded">
              <Image src={project.img} width={640} height={426} alt={project.alt} className="rounded h-[30vh]" />

              <div className="p-4 border border-slate-800 rounded flex flex-col gap-4 mt-4">
                <div className="h-48 lg:h-40">
                  <h1 className="text-lg font-semibold">Service Title</h1>
                  <p className="text-sm text-slate-700 line-clamp-5">{project.desc}</p>
                </div>

                <Link href={`/portfolio/projects/${project.id}`} aria-description={project.alt} aria-label={project.alt} className="border border-slate-800 hover:border-slate-900 py-2 px-4 rounded text-center">
                  LEARN MORE
                </Link>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
