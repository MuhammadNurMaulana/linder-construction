import React from "react";
interface BuildLeftProps {
  title: string;
  button?: string;
  bgAndTextColor: string;
  children?: React.ReactNode;
  btnCls?: string;
}

export default function BuildLeft({ title, button, bgAndTextColor, children, btnCls }: BuildLeftProps) {
  return (
    <div className={`w-full ${bgAndTextColor} pt-16 pb-8 px-6`}>
      <h1 className="text-3xl font-semibold">{title}</h1>
      <div className="w-12 h-1 bg-yellow-500 mt-6 mb-8" />

      <p className="mt-8 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, fugiat! Repellat dignissimos beatae doloremque a qui vel nulla laudantium dolores provident, voluptatem deserunt voluptatum earum in optio molestias ipsam maxime.
      </p>
      {children}

      <button type="button" className={`mt-8 text-yellow-500 border border-yellow-500 rounded py-2 px-6 font-semibold ${btnCls}`}>
        {button}
      </button>
    </div>
  );
}
