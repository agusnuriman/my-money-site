import { getToolBySlug, getAllTools } from "@/lib/data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Dynamic SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = await getToolBySlug(slug);
  
  if (!tool) return { title: "Tool Not Found" };

  return {
    title: `${tool.name} Review - Best Features & Use Cases 2026`,
    description: tool.desc,
  };
}

// SSG: Pre-render all tools at build time
export async function generateStaticParams() {
  const tools = await getAllTools();
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export default async function ToolDetail({ params }: PageProps) {
  const { slug } = await params;
  const tool = await getToolBySlug(slug);

  if (!tool) notFound();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="max-w-4xl mx-auto py-20 px-6 w-full">
        <div className="mb-12">
          <Link 
            href="/" 
            className="group inline-flex items-center gap-2 text-sm font-bold text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            Back to Directory
          </Link>
        </div>

        <header className="mb-16">
          <span className="px-4 py-1.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-[10px] font-black tracking-widest uppercase">
            {tool.category}
          </span>
          
          <h1 className="text-4xl md:text-6xl font-black mt-8 mb-6 text-[var(--text-main)] leading-tight">
            {tool.name}: <br/>
            <span className="premium-gradient-text">Complete Review 2026</span>
          </h1>
          
          <p className="text-[var(--text-muted)] text-xl font-medium leading-relaxed max-w-2xl">
            {tool.desc}
          </p>
        </header>

        <article className="prose prose-slate dark:prose-invert max-w-none">
          <div className="bg-[var(--card-bg)] border border-[var(--border-ui)] p-8 md:p-12 rounded-[2.5rem] mb-12 shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-[var(--text-main)] hidden">Expert Evaluation</h3>
            <div className="text-[var(--text-muted)] leading-loose text-lg">
              {tool.longDesc.split('\n').map((line, i) => {
                if (line.startsWith('### ')) {
                  return <h3 key={i} className="text-2xl font-bold mt-10 mb-4 text-[var(--text-main)]">{line.replace('### ', '')}</h3>;
                }
                if (line.startsWith('- **')) {
                  const parts = line.split('**:');
                  return (
                    <li key={i} className="ml-4 mb-2 list-disc">
                      <strong className="text-[var(--text-main)]">{parts[0].replace('- **', '')}:</strong>
                      {parts[1]}
                    </li>
                  );
                }
                if (line.trim() === '') return <br key={i} />;
                return <p key={i} className="mb-4">{line}</p>;
              })}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[var(--text-main)] flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 text-base">★</span>
                Key Features
              </h3>
              <ul className="space-y-4">
                {tool.features?.map((f) => (
                  <li key={f} className="flex gap-3 text-[var(--text-muted)] font-medium">
                    <span className="text-blue-500">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {tool.usageGuide && (
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-white/5 dark:to-blue-500/5 p-8 rounded-3xl border border-blue-500/10">
                <h3 className="text-xl font-bold mb-6 text-[var(--text-main)] flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs">GO</span>
                  Pro Cheat Sheet
                </h3>
                <div className="text-sm space-y-4 text-[var(--text-muted)] leading-relaxed">
                  {tool.usageGuide.split('\n').map((line, i) => {
                    if (line.startsWith('### ')) return null; // Heading is already handled by GO icon
                    if (line.match(/^\d+\./)) {
                      return (
                        <div key={i} className="flex gap-3">
                          <span className="font-black text-blue-600">{line.split('.')[0]}.</span>
                          <span><strong className="text-[var(--text-main)]">{line.split('**')[1]}</strong>{line.split('**')[2]}</span>
                        </div>
                      );
                    }
                    return <p key={i}>{line}</p>;
                  })}
                </div>
              </div>
            )}
          </div>
        </article>

        {/* AFFILIATE CALL TO ACTION */}
        <section className="mt-24 p-8 md:p-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-[3rem] text-center text-white shadow-2xl shadow-blue-500/20 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Ready to boost your productivity?</h2>
            <p className="mb-12 text-lg md:text-xl opacity-90 max-w-xl mx-auto font-medium">
              Join thousands of professionals using {tool.name} to stay ahead in the AI era.
            </p>
            <a 
              href={`/go/${tool.slug}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl active:scale-95"
            >
              Start Using {tool.name} →
            </a>
            <p className="mt-8 text-[10px] opacity-60 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Official Verified Partner Link
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}