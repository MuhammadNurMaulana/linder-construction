import MainTestimonial from "../../main/components/MainTestimonial";
import HeaderHome from "./Header";
import HomeContent from "./HomeContent";

export default function HomePage() {
  return (
    <>
      <HeaderHome title="Construction Inc" bgImage="bg-home9" btnName="VIEW OUR HOME" />

      <HomeContent />

      <HeaderHome title="We`ve Been Building For Over 20 Years" bgImage="bg-home10" btnName="About Us" />

      <MainTestimonial />
    </>
  );
}
