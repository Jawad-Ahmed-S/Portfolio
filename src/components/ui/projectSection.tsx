"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { client } from '@/sanity/client';
import { type SanityDocument } from 'next-sanity';
import Image from 'next/image';
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
      staggerChildren: 0.1,
      duration: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const FlipCard = ({ project }: { project: SanityDocument }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      variants={fadeIn('up', 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.01 }}
      className="group perspective-1000 h-80"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front Side */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative w-full h-full bg-[#FAFAFA] rounded-[10px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            {project.imageUrl && (
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="mb-2 px-3 py-1 text-xs font-medium bg-[#FFC300] text-[#333333] rounded-full inline-block">
                {project.category || 'Project'}
              </div>
              <h3 className="text-lg font-bold text-white">
                {project.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="w-full h-full bg-[#ffffff] rounded-[10px] p-4 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="mb-2 px-3 py-1 text-xs font-medium bg-[#FFC300] text-[#333333] rounded-full inline-block">
                {project.category || 'Project'}
              </div>
              <h3 className="text-lg font-bold text-[#1C1C1C] mb-3">
                {project.title}
              </h3>
              <p className="text-sm text-[#1C1C1C] mb-4 line-clamp-4 leading-relaxed">
                {project.description}
              </p>
              {project.skills && project.skills.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.skills.slice(0, 4).map((tech: string, i: number) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs  bg-[#F5F5F5] rounded-full  text-[#1C1C1C]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.skills.length > 4 && (
                    <span className="px-2 py-1 text-xs text-[#999999]">
                      +{project.skills.length - 4}
                    </span>
                  )}
                </div>
              )}
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-2">
              {project.DemoLink?.current && (
                <a
                  href={project.DemoLink.current}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-3 py-2 bg-[#FFC300] text-[#333333] font-medium text-sm rounded hover:bg-[#e6b200] transition-all duration-300 hover:scale-[1.02]"
                >
                  Live Demo
                </a>
              )}
              {project.GithubLink?.current && (
                <a
                  href={project.GithubLink.current}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-3 py-2 border border-[#FFC300] text-[#FFC300] font-medium text-sm rounded hover:bg-[#FFC300] hover:text-[#333333] transition-all duration-300 hover:scale-[1.02]"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
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
        const data = await client.fetch<SanityDocument[]>(PROJECTS_QUERY);
        console.log('Fetched projects:', data);
        setProjects(data || []);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-4 bg-[#F5F5F5] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FFC300] mx-auto mb-4"></div>
          <p className="text-lg text-[#333333]">Loading projects...</p>
        </div>
      </section>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <section className="py-20 px-4 bg-[#F5F5F5] min-h-screen">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-[#1C1C1C] mb-6">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FFC300] to-[#FFC300] mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-[#333333]">No projects found.</p>
        </div>
      </section>
    );
  }

  return (
    <>
    <section
      id="projects"
       className="py-20 px-4 bg-[#F5F5F5] min-h-screen">
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.2 }}
  >
       <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#1C1C1C] mb-6">Previous Work</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mx-auto mt-4 rounded-full"></div>
         </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 lg:mx-0">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              data-project-index={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <FlipCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </motion.div>
    </section>
    </>
  );
}