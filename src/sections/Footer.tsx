"use client";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { useState, useEffect } from 'react';

const footerLinks = [
  {
    title: "Github",
    href: "https://www.github.com/AbhishekS04",
  },
  {
    title: "Twitter",
    href: "https://www.twitter.com/_abhishek2304",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/abhishek-singh-045312292",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/_.abhishek2310",
  },
  
];

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 overflow-x-clip"> {/* Adjusted z-index */}
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col items-center gap-8 md:flex-row">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className="inline-flex items-center gap-1.5"
                target="_blank"
                rel="noopener noreferrer"
                style={{ position: "relative", zIndex: 20 }} // Ensures links are on top
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 w-12 h-12 bg-gray-500 bg-opacity-50 backdrop-blur-sm text-white rounded-full shadow-lg transition-opacity transition-transform duration-500 ease-in-out ${
          isVisible ? 'opacity-100 scale-100 animate-pulse' : 'opacity-0 scale-95 pointer-events-none'
        } hover:scale-110`}
      >
        ↑
      </button>
    </footer>
  );
};
