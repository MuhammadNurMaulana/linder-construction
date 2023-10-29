import HeaderTwoPage from "@/components/elements/HeaderTwoPage";
import React from "react";

export default function BlogHeader() {
  return (
    <section className="bg-home3 bg-cover bg-center">
      <HeaderTwoPage title="News" btnCls="hidden" to="/" />
    </section>
  );
}
