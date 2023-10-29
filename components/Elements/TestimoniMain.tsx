import Image from "next/image";
import React from "react";

export default function TestimoniMain() {
  return (
    <div className="py-8 px-4 rounded bg-white">
      <Image src={"/images/star.png"} width={200} quality={100} height={200} alt="client rating" className="w-[150px] mx-auto" />
      <p className="my-4">&quot;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus nesciunt repellendus et, maxime fuga veniam.&quot;</p>
      <h2 className="text-lg font-semibold">John Doe</h2>
    </div>
  );
}
