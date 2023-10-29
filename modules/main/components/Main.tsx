import MainHeader from "./Header";
import MainAsk from "./MainAsk";
import MainContent from "./MainContent";
import MainNoProject from "./MainNoProject";
import MainProject from "./MainProject";
import MainTestimonial from "./MainTestimonial";

export default function MainPage() {
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
