import { Gauge, Shield, Flame } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Gauge,
      title: 'Personal Reading Level Adjustment',
      subtitle: 'Adjust Complexity Instantly.',
      description:
        "Whether you need a layman's summary or an undergraduate-level explanation, Scory adapts the vocabulary and sentence structure to match your reading level.",
      color: 'from-blue-500/10 to-blue-600/10',
      borderColor: 'border-blue-500/20',
      iconBg: 'bg-blue-500',
    },
    {
      icon: Shield,
      title: 'RAG-Based Anti-Hallucination',
      subtitle: '100% Context, 0% Fiction.',
      description:
        'Powered by Retrieval Augmented Generation (RAG). We only simplify what is written in the source file. No added information, no AI hallucinations. Safe for citations.',
      color: 'from-[#26EE5A]/10 to-[#26EE5A]/20',
      borderColor: 'border-[#26EE5A]/30',
      iconBg: 'bg-[#26EE5A]',
    },
    {
      icon: Flame,
      title: 'Gamification & Quizzes',
      subtitle: 'Make Reading Addictive.',
      description:
        'Keep your research momentum alive. Build reading streaks, earn daily rewards, and test your understanding with quick quizzes after every paper.',
      color: 'from-orange-500/10 to-orange-600/10',
      borderColor: 'border-orange-500/20',
      iconBg: 'bg-orange-500',
    },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need to Master Research
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Three powerful features designed to transform how you read and understand scientific literature.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-transparent dark:border-slate-800"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`}></div>

                <div className="relative">
                  <div className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-lg font-semibold text-[#26EE5A] mb-4">{feature.subtitle}</p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to revolutionize your research process?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join the waitlist today and be among the first to experience the future of academic reading.
            </p>
            <a
              href="#hero"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#26EE5A] hover:bg-[#20d94f] text-black font-semibold rounded-xl transition-all hover:scale-105"
            >
              Join the Waitlist
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
