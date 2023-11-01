import React from "react";
import HeaderService from "./Header";
import Paragraph from "@/common/elements/PageParagraph";
import ContentService from "./Content";
import ProjectsService from "./Projects";
import Faq from "./Faq";

export default function ServiceComponents() {
  return (
    <>
      <HeaderService />
      <Paragraph title="Service Us" />
      <ContentService />
      <ProjectsService />
      <Faq />
    </>
  );
}
