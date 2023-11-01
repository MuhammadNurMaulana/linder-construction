import PageHeader from "@/common/elements/PageHeader";
import Wedo from "@/common/elements/WeDo";
import React from "react";

export default function HeaderAbout() {
  return (
    <section className="bg-home8 pb-9">
      <PageHeader title="About Our Construction Company" paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolores cupiditate facilis ut maxime adipisci consectetur quasi." button="GET A FREE QUOTE" to="/portfolio">
        <Wedo />
      </PageHeader>
    </section>
  );
}
