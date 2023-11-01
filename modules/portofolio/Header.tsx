import PageHeader from "@/common/elements/PageHeader";
import React from "react";

export default function HeaderPortofolio() {
  return (
    <section className="bg-home4 bg-cover bg-center">
      <PageHeader
        title="Our Construction Projects"
        btnCls="hidden"
        paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum reiciendis quis culpa laudantium enim soluta aperiam deserunt aliquid vero."
        to="/"
      />
    </section>
  );
}
