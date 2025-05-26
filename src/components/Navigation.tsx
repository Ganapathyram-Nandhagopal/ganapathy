
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#services', label: 'Services' },
    { href: '#partners', label: 'Partners' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      {/* Dynamic Island Container */}
      <div 
        className={`
          relative transition-all duration-500 ease-out
          ${isScrolled 
            ? 'bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 shadow-2xl' 
            : 'bg-slate-800/60 backdrop-blur-lg border border-slate-600/30'
          }
          rounded-full px-6 py-3
          before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r 
          before:from-blue-500/20 before:via-cyan-500/20 before:to-blue-500/20 
          before:opacity-0 before:transition-opacity before:duration-300
          hover:before:opacity-100
          after:absolute after:inset-[-2px] after:rounded-full after:bg-gradient-to-r 
          after:from-blue-500/30 after:via-cyan-500/30 after:to-blue-500/30 
          after:opacity-0 after:blur-xl after:transition-all after:duration-300 after:-z-10
          hover:after:opacity-100 hover:after:blur-2xl
        `}
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            GN
          </a>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            {navItems.slice(1).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  relative text-slate-300 hover:text-white transition-all duration-300
                  text-sm font-medium
                  after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] 
                  after:w-0 after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400
                  after:transition-all after:duration-300
                  hover:after:w-full
                  hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]
                "
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="
              bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full
              text-sm font-medium transition-all duration-300
              hover:from-blue-600 hover:to-cyan-600 hover:scale-105
              hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]
              active:scale-95
            "
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between w-full">
          {/* Mobile Logo */}
          <a 
            href="#home" 
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            GN
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="
              text-slate-300 hover:text-white transition-colors duration-300
              p-2 rounded-full hover:bg-slate-700/50
            "
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div 
          className="
            md:hidden absolute top-full left-0 right-0 mt-2
            bg-slate-900/90 backdrop-blur-xl border border-slate-700/50
            rounded-2xl p-4 shadow-2xl
            animate-fade-in-up
            before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b 
            before:from-blue-500/10 before:to-cyan-500/10 before:opacity-50
          "
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  text-slate-300 hover:text-white transition-all duration-300
                  py-2 px-4 rounded-xl hover:bg-slate-700/50
                  text-center font-medium
                  hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]
                "
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 px-4 rounded-xl
                text-center font-medium transition-all duration-300
                hover:from-blue-600 hover:to-cyan-600
                hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]
                mt-2
              "
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
