import React from "react";
import TitlePage from "./TitlePage";

interface Props {
  title: string;
}

export default function Paragraph({ title }: Props) {
  return (
    <section className="my-8 w-4/5 mx-auto text-justify">
      <TitlePage title={title} />
      <div className="flex gap-8 flex-col md:flex-row my-8">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut qui iste sapiente impedit culpa obcaecati adipisci deleniti provident ad ratione libero nulla quaerat, vero ipsam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fugiat expedita delectus laboriosam voluptas ducimus voluptatem minus, itaque consectetur voluptates.</p>
      </div>
    </section>
  );
}
