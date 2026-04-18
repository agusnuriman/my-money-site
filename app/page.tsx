import { getAllTools } from "@/lib/data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToolCard } from "@/components/ToolCard";
import { Newsletter } from "@/components/Newsletter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global AI Hub | Enterprise AI Software Directory 2026",
  description: "Independent reviews and deep technical analysis of the world's most powerful AI tools. Vetted for professional performance.",
};

export default async function Home() {
  const tools = await getAllTools();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-20 w-full flex-grow">
        {/* HERO SECTION V2 */}
        <div className="text-center mb-32 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in border border-blue-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Enterprise Grade Directory
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-[var(--text-main)] leading-[0.85]">
            Invest in <br/>
            <span className="premium-gradient-text">AI Excellence</span>
          </h1>
          
          <p className="text-[var(--text-muted)] text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
            The definitive resource for global enterprises to discover, evaluate, and implement world-class AI infrastructure.
          </p>

          <div className="flex flex-wrap justify-center gap-12 pt-10 opacity-60">
            <div className="text-center">
              <div className="text-2xl font-black text-[var(--text-main)]">100+</div>
              <div className="text-[10px] uppercase tracking-widest font-bold">Tools Vetted</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-[var(--text-main)]">24/7</div>
              <div className="text-[10px] uppercase tracking-widest font-bold">Market Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-[var(--text-main)]">50K+</div>
              <div className="text-[10px] uppercase tracking-widest font-bold">Monthly Readers</div>
            </div>
          </div>
        </div>

        {/* TOOLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        {/* NEWSLETTER AUTHORITY */}
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}