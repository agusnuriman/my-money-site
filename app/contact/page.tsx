import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Global AI Hub",
  description: "Get in touch with the Global AI Hub team for partnerships or inquiries.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="max-w-4xl mx-auto py-20 px-6 w-full flex-grow">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-[var(--text-main)]">Get in <span className="premium-gradient-text">Touch</span></h1>
          <p className="text-[var(--text-muted)] text-xl font-medium">Have a partnership inquiry or a tool review request? We&apos;d love to hear from you.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="premium-card p-10 space-y-8">
            <div>
              <h3 className="text-lg font-bold text-[var(--text-main)] mb-2">Partnership Inquiries</h3>
              <p className="text-[var(--text-muted)]">Interested in featuring your AI tool on our platform?</p>
              <a href="mailto:info@theglobalaihub.space" className="text-blue-600 font-bold hover:underline">info@theglobalaihub.space</a>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-[var(--text-main)] mb-2">General Support</h3>
              <p className="text-[var(--text-muted)]">Questions about our editorial process or content?</p>
              <a href="mailto:info@theglobalaihub.space" className="text-blue-600 font-bold hover:underline">info@theglobalaihub.space</a>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-black mb-6 text-[var(--text-main)]">Response Time</h2>
            <p className="text-[var(--text-muted)] leading-loose">
              Our editorial and partnership teams are active Monday through Friday. We typically respond to all inquiries within <strong>24-48 business hours</strong>.
              <br/><br/>
              Global AI Hub is committed to fostering a transparent and professional AI ecosystem.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
