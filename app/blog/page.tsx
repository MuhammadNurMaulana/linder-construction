import BlogHeader from "@/components/Blogs/BlogHeader";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getData() {
  const res = await fetch("http://localhost:3000/api/blogs");

  if (!res.ok) {
    throw new Error("Failed to data fetch");
  }

  return res.json();
}

export default async function BlogPage() {
  const blogs = await getData();
  return (
    <>
      <BlogHeader />

      <section className="w-4/5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.data.length > 0 &&
            blogs.data.map((blog: any) => (
              <div key={blog.id}>
                <Image src={blog.img} width={350} height={350} alt={blog.desc} className="w-full rounded h-[35vh]" />
                <p>{blog.date}</p>
                <h2 className="line-clamp-5">{blog.desc}</h2>
                <Link href={`/blog/detail/${blog.id}`}>Read More</Link>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
