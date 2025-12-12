
import logoCognifera from '../assets/logo-cognifera.png';

export function StrategicPartner() {

  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 border-2 border-gray-200 dark:border-slate-700">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <img
                    src={logoCognifera}
                    alt="Scory Logo"
                    className="h-14 w-auto object-contain"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-lg">Strategic Partner</p>
                  <p className="text-gray-600 dark:text-gray-300">PT Cognifera Education Academy</p>
                </div>
              </div>
              <div className="text-center  md:text-right">
                <p className="text-sm text-gray-500 dark:text-gray-400">Empowering Sustainable Innovation</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">through Literacy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


