import { motion } from 'framer-motion';
import { Code, Laptop, Database, Box, Calculator, Users } from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: 'Programming',
    desc: 'Python, C#, JavaScript, SQL, CSS'
  },
  {
    icon: Laptop,
    title: 'Web Development',
    desc: 'HTML, CSS, CMS, Responsive Design, Git, GitHub'
  },
  {
    icon: Database,
    title: 'Database',
    desc: 'PostgreSQL, Database Management, Data Integrity, Reporting'
  },
  {
    icon: Box,
    title: '3D Data Processing',
    desc: 'VTK, Vedo, Data Visualization'
  },
  {
    icon: Calculator,
    title: 'Mathematics',
    desc: 'Mathematical Modeling, Analytics, Analytical Thinking, Problem Solving'
  }
];

const Skills = () => {
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <section id="Skills" className="py-20 text-center bg-gradient-to-br from-[var(--color-dark-bg)] to-[#0a0e1a] relative scroll-mt-2 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl uppercase font-bold mb-12 text-accent relative inline-block after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-1 after:bg-[var(--color-accent)] after:rounded-sm">
            Technologies & <br /> Tools I Work With
          </h2>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full mt-16 py-4"
      >
        <motion.div
          className="flex gap-6 w-max px-3"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration: 40, repeat: Infinity }}
        >
          {duplicatedSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="w-[280px] sm:w-[320px] md:w-[350px] shrink-0 group relative bg-[var(--color-card-bg)] p-8 rounded-2xl shadow-md border border-[var(--color-border-color)] overflow-hidden transition-all duration-400 hover:shadow-xl hover:bg-[var(--color-card-hover-bg)] hover:border-[var(--color-accent)] text-left flex flex-col"
              >
                {/* Top highlight bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"></div>

                <div className="mb-4 inline-block">
                  <Icon size={48} strokeWidth={1.5} className="text-[var(--color-accent)]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{skill.title}</h3>
                <p className="text-[var(--color-text-light)] text-sm leading-relaxed flex-grow">{skill.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(188,124,14,0.5)] to-transparent"></div>
    </section>
  );
};

export default Skills;
