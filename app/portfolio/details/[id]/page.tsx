import DetailArrowBack from "@/common/module/details/DetailArrowBack";
import DetailContent from "@/common/module/details/DetailContent";
import DetailHeader from "@/common/module/details/DetailHeader";
import { getData } from "@/common/service";
import React from "react";

export default async function page({ params }: any) {
  const project = await getData(`${process.env.API_KEY_URL}/api/portofolio/?id=${params.id}`);
  const projects = project.data;
  return (
    <DetailHeader>
      <DetailArrowBack href="/portfolio" title="Back To Portfolio" />
      <DetailContent src={projects.img} alt={projects.title} title={projects.title} blog1={projects.p1} blog2={projects.p2} blog3={projects.p3} blog4={projects.p4} date={projects.desc} />
    </DetailHeader>
  );
}
