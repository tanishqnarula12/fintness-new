import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F5F0EB] flex flex-col items-center justify-center text-center px-6 font-sans">
      <h1 className="text-9xl font-bold text-[#1a1a2e]/10 mb-4">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]/90 mb-6">
        Page Not Found
      </h2>
      <p className="text-[#1a1a2e]/50 text-lg mb-12 max-w-md mx-auto">
        This section is currently under construction. Please check back later or start growing your wealth from our homepage.
      </p>
      
      <Link 
        href="/"
        className="bg-[#0066FF] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-[#0052CC] transition-all duration-300 shadow-[0_0_20px_rgba(0,102,255,0.2)] hover:shadow-[0_0_30px_rgba(0,102,255,0.3)] transform hover:scale-105"
      >
        Return to Home
      </Link>
    </div>
  );
}
