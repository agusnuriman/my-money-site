"use client";

export function Newsletter() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto premium-card p-12 text-center relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500" />
        
        <h2 className="text-3xl md:text-5xl font-black mb-6 text-[var(--text-main)] tracking-tight">
          Stay Ahead of the <span className="premium-gradient-text">AI Curve</span>
        </h2>
        <p className="text-[var(--text-muted)] text-lg mb-10 max-w-xl mx-auto font-medium">
          Join 5,000+ professionals receiving our weekly curated AI insights and exclusive software deals.
        </p>
        
        <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your work email" 
            className="flex-grow px-6 py-4 rounded-2xl bg-white dark:bg-white/5 border border-[var(--border-ui)] focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-medium"
            required
          />
          <button 
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-blue-500/25 active:scale-95"
          >
            Subscribe
          </button>
        </form>
        
        <p className="mt-6 text-[10px] text-[var(--text-muted)] opacity-60 uppercase font-bold tracking-widest">
          Zero Spam. One-click unsubscribe.
        </p>
      </div>
    </section>
  );
}
