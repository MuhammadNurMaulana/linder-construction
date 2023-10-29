import Services from "@/components/modules/services";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Linder | Services Page",
  description: "Linder Construction Company Services Page",
};

export default function ServicesPage() {
  return (
    <>
      <Services />
    </>
  );
}
