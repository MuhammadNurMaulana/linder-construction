import BuildLeft from "@/components/Atoms/BuildLeft";
import Title from "@/components/Atoms/Title";
import WhatWeDoHeader from "@/components/Atoms/WhatWeDoHeader";
import Ask from "@/components/Fragments/Ask";
import HeaderTwoPage from "@/components/Fragments/HeaderTwoPage";
import ProjectMain from "@/components/Fragments/ProjectMain";
import Image from "next/image";
import React from "react";

export default function ServicePage() {
  return (
    <>
      <section className="bg-home3 pb-8">
        <HeaderTwoPage title="Framing" paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolores cupiditate facilis ut maxime adipisci consectetur quasi." button="GET A QUOTE">
          <WhatWeDoHeader clsTitle="hidden" />
        </HeaderTwoPage>
      </section>

      <section className="w-full md:w-4/5 mx-auto flex flex-col md:flex-row p-4 my-12 text-justify gap-8">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus sed assumenda, nulla ex totam illum numquam fugit repellendus, nihil non officia nostrum sint labore quae eligendi, reiciendis ut dicta. Facere ab commodi ratione
          tempora voluptatibus molestias, quaerat temporibus autem iusto!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eos repudiandae accusamus eaque iste et ratione non tempora deleniti dolorum, officiis, nobis voluptates rerum voluptatem? Pariatur voluptas molestias architecto!
          Quam sit repellat quibusdam error ipsum?
        </p>
      </section>

      <section>
        <div className="flex flex-col lg:flex-row">
          <BuildLeft title="About Process" bgAndTextColor="text-white bg-black lg:w-1/3" btnCls="hidden">
            <p> - Lorem, ipsum dolor</p>
            <p> - Lorem ipsum dolor sit amet</p>
            <p> - Lorem, ipsum</p>
            <p> - Lorem ipsum dolor sit</p>
            <p> - Lorem, ipsum</p>
            <p> - Lorem ipsum dolor sit</p>
          </BuildLeft>

          <div className="w-full lg:w-2/3">
            <Image width={600} height={600} quality={100} src={"/images/building.jpg"} alt="constructor building" className="w-full object-cover object-top" />
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="py-8 text-center w-full md:w-1/2 bg-yellow-500 text-slate-900">
                <h1>Call for a Quote</h1>
                <p>08 123 456 789</p>
              </div>
              <div className="py-8 w-full md:w-1/2">
                <h1 className="border mx-auto border-slate-800 max-w-max rounded py-2 px-4 font-semibold">ONLINE ESTIMATE FORM</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="py-12">
          <Title title="Related Projects" />

          <div className="w-4/5 mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectMain src={"/images/project1.jpg"} alt="image of project 1" title="Project Title" btnName="LEARN MORE" />
              <ProjectMain src={"/images/project2.jpg"} alt="image of project 2" title="Project Title" btnName="LEARN MORE" />
              <ProjectMain src={"/images/project3.jpg"} alt="image of project 3" title="Project Title" btnName="LEARN MORE" />
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="py-2 px-8 border border-slate-800 rounded">VIEW ALL</button>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto md:w-4/5 flex flex-col gap-8 lg:gap-0 lg:flex-row">
          <BuildLeft title="F.A.Q" button="ASK A QUESTION" bgAndTextColor="text-slate-900 lg:w-1/2" />

          <Ask />
        </div>
      </section>
    </>
  );
}
