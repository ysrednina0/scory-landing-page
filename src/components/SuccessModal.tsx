import { CheckCircle, X } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-slideUp">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-400" />
        </button>

        <div className="text-center">
          <div className="w-20 h-20 bg-[#26EE5A] rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>

          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Welcome to Scory Beta!</h3>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            You've successfully joined the waitlist. Get ready to receive:
          </p>

          <div className="bg-gray-50 dark:bg-slate-700/50 rounded-2xl p-6 mb-6 text-left space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#26EE5A] flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 dark:text-gray-300">Early access before public launch</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#26EE5A] flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 dark:text-gray-300">10 Free Personalization Points</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#26EE5A] flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 dark:text-gray-300">Direct line to our development team</p>
            </div>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Check your email for more details and updates about the launch.
          </p>

          <button
            onClick={onClose}
            className="w-full px-6 py-4 bg-[#26EE5A] hover:bg-[#20d94f] text-black font-semibold rounded-xl transition-all hover:scale-105"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
}
