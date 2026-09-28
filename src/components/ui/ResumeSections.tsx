"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience, education, type TimelineEntry } from "@/lib/profile";

// TODO items are visible in development only, hidden in production.
const showTodo = process.env.NODE_ENV !== "production";
const isTodo = (s: string) => s.startsWith("TODO");

function Timeline({ items, icon: Icon }: { items: TimelineEntry[]; icon: typeof Briefcase }) {
  return (
    <ol className="relative border-l-2 border-[#E0E0E0] ml-4 space-y-8">
      {items.map((item) => {
        const points = item.points.filter((p) => showTodo || !isTodo(p));
        return (
          <motion.li
            key={item.title + item.period}
            className="relative pl-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
          >
            <span className="absolute -left-[17px] top-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#1C1C1C] text-[#FFC300]">
              <Icon size={16} />
            </span>
            <div className="rounded-[10px] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-semibold text-[#1C1C1C]">{item.title}</h3>
                <span className="text-sm font-medium text-[#6b6b6b]">{item.period}</span>
              </div>
              <p className="font-medium text-[#333333]">
                {item.org}
                {item.location ? `, ${item.location}` : ""}
              </p>
              {points.length > 0 && (
                <ul className="mt-3 space-y-2 text-[#333333]">
                  {points.map((p, i) =>
                    isTodo(p) ? (
                      <li key={i} className="rounded border border-dashed border-[#FFC300] bg-[#FFF8DC] px-3 py-2 text-sm">
                        {p}
                      </li>
                    ) : (
                      <li key={i} className="list-disc ml-5">
                        {p}
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
}

function Section({ id, title, bg, children }: { id: string; title: string; bg: string; children: React.ReactNode }) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 px-6 md:px-16 lg:px-24 ${bg}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-4">{title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mx-auto rounded-full" />
        </div>
        {children}
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience" bg="bg-[#FAFAFA]">
      <Timeline items={experience} icon={Briefcase} />
    </Section>
  );
}

export function EducationSection() {
  return (
    <Section id="education" title="Education" bg="bg-[#F5F5F5]">
      <Timeline items={education} icon={GraduationCap} />
    </Section>
  );
}