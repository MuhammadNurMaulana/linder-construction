import Quote from "@/components/elements/Quote";
import ServicesHeader from "./ServicesHeader";
import ServicesContent from "./ServicesContent";
import ServicesProject from "./ServicesProject";

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
