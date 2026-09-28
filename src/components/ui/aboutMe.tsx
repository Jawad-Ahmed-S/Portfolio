"use client";

import React, { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";
import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";

// Content for this list is managed in Sanity: Learning document -> LearningObj
const Learning_Query = `*[_type == "Learning"][0]{ LearningObj }`;

const facts = [
  { label: "Location", value: "Karachi, Pakistan" },
  { label: "Studying", value: "BS Computer Science, FAST-NUCES (2028)" },
  { label: "Focus", value: "AI/ML, databases, MERN web development" },
];

export function AboutMe() {
  const [learningData, setLearningData] = useState<SanityDocument | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLearningData(await client.fetch<SanityDocument>(Learning_Query));
      } catch (error) {
        console.error("Error fetching learning data:", error);
      }
    };
    fetchData();
  }, []);

  const learning: string[] = Array.isArray(learningData?.LearningObj) ? learningData!.LearningObj : [];

  return (
    <section id="aboutme" className="scroll-mt-20 w-full bg-[#FAFAFA] py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mx-auto rounded-full" />
        </div>

        <div className={`grid gap-10 ${learning.length ? "lg:grid-cols-[3fr_2fr]" : ""}`}>
          <div>
            <p className="text-lg text-[#333333] leading-relaxed max-w-2xl">
              I&apos;m Jawad Ahmed, a BS Computer Science student at FAST-NUCES Karachi. I&apos;m currently a Full Stack
              Fellow at Dev Weekends and a Teaching Assistant at my campus. I build web apps with the MERN stack and
              Next.js, and I&apos;m interested in AI/ML and database systems. I&apos;m open to internships and junior
              roles.
            </p>
            <dl className="mt-8 space-y-3">
              {facts.map((f) => (
                <div key={f.label} className="flex gap-4">
                  <dt className="w-24 shrink-0 font-semibold text-[#1C1C1C]">{f.label}</dt>
                  <dd className="text-[#333333]">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {learning.length > 0 && (
            <div className="rounded-[10px] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] self-start">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen size={28} className="text-[#FFC300]" />
                <h3 className="text-2xl font-semibold text-[#1C1C1C]">Currently Learning</h3>
              </div>
              <ul className="space-y-3 text-neutral-700">
                {learning.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#FFC300] rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}