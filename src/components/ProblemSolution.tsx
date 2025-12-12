import { AlertCircle, CheckCircle } from 'lucide-react';

export function ProblemSolution() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-red-50 dark:bg-red-900/20 rounded-xl">
                <AlertCircle className="w-6 h-6 text-red-500" />
                <span className="font-semibold text-red-900 dark:text-red-200">The Problem</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Exhausted by complex academic jargon and unreliable AI explanations?
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                You spend hours decoding difficult English terms, only to get{' '}
                <span className="font-semibold text-gray-900 dark:text-white">'hallucinated' or fake facts</span>{' '}
                from standard AI tools.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                It kills your motivation and risks your research quality.
              </p>

              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700 dark:text-gray-300">Hours wasted trying to understand complex terminology</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700 dark:text-gray-300">AI tools making up facts that don't exist in the paper</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700 dark:text-gray-300">Lost motivation to continue research</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-[#26EE5A]/10 rounded-xl">
                <CheckCircle className="w-6 h-6 text-[#26EE5A]" />
                <span className="font-semibold text-gray-900 dark:text-white">The Solution</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Scory bridges the gap between complex research and{' '}
                <span className="text-[#26EE5A]">your understanding.</span>
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We provide a safe, accurate way to simplify scientific articles tailored specifically to your reading ability
                <span className="font-semibold text-gray-900 dark:text-white"> without making things up.</span>
              </p>

              <div className="bg-gradient-to-br from-[#26EE5A]/5 to-[#26EE5A]/10 border-2 border-[#26EE5A]/20 dark:border-[#26EE5A]/10 rounded-2xl p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#26EE5A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-black" />
                  </div>
                  <p className="text-gray-900 dark:text-white font-medium">Simplified to your exact reading level</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#26EE5A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-black" />
                  </div>
                  <p className="text-gray-900 dark:text-white font-medium">100% accurate - only what's in the paper</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#26EE5A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-black" />
                  </div>
                  <p className="text-gray-900 dark:text-white font-medium">Safe for citations and academic use</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
