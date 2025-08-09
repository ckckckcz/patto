"use client";

// import Beams from "@/components/other/backgrounds/beams";
import { Button } from "@/components/ui/button";
import { AppWindow, ArrowRight } from "lucide-react";
import BlurText from "@/components/other/text/blur";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Page() {
  return (
    <>
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="flex items-center lg:justify-center lg:min-h-screen px-4 py-12">
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <div className="flex -space-x-4 rtl:space-x-reverse lg:justify-center">
              <img className="w-10 h-10 border-2 object-cover border-white rounded-full dark:border-gray-800" src="https://i.pinimg.com/236x/83/a4/8c/83a48cbe9268173eff269bfda44df8a2.jpg" alt="" />
              <img className="w-10 h-10 border-2 object-cover border-white rounded-full dark:border-gray-800" src="https://i.pinimg.com/736x/ca/f0/ae/caf0ae6da78dc840936cd3125f22c730.jpg" alt="" />
              <img className="w-10 h-10 border-2 object-cover border-white rounded-full dark:border-gray-800" src="https://i.pinimg.com/736x/bd/02/c3/bd02c34e6def7a185ee65168e7eb79dd.jpg" alt="" />
              <div className="flex items-center justify-center w-10 h-10 text-xs font-bold text-black bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full">
                +99
              </div>
            </div>
            <BlurText
              text="Kerja tim berantakan? Sinkronkan dengan Patto"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-center"
              second="italic bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
            />

            {/* Subtitle */}
            <BlurText
              text="The all-in-one productivity platform designed to streamline tasks, automate workflows, and boost team efficiency."
              delay={50}
              animateBy="words"
              direction="top"
              className="text-lg md:text-xl text-white/30 max-w-2xl mx-auto leading-relaxed"
            />
            {/* CTA Buttons */}
            <div className="flex flex-row gap-4 lg:justify-center items-center pt-4">
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-bold py-5 px-6 transition-all duration-300 ease-in-out hover:from-emerald-500 hover:to-cyan-500 hover:shadow-lg rounded-full"
              >
                <AppWindow /> Download
              </Button>{" "}
              <div className="border-l-2 border-white/10 h-10"></div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Microsoft_icon.svg/800px-Microsoft_icon.svg.png" className="w-7 h-7 object-covers" alt="Microsoft" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1724px-Apple_logo_white.svg.png" className="w-7 h-7 object-covers" alt="Apple" />
            </div>
          </div>
        </section>
      </div>{" "}
    </>
  );
}
