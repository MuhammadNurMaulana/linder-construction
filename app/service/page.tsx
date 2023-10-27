import ServiceContent from "@/components/Service/ServiceContent";
import ServiceDesc from "@/components/Service/ServiceDesc";
import ServiceFaq from "@/components/Service/ServiceFaq";
import ServiceHeader from "@/components/Service/ServiceHeader";
import ServiceProjects from "@/components/Service/ServiceProjects";
import React from "react";

export default function ServicePage() {
  return (
    <>
      <ServiceHeader />

      <ServiceDesc />

      <ServiceContent />

      <ServiceProjects />

      <ServiceFaq />
    </>
  );
}
