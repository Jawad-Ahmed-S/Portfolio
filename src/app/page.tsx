"use client";
import React from "react";
import HeroSection from "@/components/ui/hero";
import { NavbarDemo } from "@/components/ui/navbar";
import { AboutMe } from "@/components/ui/aboutMe";
import SkillsSection from "@/components/ui/skillSection";
import ProjectsSection from "@/components/ui/projectSection";
import Footer from "@/components/ui/footer";
export default function Home() {

  return (
    <>
    <NavbarDemo />
    <HeroSection/>
    <AboutMe/>
    <SkillsSection/>
    <ProjectsSection/>
    <Footer/>
    </>
  );
}
