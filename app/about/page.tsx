import AboutContent from "@/components/About/AboutContent";
import AboutHeader from "@/components/About/AboutHeader";
import AboutQuote from "@/components/About/AboutQuote";
import Paragraph from "@/components/Fragments/Paragraph";
import React from "react";

export default function AboutPage() {
  return (
    <>
      <AboutHeader />

      <Paragraph title="About Us" />

      <AboutContent />

      <AboutQuote />
    </>
  );
}
