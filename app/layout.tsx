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
          {/* pre loading not vissible images */}
          <>
            <img src="/desktop1.jpg" style={{ display: "none" }} alt=""/>
            <img src="/desktop2.jpg" style={{ display: "none" }} alt=""/>
            <img src="/desktop3.jpg" style={{ display: "none" }} alt=""/>
            <img src="/mobile1.jpg" style={{ display: "none" }} alt=""/>
            <img src="/mobile2.jpg" style={{ display: "none" }} alt=""/>
            <img src="/mobile3.jpg" style={{ display: "none" }} alt=""/>
          </>
        <Header />
        {children}
      </body>
    </html>
  );
}
