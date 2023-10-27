import Quote from "@/components/Atoms/Quote";
import ServicesContent from "@/components/Services/ServicesContent";
import ServicesHeader from "@/components/Services/ServicesHeader";
import ServicesProject from "@/components/Services/ServicesProject";
import React from "react";

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
