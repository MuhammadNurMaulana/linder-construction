import HeaderHome from "@/components/modules/Home/Header";
import HomeContent from "@/components/modules/Home/HomeContent";
import MainTestimonial from "@/modules/Main/components/MainTestimonial";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Linder | Home Page",
  description: "Linder Construction Company Home Page",
};

export default function HomePage() {
  return (
    <>
      <HeaderHome title="Construction Inc" bgImage="bg-home9" btnName="VIEW OUR HOME" />

      <HomeContent />

      <HeaderHome title="We`ve Been Building For Over 20 Years" bgImage="bg-home8" btnName="About Us" />

      <MainTestimonial />
    </>
  );
}
