import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <section id="Home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[var(--color-darker-bg)] scroll-mt-[72px]">
      {/* Background Image with Gradient Fade */}
      <div className="absolute inset-0 z-0 flex justify-center">
        <div className="relative w-full max-w-[1200px] h-full">
          <img 
            src="/img/nida.jpeg" 
            alt="Hasibe Nida Akdoğan" 
            className="w-full h-[80vh] object-cover object-top opacity-30 mask-image-gradient"
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)',
              maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)'
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--color-darker-bg)] to-transparent"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end mb-8">
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-white">
              Math & Computer Programming |<br />
              Software Development & Data
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:items-end space-y-6 text-left md:text-right"
          >
            <p className="text-[var(--color-text-light)] text-sm md:text-base max-w-sm">
              I build data-driven and user-focused software solutions by combining mathematical thinking with practical development skills.
            </p>
            <a href="#Projects" className="inline-flex items-center gap-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] transition-colors text-white rounded-full py-2.5 px-6 font-medium text-sm w-fit shadow-[0_0_20px_rgba(255,102,51,0.3)]">
              <span className="bg-white text-[var(--color-accent)] rounded-full p-1">
                <ArrowRight className="w-4 h-4" />
              </span>
              See my works
            </a>
          </motion.div>
        </div>

        {/* Huge Name */}
        <div className="w-full flex justify-center -mt-4 md:-mt-12 lg:-mt-20">
          <h2 className="text-[14vw] font-bold tracking-tighter leading-none select-none drop-shadow-2xl text-white">
            Hasibe Nida
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Home;
