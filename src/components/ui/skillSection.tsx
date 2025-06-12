import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaPython, 
  FaWordpress
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiCplusplus, SiC, 
  SiSanity
} from 'react-icons/si';

const SkillsSection = () => {
  const skills = [
    {
      name: 'HTML',
      icon: FaHtml5
    },
    {
      name: 'CSS',
      icon: FaCss3Alt
    },
    {
      name: 'JavaScript',
      icon: FaJs
    },
    {
      name: 'TypeScript',
      icon: SiTypescript
    },
    {
      name: 'C++',
      icon: SiCplusplus
    },
    {
      name: 'React',
      icon: FaReact
    },
    {
      name: 'Next.js',
      icon: SiNextdotjs
    },
    {
      name: 'Sanity',
      icon: SiSanity
    },
    {
      name: 'Wordpress',
      icon: FaWordpress
    },
    {
      name: 'Git',
      icon: FaGitAlt
    },
    {
      name: 'C',
      icon: SiC
    },
    {
      name: 'Python',
      icon: FaPython
    }
  ];


  const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // faster stagger
      duration: 0.3
    }
  }
};


  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id='skills' className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            My Skills
          </h2>
          
         
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
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
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
        className="group"
      >
        <div className="relative bg-gradient-to-br from-blue-50/5 to-cyan-50/5 dark:from-blue-900/10 dark:to-cyan-900/10 backdrop-blur-sm border border-blue-200/10 dark:border-blue-800/10 rounded-2xl p-6 md:p-8 text-center hover:bg-gradient-to-br hover:from-blue-50/10 hover:to-cyan-50/10 dark:hover:from-blue-900/20 dark:hover:to-cyan-900/20 transition-all duration-300 hover:border-blue-200/20 dark:hover:border-blue-800/20">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
          <div className="relative z-10">
            <div className="flex justify-center mb-4">
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                <Icon className="text-4xl" />
              </div>
            </div>
            <h3 className="text-white font-semibold text-lg md:text-xl">
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