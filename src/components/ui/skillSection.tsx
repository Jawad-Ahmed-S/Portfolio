import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaPython, FaWordpress
} from 'react-icons/fa';
import {
  SiTypescript, SiNextdotjs, SiCplusplus, SiC, SiSanity
} from 'react-icons/si';

const SkillsSection = () => {
  const skills = [
    { name: 'HTML', icon: FaHtml5 },
    { name: 'CSS', icon: FaCss3Alt },
    { name: 'JavaScript', icon: FaJs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'C++', icon: SiCplusplus },
    { name: 'React', icon: FaReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Sanity', icon: SiSanity },
    { name: 'Wordpress', icon: FaWordpress },
    { name: 'Git', icon: FaGitAlt },
    { name: 'C', icon: SiC },
    { name: 'Python', icon: FaPython }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id='skills' className="py-20 px-4 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#1C1C1C] mb-6">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="group cursor-pointer"
              >
                <div className="relative bg-white p-6 md:p-8 text-center rounded-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:bg-[#1C1C1C] transition-all duration-300">
                  <div className="relative z-10">
                    <div className="flex justify-center mb-4">
                      <div className="transform group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-4xl text-[#1C1C1C] group-hover:text-[#FFC300] transition-colors duration-300" />
                      </div>
                    </div>
                    <h3 className="text-[#1C1C1C] group-hover:text-white font-semibold text-lg md:text-xl transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;
