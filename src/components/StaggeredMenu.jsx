import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const StaggeredMenu = ({
  items = [],
  colors = ['#101010', '#1a1a1a'],
  accentColor = 'var(--color-accent)',
  displayItemNumbering = true,
  onMenuOpen,
  onMenuClose
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      onMenuOpen?.();
    } else {
      document.body.style.overflow = '';
      onMenuClose?.();
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open, onMenuOpen, onMenuClose]);

  const toggleMenu = () => setOpen(!open);

  const prelayerVariants = {
    closed: { x: '100%' },
    open: (i) => ({
      x: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }
    }),
    exit: (i) => ({
      x: '100%',
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: (colors.length - i - 1) * 0.05 }
    })
  };

  const panelVariants = {
    closed: { x: '100%' },
    open: {
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: colors.length * 0.08 }
    },
    exit: {
      x: '100%',
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const listVariants = {
    open: {
      transition: { staggerChildren: 0.08, delayChildren: colors.length * 0.08 + 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.04, staggerDirection: -1 }
    }
  };

  const itemVariants = {
    closed: { y: 60, opacity: 0, rotate: 5 },
    open: { y: 0, opacity: 1, rotate: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[99] pointer-events-none overflow-hidden" style={{ '--sm-accent': accentColor }}>
      
      {/* Header / Toggle */}
      <header className="absolute top-0 left-0 w-full flex items-center justify-end p-6 pointer-events-none z-50">
        <button
          onClick={toggleMenu}
          className={`relative inline-flex items-center justify-center w-12 h-12 rounded-full cursor-pointer pointer-events-auto transition-colors duration-300 ${
            open ? 'bg-[var(--color-accent)] text-black' : 'bg-black/50 backdrop-blur-md text-white'
          }`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {/* Hamburger / X icon */}
          <div className="relative w-4 h-4 flex flex-col items-center justify-center">
            <motion.span
              className="absolute w-full h-[2px] bg-current rounded-full"
              animate={open ? { y: 0, rotate: 45 } : { y: -4, rotate: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
            <motion.span
              className="absolute w-full h-[2px] bg-current rounded-full"
              animate={open ? { y: 0, rotate: -45 } : { y: 4, rotate: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
          </div>
        </button>
      </header>

      {/* Menu Overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Click away layer */}
            <motion.div 
              className="absolute inset-0 bg-black/20 backdrop-blur-sm pointer-events-auto z-10"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { delay: 0.4 } }}
              onClick={() => setOpen(false)}
            />

            {/* Pre-layers */}
            <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
              {colors.map((c, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={prelayerVariants}
                  initial="closed"
                  animate="open"
                  exit="exit"
                  className="absolute inset-0 w-full h-full"
                  style={{ background: c }}
                />
              ))}
            </div>

            {/* Panel */}
            <motion.aside
              variants={panelVariants}
              initial="closed"
              animate="open"
              exit="exit"
              className="absolute top-0 right-0 h-full w-full max-w-[420px] bg-[#101010] flex flex-col p-12 px-6 md:p-24 md:px-10 overflow-y-auto pointer-events-auto z-30"
            >
              <nav className="flex-1 flex flex-col gap-5 mt-10">
                <motion.ul
                  variants={listVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="list-none m-0 p-0 flex flex-col gap-6"
                >
                  {items.map((it, idx) => (
                    <div key={it.label + idx} className="overflow-hidden">
                      <motion.li variants={itemVariants}>
                        <a
                          href={it.link}
                          className="group relative flex items-center gap-4 text-white font-bold text-3xl md:text-4xl cursor-pointer tracking-tight uppercase no-underline w-fit"
                          onClick={() => setOpen(false)}
                        >
                          <span className="transition-colors duration-300 group-hover:text-[var(--color-accent)] inline-block">
                            {it.label}
                          </span>
                          {displayItemNumbering && (
                            <span className="text-[var(--color-accent)] font-medium text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-1">
                              0{idx + 1}
                            </span>
                          )}
                        </a>
                      </motion.li>
                    </div>
                  ))}
                </motion.ul>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StaggeredMenu;
