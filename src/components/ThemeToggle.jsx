import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Read preference
    const savedTheme = localStorage.getItem('theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && prefersLight)) {
      setIsDark(false);
      document.body.classList.add('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      title="Toggle dark/light mode"
      className="fixed bottom-[30px] left-[30px] w-[50px] h-[50px] rounded-full bg-[var(--color-card-bg)] text-[var(--color-accent)] border-2 border-[var(--color-accent)] flex items-center justify-center shadow-lg transition-all duration-300 z-[999] hover:scale-110 hover:bg-[var(--color-accent)] hover:text-white active:scale-105"
    >
      {isDark ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};

export default ThemeToggle;
