import Project from "@/components/modules/project";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Linder | Projects Page",
  description: "Linder Construction Company Project Page",
};

export default function ProjectPage() {
  return (
    <>
      <Project />
    </>
  );
}
