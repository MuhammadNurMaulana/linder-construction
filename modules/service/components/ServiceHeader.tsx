import HeaderTwoPage from "@/components/elements/HeaderTwoPage";
import WhatWeDoHeader from "@/components/elements/WhatWeDoHeader";
import React from "react";

export default function ServiceHeader() {
  return (
    <section className="bg-home5 pb-8 bg-cover bg-center">
      <HeaderTwoPage title="Framing" paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolores cupiditate facilis ut maxime adipisci consectetur quasi." button="GET A QUOTE" to="/services">
        <WhatWeDoHeader clsTitle="hidden" />
      </HeaderTwoPage>
    </section>
  );
}
