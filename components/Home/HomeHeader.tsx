import Image from "next/image";
import Link from "next/link";
import React from "react";

export const HomeHeader = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-[60%] h-screen object-cover bg-center bg-home1 flex justify-center items-center text-white">
          <div className="w-4/5 flex flex-col gap-4">
            <h1 className="text-4xl md:text-6xl border-l-8 border-yellow-500 p-4 font-semibold">Construction</h1>
            <p className="text-sm md:text-lg md:font-semibold text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eaque beatae inventore quas ad nam eos iste molestias delectus architecto!</p>
            <Link href={"/"} className="bg-yellow-500 text-white font-semibold max-w-max py-3 px-6 rounded-md">
              View Our Work
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-[40%] bg-yellow-600 max-h-max py-8 lg:h-screen flex flex-col px-4 gap-12 justify-center items-center lg:items-start">
          <h1 className="text-2xl font-semibold">Our Service </h1>
          <div className="flex gap-4">
            <Image src={"/images/component2.png"} width={70} height={70} alt="building" />
            <div>
              <h4 className="text-xl font-semibold">Building Construction</h4>
              <p className="text-sm font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Image src={"/images/component3.png"} width={70} height={70} alt="building" />
            <div>
              <h4 className="text-xl font-semibold">Building Construction</h4>
              <p className="text-sm font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Image src={"/images/component1.png"} width={70} height={70} alt="building" />
            <div>
              <h4 className="text-xl font-semibold">Building Construction</h4>
              <p className="text-sm font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
