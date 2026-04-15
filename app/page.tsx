"use client";
import { useState, useEffect } from "react";
import toolsData from "./tools.json";
import Script from "next/script";

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

  if (!mounted) return <div className="min-h-screen bg-white" />;

  return (
    <div className="min-h-screen">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            GLOBAL AI HUB
          </span>
          
          <div className="flex items-center gap-3">
            <div className="gtranslate_wrapper"></div>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="w-[38px] h-[38px] flex items-center justify-center rounded-xl border border-[var(--border-ui)] bg-[var(--bg-app)] hover:scale-105 transition-all shadow-sm"
            >
              <span className="text-sm">{darkMode ? "☀️" : "🌙"}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="py-24 px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-8 text-main tracking-tight">
          Find Your Next <span className="text-blue-600">AI Advantage.</span>
        </h1>
        <p className="text-muted text-lg md:text-xl font-medium leading-relaxed">
          A collection of the best artificial intelligence tools to dominate the global market.
        </p>
      </header>

      {/* GRID SECTION */}
      <main className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolsData.map((tool: any) => (
            <div 
              key={tool.slug} 
              className="group p-8 rounded-[2.5rem] border border-[var(--border-ui)] bg-[var(--bg-app)] hover:border-blue-500 transition-all duration-500 shadow-sm hover:shadow-2xl"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 text-[10px] font-black rounded-full uppercase tracking-widest">
                  {tool.category}
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-3 text-main">{tool.name}</h2>
              <p className="text-muted text-sm mb-8 leading-relaxed line-clamp-2">
                {tool.desc}
              </p>
              <a 
                href={tool.link} 
                target="_blank" 
                className="block w-full text-center bg-gray-950 dark:bg-blue-600 text-white py-4 rounded-2xl font-bold text-sm tracking-wide hover:opacity-90 transition-all"
              >
                Access Tool
              </a>
            </div>
          ))}
        </div>
      </main>

      <footer className="py-12 text-center border-t border-[var(--border-ui)]">
        <p className="text-muted text-xs font-bold tracking-widest uppercase italic">
          High Performance Directory © 2026
        </p>
      </footer>

      <Script src="https://cdn.gtranslate.net/widgets/latest/dropdown.js" defer></Script>
      <Script id="gtranslate-config" strategy="afterInteractive">
        {`
          window.gtranslateSettings = {
            "default_language":"en",
            "languages":["en","id","fr","de","es","zh-CN"],
            "wrapper_selector":".gtranslate_wrapper",
            "flag_size":20,
            "dropdown_color":"#3b82f6"
          }
        `}
      </Script>
    </div>
  );
}