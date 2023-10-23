import Image from "next/image";
import React from "react";

export default function ProjectContent() {
  return (
    <section className="w-full md:w-4/5 mx-auto">
      <Image src={"/images/component5.jpg"} alt="project" width={1080} height={500} className="rounded object-cover w-full h-[50vh] object-center" />

      <div className="py-8 flex flex-col md:flex-row gap-8">
        <Image src={"/images/component7.jpg"} alt="project" width={1080} height={500} className="rounded mx-auto object-cover w-4/5 md:w-[40%] h-[35vh]" />
        <p className="w-4/5 mx-auto md:w-[60%] text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consequatur dignissimos eius vitae sint quo similique facere cumque quaerat eligendi ullam, unde velit quibusdam quasi ipsum, corporis accusantium, dolorem soluta.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, nesciunt?
        </p>
      </div>
    </section>
  );
}
