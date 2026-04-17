import { getAllTools } from "@/lib/data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToolCard } from "@/components/ToolCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium AI Tools Directory 2026 | Global AI Hub",
  description: "Curated selection of world-class AI solutions for professional creators. Find the best AI tools for your workflow.",
};

export default async function Home() {
  const tools = await getAllTools();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-20 w-full">
        {/* HERO SECTION */}
        <div className="text-center mb-24 space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in">
            Expertly Curated Directory
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-[var(--text-main)] leading-[0.9]">
            Premium AI Tools <br/>
            <span className="premium-gradient-text">Directory 2026</span>
          </h1>
          <p className="text-[var(--text-muted)] text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Discover cutting-edge AI solutions vetted for professional performance and enterprise-grade reliability.
          </p>
        </div>

        {/* TOOLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}