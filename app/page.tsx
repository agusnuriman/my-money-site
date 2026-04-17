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
      <nav className="sticky top-0 z-50 border-b backdrop-blur-xl transition-all h-16">
        <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
          <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent uppercase">
            Global AI Hub
          </span>
          
          <div className="flex items-center gap-3">
            <div className="gtranslate_wrapper"></div>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="w-[38px] h-[38px] flex items-center justify-center rounded-xl border border-[var(--border-ui)] hover:border-blue-500 transition-all shadow-sm"
            >
              <span>{darkMode ? "☀️" : "🌙"}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* HERO - Target US/UK Market */}
      <header className="py-24 px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-[1.1]">
          Unlock Your <span className="text-blue-600">AI Advantage.</span>
        </h1>
        <p className="text-[var(--text-muted)] text-lg md:text-xl font-medium max-w-2xl mx-auto">
          A collection of the best artificial intelligence tools to dominate the global market..
        </p>
      </header>

      {/* DIRECTORY GRID */}
      <main className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolsData.map((tool) => (
            <div key={tool.id} className="group p-8 rounded-3xl border border-[var(--border-ui)] bg-white dark:bg-gray-900/50 hover:border-blue-500/50 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <span className="px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-black tracking-widest uppercase">
                  {tool.category}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold mt-4 mb-3">{tool.name}</h2>
              
              <p className="text-[var(--text-muted)] text-sm mb-8 leading-relaxed line-clamp-2">
                {tool.desc} {/* Menggunakan tool.desc dari JSON */}
              </p>
              
              <div className="mt-auto">
                <a 
                  href={`/tool/${tool.slug}`} // Menggunakan tool.slug dari JSON
                  className="block w-full text-center bg-gray-950 dark:bg-blue-600 text-white py-4 rounded-2xl font-bold text-sm tracking-wide hover:opacity-90 transition-all"
                >
                  Access Review & Tracking
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="py-12 text-center border-t border-[var(--border-ui)]">
        <p className="text-[var(--text-muted)] text-xs font-bold tracking-[0.2em] uppercase italic">
          Global Performance Standard © 2026
        </p>
      </footer>

      {/* GTranslate Logic - Locked to English US Flag */}
      <Script id="gtranslate-config" strategy="afterInteractive">
        {`
          window.gtranslateSettings = {
            "default_language":"en",
            "languages":["en","id","fr","de","es","pt"],
            "wrapper_selector":".gtranslate_wrapper",
            "flag_size":20,
            "alt_flags":{"en":"usa"},
            "dropdown_color":"#3b82f6"
          }
        `}
      </Script>
      <Script src="https://cdn.gtranslate.net/widgets/latest/dropdown.js" defer></Script>
    </div>
  );
}