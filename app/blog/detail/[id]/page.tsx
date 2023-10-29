import React from "react";
import { getData } from "@/services/blog";
import DetailsHeader from "@/modules/Details/components/DetailsHeader";
import DetailsArrowBack from "@/modules/Details/components/DetailsArrowBack";
import DetailsContent from "@/modules/Details/components/DetailsContent";

interface Props {
  params: {
    id: number;
  };
}

export default async function BlogDetailsPage({ params }: Props) {
  // const blog = await getData(`http://localhost:3000/api/blogs/?id=${params.id}`);
  return (
    <DetailsHeader>
      {/* <DetailsArrowBack href="/blog" />
       <DetailsContent src={blog.data.img} alt={blog.data.desc} title={blog.data.desc} blog1={blog.data.p1} blog2={blog.data.p2} blog3={blog.data.p3} blog4={blog.data.p4} /> */}
    </DetailsHeader>
  );
}
