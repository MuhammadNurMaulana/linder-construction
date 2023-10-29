import AboutPage from "@/modules/about/components/About";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Linder | About Page",
  description: "Linder Construction Company About Page",
};

export default function AboutPages() {
  return (
    <>
      <AboutPage />
    </>
  );
}
