import Image from "next/image";
import React from "react";

export default function ContentProject() {
  return (
    <section className="w-full md:w-4/5 mx-auto">
      <Image src={"/images/project6.webp"} alt="project" width={1080} height={1080} className="rounded object-cover w-full h-[50vh] object-center" />

      <div className="py-8 flex flex-col md:flex-row gap-8">
        <Image src={"/images/project4.webp"} alt="project" width={600} height={600} className="rounded mx-auto object-cover w-4/5 md:w-[40%] h-[35vh]" />
        <p className="w-4/5 mx-auto md:w-[60%] text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consequatur dignissimos eius vitae sint quo similique facere cumque quaerat eligendi ullam, unde velit quibusdam quasi ipsum, corporis accusantium, dolorem soluta.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, nesciunt?
        </p>
      </div>
    </section>
  );
}
