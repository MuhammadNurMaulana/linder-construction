import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  alt: string;
  blog1: string;
  blog2: string;
  blog3: string;
  blog4: string;
  title?: string;
  date?: string;
}

export default function DetailContent({ src, alt, blog1, blog2, blog3, blog4, title, date }: Props) {
  return (
    <div className="w-4/5 mx-auto text-justify">
      <h2 className="text-xl font-semibold pb-8 border-b-2 border-slate-800">{title}</h2>
      <p className="text-xs font-semibold text-slate-500 pb-8 pt-2 ">{date}</p>
      <Image src={src} alt={alt} width={1080} height={1080} className="w-full h-[50vh] object-cover object-center rounded" priority={true} />
      <div className="mt-8 flex flex-col justify-center gap-8">
        <p>{blog1}</p>
        <p>{blog2}</p>
        <p>{blog3}</p>
        <p>{blog4}</p>
      </div>
    </div>
  );
}
