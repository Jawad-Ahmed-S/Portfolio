"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/lib/profile";
import { FileText } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] bg-[#FAFAFA] relative flex items-center w-full justify-center overflow-hidden">
      <section className="relative w-full min-h-[80vh] px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-around gap-12 z-20 py-10 mt-12 md:mt-0">
        <div className="w-full md:w-1/2 max-w-2xl text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#333333] font-sans tracking-tight">
            Hello, I&apos;m{" "}
            <span className="relative inline-block w-max text-[#FFC300]">
              {profile.name}
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2A2E35] min-h-[2.5rem]">
            <Typewriter
              words={[
                "CS Student @ FAST-NUCES",
                "Full Stack Developer (MERN)",
                "AI/ML Enthusiast",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-lg text-[#6b6b6b] font-semibold max-w-xl">
            I&apos;m a computer science student in Karachi who builds full
            stack web apps and is interested in AI and databases. I&apos;m
            looking for internship and job opportunities.
          </p>

          <div className="mt-4 space-y-5">
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
              <Link
                href="/#projects"
                className="font-semibold px-6 py-3 bg-[#1C1C1C] text-white rounded-[6px] hover:bg-[#333333] hover:text-[#FFC300] transition-colors duration-200"
              >
                View Projects
              </Link>

              {profile.resume && (
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold px-6 py-3 bg-[#FFC300] text-[#1C1C1C] rounded-[6px] hover:bg-[#e6b200] transition-colors duration-200"
                >
                  <FileText size={18} />
                  Resume
                </a>
              )}

              <Link
                href="/#contact"
                className="font-semibold px-6 py-3 border-2 border-[#1C1C1C] text-[#1C1C1C] rounded-[6px] hover:border-[#FFC300] hover:text-[#FFC300] transition-colors duration-200"
              >
                Contact Me
              </Link>
            </div>

            <div className="flex justify-center md:justify-start items-center gap-4 text-[#1C1C1C]">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-[#FFC300] transition-colors"
              >
                <FaGithub size={26} />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#FFC300] transition-colors"
              >
                <FaLinkedin size={26} />
              </a>
            </div>
          </div>
        </div>

        <div className="w-[70%] sm:w-[50%] md:w-[25%] max-w-sm">
          <Image
            src="/blobprofile.png"
            alt={profile.name}
            width={300}
            height={300}
            priority
            className="h-auto w-full object-contain mx-auto"
          />
        </div>
      </section>
    </div>
  );
}