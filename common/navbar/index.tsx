"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiShoppingCartFill } from "react-icons/pi";

export default function Navbar() {
  const [openMenu, setOpenMenu] = React.useState(false);

  const toggleHandle = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="flex bg-white items-center justify-between py-8 px-4 fixed -top-1 left-0 right-0 z-20">
      <Link href={"/"} className="font-semibold text-xl flex gap-6 items-center">
        <Image src={"/linder.ico"} alt="Icon Linder Compaby" width={45} height={45} />
        <h2>Linder Constructor Company</h2>
      </Link>

      <div className={` items-center gap-4 font-semibold text-lg lg:flex ${openMenu ? "absolute top-full right-0 flex flex-col py-8 gap-8 left-0 h-screen bg-white" : "hidden"}`}>
        {navMenu.map((nav, index) => (
          <Link href={nav.href} key={index}>
            {nav.title}
          </Link>
        ))}

        <div className="cursor-pointer">
          <PiShoppingCartFill />
        </div>
      </div>

      <button className="flex flex-col gap-[5px] lg:hidden" aria-label={openMenu ? "Close Menu" : "Open Menu"} aria-expanded={openMenu} tabIndex={0} onClick={() => toggleHandle()}>
        <span className={`w-6 h-[3px] bg-black block transition-all duration-300 ${openMenu ? "rotate-45 translate-y-[8px]" : ""}`} />
        <span className={`w-6 h-[3px] bg-black block transition-all duration-300 ${openMenu ? "opacity-0" : ""}`} />
        <span className={`w-6 h-[3px] bg-black block transition-all duration-300 ${openMenu ? "-rotate-45 -translate-y-[8px]" : ""}`} />
      </button>
    </nav>
  );
}

const navMenu = [
  {
    href: "/projects",
    title: "Project",
  },
  {
    href: "/blog",
    title: "Blog",
  },
  {
    href: "/portfolio",
    title: "Portofolio",
  },
  {
    href: "/service",
    title: "Service",
  },
  {
    href: "/services",
    title: "Services",
  },
  {
    href: "/contact",
    title: "Contact",
  },
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/home",
    title: "Home",
  },
];
