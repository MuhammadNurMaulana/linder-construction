import Link from "next/link";
import React from "react";

export default function ViewAll() {
  return (
    <div className="text-center">
      <Link href={"/allprojects"} className="py-2 px-8 border-2 border-slate-950 rounded font-semibold">
        VIEW ALL
      </Link>
    </div>
  );
}
