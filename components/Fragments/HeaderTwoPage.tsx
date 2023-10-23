import React from "react";

interface HeaderProps {
  title: string;
  paragraph: string;
  button?: string;
  children: React.ReactNode;
  bgImage?: string;
  btnCls?: string;
}

export default function HeaderTwoPage({ title, button, paragraph, children, bgImage, btnCls }: HeaderProps) {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className={`w-full lg:w-[60%] h-screen object-cover bg-center ${bgImage} flex justify-center items-center text-white`}>
        <div className="w-4/5 flex flex-col gap-4">
          <h1 className="text-4xl md:text-6xl border-l-8 border-yellow-500 p-4 font-semibold">{title}</h1>
          <p className="text-sm md:text-lg md:font-semibold text-justify">{paragraph}</p>
          <button type="button" className={`bg-yellow-500 text-white font-semibold max-w-max py-3 px-6 rounded-md ${btnCls}`}>
            {button}
          </button>
        </div>
      </div>

      {children}
    </div>
  );
}
