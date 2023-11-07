import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-slate-950">
      <div className="flex flex-col items-center justify-center gap-8 box-border">
        <h1 className="text-3xl font-bold text-white">Pages Is Not Found Back to Home</h1>
        <Link href={"/"} className="px-4 rounded bg-white text-slate-950 font-semibold hover:py-2 transition-all duration-700 hover:px-8">
          Main Page
        </Link>
      </div>
    </div>
  );
}
