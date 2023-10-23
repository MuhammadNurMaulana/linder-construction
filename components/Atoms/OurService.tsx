import Image from "next/image";
import React from "react";

interface OurServiceProps {
  src: string;
  alt: string;
  title: string;
}

export default function OurService({ src, alt, title }: OurServiceProps) {
  return (
    <div className="flex gap-4">
      <Image src={src} width={400} height={400} alt={alt} className="w-[70px] h-[70px]" />
      <div>
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="text-xs font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
    </div>
  );
}
