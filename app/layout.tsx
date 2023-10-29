import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/modules/footer";
import Navbar from "@/modules/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linder Construction Company",
  description: "Linder Construction Company Main Page",
  icons: [{ rel: "webp", url: "/images/header1.webp" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/linder.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <NextTopLoader color="#000" speed={200} crawlSpeed={200} easing="ease" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
