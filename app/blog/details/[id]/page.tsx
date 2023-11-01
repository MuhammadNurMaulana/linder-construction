import DetailArrowBack from "@/common/module/details/DetailArrowBack";
import DetailContent from "@/common/module/details/DetailContent";
import DetailHeader from "@/common/module/details/DetailHeader";
import { getData } from "@/common/service";
import React from "react";

export default async function page({ params }: any) {
  const blog = await getData(`${process.env.API_KEY_URL}/api/listproject/?id=${params.id}`);
  const blogs = blog.data;
  return (
    <DetailHeader>
      <DetailArrowBack href="/" title="Back To Main Menu" />
      <DetailContent src={blogs.img} alt={blogs.title} title={blogs.title} blog1={blogs.p1} blog2={blogs.p2} blog3={blogs.p3} blog4={blogs.p4} date={blogs.desc} />
    </DetailHeader>
  );
}
