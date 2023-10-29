import Quote from "@/components/Elements/Quote";
import ServicesContent from "@/components/modules/Services/ServicesContent";
import ServicesHeader from "@/components/modules/Services/ServicesHeader";
import ServicesProject from "@/components/modules/Services/ServicesProject";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Linder | Services Page",
  description: "Linder Construction Company Services Page",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHeader />

      <Quote />

      <ServicesContent title="Building Construction" />

      <ServicesContent title="Repairs & Installations" />

      <ServicesContent title="Custom Design Projects" />

      <ServicesProject />
    </>
  );
}
