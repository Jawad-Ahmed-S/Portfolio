"use client";
import Image from "next/image";
import React from "react";
import { SparklesCore } from "./sparkles";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] bg-gradient-to-b from-neutral-950 to-neutral-800 relative flex items-center w-full justify-center overflow-hidden">
      {/* Sparkles in the background */}
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={50}
        className="absolute inset-0 w-full h-full z-0"
        particleColor="#FFFFFF"
      />

      {/* Main content section */}
      <section className="relative w-full min-h-[80vh] px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-center gap-12 z-20 py-10 mt-12 md:mt-0">
        {/* Left Content */}
        <div className="w-full md:w-1/2 max-w-2xl text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold text-white font-sans tracking-tight mb-4">
            Hello, I&apos;m{" "}
            <span className="relative inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="relative mx-auto inline-block w-max">
                <div className="absolute left-0 top-0 bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                  <span>Jawad Ahmed</span>
                </div>
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                  <span>Jawad Ahmed</span>
                </div>
              </div>
            </span>
          </h1>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-200 mb-6">
            Frontend Developer
          </h3>

          <div className="flex justify-center md:justify-start gap-4">
            <Link href="/contactus">
            <div className="p-[1px] rounded-full bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 inline-block hover:from-pink-400 hover:via-purple-500 hover:to-pink-400 transition-all duration-200 hover:scale-105">
              <button className="text-white font-semibold px-6 py-3 bg-[#0f0f0f] rounded-full hover:bg-[#1a1a1a] transition-colors duration-200">
                Contact Us
              </button>
            </div>




            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-[70%] sm:w-[50%]  md:w-[30%] max-w-sm">
          <Image
            src="/profile.png"
            alt="Jawad Ahmed"
            width={300}
            height={300}
            className="h-auto w-full object-contain rounded-full mx-auto"
          />
        </div>
      </section>
    </div>
  );
}
