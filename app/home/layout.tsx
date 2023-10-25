import { Metadata } from "next";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Linder | Home Page",
  description: "Linder Construction Company Home Page",
};

export default function Layout({ children }: Props) {
  return <>{children}</>;
}
