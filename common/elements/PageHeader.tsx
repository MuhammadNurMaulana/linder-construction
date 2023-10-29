import Link from "next/link";
import React from "react";

interface HeaderProps {
  title: string;
  paragraph?: string;
  button?: string;
  children?: React.ReactNode;
  bgImage?: string;
  btnCls?: string;
  to: string;
}

export default function PageHeader({ title, button, paragraph, children, bgImage, btnCls, to }: HeaderProps) {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className={`w-full lg:w-[60%] h-screen object-cover bg-center ${bgImage} flex justify-center items-center text-white`}>
        <div className="w-4/5 flex flex-col gap-4">
          <h1 className="text-4xl md:text-6xl border-l-8 border-yellow-500 p-4 font-semibold">{title}</h1>
          <p className="text-sm md:text-lg md:font-semibold text-justify">{paragraph}</p>
          <Link href={to} className={`bg-yellow-600 text-white font-semibold max-w-max py-3 px-6 rounded-md ${btnCls}`}>
            {button}
          </Link>
        </div>
      </div>

      {children}
    </div>
  );
}
