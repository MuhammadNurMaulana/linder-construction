import PortfolioHeader from "@/components/Portfolio/PortfolioHeader";
import { getData } from "@/services/blog";
import React from "react";

export default async function PortfolioPage() {
  return (
    <>
      <section className="bg-home1">
        <PortfolioHeader />
      </section>
    </>
  );
}
