import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Global AI Hub",
  description: "Our commitment to protecting your privacy and transparency regarding affiliate partnerships.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="max-w-4xl mx-auto py-20 px-6 w-full flex-grow">
        <h1 className="text-4xl font-black mb-12 text-[var(--text-main)]">Privacy Policy</h1>
        
        <article className="prose prose-slate dark:prose-invert max-w-none text-[var(--text-muted)] space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[var(--text-main)]">1. Introduction</h2>
            <p>
              Welcome to Global AI Hub. We value your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--text-main)]">2. Data We Collect</h2>
            <p>
              We do not require users to create accounts. However, we may collect non-personal information such as browser type, device information, and IP addresses through standard web analytics tools to improve our content and user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--text-main)]">3. Affiliate Disclosure</h2>
            <p>
              Global AI Hub participates in various affiliate marketing programs. This means we may get paid commission on editorially chosen products purchased through our links to retailer sites. This does not influence our editorial integrity or the objectivity of our reviews.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--text-main)]">4. Cookies</h2>
            <p>
              We use cookies to understand site usage and to improve the content and offerings on our sites. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies in your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--text-main)]">5. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please contact us at: <strong>info@theglobalaihub.space</strong>
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
