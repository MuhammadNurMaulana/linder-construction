import Image from "next/image";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import React from "react";
import Link from "next/link";

interface Props {
  params: {
    id: number;
  };
}

export default async function BlogsDetail({ params }: Props) {
  async function getData() {
    const res = await fetch(`${process.env.API_KEY_URL}/api/blogs/?id=${params.id}`);

    if (!res.ok) {
      throw new Error("Failed to data fetch");
    }

    return res.json();
  }

  const blog = await getData();
  return (
    <div className="mt-28 mb-12">
      <div className="flex ml-8 items-center gap-6 group mb-8">
        <Link href={"/blog"}>
          <IoArrowBackCircleSharp size={30} />
        </Link>
        <h2 className="text-slate-800 text-xl font-semibold group-hover:-translate-x-4 transition-all duration-500 group-hover:text-slate-900">Back To Blog</h2>
      </div>
      <div className="w-4/5 mx-auto text-justify">
        <h2 className="text-xl font-semibold pb-8 border-b-2 border-slate-800">{blog.data.desc}</h2>
        <p className="text-xs font-semibold text-slate-500 pb-8 pt-2 ">{blog.data.date}</p>
        <Image src={blog.data.img} alt={blog.data.desc} width={2000} height={300} className="w-full h-[50vh] object-cover object-center rounded" />
        <div className="mt-8 flex flex-col justify-center gap-8">
          <p>{blog.data.p1}</p>
          <p>{blog.data.p2}</p>
          <p>{blog.data.p3}</p>
          <p>{blog.data.p4}</p>
        </div>
      </div>
         
    </div>
  );
}
