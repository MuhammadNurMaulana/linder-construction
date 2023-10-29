import PortfolioHeader from "@/components/modules/Portfolio/PortfolioHeader";
import PortfolioProject from "@/components/modules/Portfolio/PortfolioProject";
import { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  title: "Linder | Portofolio Page",
  description: "Linder Construction Company Portfolio Page",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHeader />
      <PortfolioProject />
    </>
  );
}
