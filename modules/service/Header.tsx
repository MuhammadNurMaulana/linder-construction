import PageHeader from "@/common/elements/PageHeader";
import Wedo from "@/common/elements/WeDo";
import React from "react";

export default function HeaderService() {
  return (
    <section className="bg-home5 pb-8 bg-cover bg-center">
      <PageHeader title="Framing" paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolores cupiditate facilis ut maxime adipisci consectetur quasi." button="GET A QUOTE" to="/services">
        <Wedo clsTitle="hidden" />
      </PageHeader>
    </section>
  );
}
