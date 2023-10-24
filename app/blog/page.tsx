import BlogHeader from "@/components/Blogs/BlogHeader";
import { getData } from "@/services/blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function BlogPage() {
  const blogs = await getData(`${process.env.API_KEY_URL}/api/blogs`);
  return (
    <>
      <BlogHeader />

      <section className="bg-[#F7F7F7] my-12">
        <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.data.length > 0 &&
            blogs.data.map((blog: any) => (
              <div key={blog.id} className="relative pb-12 bg-white rounded">
                <Image src={blog.img} width={350} height={350} alt={blog.desc} className="w-full rounded h-[35vh] " />

                <div className="p-4">
                  <p className="text-xs text-slate-400 font-semibold mb-2">{blog.date}</p>
                  <h2 className="line-clamp-5">{blog.desc}</h2>

                  <Link href={`/blog/detail/${blog.id}`} aria-label={blog.desc} className="absolute bottom-4 left-4 border-2 border-slate-800 hover:border-slate-900 py-2 px-4 rounded">
                    Read More...
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
