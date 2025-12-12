import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="flex items-center gap-3">
              <img
                src="src/assets/logo-scory.png"
                alt="Scory Logo"
                className="h-6 w-auto object-contain"
              />
              <span className="text-white font-bold text-2xl">Scory</span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#26EE5A] rounded-lg flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#26EE5A] rounded-lg flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#26EE5A] rounded-lg flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
              </a>
              <a
                href="mailto:support@scory.app"
                className="w-10 h-10 bg-gray-800 hover:bg-[#26EE5A] rounded-lg flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
                <a href="#" className="hover:text-[#26EE5A] transition-colors">
                  Contact Support
                </a>
                <a href="#" className="hover:text-[#26EE5A] transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-[#26EE5A] transition-colors">
                  Terms of Service
                </a>
              </div>

              <p className="text-sm text-center md:text-right">
                © 2024 Scory. Empowering Sustainable Innovation through Literacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
