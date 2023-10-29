import HeaderTwoPage from "@/components/elements/HeaderTwoPage";
import WhatWeDoHeader from "@/components/elements/WhatWeDoHeader";
import React from "react";

export default function AboutHeader() {
  return (
    <section className="bg-home8 pb-8">
      <HeaderTwoPage
        title="About Our Construction Company"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolores cupiditate facilis ut maxime adipisci consectetur quasi."
        button="GET A FREE QUOTE"
        to="/portfolio"
      >
        <WhatWeDoHeader />
      </HeaderTwoPage>
    </section>
  );
}
