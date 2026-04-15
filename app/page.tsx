import toolsData from "./tools.json";
import Script from "next/script";

interface Tool {
  slug: string;
  name: string;
  desc: string;
  category: string;
  link: string;
}

export default function Home() {
  const tools = toolsData as Tool[];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      
      {/* NAVBAR */}
      <nav className="border-b dark:border-gray-800 sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Global AI Hub
          </span>
          <div className="flex items-center gap-4">
            {/* Wadah Translate */}
            <div id="google_translate_element" className="scale-90 origin-right"></div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
          Find the Best <span className="text-blue-600">AI Tools</span> <br className="hidden md:block"/> for Your Future
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium">
          Discover hand-picked AI resources to boost your productivity and income globally.
        </p>
      </header>

      {/* ADSTERRA TOP BANNER SLOT */}
      <div className="max-w-4xl mx-auto mb-12 p-2 bg-gray-50 dark:bg-gray-800/50 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-inner">
        <div className="py-10 text-center">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2 font-bold">Recommended Advertisement</p>
          <div className="flex items-center justify-center text-gray-400 font-medium">
            Slot Iklan Adsterra 728x90
          </div>
        </div>
      </div>

      {/* TOOLS GRID */}
      <main className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <div 
              key={tool.slug} 
              className="group bg-white dark:bg-gray-800 border dark:border-gray-700 p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4">
                 <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500">
                    ★
                 </div>
              </div>
              
              <span className="inline-block px-3 py-1 mb-4 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-black rounded-lg uppercase tracking-wider">
                {tool.category}
              </span>
              <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                {tool.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8 h-12 overflow-hidden">
                {tool.desc}
              </p>
              <a 
                href={tool.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center bg-gray-950 dark:bg-blue-600 text-white py-4 rounded-2xl font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-blue-500/10"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t dark:border-gray-800 py-10 text-center text-gray-400 text-xs">
        © 2026 Global AI Hub Directory. All rights reserved.
      </footer>

      {/* SCRIPT TRANSLATE */}
      <Script id="google-translate-config" strategy="afterInteractive">
        {`
          function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
          }
        `}
      </Script>
      <Script 
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  );
}