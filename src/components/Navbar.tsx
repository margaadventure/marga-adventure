
import React, { useState, useEffect } from 'react';
import { LogoIcon } from '../constants';

interface NavbarProps {
  onMenuOpen: () => void;
  forceOpaque?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuOpen, forceOpaque = false }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 80);
          ticking = false;
        });
        ticking = true;
      }
    };
    // Initialize scroll state in case we load scrolled down
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isOpaque = scrolled || forceOpaque;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 will-change-transform transform-gpu ${isOpaque ? 'bg-gray-50/90 backdrop-blur-md py-4 shadow-sm border-b border-gray-200' : 'bg-transparent py-8'}`}>
      <div className="w-full max-w-[1920px] mx-auto px-8 md:px-20 flex justify-between items-center">
        <a href="/" className="flex items-center gap-4 group cursor-pointer">
          <div className={`transition-all duration-500 group-hover:rotate-12 ${isOpaque ? 'text-brand' : 'text-white'}`}>
            <LogoIcon className="w-11 h-11" />
          </div>
          <span className={`font-bold tracking-tighter text-2xl transition-colors duration-500 ${isOpaque ? 'text-gray-900' : 'text-white'}`}>
            Marga <span className="font-light text-brand">Adventure</span>
          </span>
        </a>

        <div className="flex items-center gap-10">
          <button
            onClick={onMenuOpen}
            className="flex items-center gap-4 group"
          >
            <span className={`text-[10px] font-bold uppercase tracking-[0.5em] transition-all duration-500 hidden md:block ${isOpaque ? 'text-gray-400 group-hover:text-brand' : 'text-white/60 group-hover:text-white'}`}>NAVIGATION</span>
            <div className="flex flex-col gap-1.5 p-2 transition-all">
              <div className={`h-0.5 transition-all duration-300 ${isOpaque ? 'bg-brand w-8' : 'bg-white w-8'} group-hover:w-6`}></div>
              <div className={`h-0.5 transition-all duration-300 ${isOpaque ? 'bg-brand w-6' : 'bg-white w-6'} group-hover:w-8`}></div>
              <div className={`h-0.5 transition-all duration-300 ${isOpaque ? 'bg-brand w-4' : 'bg-white w-4'} group-hover:w-8`}></div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
