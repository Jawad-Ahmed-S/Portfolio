"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";

// Projects are managed in Sanity (unchanged query and schema).
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

/* ---------- Card (click to open) ---------- */
function ProjectCard({ project, onOpen }: { project: SanityDocument; onOpen: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6 }}
      aria-haspopup="dialog"
      className="group w-full text-left overflow-hidden rounded-[12px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.16)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300]"
    >
      <div className="relative h-48 w-full bg-gradient-to-br from-[#1C1C1C] to-[#333333] overflow-hidden">
        {project.imageUrl && (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <div className="p-5">
        <span className="inline-block rounded-full bg-[#FFC300] px-3 py-1 text-xs font-medium text-[#333333]">
          {project.category || "Project"}
        </span>
        <h3 className="mt-3 text-lg font-bold text-[#1C1C1C]">{project.title}</h3>
        <p className="mt-1 text-sm text-[#333333] line-clamp-2">{project.description}</p>
        <span className="mt-4 inline-block text-sm font-semibold text-[#1C1C1C] group-hover:text-[#b58900] transition-colors">
          View details
        </span>
      </div>
    </motion.button>
  );
}

/* ---------- Modal (blurred backdrop, details on top) ---------- */
function ProjectModal({ project, onClose }: { project: SanityDocument; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden"; // lock page scroll while open
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const demo = project.DemoLink?.current;
  const github = project.GithubLink?.current;
  const skills: string[] = project.skills ?? [];

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4 backdrop-blur-md sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.94, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 16 }}
        transition={{ type: "spring", stiffness: 320, damping: 30 }}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          autoFocus
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-[#FFC300] hover:text-[#1C1C1C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300]"
        >
          <X size={20} />
        </button>

        <div className="relative aspect-video w-full bg-gradient-to-br from-[#1C1C1C] to-[#333333]">
          {project.imageUrl && (
            <Image src={project.imageUrl} alt={project.title} fill sizes="768px" className="object-cover" priority />
          )}
        </div>

        <div className="p-6 sm:p-8">
          <span className="inline-block rounded-full bg-[#FFC300] px-3 py-1 text-xs font-medium text-[#333333]">
            {project.category || "Project"}
          </span>
          <h3 id="project-modal-title" className="mt-3 text-2xl font-bold text-[#1C1C1C] sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-4 whitespace-pre-line leading-relaxed text-[#333333]">{project.description}</p>

          {skills.length > 0 && (
            <div className="mt-6">
              <h4 className="mb-2 text-sm font-semibold text-[#1C1C1C]">Built with</h4>
              <ul className="flex flex-wrap gap-2">
                {skills.map((s, i) => (
                  <li key={i} className="rounded-full bg-[#F5F5F5] px-3 py-1 text-sm text-[#1C1C1C]">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {(demo || github) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[6px] bg-[#FFC300] px-5 py-2.5 font-semibold text-[#1C1C1C] transition-colors hover:bg-[#e6b200]"
                >
                  <ExternalLink size={16} /> Live demo
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[6px] bg-[#1C1C1C] px-5 py-2.5 font-semibold text-white transition-colors hover:bg-[#333333] hover:text-[#FFC300]"
                >
                  <FaGithub size={16} /> Source code
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ---------- Section ---------- */
export default function ProjectsSection() {
  const [projects, setProjects] = useState<SanityDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<SanityDocument | null>(null);
  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setProjects((await client.fetch<SanityDocument[]>(PROJECTS_QUERY)) || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section id="projects" className="scroll-mt-20 bg-[#F5F5F5] px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#1C1C1C] md:text-5xl">Projects</h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600" />
          </div>

          {loading ? (
            <div className="py-16 text-center">
              <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-[#FFC300]" />
              <p className="text-[#333333]">Loading projects...</p>
            </div>
          ) : projects.length === 0 ? (
            <p className="py-16 text-center text-[#333333]">Projects are coming soon.</p>
          ) : (
            <div className="mx-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mx-0 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project._id} project={project} onOpen={() => setSelected(project)} />
              ))}
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>{selected && <ProjectModal key={selected._id} project={selected} onClose={close} />}</AnimatePresence>
    </>
  );
}