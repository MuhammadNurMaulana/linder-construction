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
      <Image src={src} width={100} height={100} quality={100} alt={alt} className="w-[70px] h-[70px]" />
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-xs font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
    </div>
  );
}
