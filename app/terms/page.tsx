import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Global AI Hub",
  description: "Terms and conditions for using the Global AI Hub platform.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="max-w-4xl mx-auto py-20 px-6 w-full flex-grow">
        <h1 className="text-4xl font-black mb-12 text-[var(--text-main)]">Terms of Service</h1>
        
        <article className="prose prose-slate dark:prose-invert max-w-none text-[var(--text-muted)] space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[var(--text-main)]">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Global AI Hub, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--text-main)]">2. Content Accuracy</h2>
            <p>
              While we strive to provide the most accurate and up-to-date information, the AI landscape changes rapidly. We do not warrant that tool descriptions, pricing, or features are error-free or complete. Content is for informational purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--text-main)]">3. Use of External Links</h2>
            <p>
              Our site contains links to external websites that are not provided or maintained by or in any way affiliated with Global AI Hub. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--text-main)]">4. Intellectual Property</h2>
            <p>
              The original content, reviews, and editorial materials on this site are the property of Global AI Hub and are protected by international copyright laws.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
