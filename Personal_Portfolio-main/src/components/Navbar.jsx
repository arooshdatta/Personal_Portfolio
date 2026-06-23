import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];
  useEffect(() => {
  const handleScroll = () => {
    const sections = navLinks.map(link =>
      document.querySelector(link.href)
    );

    sections.forEach((section) => {
      if (!section) return;

      const rect = section.getBoundingClientRect();

      if (rect.top <= 120 && rect.bottom >= 120) {
        setActiveSection(section.id);
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <nav className="fixed w-full top-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold font-outfit tracking-tighter flex items-center gap-2">
              <span className="text-brand-primary">&lt;/&gt;</span> AROOSH
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
  activeSection === link.href.substring(1)
    ? "text-brand-primary bg-brand-primary/10 shadow-[0_0_20px_rgba(0,210,255,0.25)]"
    : "text-gray-300 hover:text-brand-primary hover:bg-white/5"
}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4">

  <button
    onClick={() =>
      window.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "k",
          metaKey: true,
        })
      )
    }
    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 text-gray-300 text-sm"
  >
    <span className="font-semibold">⌘ K</span>
    <span className="text-gray-500">Search</span>
  </button>

 <a
  href="/Resume.pdf"
  download
  className="inline-flex items-center gap-2 border border-brand-primary text-brand-primary px-4 py-2 rounded-lg hover:bg-brand-primary hover:text-bg-dark transition-all duration-300 text-sm font-medium"
>
  <Download size={16} />
  Download CV
</a>

</div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/5">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
  activeSection === link.href.substring(1)
    ? "text-brand-primary bg-brand-primary/10"
    : "text-gray-300 hover:text-brand-primary hover:bg-white/5"
}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="/Resume.pdf" download className="mt-4 flex items-center justify-center gap-2 border border-brand-primary text-brand-primary px-4 py-2 rounded-lg hover:bg-brand-primary hover:text-bg-dark transition-all duration-300 text-base font-medium">
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
