import Paragraph from "@/components/elements/Paragraph";
import ServiceHeader from "./ServiceHeader";
import ServiceContent from "./ServiceContent";
import ServiceProjects from "./ServiceProjects";
import ServiceFaq from "./ServiceFaq";

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
