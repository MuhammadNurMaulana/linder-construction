import React from "react";
import HeaderTwoPage from "../Fragments/HeaderTwoPage";
import WhatWeDoHeader from "../Atoms/WhatWeDoHeader";

export default function ServiceHeader() {
  return (
    <section className="bg-home4 pb-8 bg-cover bg-center">
      <HeaderTwoPage title="Framing" paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolores cupiditate facilis ut maxime adipisci consectetur quasi." button="GET A QUOTE">
        <WhatWeDoHeader clsTitle="hidden" />
      </HeaderTwoPage>
    </section>
  );
}
