import ProjectAbout from "@/components/Project/ProjectAbout";
import ProjectContent from "@/components/Project/ProjectContent";
import ProjectHeader from "@/components/Project/ProjectHeader";
import ProjectProject from "@/components/Project/ProjectProject";
import React from "react";

export default function ProjectsPage() {
  return (
    <>
      <ProjectHeader />

      <ProjectAbout />

      <ProjectContent />

      <ProjectProject />
    </>
  );
}
