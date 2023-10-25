import { Metadata } from "next";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Linder | Blog Page",
  description: "Linder Construction Company Blog Page",
};

export default function Layout({ children }: Props) {
  return <>{children}</>;
}
