import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, UserCircle, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ozkan GOZUTOK',
    role: 'Partner & Creative Director',
    company: 'Serbay // Digital Strategy',
    img: '/img/özkangozutok.jpg',
    text: '"During her internship in our web department, Nida distinguished herself as a disciplined and analytically-minded teammate. Her sense of ownership over assigned tasks and her solution-oriented approach enabled her to adapt to our processes in a very short time. Her seamless integration into the team and positive attitude significantly contributed not only to her individual performance but also to the overall team dynamics. Given her openness to growth and strong motivation to learn, I am confident she will achieve great success in her future professional endeavors."',
    rating: 5
  },
  {
    name: 'Asst. Prof. Dr. Sibel CANSU',
    role: 'Mathematics Department',
    company: 'BAIBU · Algebra & CS',
    icon: UserCircle,
    text: '"Nida is a student who stands out with her strong work ethic and analytical thinking skills, and she demonstrates remarkable competence in the field of programming. Her eagerness to grow and productive approach make her a promising individual likely to succeed in future projects."',
    rating: 5
  },
  {
    name: 'Sam DARAMROEI',
    role: 'Founder',
    company: 'Cheerio Studios',
    img: '/img/sam.JPG',
    text: '"Working with Nida is one of the best experiences you could have as an entrepreneur. She understands your data and works in the best way possible to utilize them for your success!"',
    rating: 5
  }
];

const Stars = ({ count }) => (
  <div className="flex gap-0.5">
    {[...Array(count)].map((_, i) => (
      <Star key={i} size={14} className="fill-[var(--color-accent)] text-[var(--color-accent)]" />
    ))}
  </div>
);

const Testimonials = () => {
  const [expanded, setExpanded] = useState(false);

  const t0 = testimonials[0]; // Ozkan — large featured card
  const t1 = testimonials[1]; // Prof. Cansu
  const t2 = testimonials[2]; // Sam

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.12 } })
  };

  return (
    <section id="Comments" className="py-20 px-5 text-center bg-gradient-to-br from-[var(--color-dark-bg)] to-[#0a0e1a] relative scroll-mt-2">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-4xl uppercase font-bold text-white relative inline-block after:content-[''] after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-1 after:bg-[var(--color-accent)] after:rounded-sm">
            Testimonials
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">

          {/* --- Featured large card: Ozkan (spans 2 rows on desktop) --- */}
          <motion.div
            custom={0} variants={cardVariants}
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.01 }}
            className="md:row-span-2 flex flex-col justify-between bg-[var(--color-card-bg)] border border-[var(--color-border-color)] hover:border-[var(--color-accent)] rounded-3xl p-8 group transition-colors duration-300 relative overflow-hidden"
          >
            {/* Accent top bar */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-t-3xl" />

            <Quote size={32} className="text-[var(--color-accent)]/40 mb-4" />

            <p className="text-[var(--color-text-light)] leading-relaxed italic text-sm flex-grow">
              {t0.text}
            </p>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4">
              <img src={t0.img} alt={t0.name} className="w-12 h-12 rounded-full object-cover border-2 border-[var(--color-accent)]" />
              <div>
                <p className="text-white font-semibold text-sm">{t0.name}</p>
                <p className="text-[var(--color-accent)] text-xs">{t0.role}</p>
                <p className="text-[var(--color-text-light)] text-xs">{t0.company}</p>
              </div>
              <Stars count={t0.rating} />
            </div>
          </motion.div>

          {/* --- Prof. Cansu --- */}
          <motion.div
            custom={1} variants={cardVariants}
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.01 }}
            className="flex flex-col justify-between bg-[var(--color-card-bg)] border border-[var(--color-border-color)] hover:border-[var(--color-accent)] rounded-3xl p-7 group transition-colors duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-t-3xl" />
            <Quote size={24} className="text-[var(--color-accent)]/40 mb-3" />
            <p className="text-[var(--color-text-light)] leading-relaxed italic text-sm flex-grow">{t1.text}</p>
            <div className="mt-6 pt-5 border-t border-white/5 flex items-center gap-3">
              <UserCircle size={44} strokeWidth={1} className="text-[var(--color-accent)] shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm">{t1.name}</p>
                <p className="text-[var(--color-accent)] text-xs">{t1.role}</p>
                <p className="text-[var(--color-text-light)] text-xs">{t1.company}</p>
              </div>
              <Stars count={t1.rating} />
            </div>
          </motion.div>

          {/* --- Sam — accent highlight card --- */}
          <motion.div
            custom={2} variants={cardVariants}
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.01 }}
            className="flex flex-col justify-between bg-[var(--color-accent)] rounded-3xl p-7 group transition-all duration-300 relative overflow-hidden"
          >
            <Quote size={24} className="text-black/30 mb-3" />
            <p className="text-black/80 leading-relaxed italic text-sm flex-grow">{t2.text}</p>
            <div className="mt-6 pt-5 border-t border-black/10 flex items-center gap-3">
              <img src={t2.img} alt={t2.name} className="w-11 h-11 rounded-full object-cover border-2 border-black/20 shrink-0" />
              <div>
                <p className="text-black font-semibold text-sm">{t2.name}</p>
                <p className="text-black/60 text-xs">{t2.role}</p>
                <p className="text-black/50 text-xs">{t2.company}</p>
              </div>
              <div className="ml-auto flex gap-0.5">
                {[...Array(t2.rating)].map((_, i) => (
                  <Star key={i} size={13} className="fill-black/50 text-black/50" />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(188,124,14,0.5)] to-transparent" />
    </section>
  );
};

export default Testimonials;
