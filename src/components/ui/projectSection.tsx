import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { client } from '@/sanity/client';
import { type SanityDocument } from "next-sanity";
import {motion} from 'framer-motion'
import Image from 'next/image'
import { fadeIn } from '@/app/variant';
const PROJECTS_QUERY = `*[_type == "project"] | order(order asc) {
  _id,
  title,
  description,
  "imageUrl": image.asset->url,
  skills,
  GithubLink,
  DemoLink,
  category,
  _createdAt
}`;
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


const options = { next: { revalidate: 30 } };

const ProjectCard = ({ project, index }: {
  project: SanityDocument;
  index: number;
}) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
    variants={fadeIn("up",0.1)}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0.01}}
      className={cn(
        "flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16 lg:mb-24 transition-all duration-1000 ease-out opacity-100 translate-y-20",
        !isEven && "lg:flex-row-reverse"
      )}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Image Section */}
      <div className="flex-1 group">
        <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/[0.2] bg-white dark:bg-black shadow-lg hover:shadow-xl transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-cyan-50/20 dark:from-blue-900/20 dark:to-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
          {project.imageUrl && (
      <div className="w-full h-64 lg:h-80 relative">
            <Image
              src={project.imageUrl} 
              alt={project.title}
              fill
              className=" object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
      </div>
          )}
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full">
              {project.category || 'Project'}
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 space-y-6">
        <div className="space-y-4">
          <h3 className="text-2xl lg:text-3xl font-bold text-neutral-800 dark:text-neutral-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-500">
            {project.title}
          </h3>
          
          <p className="text-base lg:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        {project.skills && project.skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.skills.map((tech: string, i: number) => (
              <span 
                key={i}
                className="px-3 py-1 text-sm bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border border-blue-200/50 dark:border-blue-800/50 rounded-lg text-neutral-700 dark:text-neutral-300 hover:shadow-md transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4 pt-2">
          {project.DemoLink?.current && (
            <a 
              href={project.DemoLink.current}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
          
          {project.GithubLink?.current && (
            <a 
              href={project.GithubLink.current}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border-2 border-neutral-200 dark:border-white/[0.2] text-neutral-700 dark:text-neutral-300 rounded-xl font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsSection() {
  const [projects, setProjects] = useState<SanityDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch<SanityDocument[]>(PROJECTS_QUERY, {}, options);
        console.log('Fetched projects:', data); 
        setProjects(data || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 min-h-screen flex items-center justify-center"
      
        >
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">Loading projects...</p>
        </div>
      </section>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 min-h-screen">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-neutral-800 dark:text-white mb-6">
            Projects
          </h2> 
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">No projects found.</p>
        </div>
      </section>
    );
  }

  return (
    <motion.section id='projects' className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 min-h-screen"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-neutral-800 dark:text-white mb-6">
            Projects
          </h2> 
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div key={project._id} 
            data-project-index={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}>
              <ProjectCard 
                project={project} 
                index={index}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
