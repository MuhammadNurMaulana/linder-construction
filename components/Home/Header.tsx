import React from "react";

interface Props {
  title: string;
  btnName: string;
  bgImage: string;
}

export default function HeaderHome({ title, btnName, bgImage }: Props) {
  return (
    <section className={`w-full h-screen flex flex-col justify-center items-center text-white text-justify px-8 gap-8 ${bgImage} bg-cover bg-center`}>
      <div className="w-12 h-1 bg-yellow-500" />
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, natus consequatur neque, odio sequi vero quidem sit tempore dolorum obcaecati totam, veritatis nesciunt. Id, alias.</p>
      <button className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded">{btnName}</button>
    </section>
  );
}
