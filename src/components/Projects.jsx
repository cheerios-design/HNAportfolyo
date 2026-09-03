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
    <section id="Projects" className="py-24 px-6 lg:px-12 text-center bg-[var(--color-darker-bg)] relative scroll-mt-2">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-[var(--color-card-bg)] rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] text-left min-h-[450px] flex flex-col border border-[var(--color-border-color)] hover:border-[var(--color-accent)]"
            >
              <div className="p-8 flex flex-col h-full relative z-10">
                <h3 className="text-2xl font-medium text-white mb-4">{project.title}</h3>
                <p className="text-[var(--color-text-light)] text-sm leading-relaxed flex-grow">
                  {project.desc}
                </p>
                <div className="flex flex-col gap-3 mt-6">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={link.download}
                      className="inline-flex items-center text-white font-medium text-sm hover:text-[var(--color-accent)] transition-colors duration-300"
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
    </section>
  );
};

export default Projects;
