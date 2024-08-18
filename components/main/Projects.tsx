"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-white py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/sanota.png"
          title="Neumorphism styled portfolio website for Sanota PVT LTD"
          description="It is a ongoing simple portfolio website project using react.js, before I created it using php"
          repoLink="https://github.com/dinukaroopasingha/sanota-website-two"
        />
        <ProjectCard
          src="/weighbridge.png"
          title="Weighbridge software UI/UX design"
          description="I designed a UI/UX design for a weighbridge software using Adobe XD"
          repoLink="https://github.com/dinukaroopasingha/Weighbridge-software-UI-UX-design"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="I developed a portfolio website using Next.js and framer motion"
          repoLink="https://github.com/dinukaroopasingha/Space_Portfolio"
        />
      </div>
      <div className="p-[100px]">
        <Link href="https://github.com/dinukaroopasingha?tab=repositories">
          <motion.a
            variants={slideInFromLeft(1)}
            className="p-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            View More Projects
          </motion.a>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
