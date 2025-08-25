"use client";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAuth = pathname.startsWith("/AI-Chatbot");
  const isProducts = pathname.startsWith("/products/");

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {!(isAuth || isProducts) && <Header />}
        {children}
        {!(isAuth || isProducts) && <Footer />}
      </body>
    </html>
  );
}

