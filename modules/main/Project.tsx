import PageProject from "@/common/elements/PageProject";
import TitlePage from "@/common/elements/TitlePage";
import { getData } from "@/common/service";
import React from "react";

export default async function Project() {
  //   for (let i = 1; i <= 3; i++) {
  //     const projects = await getData(`http://localhost:3000/api/listproject${i}`);
  //   }

  return (
    <section className="bg-[#F7F7F7] py-12">
      <div className="py-12">
        <TitlePage title="Latest Projects" />

        <div className="w-4/5 mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PageProject href="/" src={"/images/main1.webp"} alt="image of project 1" title="Project Title" btnName="VIEW PROJECT" />
          </div>
        </div>
      </div>

      <div className="text-center">
        <button className="py-2 px-8 border border-slate-800 rounded">VIEW ALL</button>
      </div>
    </section>
  );
}
