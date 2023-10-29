import DetailsArrowBack from "@/modules/Details/components/DetailsArrowBack";
import DetailsContent from "@/modules/Details/components/DetailsContent";
import DetailsHeader from "@/modules/Details/components/DetailsHeader";
import { getData } from "@/services/blog";
import React from "react";

interface Props {
  params: {
    id: number;
  };
}

export default async function DetailPortofolioPage({ params }: Props) {
  const project = await getData(`${process.env.API_KEY_URL}/api/portofolio/?id=${params.id}`);
  return (
    <DetailsHeader>
      <DetailsArrowBack href="/portfolio" />
      <DetailsContent src={project.data.img} alt={project.data.alt} title="Service Title" date={project.data.desc} blog1={project.data.p1} blog2={project.data.p2} blog3={project.data.p3} blog4={project.data.p4} />
    </DetailsHeader>
  );
}
