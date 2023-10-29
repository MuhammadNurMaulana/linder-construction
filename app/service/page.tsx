import ServicePage from "@/modules/service/components/Service";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Linder | Service Page",
  description: "Linder Construction Company Service Page",
};

export default function ServicePages() {
  return (
    <>
      <ServicePage />
    </>
  );
}
