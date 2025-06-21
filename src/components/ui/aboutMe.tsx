"use client";

import React from "react";
import { motion } from "framer-motion";
import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";
import { useState, useEffect } from "react";
import { BookOpen, GraduationCap, User, Code } from "lucide-react";

const Learning_Query = `*[_type == "Learning"][0]{ LearningObj }`;

export function AboutMe() {
  const [learningData, setLearningData] = useState<SanityDocument | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch<SanityDocument>(Learning_Query);
        setLearningData(data);
      } catch (error) {
        console.error("Error fetching learning data:", error);
      }
    };
    fetchData();
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div id="aboutme" className="relative w-full min-h-screen bg-[#FAFAFA] overflow-hidden">
      <motion.div
        className="relative z-10 mx-auto px-6 md:px-16 lg:px-24 py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333] mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Who I Am */}
          <motion.div
            className="group bg-white p-8 rounded-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:bg-[#1C1C1C] transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <User size={32} className="text-[#1C1C1C] group-hover:text-[#FFC300] transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-[#1C1C1C] group-hover:text-white transition-colors duration-300">
                Who I Am?
              </h3>
            </div>
            <p className="text-[#333333] group-hover:text-[#E0E0E0] transition-colors duration-300">
              I&apos;m Jawad Ahmed, a web designer and frontend developer dedicated to build websites that not only look great but also help businesses grow. I focus on simple, effective designs that make it easy for your customers to connect with you.
            </p>
          </motion.div>

          {/* What I Do */}
          <motion.div
            className="group bg-white p-8 rounded-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:bg-[#1C1C1C] transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <Code size={32} className="text-[#1C1C1C] group-hover:text-[#FFC300] transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-[#1C1C1C] group-hover:text-white transition-colors duration-300">
                What I Do
              </h3>
            </div>
            <p className="text-[#333333] group-hover:text-[#E0E0E0] transition-colors duration-300">
              I design and develop fast, modern, and fully responsive websites. Whether you need a fresh landing page, a complete website, a redesign, or ongoing support, I try to make the process smooth and help your business look more premium and professional with clean, modern design.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            className="group bg-white p-8 rounded-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:bg-[#1C1C1C] transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <GraduationCap size={32} className="text-[#1C1C1C] group-hover:text-[#FFC300] transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-[#1C1C1C] group-hover:text-white transition-colors duration-300">
                Education
              </h3>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-medium text-purple-800 group-hover:text-purple-300 transition-colors duration-300">
                Bachelor&apos;s in Computer Science
              </p>
              <p className="text-neutral-600 group-hover:text-neutral-300 transition-colors duration-300">
                Currently pursuing my degree with a focus on core computing, software engineering, and AI integration.
              </p>
              <p className="text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300">
                Expected Graduation: 2028
              </p>
            </div>
          </motion.div>

          {/* Currently Learning */}
          <motion.div
            className="group bg-white p-8 rounded-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:bg-[#1C1C1C] transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <BookOpen size={32} className="text-[#1C1C1C] group-hover:text-[#FFC300] transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-[#1C1C1C] group-hover:text-white transition-colors duration-300">
                Currently Learning
              </h3>
            </div>
            <ul className="space-y-3 text-neutral-700 group-hover:text-neutral-300 transition-colors duration-300">
              {learningData?.LearningObj && Array.isArray(learningData.LearningObj) ? (
                learningData.LearningObj.map((item: string, index: number) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    {item}
                  </li>
                ))
              ) : (
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Learning new tools and technologies to serve you better...
                </li>
              )}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
