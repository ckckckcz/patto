"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="absolute justify-center items-center left-72 mt-8">
      <motion.nav
        className={`fixed z-50 flex items-center justify-between px-8 py-4 text-white w-[90%] border-0 max-w-6xl transition-all duration-300 ${
          isScrolled
            ? "bg-white/20 backdrop-blur-xl shadow-lg rounded-full border border-gray-200/20"
            : ""
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.2,
        }}
      >
        <div className="flex items-center">
          <span className="text-orange-500 text-2xl font-bold">○</span>
          <Link href="/" className="ml-2 text-xl font-semibold ">
            Seiri
          </Link>
        </div>

        <div className="hidden md:flex space-x-6 font-semibold">
          <Link href="/pricing" className="">
            Pricing
          </Link>
          <Link href="/integrations" className="">
            Integrations
          </Link>
        </div>

        <div className="md:hidden">
          <button className="text-gray-600 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div className="hidden md:block">
          <Button
            variant="default"
            size="lg"
            className="bg-white hover:bg-gray-300 rounded-full font-semibold text-black"
          >
            <Download /> Download
          </Button>{" "}
        </div>
      </motion.nav>
    </div>
  );
}
