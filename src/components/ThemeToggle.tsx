import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../lib/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-slate-800"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-slate-700" />
      ) : (
        <Sun className="w-5 h-5 text-slate-200" />
      )}
    </button>
  );
}
