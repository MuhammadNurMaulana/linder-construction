import React from "react";
import HeaderTwoPage from "../Fragments/HeaderTwoPage";
import WhatWeDoHeader from "../Atoms/WhatWeDoHeader";

export default function ServicesHeader() {
  return (
    <section className="bg-home3 pb-8">
      <HeaderTwoPage title="Our Construction Service" paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolores cupiditate facilis ut maxime adipisci consectetur quasi." button="GET A FREE QUOTE">
        <WhatWeDoHeader />
      </HeaderTwoPage>
    </section>
  );
}
