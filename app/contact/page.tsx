import ContactPage from "@/modules/Contact/components/Contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Linder | Contact Page",
  description: "Linder Construction Company Contact Page",
};

export default function ContactPages() {
  return (
    <>
      <ContactPage />
    </>
  );
}
