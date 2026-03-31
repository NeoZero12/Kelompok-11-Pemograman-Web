import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setActive(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Me", href: "#aboutme" },
    { name: "Achievement", href: "#achievement" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
      active || isOpen 
        ? "py-4 bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]" 
        : "py-10 bg-transparent"
    }`}>
      <div className="container mx-auto px-6 md:px-16 lg:px-24 flex items-center justify-between">
        
        {/* Logo */}
        <motion.div 
          className="relative group cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <h1 className="relative text-xl md:text-2xl font-black text-white tracking-tighter italic uppercase">
            My—Profile<span className="text-blue-500">.</span>
          </h1>
        </motion.div>

        {/* Menu Links - Desktop */}
        <div className="hidden lg:flex items-center gap-12">
          <ul className="flex items-center gap-10">
            {navLinks.slice(0, 3).map((item, index) => (
              <motion.li 
                key={item.name} 
                className="relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <a 
                  href={item.href}
                  className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50 group-hover:text-white transition-all duration-500"
                >
                  {item.name}
                </a>
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-500 group-hover:w-full" />
              </motion.li>
            ))}
          </ul>
          
          {/* Tombol Contact dengan Efek Glow */}
          <motion.a 
            href="#contact"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button 
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "#2563eb", 
                boxShadow: "0px 0px 20px rgba(37, 99, 235, 0.5)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-2.5 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </motion.a>
        </div>

        {/* Hamburger Mobile */}
        <div 
          className="lg:hidden z-[110] cursor-pointer p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1.5">
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white transition-transform"
            />
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-4 h-0.5 bg-blue-500 ml-auto"
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white transition-transform"
            />
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 h-screen bg-black/95 backdrop-blur-2xl z-[105] flex flex-col items-center justify-center lg:hidden"
            >
              <div className="flex flex-col items-center gap-8">
                {navLinks.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-bold tracking-tighter text-white hover:text-blue-500 transition-colors"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>
    </nav>
  );
};

export default Navbar;