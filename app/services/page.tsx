import WhatWeDoHeader from "@/components/Atoms/WhatWeDoHeader";
import HeaderTwoPage from "@/components/Fragments/HeaderTwoPage";
import React from "react";

export default function ServicesPage() {
  return (
    <>
      <section className="bg-home3 pb-8">
        <HeaderTwoPage title="Our Construction Service" paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolores cupiditate facilis ut maxime adipisci consectetur quasi." button="GET A FREE QUOTE">
          <WhatWeDoHeader />
        </HeaderTwoPage>
      </section>
    </>
  );
}
