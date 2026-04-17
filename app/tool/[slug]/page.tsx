"use client";
import { useParams } from "next/navigation";
import toolsData from "../../tools.json";
import Script from "next/script";

export default function ToolDetail() {
  const { slug } = useParams();
  const tool = toolsData.find((t: any) => t.slug === slug);

  if (!tool) return <div className="p-20 text-center">Tool Not Found</div>;

  return (
    <div className="min-h-screen bg-[var(--bg-app)]">
      {/* NAVBAR SIMPEL */}
      <nav className="border-b border-[var(--border-ui)] p-4">
        <a href="/" className="text-blue-600 font-bold">← Back to Directory</a>
      </nav>

      <main className="max-w-4xl mx-auto py-20 px-6">
        <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-black">
          {tool.category}
        </span>
        
        <h1 className="text-5xl font-black mt-6 mb-8 text-[var(--text-main)]">
          {tool.name}: Review & Best Use Cases
        </h1>

        <div className="prose dark:prose-invert max-w-none text-[var(--text-muted)] leading-loose text-lg">
          <p>{tool.longDesc}</p>
          
          <h3 className="text-2xl font-bold mt-10 text-[var(--text-main)]">Key Features:</h3>
          <ul className="list-disc ml-6 mt-4">
            {tool.features?.map((f: any) => <li key={f}>{f}</li>)}
          </ul>
        </div>

        {/* TOMBOL TRACKING LINK (SUMBER DUIT) */}
        <div className="mt-16 p-10 bg-blue-600 rounded-[2rem] text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to boost your productivity?</h2>
          <p className="mb-8 opacity-90">Start using {tool.name} today and join the AI revolution.</p>
          <a 
            href={tool.affiliateLink} 
            target="_blank" 
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-2xl font-black text-xl hover:scale-105 transition-all"
          >
            Try {tool.name} Now →
          </a>
          <p className="mt-4 text-xs opacity-70">*Affiliate Link: We may earn a commission at no extra cost to you.</p>
        </div>
      </main>
    </div>
  );
}