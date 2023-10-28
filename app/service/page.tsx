import Paragraph from "@/components/Fragments/Paragraph";
import ServiceContent from "@/components/Service/ServiceContent";
import ServiceFaq from "@/components/Service/ServiceFaq";
import ServiceHeader from "@/components/Service/ServiceHeader";
import ServiceProjects from "@/components/Service/ServiceProjects";
import React from "react";

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
