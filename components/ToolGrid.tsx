"use client";

import { useState, useMemo } from "react";
import { Tool } from "@/lib/types";
import { ToolCard } from "./ToolCard";

interface ToolGridProps {
  initialTools: Tool[];
}

export function ToolGrid({ initialTools }: ToolGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(initialTools.map((t) => t.category));
    return ["All", ...Array.from(cats).sort()];
  }, [initialTools]);

  // Filter tools based on category and search query
  const filteredTools = useMemo(() => {
    return initialTools.filter((tool) => {
      const matchesCategory = activeCategory === "All" || tool.category === activeCategory;
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           tool.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [initialTools, activeCategory, searchQuery]);

  return (
    <div className="space-y-12">
      {/* FILTER & SEARCH BAR */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white dark:bg-slate-900/50 p-4 rounded-3xl border border-slate-200 dark:border-slate-800 backdrop-blur-xl sticky top-24 z-30 shadow-xl shadow-slate-200/50 dark:shadow-none">
        
        {/* CATEGORY TABS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SEARCH INPUT */}
        <div className="relative w-full md:w-72 group">
          <svg 
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" 
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text"
            placeholder="Search AI tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950/50 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
          />
        </div>
      </div>

      {/* RESULTS COUNT */}
      <div className="flex items-center justify-between px-2">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
          Showing {filteredTools.length} tools
        </p>
        {filteredTools.length === 0 && (
          <button 
            onClick={() => {setActiveCategory("All"); setSearchQuery("");}}
            className="text-xs font-bold text-blue-600 hover:underline"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* GRID */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="py-32 text-center space-y-4">
          <div className="text-6xl">🔍</div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">No tools found</h3>
          <p className="text-slate-500">Try adjusting your search or category filters.</p>
        </div>
      )}
    </div>
  );
}
