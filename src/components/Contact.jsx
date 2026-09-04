import { motion } from 'framer-motion';
import { FaLinkedin as Linkedin, FaGithub as Github, FaInstagram as Instagram, FaEnvelope as Mail } from 'react-icons/fa';

const contacts = [
  {
    name: 'LinkedIn',
    desc: 'Connect with me',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/nida-akdo%C4%9Fan-2b72b429a/'
  },
  {
    name: 'GitHub',
    desc: 'View my projects',
    icon: Github,
    url: 'https://github.com/nidakd'
  },
  {
    name: 'Instagram',
    desc: '@hnidakd',
    icon: Instagram,
    url: 'https://www.instagram.com/hnidakd/'
  },
  {
    name: 'Email',
    desc: 'hasibenidaakdogan@gmail.com',
    icon: Mail,
    url: 'mailto:hasibenidaakdogan@gmail.com'
  }
];

const Contact = () => {
  return (
    <section id="Contact" className="py-20 px-5 text-center bg-[var(--color-darker-bg)] relative scroll-mt-2">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white relative inline-block after:content-[''] after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-1 after:bg-[var(--color-accent)] after:rounded-sm">
            Get In Touch
          </h2>
          <p className="text-[var(--color-text-light)] text-lg max-w-3xl mx-auto mt-6 mb-10">
            Let's connect and collaborate
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.name}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex items-center gap-4 bg-gradient-to-br from-[#071326] to-[#0b1d3a] text-white py-6 px-10 rounded-2xl shadow-md border border-[var(--color-accent)] transition-all duration-300 hover:shadow-xl hover:border-[var(--color-accent-light)] hover:from-[#071326] hover:to-[#10203d] no-underline"
              >
                <Icon size={32} />
                <div className="text-left">
                  <h3 className="text-lg font-semibold mb-1">{contact.name}</h3>
                  <p className="text-sm opacity-90 m-0">{contact.desc}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(188,124,14,0.3)] to-transparent"></div>
    </section>
  );
};

export default Contact;
