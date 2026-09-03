import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Site Accounting App',
    desc: 'A professional accounting interface for residential site/building management, developed with Python, Streamlit, and PostgreSQL. It manages dues, fuel, and carry-over debts with block-based tracking, FIFO-based collection logic, and automated receipt generation. The project also supports CSV import and follows a modular architecture for scalability and maintainability.',
    links: [
      { text: 'View Project ->', url: 'https://github.com/nidakd/site-accounting-app' },
      { text: 'Download PDF Report ->', url: 'docs/site-accounting-app-report.pdf', download: true }
    ]
  },
  {
    title: 'LTS Alpha Core',
    desc: 'LTS Alpha Core is a platform-agnostic autonomous trading system built in Python, designed to work with brokers like MT5, Binance, and paper trading environments. The project includes a modular architecture with broker interfaces, strategy layers, market data models, and a simulation-ready PaperBroker for risk-free testing. It is currently in active alpha development with planned Telegram control, web admin panel, and multi-broker expansion.',
    links: [
      { text: 'View Project (Private) ->', url: 'https://github.com/nidakd/LTSAlphaCore' }
    ]
  },
  {
    title: 'Product Stock Management',
    desc: 'A full-stack inventory management platform built with .NET Web API, React, and PostgreSQL. It provides a responsive dashboard for managing products through CRUD operations, search functionality, validation, logging, and automatic database setup. The project follows a clean architecture with a focus on maintainability, usability, and real-world application flow.',
    links: [
      { text: 'View Project ->', url: 'https://github.com/nidakd/product-stock-api' }
    ]
  }
];

const Projects = () => {
  return (
    <section id="Projects" className="py-20 px-5 text-center bg-[var(--color-darker-bg)] relative scroll-mt-2">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white relative inline-block after:content-[''] after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-[var(--color-accent)] after:to-[var(--color-accent-light)] after:rounded-sm">
            Projects
          </h2>
          <p className="text-[var(--color-text-light)] text-lg max-w-3xl mx-auto mt-6 mb-10">
            Some of my recent work
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-[var(--color-card-bg)] rounded-2xl shadow-md border border-[var(--color-border-color)] overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[var(--color-accent)] text-left min-h-[290px] flex flex-col"
            >
              <div className="p-6 flex flex-col h-full bg-[var(--color-card-bg)] relative z-10">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-[var(--color-text-light)] text-sm leading-relaxed flex-grow">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={link.download}
                      className="inline-block text-[var(--color-accent)] font-semibold text-sm hover:text-[var(--color-accent-light)] transition-colors duration-300"
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(188,124,14,0.3)] to-transparent"></div>
    </section>
  );
};

export default Projects;
