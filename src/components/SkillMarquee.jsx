import { motion } from 'framer-motion';
import { Code, Laptop, Database, Box, Calculator, Users } from 'lucide-react';

const skills = [
  { name: 'Python', icon: Code },
  { name: 'React', icon: Laptop },
  { name: 'PostgreSQL', icon: Database },
  { name: 'VTK & Vedo', icon: Box },
  { name: 'Data Analysis', icon: Calculator },
  { name: 'Leadership', icon: Users },
];

const SkillMarquee = () => {
  // Duplicate array to create seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <div className="w-full overflow-hidden bg-[var(--color-darker-bg)] py-8 border-y border-[var(--color-border-color)] opacity-70">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          ease: 'linear',
          duration: 20,
          repeat: Infinity,
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-8 text-xl font-bold tracking-wide text-[#666666] shrink-0"
          >
            <skill.icon className="w-6 h-6" />
            {skill.name}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillMarquee;
