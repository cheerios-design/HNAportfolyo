import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, UserCircle } from 'lucide-react';

const testimonials = [
  {
    name: 'Ozkan GOZUTOK',
    role: 'Partner & Creative Director, Serbay\nSpecialist in Digital Strategy',
    img: '/img/özkangozutok.jpg',
    text: '"During her internship in our web department, Nida distinguished herself as a disciplined and analytically-minded teammate. Her sense of ownership over assigned tasks and her solution-oriented approach enabled her to adapt to our processes in a very short time.',
    moreText: ' Her seamless integration into the team and positive attitude significantly contributed not only to her individual performance but also to the overall team dynamics. Given her openness to growth and strong motivation to learn, I am confident she will achieve great success in her future professional endeavors."',
    rating: 5
  },
  {
    name: 'Asst. Prof. Dr. Sibel CANSU',
    role: 'Mathematics Department, BAIBU\nSpecialist in Algebra & Computer Science',
    icon: UserCircle,
    text: '"Nida is a student who stands out with her strong work ethic and analytical thinking skills, and she demonstrates remarkable competence in the field of programming. Her eagerness to grow and productive approach make her a promising individual likely to succeed in future projects."',
    rating: 5
  },
  {
    name: 'Sam DARAMROEI',
    role: 'Founder, Cheerio Studios',
    icon: UserCircle,
    text: '"Working with Nida is one of the best experiences you could have as an entrepreneur. She understands your data and works in the best way possible to utilize them for your success!"',
    rating: 5
  }
];

const TestimonialCard = ({ testimonial, index }) => {
  const [expanded, setExpanded] = useState(false);
  const Icon = testimonial.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative bg-[var(--color-card-bg)] p-6 rounded-2xl shadow-md border border-[var(--color-border-color)] overflow-hidden transition-all duration-300 hover:shadow-xl hover:bg-[var(--color-card-hover-bg)] hover:border-[var(--color-accent)] text-left min-h-[290px] flex flex-col"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

      <div className="flex items-center gap-4 mb-5">
        {testimonial.img ? (
          <img src={testimonial.img} alt={testimonial.name} className="w-[68px] h-[68px] rounded-full object-cover shrink-0 border-2 border-[var(--color-accent)] shadow-md" />
        ) : (
          <Icon size={68} strokeWidth={1} className="text-[var(--color-accent)] shrink-0" />
        )}
        <div>
          <h4 className="text-[1.2em] text-white font-semibold mb-1">{testimonial.name}</h4>
          <p className="text-[0.9em] text-[var(--color-accent)] whitespace-pre-line">{testimonial.role}</p>
        </div>
      </div>

      <div className="my-5 flex-grow">
        <p className="text-[var(--color-text-light)] leading-relaxed italic">
          {testimonial.text}
          {testimonial.moreText && (
            <span className={`inline transition-all duration-500 ${expanded ? 'opacity-100' : 'opacity-0 hidden'}`}>
              {testimonial.moreText}
            </span>
          )}
        </p>
        {testimonial.moreText && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-[var(--color-accent)] text-sm font-semibold hover:text-[var(--color-accent-light)] transition-colors focus:outline-none"
          >
            {expanded ? 'Read less' : 'Read more'}
          </button>
        )}
      </div>

      <div className="flex gap-1 mt-auto">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={18} className="fill-[var(--color-accent)] text-[var(--color-accent)]" />
        ))}
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section id="Comments" className="py-20 px-5 text-center bg-gradient-to-br from-[var(--color-dark-bg)] to-[#0a0e1a] relative scroll-mt-2">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white relative inline-block after:content-[''] after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-[var(--color-accent)] after:to-[var(--color-accent-light)] after:rounded-sm">
            Testimonials
          </h2>
          <p className="text-[var(--color-text-light)] text-lg max-w-3xl mx-auto mt-6 mb-10">
            What people say about my work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 items-start">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(188,124,14,0.5)] to-transparent"></div>
    </section>
  );
};

export default Testimonials;
