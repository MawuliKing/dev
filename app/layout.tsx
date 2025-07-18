import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Mawuli | John Emil Modzaka - Mobile & Backend Developer",
  description:
    "Portfolio of John Emil Modzaka, a passionate mobile app and backend developer specializing in Flutter, Node.js, LLMs, and cloud technologies. Explore projects, skills, and contact info.",
  keywords: [
    "John Emil Modzaka",
    "Dev Mawuli",
    "Mobile Developer",
    "Backend Developer",
    "Flutter",
    "Node.js",
    "LLMs",
    "Cloud Architecture",
    "Portfolio",
    "Ghana Developer",
    "Software Engineer",
  ],
  authors: [
    { name: "John Emil Modzaka", url: "https://github.com/MawuliKing" },
  ],
  creator: "John Emil Modzaka",
  openGraph: {
    title: "Dev Mawuli | John Emil Modzaka - Mobile & Backend Developer",
    description:
      "Portfolio of John Emil Modzaka, a passionate mobile app and backend developer specializing in Flutter, Node.js, LLMs, and cloud technologies. Explore projects, skills, and contact info.",
    url: "https://dev-mawuli.vercel.app/",
    siteName: "Dev Mawuli Portfolio",
    images: [
      {
        url: "https://dev-mawuli.vercel.app/globe.svg",
        width: 1200,
        height: 630,
        alt: "Dev Mawuli Portfolio - John Emil Modzaka",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Mawuli | John Emil Modzaka - Mobile & Backend Developer",
    description:
      "Portfolio of John Emil Modzaka, a passionate mobile app and backend developer specializing in Flutter, Node.js, LLMs, and cloud technologies. Explore projects, skills, and contact info.",
    creator: "@emil_mod",
    images: ["https://dev-mawuli.vercel.app/globe.svg"],
  },
  alternates: {
    canonical: "https://dev-mawuli.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="XgEF6rWNrGti_St_nvowyru3VXtGbqC9eC9RcpNzYiY"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
