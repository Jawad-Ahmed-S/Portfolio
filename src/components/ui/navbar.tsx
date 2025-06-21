"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`${outfit.className} w-full bg-[#FAFAFA] fixed top-0 left-0 z-50`}>
      <div className="max-w-7xl font-sans mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl  font-bold text-[#FFC300] tracking-tight"><span className="text-[#1C1C1C] text-3xl">J</span>awad</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center tracking-wide space-x-6 text-sm">
          <Link href="/#aboutme" className="text-[#1C1C1C] font-bold hover:text-[#FFC300] transition-colors duration-200">About Me</Link>
          <Link href="/#skills" className="text-[#1C1C1C] font-bold hover:text-[#FFC300] transition-colors duration-200">Skills</Link>
          <Link href="/#projects" className="text-[#1C1C1C] font-bold hover:text-[#FFC300] transition-colors duration-200">Projects</Link>
          <Link href="/#services" className="text-[#1C1C1C] font-bold hover:text-[#FFC300] transition-colors duration-200">Services</Link>
          <Link href="/contactus" className="text-[#1C1C1C] font-bold hover:text-[#FFC300] transition-colors duration-200">Contact</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? <X size={28} className="text-[#1C1C1C]" /> : <Menu size={28} className="text-[#1C1C1C]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FAFAFA] flex flex-col items-end space-y-4 py-4 px-6 text-sm shadow-md">
          <Link href="/#aboutme" className="text-[#1C1C1C] font-bold hover:text-[#FFC300] transition-colors duration-200" onClick={toggleMenu}>About Me</Link>
          <Link href="/#skills" className="text-[#1C1C1C] font-bold hover:text-[#FFC300] transition-colors duration-200" onClick={toggleMenu}>Skills</Link>
          <Link href="/#projects" className="text-[#1C1C1C] font-bold hover:text-[#FFC300] transition-colors duration-200" onClick={toggleMenu}>Projects</Link>
          <Link href="/#services" className="text-[#1C1C1C] font-bold hover:text-[#FFC300] transition-colors duration-200" onClick={toggleMenu}>Services</Link>
          <Link href="/contactus" className="text-[#1C1C1C] font-bold hover:text-[#FFC300] transition-colors duration-200" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
