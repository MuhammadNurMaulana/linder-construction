import PageHeader from "@/common/elements/PageHeader";
import React from "react";

export default function HeaderBlog() {
  return (
    <section className="bg-home3 bg-cover bg-center">
      <PageHeader title="News" btnCls="hidden" to="/" />
    </section>
  );
}
