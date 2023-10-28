import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linder Construction Company",
  description: "Linder Construction Company Main Page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="#000" speed={200} crawlSpeed={200} easing="ease" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
