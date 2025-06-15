"use client"

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/variant";
import { client } from '@/sanity/client';
import { type SanityDocument } from "next-sanity";
import { useState,useEffect } from "react";

// Fixed query - should match your schema name 'Learning' (not 'learning')
const Learning_Query = `*[_type == "Learning"][0]{
  LearningObj
}`;

export function AboutMe() {
  const [learningData, setLearningData] = useState<SanityDocument | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch<SanityDocument>(Learning_Query);
        console.log('Fetched learning data:', data); 
        setLearningData(data);
      } catch (error) {
        console.error("Error fetching learning data:", error);
      } 
    };

    fetchData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  
  return (
    <div
      id="aboutme"
      className="relative w-full min-h-screen bg-white dark:bg-black overflow-hidden"
    >
      {/* Background subtle gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] w-full blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-px w-full" />

      {/* Content Container */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 md:px-16 lg:px-24 py-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Section Heading */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Short Bio - Full Width */}
          <motion.div
            className="w-full max-w-none"
            variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-neutral-50 dark:bg-neutral-900/50 p-12 rounded-2xl  backdrop-blur-sm shadow-lg">
              <h3 className="text-2xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
                  Hi there!
                </span>
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-lg max-w-4xl">
              I&apos;m a web developer who enjoys creating everything from landing pages and portfolios to full ecommerce stores. 
              I work on both the frontend to make websites look great. I also work on programming languages like C++ and Python for learning core computing. 
              I also help others with coding assignments and love learning about how AI is changing the way we develop any software.
              I&apos;m always exploring new ideas and improving my skills through hands-on projects.
                </p>
            </div>
          </motion.div>

          {/* Grid for Education and Tech Stack */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side - Education */}
            <motion.div
              className="space-y-6"
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.35 }}
            >
              {/* Student Status */}
              <div className="bg-gradient-to-br min-h-64 from-blue-900/20 to-cyan-900/20 p-8 rounded-2xl shadow-md transition-shadow duration-500">
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-4 flex items-center gap-3">
                  Education
                </h3>
                <div className="space-y-2">
                  <p className="text-lg font-medium text-purple-800 dark:text-purple-300">
                    Bachelor&apos;s in Computer Science
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Currently pursuing my degree with a focus on core computing,
                    software engineering and AI integration.
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500">
                    Expected Graduation: 2028
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Currently Learning */}
            <motion.div
              className="space-y-6"
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.35 }}
            >
              {/* Current Focus */}
              <div className="bg-gradient-to-br h-64 from-blue-900/20 to-cyan-900/20 p-8 rounded-2xl  shadow-md  transition-shadow duration-500">
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-4 flex items-center gap-3">
                  Currently Learning
                </h3>
                <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
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
                      Loading learning items...
                    </li>
                  )}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Fun Fact or Quote */}
        <motion.div
          className="mt-16 text-center"
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
        >
          <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 dark:from-purple-900/30 dark:to-pink-900/30 p-8 rounded-2xl mx-auto shadow-lg  transition-shadow duration-300">
            <p className="text-lg italic text-neutral-700 dark:text-neutral-300 mb-2">
                The best way to predict the future is to create it.
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-500">
              This quote drives my passion for building innovative web solutions ✨
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
