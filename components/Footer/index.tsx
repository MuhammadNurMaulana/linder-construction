import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white p-6 flex gap-8 flex-col md:flex-row justify-center items-center">
      <h1>Powered by &copy; Muhammad Nur Maulana 2023 </h1>
      <div className="flex items-center gap-8 text-xl">
        <Link href={"/"}>
          <FaGithub />
        </Link>
        <Link href={"/"}>
          <FaWhatsapp />
        </Link>
        <Link href={"/"}>
          <FaInstagram />
        </Link>
      </div>
    </footer>
  );
}
