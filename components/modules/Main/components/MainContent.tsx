import BuildLeft from "@/components/Elements/BuildLeft";
import Image from "next/image";
import React from "react";

export default function MainContent() {
  return (
    <section>
      <div className="flex flex-col lg:flex-row">
        <BuildLeft title="We,ve Been Building For Over 10 Years" button="ABOUT US" bgAndTextColor="text-white bg-black lg:w-1/3" />

        <div className="w-full lg:w-2/3">
          <Image width={1080} height={650} src={"/images/main2.webp"} alt="constructor building" className="h-[400px] object-cover w-full" />
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="py-8 text-center w-full md:w-1/2 bg-yellow-500 text-slate-900">
              <h1>Call for a Quote</h1>
              <p>08 123 456 789</p>
            </div>
            <div className="py-8 w-full md:w-1/2">
              <h1 className="border mx-auto border-slate-800 max-w-max rounded py-2 px-4 font-semibold">ONLINE ESTIMATE FORM</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
