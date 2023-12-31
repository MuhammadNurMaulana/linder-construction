import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function DetailHeader({ children }: Props) {
  return <div className="mt-28 mb-12">{children}</div>;
}
