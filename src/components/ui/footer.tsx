import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Facebook, 
  Github, 
  Linkedin, 
  Mail, 
  Home,
  ExternalLink 
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Home',
      icon: Home,
      href: '#',
      color: 'hover:text-blue-300'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Jawad-Ahmed-S',
      color: 'hover:text-blue-300'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/jawad-ahmed-s/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://www.facebook.com/jawadahmed.personal',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:jawadahmed.code@gmail.com',
      color: 'hover:text-blue-300'
    }
  ];

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-sm overflow-hidden flex items-center justify-center">
              {/* <span className="text-white font-bold text-sm">P</span> */}
              <Image
               src="/profile.png"
               alt="logo"
               width={40}
               height={40}/>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">Jawad Ahmed</h3>
              <p className="text-neutral-400 text-sm">Frontend Developer</p>
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
                  className={`p-2 rounded-sm bg-neutral-900 text-neutral-400 transition-all duration-200 ${social.color} hover:bg-neutral-800 group`}
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
        <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <p className="text-neutral-500 text-sm">
            © 2025 Jawad Ahmed. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 text-sm text-neutral-500">
            
            <a 
              href="#projects" 
              className="hover:text-neutral-300 transition-colors duration-200 flex items-center space-x-1"
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