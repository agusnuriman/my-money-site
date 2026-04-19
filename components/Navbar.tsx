import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
        <Link href="/" className="group flex items-center gap-3">
          <Logo className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
          <span className="bg-linear-to-br from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300 text-lg font-black tracking-tighter uppercase md:text-xl">
            Global AI Hub
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link 
            href="/about" 
            className="text-sm font-bold text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
          >
            About Us
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
