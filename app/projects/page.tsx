import ProjectsPage from "@/modules/Project/components/Project";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Linder | Projects Page",
  description: "Linder Construction Company Project Page",
};

export default function Project() {
  return (
    <>
      <ProjectsPage />
    </>
  );
}
