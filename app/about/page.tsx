import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us & Editorial Policy | Global AI Hub",
  description: "Learn about Global AI Hub's mission to provide high-quality B2B AI software reviews and our strict editorial standards.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="max-w-4xl mx-auto py-20 px-6 w-full flex-grow">
        <header className="mb-16 text-center">
          <span className="px-4 py-1.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-[10px] font-black tracking-widest uppercase">
            Corporate Profile
          </span>
          <h1 className="text-4xl md:text-6xl font-black mt-8 mb-6 text-[var(--text-main)] leading-tight">
            About <span className="premium-gradient-text">Global AI Hub</span>
          </h1>
          <p className="text-[var(--text-muted)] text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            Empowering global enterprises with data-driven AI software insights.
          </p>
        </header>

        <article className="prose prose-slate dark:prose-invert max-w-none text-lg leading-loose text-[var(--text-muted)]">
          
          <div className="bg-[var(--card-bg)] border border-[var(--border-ui)] p-8 md:p-12 rounded-[2.5rem] mb-12 shadow-sm">
            <h2 className="text-3xl font-bold mb-6 text-[var(--text-main)] mt-0">Our Mission</h2>
            <p>
              At Global AI Hub, our mission is to demystify the rapidly evolving artificial intelligence landscape for B2B professionals, enterprise leaders, and forward-thinking creators. We understand that selecting the right AI infrastructure is no longer a luxury—it is a critical competitive advantage.
            </p>
            <p>
              We provide rigorous, objective, and deeply technical reviews of the world&apos;s leading AI platforms, ensuring our readers can make informed procurement decisions with confidence.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-8 text-[var(--text-main)]">Editorial Policy & Standards</h2>
          <p>
            Trust is our most valuable asset. To maintain our position as a reliable authority in the AI software review space, we adhere strictly to the following editorial guidelines:
          </p>
          <ul className="space-y-4 my-8">
            <li className="flex flex-col">
              <strong className="text-[var(--text-main)] text-xl">1. Objective Analysis</strong>
              <span>Every software review is based on hands-on testing, technical documentation analysis, and verified enterprise user feedback. We do not accept payment in exchange for positive reviews.</span>
            </li>
            <li className="flex flex-col">
              <strong className="text-[var(--text-main)] text-xl">2. Transparency</strong>
              <span>When we use affiliate links to support our editorial operations, we disclose it clearly. These partnerships never influence our scoring methodologies or final recommendations.</span>
            </li>
            <li className="flex flex-col">
              <strong className="text-[var(--text-main)] text-xl">3. Continuous Auditing</strong>
              <span>AI moves fast. Our editorial team regularly audits and updates past reviews to reflect new feature releases, pricing changes, and shifts in market dynamics.</span>
            </li>
          </ul>

          <div className="mt-16 p-8 border-l-4 border-blue-600 bg-blue-50 dark:bg-blue-950/20 rounded-r-2xl">
            <h3 className="text-2xl font-bold mb-4 text-[var(--text-main)] mt-0">Business & Partnership Inquiries</h3>
            <p className="mb-0">
              For media relations, software review requests, or network partnership inquiries, please reach out to our corporate team. We are continually expanding our network of trusted B2B software vendors.
              <br/><br/>
              <strong>Contact:</strong> info@theglobalaihub.space
            </p>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  );
}
