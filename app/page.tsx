"use client";

import Beams from "@/components/other/backgrounds/beams";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import BlurText from "@/components/other/text/blur";

export default function Page() {
  return (
    <>
      <div style={{ width: "100%", height: "600px", position: "absolute" }}>
        <Beams />
      </div>{" "}
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="flex items-center justify-center min-h-screen px-4 py-12">
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <BlurText 
              text="Kerja tim berantakan? Sinkronkan dengan Seiri" 
              delay={150} 
              animateBy="words" 
              direction="top" 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-center"
              second="italic text-prim-green"
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="bg-white hover:bg-gray-200 text-black px-8 py-3 rounded-full text-base font-medium transition-all duration-200 hover:scale-105 shadow-lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button variant="outline" size="lg" className="border-gray-300 text-white hover:bg-gray-100 px-8 py-3 rounded-full text-base font-medium transition-all duration-200 hover:scale-105">
                How It Works
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </div>{" "}
    </>
  );
}
