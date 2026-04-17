import Link from "next/link";
import { Tool } from "@/lib/types";

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="group p-8 rounded-3xl border border-[var(--border-ui)] bg-[var(--card-bg)] hover:bg-[var(--card-hover)] card-transition flex flex-col h-full relative overflow-hidden">
      {/* Subtle Background Ornament */}
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors" />
      
      <div className="relative z-10 flex flex-col h-full">
        <span className="w-fit px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-black tracking-widest uppercase mb-6">
          {tool.category}
        </span>
        
        <h2 className="text-2xl font-bold mb-3 text-[var(--text-main)] group-hover:text-[var(--accent-primary)] transition-colors">
          {tool.name}
        </h2>
        
        <p className="text-[var(--text-muted)] text-sm mb-8 leading-relaxed line-clamp-2">
          {tool.desc}
        </p>
        
        <div className="mt-auto pt-4">
          <Link 
            href={`/tool/${tool.slug}`} 
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent-primary)] hover:gap-3 transition-all"
          >
            Explore Review
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
