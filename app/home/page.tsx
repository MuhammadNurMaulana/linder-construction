import HomeComponents from "@/modules/home/Home";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Linder | Home Page",
  description: "Linder Construction Company Home Page",
};

export default function HomePages() {
  return (
    <>
      <HomeComponents />
    </>
  );
}
