import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Mathematics Student',
    company: "Abant Izzet Baysal University / Bachelor's Degree",
    date: 'Senior Year',
    desc: "Currently pursuing Bachelor's degree in Mathematics (English). Specializing in mathematical modeling, analytics, and computational mathematics."
  },
  {
    title: 'Software & Technical Team Lead',
    company: 'GDG on Campus - Bolu Abant Izzet Baysal University',
    date: 'Sep 2025 - Present',
    desc: 'As the Software and Technical Lead, I coordinate the development lifecycles of technical projects and provide mentorship to team members in software development. I drive the organization of hands-on workshops and coding events while actively fostering the growth of a collaborative, learning-oriented developer community.'
  },
  {
    title: 'Site Accountant',
    company: 'Residential Site Management',
    date: '2022 - Present',
    desc: 'Managing comprehensive financial operations for a residential complex using advanced Excel systems to track income, expenses, and resident payments. I oversee all utility billing and account transactions with high precision, ensuring fiscal integrity through structured reporting and data-driven budget management to provide full financial transparency.'
  },
  {
    title: 'Web Design Intern',
    company: 'Serbay //',
    date: 'Jan 2026 - Feb 2026',
    desc: 'Contributed to the development of CMS-based websites by structuring layouts with HTML and implementing visual designs through CSS. I specialized in sourcing and optimizing high-quality digital assets and vector graphics, ensuring brand consistency through mockup adjustments and UI refinements. Additionally, I managed content administration and site optimization via management panels, gaining hands-on experience in the end-to-end web production lifecycle and strengthening my core front-end development competencies.'
  },
  {
    title: 'Computer Programming Graduate',
    company: 'Anadolu University / Associate Degree',
    date: 'Graduated · 2026',
    desc: 'Completed Computer Programming associate degree with a strong focus on SQL and Python, including database design, query optimization, and data-driven application development.'
  },
  {
    title: 'Software Development Intern',
    company: 'Armada Yazilim / Bilisim Vadisi',
    date: 'Aug 2025 - Sep 2025',
    desc: 'Focused on 3D intraoral scan data to support the training of artificial intelligence models, taking an active role in data annotation and preprocessing through tooth-based color coding on 3D meshes. Developed technical expertise in mesh structures and 3D segmentation by utilizing specialized Python visualization libraries such as VTK and Vedo. Throughout the process, I maintained version control via Git and contributed to model development through rigorous technical research and data pipeline optimization.'
  }
];

const Experience = () => {
  return (
    <section id="Experience" className="py-20 px-5 text-center bg-gradient-to-br from-[var(--color-dark-bg)] to-[#0a0e1a] relative scroll-mt-2">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white relative inline-block after:content-[''] after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-[var(--color-accent)] after:to-[var(--color-accent-light)] after:rounded-sm">
            Experience
          </h2>
          <p className="text-[var(--color-text-light)] text-lg max-w-3xl mx-auto mt-6 mb-10">
            My professional journey
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-[var(--color-card-bg)] p-6 rounded-2xl shadow-md border border-[var(--color-border-color)] overflow-hidden transition-all duration-300 hover:shadow-xl hover:bg-[var(--color-card-hover-bg)] hover:border-[var(--color-accent)] text-left min-h-[290px] flex flex-col"
            >
              {/* Top highlight bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              
              <h3 className="text-xl font-semibold text-white mb-1.5">{exp.title}</h3>
              <div className="text-[var(--color-accent)] font-semibold mb-1.5">{exp.company}</div>
              <div className="text-[var(--color-text-light)] text-sm italic mb-3">{exp.date}</div>
              <p className="text-[var(--color-text-light)] text-sm leading-relaxed mt-1.5 flex-grow">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(188,124,14,0.5)] to-transparent"></div>
    </section>
  );
};

export default Experience;
