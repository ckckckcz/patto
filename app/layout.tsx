"use client";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/other/navbar";
import Beams from "@/components/other/backgrounds/beams";

// export const metadata: Metadata = {
//   title: "Kanso",
//   description: "Created with v0",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className="font-dm">
        <Navbar/>
        <div style={{ width: "100%", height: "800px", position: "absolute" }}>
          <Beams colorStops={["#34d399", "#22d3ee", "#34d399"]} blend={0.5} amplitude={1.0} speed={0.5} />
        </div>
        {children}
      </body>
    </html>
  );
}
