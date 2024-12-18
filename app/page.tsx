import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Introduction } from "./components/Introduction";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Mawuli",
  description: "My developer portfolio",
};

export default function Home() {
  return (
    <main className={`min-h-screen bg-gray-100 ${inter.className}`}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="sticky top-0 z-10 bg-gray-100 pb-4">
          <Header />
        </div>
        <Introduction />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
