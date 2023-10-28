import React from "react";
import Title from "../Atoms/Title";
import TestimoniMain from "../Fragments/TestimoniMain";
import Image from "next/image";

export default function MainTestimonial() {
  return (
    <section className="bg-[#F7F7F7] py-12">
      <Title title="Client Testimonials" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/5 mx-auto gap-8">
        <TestimoniMain />
        <TestimoniMain />
        <TestimoniMain />
      </div>

      <Image src={"/images/client.ico"} width={300} quality={100} height={300} alt="client" className="mx-auto w-4/5 mt-8" />
    </section>
  );
}
