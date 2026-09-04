import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const MATH_CHARS = '0123456789∑∫π∞√≠≈≤≥+-=*/%Δ∇Ωθλμ';

const DecryptText = ({ text }) => {
  const [displayText, setDisplayText] = useState(() =>
    text.split('').map(c => c === ' ' ? ' ' : MATH_CHARS[Math.floor(Math.random() * MATH_CHARS.length)]).join('')
  );

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((currentText) => {
        return text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }
            return MATH_CHARS[Math.floor(Math.random() * MATH_CHARS.length)];
          })
          .join('');
      });

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2;
    }, 40);

    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}</span>;
};

const Home = () => {
  return (
    <section id="Home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[var(--color-darker-bg)] scroll-mt-[72px]">


      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-32">
        <div className="relative z-30 grid grid-cols-1 md:grid-cols-2 gap-8 items-end mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-[var(--color-card-bg)] border border-[var(--color-border-color)] rounded-full py-1.5 px-3 text-xs font-medium text-[var(--color-text-light)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse"></span>
              Available for Work
            </div>
            <h1 className="text-2xl uppercase md:text-3xl lg:text-4xl font-medium leading-tight text-accent font-mono tracking-tight">
              <DecryptText text="Data-Driven" /> <br /> <DecryptText text="Software Engineering" />
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:items-end space-y-6 text-left md:text-right"
          >
            <p className="text-[var(--color-text-light)] text-sm md:text-base max-w-sm">
              Software Developer & Data Specialist building high-performance, user-centric applications. I bridge the gap between advanced mathematical modeling and modern web technologies to engineer scalable solutions.
            </p>
            <a href="#Projects" className="inline-flex items-center gap-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] transition-colors text-black rounded-full py-2.5 px-6 font-medium text-sm w-fit shadow-[0_0_20px_rgba(223,255,0,0.3)]">
              <span className="bg-black text-[var(--color-accent)] rounded-full p-1">
                <ArrowRight className="w-4 h-4" />
              </span>
              See my works
            </a>
          </motion.div>
        </div>

        {/* Huge Name & Sandwiched Image */}
        <div className="relative w-full mt-8 md:mt-12">

          {/* Background Image (Middle layer) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] max-w-[1200px] h-[80vh] pointer-events-none z-10 flex justify-center items-end">
            <img
              src="/img/hero.png"
              alt="Hasibe Nida Akdoğan"
              className="w-full h-full scale-130 origin-bottom object-contain object-bottom opacity-80"
            />
          </div>

          {/* Solid Text (Bottom layer, Behind Image) */}
          <h2 className="relative z-0 w-full text-center text-[14vw] font-bold tracking-tighter leading-none select-none drop-shadow-2xl text-white">
            Hasibe Nida
          </h2>

          {/* Outline Text (Top layer, In Front of Image) */}
          <h2
            className="absolute top-0 left-0 w-full text-center text-[14vw] font-bold tracking-tighter leading-none select-none z-20 pointer-events-none"
            style={{ color: 'transparent', WebkitTextStroke: '3px white' }}
          >
            Hasibe Nida
          </h2>

          {/* Fade Gradient (Top-most layer) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-40 bg-gradient-to-t from-[var(--color-darker-bg)] to-transparent z-30 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
