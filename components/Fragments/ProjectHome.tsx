import Image from "next/image";
import React from "react";

interface Project {
  src: string;
  alt: string;
}

export default function ProjectHome({ src, alt }: Project) {
  return (
    <div>
      <Image src={src} alt={alt} width={600} height={600} className="rounded-lg h-72 object-cover" />
      <div className="pt-12 pb-4 px-4">
        <h1>Project Title</h1>
        <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam atque aut, eveniet cupiditate autem praesentium.</p>
        <button className="mt-6 border border-slate-800 rounded py-2 px-4">VIEW PROJECT</button>
      </div>
    </div>
  );
}
