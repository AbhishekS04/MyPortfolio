"use client";

import { SectionHeader } from "@/components/SectionHedder";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import Nextjs from "@/assets/icons/nextjs-icon-svgrepo-com.svg";
import Tailwindcss from "@/assets/icons/tailwind-css-svgrepo-com.svg";
import mapImage from "@/assets/images/map.png";
import smileMimoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Next.js",
    iconType: Nextjs,
  },
  {
    title: "Tailwind CSS",
    iconType: Tailwindcss,
  },
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "GitHub",
    iconType: GithubIcon,
  },
  {
    title: "TypeScript",
    iconType: TypeScriptIcon,
  },
];

const hobbies = [
  {
    title: "Cricket",
    emoji: "🏏",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Read",
    emoji: "📚",
    left: "55%",
    top: "30%",
  },
  {
    title: "Code",
    emoji: "💻",
    left: "70%",
    top: "52%",
  },
  {
    title: "Eat",
    emoji: "🍔",
    left: "15%",
    top: "65%",
  },
  {
    title: "Sleep",
    emoji: "😴",
    left: "55%",
    top: "72%",
  },
];

export const AboutSection = () => {
  const constraintsRef = useRef(null);
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Explore who I am, what I do, and what fuels my journey."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 ">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <motion.div
                whileHover={{ scale: 1.1, y: -12 }}
                transition={{
                  type: "tween",
                  stiffness: 300,
                }}
                className="w-40 mx-auto mt-2 md:mt-0"
              >
                <Image src={bookImage} alt="Book Cover" />
              </motion.div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exectional digital experiences."
                className="px-6 pt-6"
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col col-span-3 lg:col-span-2 ">
              <CardHeader
                title="Beyond the code"
                description="Explore my intrests hobbies Beyond the code."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintsRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintsRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            {/* Map image */}
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover object-left-top"
              />
              {/* Emoji background now clickable */}
              <a href="https://maps.app.goo.gl/9r8eyR9uyMfgjQtM9" target="_blank" rel="noopener noreferrer">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                  <Image src={smileMimoji} alt="Memoji" className="size-20" />
                </div>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
