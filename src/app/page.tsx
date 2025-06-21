"use client";
import React from "react";
import HeroSection from "@/components/ui/hero";
import Navbar  from "@/components/ui/navbar";
import { AboutMe } from "@/components/ui/aboutMe";
import {Services} from "@/components/ui/services"
import SkillsSection from "@/components/ui/skillSection";
import ProjectsSection from "@/components/ui/projectSection";
import Footer from "@/components/ui/footer";
import WorkflowSection from "@/components/ui/workflow"
export default function Home() {

  return (
    <>
    <Navbar />
    <HeroSection/>
    <AboutMe/>
    <Services/>
    <ProjectsSection/>
    <SkillsSection/>
    <WorkflowSection/>
    <Footer/>
    </>
  );
}
