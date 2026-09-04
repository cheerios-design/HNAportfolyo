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
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-4xl uppercase font-bold text-white relative inline-block after:content-[''] after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-1 after:bg-[var(--color-accent)] after:rounded-sm">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className={`group relative rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col border p-8 ${
                index === 0 ? 'md:row-span-2' : ''
              } ${
                index === 2
                  ? 'bg-[var(--color-accent)] border-transparent hover:border-black/20'
                  : 'bg-[var(--color-card-bg)] border-[var(--color-border-color)] hover:border-[var(--color-accent)]'
              }`}
            >
              {index !== 2 && (
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-t-3xl" />
              )}
              <div className="flex flex-col h-full relative z-10">
                <h3 className={`text-2xl font-bold mb-4 ${index === 2 ? 'text-black' : 'text-white'}`}>{project.title}</h3>
                <p className={`text-sm leading-relaxed flex-grow ${index === 2 ? 'text-black/80' : 'text-[var(--color-text-light)]'}`}>
                  {project.desc}
                </p>
                <div className="flex flex-col gap-3 mt-8">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={link.download}
                      className={`inline-flex items-center font-medium text-sm transition-colors duration-300 w-fit ${
                        index === 2 ? 'text-black hover:text-black/70' : 'text-white hover:text-[var(--color-accent)]'
                      }`}
                    >
                      <span className={`border-b pb-0.5 transition-colors ${
                        index === 2 ? 'border-transparent hover:border-black/40' : 'border-transparent hover:border-[var(--color-accent)]'
                      }`}>
                        {link.text}
                      </span>
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
