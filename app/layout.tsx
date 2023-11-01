import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/common/module/navbar";
import Footer from "@/common/module/footer";

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
        <NextTopLoader color="#000" speed={200} crawlSpeed={200} easing="ease" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
