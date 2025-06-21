import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Github, Linkedin, Mail, Home, ExternalLink } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Home',
      icon: Home,
      href: '#',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Jawad-Ahmed-S',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/jawad-ahmed-s/',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://www.facebook.com/jawadahmed.personal',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:jawadahmed.code@gmail.com',
    },
  ];

  return (
    <footer className="bg-[#FAFAFA] border-t border-[#E0E0E0]">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-[#F5F5F5]">
              <Image src="/profile.png" alt="logo" width={40} height={40} />
            </div>
            <div>
              <h3 className="text-[#1C1C1C] font-semibold text-lg">Jawad Ahmed</h3>
              <p className="text-[#333333] text-sm">Frontend Developer</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-full bg-[#F5F5F5] text-[#333333] hover:bg-[#333333] hover:text-[#FFC300] transition-all duration-300 group"
                  aria-label={social.name}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <IconComponent size={18} />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-[#E0E0E0] flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <p className="text-[#333333] text-sm">
            © 2025 Jawad Ahmed. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 text-sm text-[#333333]">
            <a
              href="#projects"
              className="flex items-center space-x-1 hover:text-[#FFC300] transition-colors duration-300"
            >
              <span>Projects</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
