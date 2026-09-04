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
  },
  {
    icon: Users,
    title: 'Team Leadership',
    desc: 'Project Coordination, Mentoring, Communication, Team Collaboration'
  }
];

const Skills = () => {
  return (
    <section id="Skills" className="py-20 px-5 text-center bg-gradient-to-br from-[var(--color-dark-bg)] to-[#0a0e1a] relative scroll-mt-2">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white relative inline-block after:content-[''] after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-[var(--color-accent)] after:to-[var(--color-accent-light)] after:rounded-sm">
            Technical Skills
          </h2>
          <p className="text-[var(--color-text-light)] text-lg max-w-3xl mx-auto mt-6 mb-10">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-[var(--color-card-bg)] p-8 rounded-2xl shadow-md border border-[var(--color-border-color)] overflow-hidden transition-all duration-400 hover:shadow-xl hover:bg-[var(--color-card-hover-bg)] hover:border-[var(--color-accent)] text-left"
              >
                {/* Top highlight bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"></div>

                <div className="mb-4 inline-block">
                  <Icon size={48} strokeWidth={1.5} className="text-[var(--color-accent)]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{skill.title}</h3>
                <p className="text-[var(--color-text-light)] text-sm leading-relaxed">{skill.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(188,124,14,0.5)] to-transparent"></div>
    </section>
  );
};

export default Skills;
