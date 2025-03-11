import TypingGhost from "@/assets/images/project2.png";
import MovieReccomendationSystem from "@/assets/images/projet11.png";
import Devportfolio from "@/assets/images/project-3.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHedder";
import { Card } from "@/components/Card";
const portfolioProjects = [
  {
    company: "Typing Ghost",
    year: "2024",
    title: "Typing Practice",
    results: [
      { title: "Increased typing speed by 50%" },
      { title: "Improved typing accuracy by 30%" },
      { title: "Enhanced user engagement by 40%" },
    ],
    link: "https://typing-ghost.vercel.app/",
    image: TypingGhost,
  },
  {
    company: "Movie Recommendation",
    year: "2024",
    title: "Movie Recommendation",
    results: [
      { title: "Improved recommendation accuracy by 25%" },
      { title: "Increased user retention by 20%" },
      { title: "Enhanced user satisfaction by 35%" },
    ],
    link: "https://recommendation-system-wine.vercel.app/",
    image: MovieReccomendationSystem,
  },
  {
    company: "Dev portfolio",
    year: "2024",
    title: "Portfolio",
    results: [
      { title: "Showcased portfolio to highlight key projects and skills" },
      { title: "Enhanced user interface for seamless navigation" },
      { title: "Optimized design for improved user engagement" },
    ],
    link: "https://www.devaura.tech",
    image: Devportfolio,
  },
  {
    company: "My GitHub",
    year: "23-25",
    title: "Check All My Projects",
    results: [
      { title: "Check out all my projects on GitHub" },
      { title: "Contribute to open-source projects" },
      { title: "Collaborate on exciting projects" },
    ],
    link: "https://www.github.com/AbhishekS04",
    image: "",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-World Results"
          title="Featured Projects"
          description=" Here are some of the projects I've worked on and the results they've
          achieved."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project , projectIndex) => (
            <Card
              key={project.title}
              className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky "
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
             
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16 ">
                  <div className="bg-gradient-to-r gap-2 from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span> {project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl md:mt-5 mt-2">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm text-white/50 md:text-base"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                      <span>Live Site</span>
                      <ArrowUpRightIcon/>
                    </button>
                  </a>
                </div>
                <div className="relative ">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:w-auto lg:h-full lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
