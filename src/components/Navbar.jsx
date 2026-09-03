import { useState, useEffect } from 'react';

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

  return (
    <header className={`sticky top-0 z-50 py-4 transition-all duration-300 bg-black ${isScrolled ? 'shadow-md shadow-black/50' : ''}`}>
      <nav className="max-w-7xl mx-auto px-4">
        <ul className="flex flex-wrap justify-center gap-2 items-center">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`inline-block px-3 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeSection === section 
                    ? 'text-[var(--color-accent)]' 
                    : 'text-white hover:text-[var(--color-accent)] hover:-translate-y-[2px]'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {section === 'Comments' ? 'Testimonials' : section}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
