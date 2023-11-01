import { IoArrowBackCircleSharp } from "react-icons/io5";
import React from "react";
import Link from "next/link";

interface Props {
  href: string;
  title: string;
}

export default function DetailArrowBack({ href, title }: Props) {
  return (
    <div className="flex ml-8 items-center gap-6 group mb-8">
      <Link href={href}>
        <IoArrowBackCircleSharp size={30} />
      </Link>
      <h2 className="text-slate-800 text-xl font-semibold group-hover:-translate-x-4 transition-all duration-500 group-hover:text-slate-900">{title}</h2>
    </div>
  );
}
