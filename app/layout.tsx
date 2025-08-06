"use client"
import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { usePathname } from "next/navigation";


// export const metadata: Metadata = {
//   title: "Ucha's Furniture",
//   description: "building without purpose",
// };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();
  const isAuth = pathname.startsWith("/AI-Chatbot")

  return (
    <html lang="en">
      <body>
        {(!isAuth) && <Header />}
        {children}
        {(!isAuth) && <Footer />}
      </body>
    </html>
  );
}
