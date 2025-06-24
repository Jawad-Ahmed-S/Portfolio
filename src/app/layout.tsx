import { ThemeProvider } from "next-themes";
import "./globals.css";

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Next App',
  description: 'A Next.js project with custom favicon',
  icons: {
    icon: '/blobprofile.png', 
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
