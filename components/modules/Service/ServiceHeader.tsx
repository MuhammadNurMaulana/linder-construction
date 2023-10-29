import HeaderTwoPage from "@/components/Elements/HeaderTwoPage";
import WhatWeDoHeader from "@/components/Elements/WhatWeDoHeader";
import React from "react";

export default function ServiceHeader() {
  return (
    <section className="bg-home5 pb-8 bg-cover bg-center">
      <HeaderTwoPage title="Framing" paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolores cupiditate facilis ut maxime adipisci consectetur quasi." button="GET A QUOTE">
        <WhatWeDoHeader clsTitle="hidden" />
      </HeaderTwoPage>
    </section>
  );
}
