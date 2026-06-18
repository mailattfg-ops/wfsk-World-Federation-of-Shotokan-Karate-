export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white p-4 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-3xl w-full">
        {/* Animated badge */}
        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm font-medium text-red-500 shadow-sm backdrop-blur-md animate-pulse">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <span>Exciting things ahead</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
          Coming Soon
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
          We&apos;re preparing something amazing. Stay tuned.
        </p>

        {/* Optional contact section */}
        <div className="pt-8 w-full max-w-md">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg px-6 py-3 transition-colors shadow-[0_0_20px_rgba(220,38,38,0.3)]">
              Notify Me
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Be the first to know when we launch.
          </p>
        </div>
      </div>
    </div>
  );
}
