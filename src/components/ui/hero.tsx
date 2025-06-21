"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Typewriter } from 'react-simple-typewriter';

export default function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] bg-[#FAFAFA] relative flex items-center w-full justify-center overflow-hidden">
      <section className="relative w-full min-h-[80vh] px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-around gap-12 z-20 py-10 mt-12 md:mt-0">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 max-w-2xl text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#333333] font-sans tracking-tight">
            Hello, I&apos;m{" "}
            <span className="relative inline-block w-max text-[#FFC300]">
              Jawad Ahmed
            </span>
          </h1>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2A2E35]">
  <Typewriter
    words={['Frontend Developer', 'Web Designer']}
    loop={0} // 0 for infinite loop
    cursor
    cursorStyle="|"
    typeSpeed={80}
    deleteSpeed={50}
    delaySpeed={1500}
  />
</h3>

          <p className="text-lg text-[#979797] font-semibold max-w-xl">
            I design and build fast, clean websites that help businesses grow and stand out online.
          </p>

          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <Link href="/contactus">
              <button className="hover:text-[#FFC300] font-semibold px-6 py-3 bg-[#1C1C1C] text-white rounded-[6px] hover:bg-[#333333] transition-colors duration-200">
                Let’s Work Together
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-[70%] sm:w-[50%] md:w-[25%] max-w-sm">
          <Image
            src="/blobprofile.png"
            alt="Jawad Ahmed"
            width={300}
            height={300}
            className="h-auto w-full object-contain mx-auto"
          />
        </div>
      </section>
    </div>
  );
}
