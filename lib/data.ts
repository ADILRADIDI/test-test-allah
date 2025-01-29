import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  // {
  //   title: "Graduated bootcamp",
  //   location: "Miami, FL",
  //   description:
  //     "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "2019",
  // },
  // {
  //   title: "Front-End Developer",
  //   location: "Orlando, FL",
  //   description:
  //     "I worked as a front-end developer for 2 years SXSAA in another job. I also upskilled to the full stack.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "2019 - 2021",
  // },
  {
    title: "Full-Stack Developer Intern",
    location: "Casablanca, Technopark - IS-TECH.",
    description:
      "Worked on various projects as a full-stack developer using Vue.js and Laravel. Developed animal management systems with RFID tracking, PDF generation for official reports, and event management solutions. Gained experience in building scalable and efficient web applications.",
    icon: React.createElement(FaReact),
    date: "2021 - Present",
  },  
  {
    title: "Full-Stack Developer for RDEV Community Platform",
    location: "Casablanca, Technopark",
    description:
      "Built an innovative platform for developers, enabling post sharing, resource integration, podcast learning, tech events, and Stack Overflow Q&A integration.",
    icon: React.createElement(FaReact),
    date: "July 2024 - September 2024",
  },
  {
    title: "Full-Stack Developer for Job Portal Platform",
    location: "Casablanca, Technopark",
    description:
      "Developed a job search platform with Laravel, featuring job listings, application management, user authentication, middleware for security, and a responsive UI for optimal user experience.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2024 - October 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Weather App",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "pr 3",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "EVENT HUB",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Sass",
  "JavaScript",
  "PHP",
  "OOP",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Laravel",
  // "Node.js",
  "C programming",
  "Figma",
  "Uml",
  "Git",
  "Github",
  "Bootstrap",
  "Tailwind",
  // "Prisma",
  "MongoDB",
  // "Re",
  // "GraphQL",
  // "Apollo",
  // "Express",
  // "PostgreSQL",
  "Trello & jira",
  "Mysql",
  "Framer Motion",
] as const;
