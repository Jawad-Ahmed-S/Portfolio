"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const links = [
  { href: "/#aboutme", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#education", label: "Education" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

const linkClass = "text-[#1C1C1C] font-bold hover:text-[#FFC300] transition-colors duration-200";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`${outfit.className} w-full bg-[#FAFAFA] fixed top-0 left-0 z-50`}>
      <div className="max-w-7xl font-sans mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#FFC300] tracking-tight">
          <span className="text-[#1C1C1C] text-3xl">J</span>awad
        </Link>

        <div className="hidden md:flex items-center tracking-wide space-x-6 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={linkClass}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle Menu" aria-expanded={menuOpen}>
            {menuOpen ? <X size={28} className="text-[#1C1C1C]" /> : <Menu size={28} className="text-[#1C1C1C]" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#FAFAFA] flex flex-col items-end space-y-4 py-4 px-6 text-sm shadow-md">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={linkClass} onClick={toggleMenu}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}