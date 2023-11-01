import PageHeader from "@/common/elements/PageHeader";
import Wedo from "@/common/elements/WeDo";
import React from "react";

export default function HeaderServices() {
  return (
    <section className="bg-home6 pb-8 bg-cover bg-center">
      <PageHeader title="Our Construction Service" paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolores cupiditate facilis ut maxime adipisci consectetur quasi." button="GET A FREE QUOTE" to="/">
        <Wedo />
      </PageHeader>
    </section>
  );
}
