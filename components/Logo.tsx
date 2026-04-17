export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="globe-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="glow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(56, 189, 248, 0.4)" />
          <stop offset="100%" stopColor="rgba(37, 99, 235, 0)" />
        </linearGradient>
      </defs>

      {/* Background Glow */}
      <circle cx="50" cy="50" r="48" fill="url(#glow-gradient)" />
      
      {/* Outer Globe Ring */}
      <circle cx="50" cy="50" r="40" stroke="url(#globe-gradient)" strokeWidth="6" strokeDasharray="10 5" />
      
      {/* Neural Nodes */}
      <circle cx="35" cy="35" r="5" fill="currentColor" className="text-slate-800 dark:text-white" />
      <circle cx="65" cy="30" r="4" fill="currentColor" className="text-slate-800 dark:text-white" />
      <circle cx="50" cy="65" r="6" fill="currentColor" className="text-slate-800 dark:text-white" />
      <circle cx="70" cy="55" r="4" fill="currentColor" className="text-slate-800 dark:text-white" />
      <circle cx="30" cy="60" r="3" fill="currentColor" className="text-slate-800 dark:text-white" />

      {/* Connecting Lines */}
      <path
        d="M35 35 L65 30 L50 65 L70 55 M35 35 L50 65 L30 60 L35 35"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-slate-800 dark:text-white opacity-50"
      />
    </svg>
  );
}
