import React from "react";
import HeaderServices from "./Header";
import Quote from "@/common/elements/Quote";
import ContentServices from "./Content";

export default function ServicesComponents() {
  return (
    <>
      <HeaderServices />
      <Quote />
      <ContentServices title="Building Construction" />

      <ContentServices title="Repairs & Installations" />

      <ContentServices title="Custom Design Projects" />
    </>
  );
}
