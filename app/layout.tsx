import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/other/navbar";


export const metadata: Metadata = {
  title: "Seiri",
  description: "Created with v0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className="font-sora">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
