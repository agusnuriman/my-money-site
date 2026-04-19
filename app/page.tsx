import { getAllTools } from "@/lib/data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToolCard } from "@/components/ToolCard";
import { Newsletter } from "@/components/Newsletter";
import { Metadata } from "next";

export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: "Global AI Hub | Enterprise AI Software Directory 2026",
  description: "Independent reviews and deep technical analysis of the world's most powerful AI tools. Vetted for professional performance.",
};

export default async function Home() {
  const tools = await getAllTools();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-20 w-full grow">
        {/* HERO SECTION V2 */}
        <div className="animate-fade-in space-y-8 mb-32 text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
            </span>
            <span>Enterprise Grade Directory</span>
          </div>
          
          <h1 className="text-5xl font-black tracking-tighter text-slate-900 leading-[1.1] md:text-8xl dark:text-white">
            Invest in <br/>
            <span className="bg-linear-to-br from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300">AI Excellence</span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-slate-600 md:text-xl dark:text-slate-400">
            The definitive resource for global enterprises to discover, evaluate, and implement world-class AI infrastructure.
          </p>

          <div className="flex flex-wrap justify-center gap-12 pt-10">
            {[
              { label: "Tools Vetted", value: "100+" },
              { label: "Market Monitoring", value: "24/7" },
              { label: "Monthly Readers", value: "50K+" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black text-slate-900 dark:text-white">{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
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