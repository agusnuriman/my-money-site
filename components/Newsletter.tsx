"use client";

export function Newsletter() {
  return (
    <section className="py-20 px-4">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center transition-all duration-300 hover:border-blue-500/50 dark:border-slate-800 dark:bg-slate-900/50 dark:backdrop-blur-xl md:p-12">
        <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white tracking-tight leading-tight">
          Stay Ahead of the <br className="md:hidden" />
          <span className="bg-linear-to-br from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300">AI Curve</span>
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-base font-medium leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
          Join 5,000+ professionals receiving our weekly curated AI insights and exclusive software deals.
        </p>
        
        <form className="mx-auto flex max-w-lg flex-col gap-4 md:flex-row" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your work email" 
            className="grow rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-medium transition-all focus:ring-2 focus:ring-blue-500/50 focus:outline-none dark:border-slate-800 dark:bg-slate-950/50"
            required
          />
          <button 
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-xl shadow-blue-500/25 active:scale-95"
          >
            Subscribe
          </button>
        </form>
        
        <p className="mt-6 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
          Zero Spam. One-click unsubscribe.
        </p>
      </div>
    </section>
  );
}
