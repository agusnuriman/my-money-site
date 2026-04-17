"use client";
import { useState, useEffect } from "react";
import toolsDataRaw from "./tools.json";
import Script from "next/script";

// Definisi Kontrak Data agar Vercel Build Sukses
interface Tool {
  id: string;
  slug: string;
  name: string;
  desc: string;
  description: string;
  longDesc: string;
  affiliateLink: string;
  category: string;
  features: string[];
}

// Cast data dari JSON ke Interface Tool
const toolsData = toolsDataRaw as Tool[];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    const isDark = saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode, mounted]);

  if (!mounted) return <div className="min-h-screen bg-white dark:bg-[#050505]" />;

  return (
    <div className="min-h-screen bg-[var(--bg-app)] text-[var(--text-main)] transition-colors duration-500">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-[var(--border-ui)] backdrop-blur-xl h-16 bg-[var(--bg-nav)]">
        <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
          <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent uppercase">
            Global AI Hub
          </span>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl bg-[var(--border-ui)] hover:opacity-80 transition-all text-lg"
            aria-label="Toggle Theme"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <main className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-[var(--text-main)]">
            Premium AI Tools <br/>
            <span className="text-blue-600">Directory 2026</span>
          </h1>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto font-medium">
            Curated selection of world-class AI solutions for professional creators.
          </p>
        </div>

        {/* GRID TOOLS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolsData.map((tool) => (
            <div key={tool.id} className="p-8 rounded-3xl border border-[var(--border-ui)] bg-[var(--card-bg)] hover:border-blue-500/50 transition-all shadow-sm flex flex-col h-full group">
              <span className="w-fit px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-black tracking-widest uppercase mb-6">
                {tool.category}
              </span>
              
              <h2 className="text-2xl font-bold mb-3 text-[var(--text-main)]">{tool.name}</h2>
              <p className="text-[var(--text-muted)] text-sm mb-8 leading-relaxed line-clamp-2">
                {tool.desc}
              </p>
              
              <div className="mt-auto">
                <a 
                  href={`/tool/${tool.slug}`} 
                  className="block w-full text-center bg-blue-600 text-white py-4 rounded-2xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
                >
                  Access Review
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="py-12 text-center border-t border-[var(--border-ui)]">
        <p className="text-[var(--text-muted)] text-xs font-bold tracking-[0.2em] uppercase">
          Global Performance Standard © 2026
        </p>
      </footer>
    </div>
  );
}