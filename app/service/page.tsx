import Paragraph from "@/components/Elements/Paragraph";
import ServiceContent from "@/components/modules/Service/ServiceContent";
import ServiceFaq from "@/components/modules/Service/ServiceFaq";
import ServiceHeader from "@/components/modules/Service/ServiceHeader";
import ServiceProjects from "@/components/modules/Service/ServiceProjects";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Linder | Service Page",
  description: "Linder Construction Company Service Page",
};

export default function ServicePage() {
  return (
    <>
      <ServiceHeader />

      <Paragraph title="Service Us" />

      <ServiceContent />

      <ServiceProjects />

      <ServiceFaq />
    </>
  );
}
