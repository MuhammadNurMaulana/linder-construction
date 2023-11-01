import Portofolio from "@/modules/portofolio/Portofolio";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Linder | Portofolio Page",
  description: "Linder Construction Company Portfolio Page",
};

export default function PortfolioPages() {
  return (
    <>
      <Portofolio />
    </>
  );
}
