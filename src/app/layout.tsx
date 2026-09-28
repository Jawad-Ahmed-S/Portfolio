import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://jawad-ahmed.vercel.app"),
  title: "Jawad Ahmed | Full Stack Developer & CS Student",
  description:
    "Portfolio of Jawad Ahmed: BS Computer Science student at FAST-NUCES, Full Stack Fellow and Teaching Assistant. Projects, experience, education and skills.",
  icons: {
    icon: "/blobprofile.png",
  },
  openGraph: {
    title: "Jawad Ahmed | Full Stack Developer & CS Student",
    description: "Projects, experience, education and skills of Jawad Ahmed.",
    url: "https://jawad-ahmed.vercel.app",
    siteName: "Jawad Ahmed",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} data-scroll-behavior="smooth">
      <body suppressHydrationWarning={true}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}