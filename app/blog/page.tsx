import Blog from "@/components/modules/blog";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Linder | Blog Page",
  description: "Linder Construction Company Blog Page",
};

export default function BlogPage() {
  return (
    <>
      <Blog />
    </>
  );
}
