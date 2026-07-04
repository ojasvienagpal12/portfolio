import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ojasvie | Digital Marketing Portfolio",
  description:
    "Digital Marketing Professional specializing in Social Media Management, SEO, Creative Designing, Content Strategy, and AI-powered Marketing.",
  keywords: [
    "Digital Marketing",
    "Social Media Manager",
    "SEO",
    "Content Strategy",
    "Creative Designer",
    "Ojasvie",
  ],
  authors: [{ name: "Ojasvie" }],
  openGraph: {
    title: "Ojasvie | Digital Marketing Portfolio",
    description:
      "Digital Marketing Professional with expertise in Social Media, SEO & Creative Content",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
