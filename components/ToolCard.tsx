import Link from "next/link";
import { Tool } from "@/lib/types";

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: Readonly<ToolCardProps>) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/50 dark:backdrop-blur-xl">
      {/* Visual Accent */}
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl transition-all duration-700 group-hover:bg-blue-500/20" />
      
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-4 flex items-start justify-between">
          <span className="rounded-full bg-blue-600/10 px-3 py-1 text-[10px] font-bold tracking-wider text-blue-600 uppercase dark:bg-blue-400/10 dark:text-blue-400">
            {tool.category}
          </span>
          {tool.isEditorChoice && (
            <span className="rounded-md bg-yellow-400 px-2 py-1 text-[9px] font-black text-black shadow-lg shadow-yellow-400/20">
              EDITOR&apos;S CHOICE
            </span>
          )}
        </div>
        
        <h2 className="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
          {tool.name}
        </h2>
        
        <p className="mb-6 line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {tool.desc}
        </p>
        
        <div className="mt-auto flex items-center gap-4 pt-4">
          <Link 
            href={`/tool/${tool.slug}`} 
            className="text-xs font-bold text-slate-400 transition-all hover:text-blue-600 dark:text-slate-500 dark:hover:text-blue-400"
          >
            Review
          </Link>
          <a 
            href={`/go/${tool.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="grow rounded-xl bg-blue-600 py-3 text-center text-xs font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
          >
            Try Now →
          </a>
        </div>
      </div>
    </div>
  );
}
