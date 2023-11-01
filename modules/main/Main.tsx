import React from "react";
import Header from "./Header";
import NoProject from "./NoProject";
import Project from "./Project";
import Content from "./Content";
import Asks from "./Asks";
import Testimonial from "./Testimonial";

export default function MainComponents() {
  return (
    <>
      <Header />
      <NoProject />
      <Project />
      <Content />
      <Asks />
      <Testimonial />
    </>
  );
}
