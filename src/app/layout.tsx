import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import Image from "next/image";
import icon from "../../public/logo-title.png"
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Huzaifa PortFolio",
  description: "Hi, I'm Huzaifa Khan, a passionate frontend developer with a strong foundation in modern web development. I specialize in building responsive, user-friendly websites using HTML, CSS, JavaScript, and TypeScript, and have experience working with frameworks like React and Next.js. My focus is on crafting seamless digital experiences that are both functional and visually engaging.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
