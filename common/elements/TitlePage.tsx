import React from "react";

interface TitleProps {
  title: string;
}

export default function TitlePage({ title }: TitleProps) {
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold">{title}</h1>
      <div className="w-12 h-1 bg-yellow-500 mx-auto mt-5 mb-9" />
    </div>
  );
}
