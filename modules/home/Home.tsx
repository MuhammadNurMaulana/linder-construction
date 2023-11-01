import React from "react";
import HeaderHome from "./Header";
import ContentHome from "./Content";
import Testimonial from "../main/Testimonial";

export default function HomeComponents() {
  return (
    <>
      <HeaderHome title="Construction Inc" bgImage="bg-home9" btnName="VIEW OUR HOME" />
      <ContentHome />
      <HeaderHome title="We`ve Been Building For Over 20 Years" bgImage="bg-home10" btnName="About Us" />
      <Testimonial />
    </>
  );
}
