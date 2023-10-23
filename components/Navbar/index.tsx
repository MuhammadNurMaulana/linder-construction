"use client";
import Link from "next/link";
import React from "react";
import { PiShoppingCartFill } from "react-icons/pi";

export default function Navbar() {
  const [openMenu, setOpenMenu] = React.useState(false);

  const toggleHandle = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="flex bg-white items-center justify-between py-8 px-4 fixed top-0 left-0 right-0 z-20">
      <h1 className="font-semibold text-xl">Linder Constructor Company</h1>

      <div className={` items-center gap-4 font-semibold text-lg lg:flex ${openMenu ? "absolute top-full right-0 flex flex-col py-8 gap-8 left-0 h-screen bg-white" : "hidden"}`}>
        <Link href={"/projects"}>Project</Link>
        <Link href={"/"}>Blog</Link>
        <Link href={"/"}>Portofolio</Link>
        <Link href={"/"}>Service</Link>
        <Link href={"/"}>Services</Link>
        <Link href={"/"}>Contact</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Home</Link>
        <div className="cursor-pointer">
          <PiShoppingCartFill />
        </div>
      </div>

      <button className="flex flex-col gap-[5px] lg:hidden" onClick={() => toggleHandle()}>
        <span className={`w-6 h-[3px] bg-black block transition-all duration-300 ${openMenu ? "rotate-45 translate-y-[8px]" : ""}`} />
        <span className={`w-6 h-[3px] bg-black block transition-all duration-300 ${openMenu ? "opacity-0" : ""}`} />
        <span className={`w-6 h-[3px] bg-black block transition-all duration-300 ${openMenu ? "-rotate-45 -translate-y-[8px]" : ""}`} />
      </button>
    </nav>
  );
}
