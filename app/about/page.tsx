import WhatWeDoHeader from "@/components/Atoms/WhatWeDoHeader";
import HeaderTwoPage from "@/components/Fragments/HeaderTwoPage";
import React from "react";

export default function AboutPage() {
  return (
    <>
      <section className="bg-home8 pb-8">
        <HeaderTwoPage title="About Our Construction Company" paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolores cupiditate facilis ut maxime adipisci consectetur quasi." button="GET A FREE QUOTE">
          <WhatWeDoHeader />
        </HeaderTwoPage>
      </section>
    </>
  );
}
