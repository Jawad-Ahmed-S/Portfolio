"use client";

import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/lib/profile";

const btn =
  "inline-flex items-center gap-2 rounded-[6px] px-5 py-3 font-semibold transition-colors duration-200";

export default function ContactSection() {
  return (
    <footer id="contact" className="scroll-mt-20 bg-[#1C1C1C] px-6 md:px-16 lg:px-24 pt-20 pb-8 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in touch</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mx-auto rounded-full mb-6" />
        <p className="text-[#E0E0E0] max-w-xl mx-auto">
          I&apos;m open to internships and junior roles. Email me or send a message through the form and I&apos;ll reply
          as soon as I can.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href={`mailto:${profile.email}`} className={`${btn} bg-[#FFC300] text-[#1C1C1C] hover:bg-[#e6b200]`}>
            <Mail size={18} /> {profile.email}
          </a>
          <Link href="/contactus" className={`${btn} border border-white/40 hover:border-[#FFC300] hover:text-[#FFC300]`}>
            Send a message
          </Link>
        </div>

        <div className="mt-6 flex justify-center gap-6">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#FFC300] transition-colors">
            <FaLinkedin size={22} /> LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#FFC300] transition-colors">
            <FaGithub size={22} /> GitHub
          </a>
        </div>
      </div>

      <p className="mt-16 text-center text-sm text-[#979797]">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js, Tailwind and Sanity.
      </p>
    </footer>
  );
}