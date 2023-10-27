import Image from "next/image";
import React from "react";

interface Project {
  src: string;
  alt: string;
  title: string;
  btnName: string;
}

export default function ProjectMain({ src, alt, title, btnName }: Project) {
  return (
    <div>
      <Image src={src} alt={alt} width={600} height={600} className="aspect-square rounded-lg object-cover w-full" />
      <div className="pt-12 pb-4 px-4">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam atque aut, eveniet cupiditate autem praesentium.</p>
        <button className="mt-6 border border-slate-800 rounded py-2 px-4">{btnName}</button>
      </div>
    </div>
  );
}
