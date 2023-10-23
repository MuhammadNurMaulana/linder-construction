import Image from "next/image";
import React from "react";

export default function TestimoniMain() {
  return (
    <div className="py-8 px-4 rounded bg-white">
      <Image src={"/images/star.png"} width={400} height={400} alt="client rating" className="w-[150px] mx-auto" />
      <p className="my-4">&quot;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus nesciunt repellendus et, maxime fuga veniam.&quot;</p>
      <h3 className="text-lg font-semibold">John Doe</h3>
    </div>
  );
}