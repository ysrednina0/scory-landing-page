import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { SocialProof } from './components/SocialProof';
import { BetaOffer } from './components/BetaOffer';
import { Footer } from './components/Footer';

import { ThemeProvider } from './lib/ThemeContext';
import { StrategicPartner } from './components/StrategicPartner';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <div id="hero">
          <Hero />
        </div>

        <ProblemSolution />
        <Features />
        <SocialProof />
        <StrategicPartner />
        <BetaOffer/>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
export default App;


