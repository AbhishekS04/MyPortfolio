import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

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
    href: "https://www.instagram.com/_.abhishek2304",
  },
];

export const Footer = () => {
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
    </footer>
  );
};
