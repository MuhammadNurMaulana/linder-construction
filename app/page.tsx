import { HomeHeader } from "@/components/Home/HomeHeader";
import { HomeNoProject } from "@/components/Home/HomeNoProject";
import HomeProject from "@/components/Home/HomeProject";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeHeader />

      <HomeNoProject />

      <HomeProject />

      <section className="mt-12">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 text-justify bg-black text-white pt-16 pb-8 px-6">
            <h1 className="text-3xl font-semibold">We,ve Been Building For Over 10 Years</h1>
            <div className="w-12 h-1 bg-yellow-500 mt-6 mb-8" />

            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, fugiat! Repellat dignissimos beatae doloremque a qui vel nulla laudantium dolores provident, voluptatem deserunt voluptatum earum in optio molestias ipsam
              maxime.
            </p>

            <button className="mt-8 text-yellow-500 border border-yellow-500 rounded py-2 px-6">ABOUT US</button>
          </div>

          <div className="w-full lg:w-2/3">
            <Image quality={100} width={2400} height={2000} src={"/images/building.jpg"} alt="constructor building" className="h-[400px] object-cover" />
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
    </>
  );
}
