import { Metadata } from "next";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Linder | Services Page",
  description: "Linder Construction Company Services Page",
};

export default function Layout({ children }: Props) {
  return <>{children}</>;
}
