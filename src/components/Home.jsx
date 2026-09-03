import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section id="Home" className="min-h-[92vh] flex flex-col justify-center items-center relative py-20 px-5 text-center scroll-mt-[72px] bg-[var(--color-darker-bg)]">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-30" style={{ backgroundImage: 'url("data:image/svg+xml,<svg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'><circle cx=\'50\' cy=\'50\' r=\'2\' fill=\'rgba(188,124,14,0.06)\'/></svg>")' }}></div>
      
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <img 
            src="/img/nida.jpeg" 
            alt="Hasibe Nida Akdoğan" 
            className="w-[180px] h-[180px] rounded-full border-[5px] border-[var(--color-accent)] shadow-xl object-cover transition-all duration-400 hover:scale-110 hover:shadow-[0_25px_50px_rgba(188,124,14,0.6)]"
          />
        </motion.div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-light)] bg-clip-text text-transparent"
        >
          Hasibe Nida Akdoğan
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg sm:text-xl text-[var(--color-accent)] font-semibold mb-5 tracking-wide"
        >
          Math & Computer Programming | Software Development & Data
        </motion.p>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg text-[var(--color-text-light)] max-w-2xl mx-auto leading-relaxed"
        >
          I build data-driven and user-focused software solutions by combining mathematical thinking with practical
          development skills.
        </motion.p>
      </div>
      
      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(188,124,14,0.3)] to-transparent"></div>
    </section>
  );
};

export default Home;
