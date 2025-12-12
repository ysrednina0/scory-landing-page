import { Gift, Star, MessageCircle, ArrowRight } from 'lucide-react';

interface BetaOfferProps {
  email: string;
  setEmail: (email: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export function BetaOffer() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#26EE5A]/5 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#26EE5A]/20 border border-[#26EE5A] rounded-full mb-6">
              <Gift className="w-5 h-5 text-[#26EE5A]" />
              <span className="text-sm font-medium text-[#26EE5A]">Limited Beta Access</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Secure Your Early Adopter Perks.
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Help us shape the future of academic literacy. Join the Beta Waitlist today and receive exclusive rewards at launch.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-[#26EE5A] rounded-xl flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Early Access</h3>
              <p className="text-gray-400">
                Be among the first to use the app before public release.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-[#26EE5A] rounded-xl flex items-center justify-center mb-4">
                <Gift className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">10 Free Points</h3>
              <p className="text-gray-400">
                Equivalent to a Starter Subscription, absolutely free.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-[#26EE5A] rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Direct Feedback</h3>
              <p className="text-gray-400">
                Share your insights directly with our development team.
              </p>
            </div>
          </div>

          <div className="max-w-xl mx-auto flex justify-center items-center">
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
        </div>
      </div>
    </section>
  );
}
