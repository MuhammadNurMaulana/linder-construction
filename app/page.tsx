import MainAsk from "@/components/Main/MainAsk";
import MainContent from "@/components/Main/MainContent";
import { MainHeader } from "@/components/Main/MainHeader";
import { MainNoProject } from "@/components/Main/MainNoProject";
import MainProject from "@/components/Main/MainProject";
import MainTestimonial from "@/components/Main/MainTestimonial";

export default function Home() {
  return (
    <>
      <MainHeader />

      <MainNoProject />

      <MainProject />

      <MainContent />

      <MainAsk />

      <MainTestimonial />
    </>
  );
}
