import Paragraph from "@/components/elements/Paragraph";
import AboutHeader from "./AboutHeader";
import AboutContent from "./AboutContent";
import AboutQuote from "./AboutQuote";

export default function AboutPage() {
  return (
    <>
      <AboutHeader />

      <Paragraph title="About Us" />

      <AboutContent />

      <AboutQuote />
    </>
  );
}
