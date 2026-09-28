"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaPython, FaWordpress, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiCplusplus, SiC, SiSanity, SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const groups = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: FaPython },
      { name: "C++", icon: SiCplusplus },
      { name: "C", icon: SiC },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    // TODO: Node.js, Express and MongoDB are inferred from "MERN" in your LinkedIn. Remove any you don't use.
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Tools & CMS",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Sanity", icon: SiSanity },
      { name: "WordPress", icon: FaWordpress },
    ],
  },
];

const focus = ["Artificial Intelligence", "Database Management Systems", "Web Development (MERN)"];

const SkillsSection = () => (
  <section id="skills" className="scroll-mt-20 py-20 px-6 md:px-16 lg:px-24 bg-[#FAFAFA]">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-4">Skills</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mx-auto rounded-full" />
        <p className="mt-6 text-[#333333]">
          Main focus:{" "}
          <span className="font-semibold">{focus.join(", ")}</span>
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((g) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="rounded-[10px] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
          >
            <h3 className="text-xl font-semibold text-[#1C1C1C] mb-4">{g.title}</h3>
            <ul className="flex flex-wrap gap-3">
              {g.skills.map(({ name, icon: Icon }) => (
                <li
                  key={name}
                  className="group flex items-center gap-2 rounded-full bg-[#F5F5F5] px-4 py-2 text-[#1C1C1C] transition-colors duration-200 hover:bg-[#1C1C1C] hover:text-white"
                >
                  <Icon className="text-xl group-hover:text-[#FFC300] transition-colors duration-200" />
                  <span className="font-medium">{name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;