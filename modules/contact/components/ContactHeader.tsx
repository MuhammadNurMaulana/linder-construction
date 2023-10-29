import HeaderTwoPage from "@/components/elements/HeaderTwoPage";
import React from "react";

export default function ContactHeader() {
  return (
    <section className="bg-home7 bg-cover bg-center">
      <HeaderTwoPage
        title="Constact Us"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolores cupiditate facilis ut maxime adipisci consectetur quasi."
        button="SEND A MESSAGE"
        to="https://wa.me/+6283137446693"
      />
    </section>
  );
}
