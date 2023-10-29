import Paragraph from "@/components/Elements/Paragraph";
import AboutContent from "@/components/modules/About/AboutContent";
import AboutHeader from "@/components/modules/About/AboutHeader";
import AboutQuote from "@/components/modules/About/AboutQuote";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Linder | About Page",
  description: "Linder Construction Company About Page",
};

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
