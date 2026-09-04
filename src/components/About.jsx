import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="About" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto flex justify-end scroll-mt-2">
      <div className="w-full md:w-3/4 lg:w-2/3 space-y-8 text-left">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-white"
        >
          Combining mathematical thinking with software skills to solve problems analytically.
        </motion.h2>

        <div className="space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[var(--color-text-light)] text-sm md:text-base leading-relaxed"
          >
            I am a senior Mathematics (English) student at Bolu Abant Izzet Baysal University and a Computer Programming
            graduate. I combine mathematical thinking with software skills to solve problems analytically.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[var(--color-text-light)] text-sm md:text-base leading-relaxed"
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
            className="text-[var(--color-text-light)] text-sm md:text-base leading-relaxed"
          >
            As the Software & Technical Team Lead at GDG on Campus, I coordinate projects and mentor developers. I am
            driven by a passion for technology, aiming to deliver robust, data-driven solutions in software and data
            science.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#Contact" className="inline-flex items-center gap-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] transition-colors text-black rounded-full py-2.5 px-6 font-medium text-sm w-fit shadow-[0_0_20px_rgba(223,255,0,0.3)] mt-4">
            <span className="bg-black text-[var(--color-accent)] rounded-full p-1">
              <ArrowRight className="w-4 h-4" />
            </span>
            Let's connect
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
