import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center text-center px-6 font-sans">
      <h1 className="text-9xl font-bold text-white/10 mb-4">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold text-white/90 mb-6">
        Page Not Found
      </h2>
      <p className="text-white/60 text-lg mb-12 max-w-md mx-auto">
        This section is currently under construction. Please check back later or start growing your wealth from our homepage.
      </p>
      
      <Link 
        href="/"
        className="bg-[#00A3FF] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,163,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transform hover:scale-105"
      >
        Return to Home
      </Link>
    </div>
  );
}
