// Single place for the static (non-Sanity) content of the portfolio.
// Projects and "Currently Learning" still come from Sanity.
// Anything starting with "TODO" is shown only in development (yellow dashed box)
// and is hidden automatically on the production site until you replace it.

export const profile = {
  name: "Jawad Ahmed",
  headline: "BSCS @ FAST-NUCES · Full Stack Fellow @ Dev Weekends · AI/ML · MERN",
  location: "Karachi, Sindh, Pakistan",
  email: "jawadahmed.code@gmail.com",
  github: "https://github.com/Jawad-Ahmed-S",
  linkedin: "https://www.linkedin.com/in/jawad-ahmed-s",
  repo: "https://github.com/Jawad-Ahmed-S/Portfolio",
  site: "https://jawad-ahmed.vercel.app",
  resume: "/resume.pdf",
};

export type TimelineEntry = {
  title: string;
  org: string;
  location?: string;
  period: string;
  points: string[];
};

export const experience: TimelineEntry[] = [
  {
    title: "Teaching Assistant",
    org: "FAST-NUCES, Karachi Campus",
    period: "Sep 2026 – Present",
    points: ["TODO: course(s) you assist in, what you do (labs, grading, mentoring), number of students"],
  },
  {
    title: "Full Stack Fellow",
    org: "Dev Weekends",
    location: "Karachi",
    period: "Jun 2026 – Present",
    points: ["TODO: what you built and learned at Dev Weekends (stack, projects, outcomes)"],
  },
  // TODO: freelance / client work, achievements
];

export const education: TimelineEntry[] = [
  {
    title: "BS Computer Science",
    org: "National University of Computer and Emerging Sciences (FAST-NUCES)",
    location: "Karachi",
    period: "Aug 2024 – Jun 2028",
    points: ["TODO (optional): CGPA, relevant coursework, honors"],
  },
  {
    title: "Intermediate, Computer Science",
    org: "Army Public School (APSACS)",
    period: "Aug 2022 – Aug 2024",
    points: [],
  },
  {
    title: "Certificate in Artificial Intelligence",
    org: "Governor Sindh Initiative for GenAI, Web3 and Metaverse",
    period: "Jul 2023",
    points: [],
  },
  {
    title: "Matriculation",
    org: "Gallant Foundation",
    period: "2020 – 2022",
    points: [],
  },
  // TODO: other certifications
];