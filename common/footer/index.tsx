import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white p-6 flex gap-8 flex-col md:flex-row justify-center items-center">
      <h1>Powered by &copy; Muhammad Nur Maulana 2023 </h1>
      <div className="flex items-center gap-8 text-xl">
        <Link href={"https://github.com/MuhammadNurMaulana"} target="_blank" aria-label="Link Menuju Github">
          <FaGithub />
        </Link>
        <Link href={"https://wa.me/+6283137446693"} target="_blank" aria-label="Link Menuju Whatsapp">
          <FaWhatsapp />
        </Link>
        <Link href={"https://www.instagram.com/ctizz4/"} target="_blank" aria-label="Link Menuju Instagram">
          <FaInstagram />
        </Link>
      </div>
    </footer>
  );
}
