import Link from "next/link";
import { Tool } from "@/lib/types";

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="group p-8 premium-card card-transition flex flex-col h-full relative overflow-hidden">
      {/* Premium Background Ornament */}
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700" />
      <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/15 transition-all duration-700" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-black tracking-widest uppercase">
            {tool.category}
          </span>
          {tool.isEditorChoice && (
            <span className="px-3 py-1 bg-yellow-400 text-black text-[9px] font-black rounded-lg shadow-lg shadow-yellow-400/20 animate-pulse">
              EDITOR'S CHOICE
            </span>
          )}
        </div>
        
        <h2 className="text-2xl font-bold mb-3 text-[var(--text-main)] group-hover:text-[var(--accent-primary)] transition-colors">
          {tool.name}
        </h2>
        
        <p className="text-[var(--text-muted)] text-sm mb-8 leading-relaxed line-clamp-2">
          {tool.desc}
        </p>
        
        <div className="mt-auto pt-4 flex gap-4">
          <Link 
            href={`/tool/${tool.slug}`} 
            className="inline-flex items-center gap-2 text-xs font-bold text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-all"
          >
            Review
          </Link>
          <a 
            href={`/go/${tool.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold text-xs transition-all shadow-lg shadow-blue-500/20"
          >
            Try Now →
          </a>
        </div>
      </div>
    </div>
  );
}
