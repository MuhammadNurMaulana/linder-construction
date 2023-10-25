import { getData } from "@/services/blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";

interface Props {
  params: {
    id: number;
  };
}

export default async function DetailPortofolioPage({ params }: Props) {
  const project = await getData(`${process.env.API_KEY_URL}/api/portofolio/?id=${params.id}`);
  return (
    <div className="mt-28 mb-12">
      <div className="flex ml-8 items-center gap-6 group mb-8">
        <Link href={"/portfolio"}>
          <IoArrowBackCircleSharp size={30} />
        </Link>
        <h2 className="text-slate-800 text-xl font-semibold group-hover:-translate-x-4 transition-all duration-500 group-hover:text-slate-900">Back To Blog</h2>
      </div>
      <div className="w-4/5 mx-auto text-justify">
        <h1 className="text-xl font-semibold pb-8 border-b-2 border-slate-800">Service Title</h1>
        <p className="text-xs font-semibold text-slate-500 pb-8 pt-2 ">{project.data.desc}</p>
        <Image src={project.data.img} alt={project.data.alt} width={2000} height={300} className="w-full h-[35vh] object-cover object-center rounded" />
        <div className="mt-8 flex flex-col justify-center gap-8">
          <p>{project.data.p1}</p>
          <p>{project.data.p2}</p>
          <p>{project.data.p3}</p>
          <p>{project.data.p4}</p>
        </div>
      </div>
    </div>
  );
}
