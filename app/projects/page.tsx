import ProjectComponents from "@/modules/project/Project";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Linder | Projects Page",
  description: "Linder Construction Company Project Page",
};

export default function ProjectPages() {
  return (
    <>
      <ProjectComponents />
    </>
  );
}
