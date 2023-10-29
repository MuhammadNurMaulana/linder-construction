import About from "@/components/modules/about";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Linder | About Page",
  description: "Linder Construction Company About Page",
};

export default function AboutPage() {
  return (
    <>
      <About />
    </>
  );
}
