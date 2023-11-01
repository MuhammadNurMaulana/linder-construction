import React from "react";
import HeaderServices from "./Header";
import Quote from "@/common/elements/Quote";
import ContentServices from "./Content";
import ProjectsServices from "./Projects";

export default function ServicesComponents() {
  return (
    <>
      <HeaderServices />
      <Quote />
      <ContentServices title="Building Construction" />
      <ContentServices title="Repairs & Installations" />
      <ContentServices title="Custom Design Projects" />
      <ProjectsServices />
    </>
  );
}
