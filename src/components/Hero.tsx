import { ArrowRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-950 pt-20 pb-32 transition-colors duration-300">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#26EE5A]/10 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src="src/assets/logo-scory.png"
                  alt="Scory Logo"
                  className="h-6 w-auto object-contain"
                />
                <span className="text-white font-bold text-2xl">Scory</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Master Scientific Articles Instantly.{' '}
                <span className="text-[#26EE5A]">Zero Hallucinations.</span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Stop struggling with complex academic language. Scory simplifies research papers based on your{' '}
                <span className="font-semibold text-gray-900 dark:text-white">Personal Reading Level</span> using accurate, RAG-based technology.
              </p>

              <div className="max-w-[400px]">
                <a
                  href="https://forms.gle/UMmodb3NzhwDZX5y9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-[#26EE5A] hover:bg-[#20d94f] text-black font-semibold rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#26EE5A]/20 flex items-center justify-center gap-2"
                >
                  Get Early Access
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                Join 30+ students already on the waitlist
              </p>
            </div>

            <div className="relative lg:h-[600px] flex items-center justify-center">
              <div className="relative w-full max-w-2xl mx-auto">
                <div className="absolute inset-0 bg-[#26EE5A]/20 blur-3xl rounded-full"></div>
                <div className="relative rounded-[3rem] shadow-2xl p-8">
                  <div className="rounded-[2rem] p-6 space-y-4">
                    <img
                      src="src/assets/Frame 16.png"
                      alt="Scory Intelligence Dashboard"
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
