"use client";

import { useCallback } from "react";

const headerLinks = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Contact",
    href: "#contact",
  },
  {
    title: "Resume",
    href: "/assets/pdf/test-resume.pdf", 
  },
];

export const Header = () => {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    []
  );

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {headerLinks.map((link) => (
          <a
            key={link.title}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className={`nav-item ${
              link.title === "Resume"
                ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900 hidden md:block"
                : ""
            }`}
            download={link.title === "Resume" ? "test.pdf" : undefined}
          >
            {link.title}
          </a>
        ))}
      </nav>
    </div>
  );
};