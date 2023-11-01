import React from "react";
import HeaderService from "./Header";
import Paragraph from "@/common/elements/PageParagraph";
import ContentService from "./Content";

export default function Service() {
  return (
    <>
      <HeaderService />
      <Paragraph title="Service Us" />
      <ContentService />
    </>
  );
}
