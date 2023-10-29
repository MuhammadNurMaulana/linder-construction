import Link from "next/link";
import React from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";

interface Props {
  href: string;
}

export default function DetailsArrowBack({ href }: Props) {
  return (
    <div className="flex ml-8 items-center gap-6 group mb-8">
      <Link href={href}>
        <IoArrowBackCircleSharp size={30} />
      </Link>
      <h2 className="text-slate-800 text-xl font-semibold group-hover:-translate-x-4 transition-all duration-500 group-hover:text-slate-900">Back To Blog</h2>
    </div>
  );
}
