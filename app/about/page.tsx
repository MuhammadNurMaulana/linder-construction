import AboutComponents from "@/modules/about/About";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Linder | About Page",
  description: "Linder Construction Company About Page",
};

export default function AboutPages() {
  return (
    <>
      <AboutComponents />
    </>
  );
}
