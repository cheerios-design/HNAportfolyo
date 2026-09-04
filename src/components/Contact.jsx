import { motion } from 'framer-motion';
import { FaLinkedin as Linkedin, FaGithub as Github, FaInstagram as Instagram, FaEnvelope as Mail } from 'react-icons/fa';

const Contact = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, delay: i * 0.1 }
    })
  };

  return (
    <section id="Contact" className="py-20 px-5 text-center bg-[var(--color-darker-bg)] relative scroll-mt-2">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-4xl uppercase font-bold mb-4 text-white relative inline-block after:content-[''] after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-1 after:bg-[var(--color-accent)] after:rounded-sm">
            Get In Touch
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[auto_auto] gap-4 text-left">

          {/* LinkedIn — tall left */}
          <motion.a
            href="https://www.linkedin.com/in/nida-akdo%C4%9Fan-2b72b429a/"
            target="_blank" rel="noopener noreferrer"
            custom={0} variants={cardVariants}
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="col-span-1 row-span-2 flex flex-col justify-between bg-[var(--color-card-bg)] border border-[var(--color-border-color)] hover:border-[var(--color-accent)] rounded-3xl p-6 md:p-8 group transition-colors duration-300 no-underline min-h-[200px] md:min-h-[280px]"
          >
            <Linkedin size={36} className="text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-300" />
            <div className="mt-auto">
              <p className="text-[var(--color-text-light)] text-xs mb-1 uppercase tracking-widest">Connect</p>
              <h3 className="text-white text-2xl font-bold">LinkedIn</h3>
            </div>
          </motion.a>

          {/* GitHub — wide top right */}
          <motion.a
            href="https://github.com/nidakd"
            target="_blank" rel="noopener noreferrer"
            custom={1} variants={cardVariants}
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="col-span-1 md:col-span-2 row-span-1 flex flex-col justify-between bg-[var(--color-card-bg)] border border-[var(--color-border-color)] hover:border-[var(--color-accent)] rounded-3xl p-6 group transition-colors duration-300 no-underline"
          >
            <Github size={32} className="text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-300" />
            <div className="mt-6">
              <p className="text-[var(--color-text-light)] text-xs mb-1 uppercase tracking-widest">Open Source</p>
              <h3 className="text-white text-xl font-bold">GitHub</h3>
              <p className="text-[var(--color-text-light)] text-sm mt-1">@nidakd</p>
            </div>
          </motion.a>

          {/* Instagram — top far right */}
          <motion.a
            href="https://www.instagram.com/hnidakd/"
            target="_blank" rel="noopener noreferrer"
            custom={2} variants={cardVariants}
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="col-span-1 row-span-1 flex flex-col justify-between bg-[var(--color-card-bg)] border border-[var(--color-border-color)] hover:border-[var(--color-accent)] rounded-3xl p-6 group transition-colors duration-300 no-underline"
          >
            <Instagram size={32} className="text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-300" />
            <div className="mt-6">
              <p className="text-[var(--color-text-light)] text-xs mb-1 uppercase tracking-widest">Follow</p>
              <h3 className="text-white text-xl font-bold">Instagram</h3>
              <p className="text-[var(--color-text-light)] text-sm mt-1">@hnidakd</p>
            </div>
          </motion.a>

          {/* Email — wide bottom, spans remaining 3 cols */}
          <motion.a
            href="mailto:hasibenidaakdogan@gmail.com"
            custom={3} variants={cardVariants}
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="col-span-2 md:col-span-3 row-span-1 flex flex-col md:flex-row items-start md:items-center justify-between bg-[var(--color-accent)] rounded-3xl p-6 md:p-8 group transition-all duration-300 no-underline gap-4"
          >
            <div className="flex items-center gap-4 md:gap-5 min-w-0">
              <Mail size={36} className="text-black shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <div className="min-w-0">
                <p className="text-black/60 text-xs mb-0.5 uppercase tracking-widest font-medium">Email me</p>
                <h3 className="text-black text-base sm:text-lg md:text-xl font-bold break-all">hasibenidaakdogan@gmail.com</h3>
              </div>
            </div>
            <span className="text-black font-semibold text-sm border border-black/30 rounded-full px-5 py-2 group-hover:bg-black group-hover:text-[var(--color-accent)] transition-colors duration-300 whitespace-nowrap">
              Say hello →
            </span>
          </motion.a>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(188,124,14,0.3)] to-transparent" />
    </section>
  );
};

export default Contact;
