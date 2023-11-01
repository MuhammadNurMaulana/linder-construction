import React from "react";
import HeaderAbout from "./Header";
import Paragraph from "@/common/elements/PageParagraph";
import ContentAbout from "./Content";
import QuoteAbout from "./Quote";

export default function AboutComponents() {
  return (
    <>
      <HeaderAbout />
      <Paragraph title="About Us" />
      <ContentAbout />
      <QuoteAbout />
    </>
  );
}
