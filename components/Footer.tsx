import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="py-12 mt-auto border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-[#020617]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Logo className="w-6 h-6 grayscale opacity-50" />
          <p className="text-slate-500 dark:text-slate-400 text-xs font-bold tracking-[0.2em] uppercase">
            Global AI Hub © 2026
          </p>
        </div>
        
        <div className="flex gap-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Us</Link>
          <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact Us</Link>
          <Link href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Service</Link>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 text-center mt-8">
        <p className="text-slate-400 dark:text-slate-500 text-[10px] opacity-70">
          Disclaimer: We may earn a commission for purchases made through our links, at no extra cost to you. This helps support our editorial team.
        </p>
      </div>
    </footer>
  );
}
