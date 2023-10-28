import React from "react";
import HeaderTwoPage from "../Fragments/HeaderTwoPage";
import OurService from "../Atoms/OurService";

export const MainHeader = () => {
  return (
    <section>
      <HeaderTwoPage title="Construction" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eaque beatae inventore quas ad nam eos iste molestias delectus architecto!" button="View Our Work" bgImage="bg-home1">
        <div className="w-full lg:w-[40%] bg-yellow-600 max-h-max py-8 lg:h-screen flex flex-col px-4 gap-12 justify-center items-center lg:items-start">
          <h1 className="text-2xl font-semibold">Our Service </h1>
          <OurService src="/images/component2.ico" alt="building constructor" title="Building Construction" />
          <OurService src="/images/component3.ico" alt="foundation" title="Foundtaion Work" />
          <OurService src="/images/component1.ico" alt="management" title="Site Management" />
        </div>
      </HeaderTwoPage>
    </section>
  );
};
