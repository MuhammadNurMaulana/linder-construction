import React from "react";
import BuildLeft from "../Atoms/BuildLeft";
import Image from "next/image";

export default function ProjectAbout() {
  return (
    <section className="w-4/5 mx-auto flex py-12 flex-col lg:flex-row">
      <BuildLeft title="About This Project" bgAndTextColor="lg:w-1/2" btnCls="hidden">
        <p> - Lorem, ipsum dolor</p>
        <p> - Lorem ipsum dolor sit amet</p>
        <p> - Lorem ipsum dolor sit</p>
        <p> - Lorem, ipsum</p>
      </BuildLeft>

      <Image src={"/images/project3.webp"} alt="project" width={800} height={800} className="rounded mx-auto object-cover w-full lg:w-1/2" />
    </section>
  );
}
