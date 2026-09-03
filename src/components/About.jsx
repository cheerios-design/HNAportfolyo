import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="About" className="py-20 px-5 text-center bg-[var(--color-darker-bg)] relative scroll-mt-2">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white relative inline-block after:content-[''] after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-[var(--color-accent)] after:to-[var(--color-accent-light)] after:rounded-sm">
            About Me
          </h2>
        </motion.div>
        
        <div className="mt-12 space-y-6 text-left text-lg text-[var(--color-text-light)] leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I am a senior Mathematics (English) student at Bolu Abant Izzet Baysal University and a Computer Programming
            graduate. I combine mathematical thinking with software skills to solve problems analytically.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My core expertise lies in Python, with hands-on experience in 3D data processing (VTK, Vedo) and AI data
            annotation at Bilişim Vadisi. I also have a strong background in web design (HTML, CSS, CMS) from my time at
            Serbay, where I bridged the gap between complex data and user-centric design. Alongside my technical
            projects, my 3-year background in accounting has strengthened my attention to detail and data integrity. I
            am also proficient in PostgreSQL and have experience with C#.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            As the Software & Technical Team Lead at GDG on Campus, I coordinate projects and mentor developers. I am
            driven by a passion for technology, aiming to deliver robust, data-driven solutions in software and data
            science.
          </motion.p>
        </div>
      </div>
      
      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(188,124,14,0.3)] to-transparent"></div>
    </section>
  );
};

export default About;
