import HeaderTwoPage from "@/components/Elements/HeaderTwoPage";
import WhatWeDoHeader from "@/components/Elements/WhatWeDoHeader";
import React from "react";

export default function ServicesHeader() {
  return (
    <section className="bg-home6 pb-8 bg-cover bg-center">
      <HeaderTwoPage title="Our Construction Service" paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolores cupiditate facilis ut maxime adipisci consectetur quasi." button="GET A FREE QUOTE">
        <WhatWeDoHeader />
      </HeaderTwoPage>
    </section>
  );
}
