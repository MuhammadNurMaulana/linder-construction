import PortfolioHeader from "@/components/Portfolio/PortfolioHeader";
import { getData } from "@/services/blog";
import React from "react";

export default async function PortfolioPage() {
  const projects = await getData(`${process.env.API_KEY_URL}/api/portofolio`);
  console.log(projects);
  return (
    <>
      <section className="bg-home1">
        <PortfolioHeader />
      </section>
    </>
  );
}
