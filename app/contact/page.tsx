import ContactCall from "@/components/modules/Contact/ContactCall";
import ContactForm from "@/components/modules/Contact/ContactForm";
import ContactHeader from "@/components/modules/Contact/ContactHeader";
import ContactMaps from "@/components/modules/Contact/ContactMaps";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Linder | Contact Page",
  description: "Linder Construction Company Contact Page",
};

export default function ContactPage() {
  return (
    <>
      <ContactHeader />

      <ContactCall />

      <ContactForm />

      <ContactMaps />
    </>
  );
}
