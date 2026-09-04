import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const experiences = [
  {
    title: 'Web Design Intern',
    company: 'Serbay //',
    subtitle: '',
    date: 'Jan 2026 – Feb 2026',
    desc: 'Developed CMS-based websites, structured layouts with HTML/CSS, optimized digital assets, and managed content administration via management panels.'
  },
  {
    title: 'Computer Programming Graduate',
    company: 'Anadolu University',
    subtitle: 'Associate Degree',
    date: 'Graduated · 2026',
    desc: 'Completed Computer Programming associate degree with a strong focus on SQL and Python, including database design, query optimization, and data-driven application development.'
  },
  {
    title: 'Software & Technical Team Lead',
    company: 'GDG on Campus',
    subtitle: 'Bolu Abant Izzet Baysal University',
    date: 'Sep 2025 – Present',
    desc: 'Coordinate development lifecycles of technical projects, mentor team members, organize hands-on workshops and coding events, and foster a collaborative developer community.'
  },
  {
    title: 'Software Development Intern',
    company: 'Armada Yazilim / Bilisim Vadisi',
    subtitle: '',
    date: 'Aug 2025 – Sep 2025',
    desc: 'Worked on 3D intraoral scan data for AI model training, performing data annotation and preprocessing using VTK and Vedo Python libraries. Maintained version control via Git.'
  },
  {
    title: 'Mathematics Student',
    company: 'Abant Izzet Baysal University',
    subtitle: "Bachelor's Degree",
    date: 'Senior Year',
    desc: "Currently pursuing Bachelor's degree in Mathematics (English). Specializing in mathematical modeling, analytics, and computational mathematics."
  },
  {
    title: 'Site Accountant',
    company: 'Residential Site Management',
    subtitle: '',
    date: '2022 – Present',
    desc: 'Manage comprehensive financial operations for a residential complex using advanced Excel systems to track income, expenses, and resident payments with high precision.'
  }
];

const TimelineItem = ({ exp, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex items-start w-full mb-12 md:mb-0">
      {/* Mobile layout: all items left-aligned with left border */}
      <div className="md:hidden w-full pl-8 border-l-2 border-[var(--color-accent)]/30 ml-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          {/* Dot on the line */}
          <div className="absolute -left-[2.35rem] top-2 w-3 h-3 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent)] border-2 border-[var(--color-dark-bg)]" />
          
          <span className="inline-block text-xs font-mono text-[var(--color-accent)] mb-2 tracking-widest uppercase">
            {exp.date}
          </span>
          <div className={`border rounded-2xl p-5 transition-colors duration-300 group relative overflow-hidden ${
            isLeft 
              ? 'bg-[var(--color-card-bg)] border-[var(--color-border-color)] hover:border-[var(--color-accent)]' 
              : 'bg-[var(--color-accent)] border-transparent'
          }`}>
            {isLeft && <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-transparent rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />}
            <h3 className={`text-base mb-0.5 ${isLeft ? 'font-semibold text-white' : 'font-bold text-black'}`}>{exp.title}</h3>
            <div className={`text-sm ${isLeft ? 'text-[var(--color-accent)] font-medium' : 'text-black/60 font-semibold'}`}>{exp.company}</div>
            {exp.subtitle && <div className={`text-xs mt-0.5 ${isLeft ? 'text-[var(--color-text-light)]' : 'text-black/50 font-medium'}`}>{exp.subtitle}</div>}
            <p className={`text-xs leading-relaxed mt-3 ${isLeft ? 'text-[var(--color-text-light)]' : 'text-black/80'}`}>{exp.desc}</p>
          </div>
        </motion.div>
      </div>

      {/* Desktop layout: alternating left/right */}
      <div className="hidden md:grid grid-cols-[1fr_auto_1fr] w-full items-start gap-0">
        {/* Left side */}
        <div className={`pr-10 ${isLeft ? 'flex justify-end' : ''}`}>
          {isLeft && (
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="w-full max-w-sm text-right"
            >
              <span className="inline-block text-xs font-mono text-[var(--color-accent)] mb-3 tracking-widest uppercase">
                {exp.date}
              </span>
              <div className="group relative bg-[var(--color-card-bg)] border border-[var(--color-border-color)] rounded-2xl p-6 hover:border-[var(--color-accent)] transition-colors duration-300 text-left overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-transparent rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <h3 className="text-base font-semibold text-white mb-0.5">{exp.title}</h3>
                <div className="text-[var(--color-accent)] text-sm font-medium">{exp.company}</div>
                {exp.subtitle && <div className="text-[var(--color-text-light)] text-xs mt-0.5">{exp.subtitle}</div>}
                <p className="text-[var(--color-text-light)] text-xs leading-relaxed mt-3">{exp.desc}</p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Center dot */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 300 }}
            className="w-4 h-4 rounded-full bg-[var(--color-accent)] shadow-[0_0_14px_var(--color-accent)] border-2 border-[var(--color-dark-bg)] mt-7 z-10 relative"
          />
        </div>

        {/* Right side */}
        <div className={`pl-10 ${!isLeft ? 'flex justify-start' : ''}`}>
          {!isLeft && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="w-full max-w-sm"
            >
              <span className="inline-block text-xs font-mono text-[var(--color-accent)] mb-3 tracking-widest uppercase">
                {exp.date}
              </span>
              <div className="group relative bg-[var(--color-accent)] border border-transparent rounded-2xl p-6 transition-colors duration-300 text-left overflow-hidden">
                <h3 className="text-base font-bold text-black mb-0.5">{exp.title}</h3>
                <div className="text-black/60 text-sm font-semibold">{exp.company}</div>
                {exp.subtitle && <div className="text-black/50 text-xs mt-0.5 font-medium">{exp.subtitle}</div>}
                <p className="text-black/80 text-xs leading-relaxed mt-3">{exp.desc}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 20%']
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="Experience" className="py-20 px-5 text-center bg-gradient-to-br from-[var(--color-dark-bg)] to-[#0a0e1a] relative scroll-mt-2">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl uppercase font-bold text-white relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-1 after:bg-[var(--color-accent)] after:rounded-sm">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/5">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-accent)]/20"
            />
          </div>

          {/* Items */}
          <div className="relative flex flex-col gap-0 md:gap-12">
            {experiences.map((exp, i) => (
              <TimelineItem key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(188,124,14,0.5)] to-transparent" />
    </section>
  );
};

export default Experience;
