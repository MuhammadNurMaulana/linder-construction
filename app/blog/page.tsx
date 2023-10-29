import BlogPage from "@/modules/Blogs/components/Blog";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Linder | Blog Page",
  description: "Linder Construction Company Blog Page",
};

export default function Blog() {
  return (
    <>
      <BlogPage />
    </>
  );
}
