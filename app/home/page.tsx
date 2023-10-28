import HeaderHome from "@/components/Home/Header";
import HomeContent from "@/components/Home/HomeContent";
import MainTestimonial from "@/components/Main/MainTestimonial";
import React from "react";

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
