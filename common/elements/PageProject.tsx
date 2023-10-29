import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  alt: string;
  title: string;
  href: string;
  btnName: string;
}

export default function PageProject({ src, alt, title, href, btnName }: Props) {
  return (
    <div>
      <Image src={src} alt={alt} width={1080} height={650} className="aspect-square rounded-lg object-cover w-full h-[35vh]" />
      <div className="pt-12 pb-4 px-4">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam atque aut, eveniet cupiditate autem praesentium.</p>
        <Link href={href} className="mt-6 border border-slate-800 rounded py-2 px-4">
          {btnName}
        </Link>
      </div>
    </div>
  );
}
