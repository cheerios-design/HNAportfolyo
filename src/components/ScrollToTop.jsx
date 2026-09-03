import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      title="Go to top"
      className={`fixed bottom-[30px] right-[30px] w-[50px] h-[50px] bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-light)] text-white border-none rounded-full cursor-pointer flex items-center justify-center shadow-lg transition-all duration-300 z-[999] hover:-translate-y-1 hover:shadow-xl active:-translate-y-0.5 ${
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
