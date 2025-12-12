import { useState } from 'react';
import { supabase } from './lib/supabase';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { SocialProof } from './components/SocialProof';
import { BetaOffer } from './components/BetaOffer';
import { Footer } from './components/Footer';
import { SuccessModal } from './components/SuccessModal';

import { ThemeProvider } from './lib/ThemeContext';
import { StrategicPartner } from './components/StrategicPartner';

function App() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const { error: supabaseError } = await supabase
        .from('waitlist_signups')
        .insert([{ email, referral_source: 'landing_page' }]);

      if (supabaseError) {
        if (supabaseError.code === '23505') {
          setError('This email is already on the waitlist!');
        } else {
          setError('Something went wrong. Please try again.');
        }
      } else {
        setEmail('');
        setShowSuccess(true);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <div id="hero">
          <Hero />
          {error && (
            <div className="max-w-md mx-auto px-4 -mt-16 mb-8">
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            </div>
          )}
        </div>

        <ProblemSolution />
        <Features />
        <SocialProof />
        <StrategicPartner />
        <BetaOffer/>
        <Footer />

        <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
      </div>
    </ThemeProvider>
  );
}

export default App;
