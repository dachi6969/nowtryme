import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/Header";


export const metadata: Metadata = {
  title: "Ucha's Furniture",
  description: "building without purpose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
