import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { StaggeredMenu } from './StaggeredMenu';

const sections = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Comments', 'Contact'];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      const sectionsElements = sections.map(id => document.getElementById(id));
      let current = '';

      sectionsElements.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop - 150) {
            current = section.getAttribute('id');
          }
        }
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = sections.map(sec => ({
    label: sec === 'Comments' ? 'Testimonials' : sec,
    link: `#${sec}`,
    ariaLabel: sec === 'Comments' ? 'Testimonials' : sec,
  }));

  return (
    <>
      {/* Mobile: Staggered Menu */}
      <div className="md:hidden">
        <StaggeredMenu
          isFixed={true}
          items={menuItems}
          logoUrl=""
          menuButtonColor="#fff"
          openMenuButtonColor="#000"
          colors={['#101010', '#1a1a1a']}
          accentColor="#DFFF00"
          displayItemNumbering={true}
          displaySocials={false}
        />
      </div>

      {/* Desktop: Pill nav */}
      <header className="hidden md:flex fixed w-full top-6 z-50 justify-center pointer-events-none px-4">
        <nav className="pointer-events-auto max-w-full">
          <ul className={`flex items-center uppercase gap-1 sm:gap-2 p-1.5 rounded-full border border-white/10 backdrop-blur-3xl transition-all duration-300 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${isScrolled ? 'bg-[#0a0a0a]/80 shadow-[0_8px_32px_rgba(0,0,0,0.5)]' : 'bg-[#0a0a0a]/40'}`}>
            {sections.map((section) => (
              <li key={section} className="relative">
                <a
                  href={`#${section}`}
                  className={`relative z-10 inline-block px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium transition-colors duration-300 whitespace-nowrap ${activeSection === section
                    ? 'text-black'
                    : 'text-white/80 hover:text-white'
                    }`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {section === 'Comments' ? 'Testimonials' : section}
                </a>
                {activeSection === section && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 z-0 bg-[var(--color-accent)] rounded-full shadow-[0_0_15px_rgba(223,255,0,0.3)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
