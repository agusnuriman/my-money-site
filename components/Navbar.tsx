import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 glass-effect h-16">
      <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Logo className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-xl font-black tracking-tighter premium-gradient-text uppercase">
            Global AI Hub
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/about" className="text-sm font-bold text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors">
            About Us
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
