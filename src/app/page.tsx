"use client";
import React from "react";
import Navbar from "@/components/ui/navbar";
import HeroSection from "@/components/ui/hero";
import { AboutMe } from "@/components/ui/aboutMe";
import ProjectsSection from "@/components/ui/projectSection";
import { ExperienceSection, EducationSection } from "@/components/ui/ResumeSections";
import SkillsSection from "@/components/ui/skillSection";
import ContactSection from "@/components/ui/contactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}