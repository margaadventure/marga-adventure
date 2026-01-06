import React, { useState } from 'react';
import { LogoIcon } from '../constants';

import img1 from '../assets/images/menu-carousal/1000000991.jpg';
import img2 from '../assets/images/menu-carousal/Mustang .jpg';
import img3 from '../assets/images/menu-carousal/NEP2025-103.jpg';
import img4 from '../assets/images/menu-carousal/NEP2025-142.jpg';
import img5 from '../assets/images/menu-carousal/NEP2025-293.jpg';
import img6 from '../assets/images/menu-carousal/NEP2025-359.jpg';
import img7 from '../assets/images/menu-carousal/NEP2025-389.jpg';
import img8 from '../assets/images/menu-carousal/Nepal-RBR_097_12_08-R62_0005.jpg';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SCROLL_IMAGES = [
  img1.src,
  img2.src,
  img3.src,
  img4.src,
  img5.src,
  img6.src,
  img7.src,
  img8.src,
];

export const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  const [activeSub, setActiveSub] = useState<string | null>(null);
  const [activeNestedSub, setActiveNestedSub] = useState<string | null>(null);

  if (!isOpen) return null;

  const nepalItems = [
    { name: 'Birdwatching', href: '/birdwatching' },
    { name: 'Photography', href: '/photography' },
    { name: 'Spiritual Retreat', href: '/spiritual' },
    { name: 'Trekking', href: '/trekking' }
  ];

  const bhutanItems = [
    { name: 'Kingdom of Bhutan', href: '/bhutan' }
  ];

  const tibetItems = [
    { name: 'Roof of the World', href: '/tibet' }
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-brand text-white overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center px-8 py-8 relative z-20 bg-brand/90 backdrop-blur-sm md:bg-transparent">
        {/* Logo and Name */}
        <a href="/" onClick={onClose} className="flex items-center gap-4 group cursor-pointer">
          <div className="text-white">
            <LogoIcon className="w-10 h-10 brightness-0 invert" />
          </div>
          <span className="font-bold tracking-tighter text-xl text-white">
            Marga <span className="font-light text-white/80">Adventure</span>
          </span>
        </a>

        <button
          onClick={onClose}
          className="group flex items-center gap-4 text-xs tracking-widest uppercase font-bold text-white"
        >
          Close
          <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-brand transition-all">
            ✕
          </div>
        </button>
      </div>

      {/* Main Nav Container */}
      <div className="flex-1 flex flex-col md:flex-row relative z-10 overflow-hidden">

        {/* Column 1: Main Menu Items */}
        <nav className={`w-full ${activeSub === 'destination' ? 'md:w-[25%]' : 'md:w-[35%]'} flex flex-col justify-start pl-12 pr-8 md:pl-24 md:pr-12 lg:pl-32 lg:pr-16 gap-6 bg-brand overflow-y-auto h-full py-12 md:py-20 no-scrollbar transition-all duration-500 border-r border-white/10 z-20 relative`}>
          <a href="/" onClick={onClose} className="group text-2xl md:text-4xl font-bold text-white hover:text-white/70 transition-colors inline-flex items-center justify-between gap-4 shrink-0 text-left">
            Home
          </a>

          <div className="relative group shrink-0">
            <div className="flex items-center justify-between w-full">
              <button
                type="button"
                onClick={() => setActiveSub(activeSub === 'destination' ? null : 'destination')}
                className={`text-2xl md:text-3xl font-bold transition-colors text-left outline-none ${activeSub === 'destination' ? 'text-white' : 'text-white hover:text-white/70'}`}
              >
                Destinations
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveSub(activeSub === 'destination' ? null : 'destination');
                }}
                className="p-4 -mr-4 outline-none relative z-30"
              >
                <span className={`text-3xl transition-transform duration-300 block ${activeSub === 'destination' ? 'rotate-90 text-white' : 'text-white/40'}`}>›</span>
              </button>
            </div>

            {/* Mobile Accordion Only */}
            {activeSub === 'destination' && (
              <div className="md:hidden ml-4 mt-6 flex flex-col gap-6 animate-in fade-in slide-in-from-left-4 duration-300 border-l mb-4 pl-6 border-white/20">
                <div className="flex flex-col gap-4">

                  {/* Nepal Mobile */}
                  <div className="flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveNestedSub(activeNestedSub === 'nepal' ? null : 'nepal')}
                      className="flex items-center justify-between group outline-none w-full"
                    >
                      <span className={`font-bold text-lg text-left ${activeNestedSub === 'nepal' ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>Nepal</span>
                      <span className={`text-xl transition-transform duration-300 ${activeNestedSub === 'nepal' ? 'rotate-90 text-white' : 'text-white/40'}`}>›</span>
                    </button>
                    {activeNestedSub === 'nepal' && (
                      <div className="pl-4 flex flex-col gap-2 border-l border-white/20 animate-in fade-in slide-in-from-top-2 duration-300">
                        <a href="/nepal" onClick={onClose} className="text-white/70 hover:text-white py-1">Overview</a>
                        {nepalItems.map(item => (
                          <a key={item.name} href={item.href} onClick={onClose} className="text-white/70 hover:text-white py-1">{item.name}</a>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bhutan Mobile */}
                  <div className="flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveNestedSub(activeNestedSub === 'bhutan' ? null : 'bhutan')}
                      className="flex items-center justify-between group outline-none w-full"
                    >
                      <span className={`font-bold text-lg text-left ${activeNestedSub === 'bhutan' ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>Bhutan</span>
                      <span className={`text-xl transition-transform duration-300 ${activeNestedSub === 'bhutan' ? 'rotate-90 text-white' : 'text-white/40'}`}>›</span>
                    </button>
                    {activeNestedSub === 'bhutan' && (
                      <div className="pl-4 flex flex-col gap-2 border-l border-white/20 animate-in fade-in slide-in-from-top-2 duration-300">
                        {bhutanItems.map(item => (
                          <a key={item.name} href={item.href} onClick={onClose} className="text-white/70 hover:text-white py-1">{item.name}</a>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Tibet Mobile */}
                  <div className="flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveNestedSub(activeNestedSub === 'tibet' ? null : 'tibet')}
                      className="flex items-center justify-between group outline-none w-full"
                    >
                      <span className={`font-bold text-lg text-left ${activeNestedSub === 'tibet' ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>Tibet</span>
                      <span className={`text-xl transition-transform duration-300 ${activeNestedSub === 'tibet' ? 'rotate-90 text-white' : 'text-white/40'}`}>›</span>
                    </button>
                    {activeNestedSub === 'tibet' && (
                      <div className="pl-4 flex flex-col gap-2 border-l border-white/20 animate-in fade-in slide-in-from-top-2 duration-300">
                        {tibetItems.map(item => (
                          <a key={item.name} href={item.href} onClick={onClose} className="text-white/70 hover:text-white py-1">{item.name}</a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          <a href="/community" onClick={onClose} className="group text-2xl md:text-3xl font-bold text-white hover:text-white/70 transition-colors inline-flex items-center justify-between gap-4 shrink-0 text-left">
            Community
          </a>
          <a href="/about" onClick={onClose} className="group text-2xl md:text-3xl font-bold text-white hover:text-white/70 transition-colors inline-flex items-center justify-between gap-4 shrink-0 text-left">
            About Us
          </a>
          <a href="/blog" onClick={onClose} className="group text-2xl md:text-3xl font-bold text-white hover:text-white/70 transition-colors inline-flex items-center justify-between gap-4 shrink-0 text-left">
            The Journal
          </a>
          <a href="/contact" onClick={onClose} className="group text-2xl md:text-3xl font-bold text-white hover:text-white/70 transition-colors inline-flex items-center justify-between gap-4 shrink-0 text-left">
            Contact
          </a>
        </nav>

        {/* Column 2: Submenu (Desktop Only) */}
        {activeSub === 'destination' && (
          <div className="hidden md:flex w-[20%] flex-col gap-8 bg-brand border-r border-white/10 py-20 px-12 animate-in fade-in slide-in-from-left-4 duration-500 z-10 transition-all">

            {/* Nepal Group */}
            <div className="flex flex-col gap-3">
              <a
                href="/nepal"
                onMouseEnter={() => setActiveNestedSub('nepal')}
                onClick={onClose}
                className={`text-2xl font-medium transition-colors cursor-pointer ${activeNestedSub === 'nepal' ? 'text-white' : 'text-white/40 hover:text-white'}`}
              >
                Nepal
              </a>
              {activeNestedSub === 'nepal' && (
                <div className="flex flex-col gap-2 pl-4 animate-in fade-in slide-in-from-top-1 duration-200 border-l-2 border-white/20">
                  {nepalItems.map(item => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={onClose}
                      className="text-sm font-medium text-white/60 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Bhutan Group */}
            <div className="flex flex-col gap-3">
              <a
                href="/bhutan"
                onMouseEnter={() => setActiveNestedSub('bhutan')}
                onClick={onClose}
                className={`text-2xl font-medium transition-colors cursor-pointer ${activeNestedSub === 'bhutan' ? 'text-white' : 'text-white/40 hover:text-white'}`}
              >
                Bhutan
              </a>
              {activeNestedSub === 'bhutan' && (
                <div className="flex flex-col gap-2 pl-4 animate-in fade-in slide-in-from-top-1 duration-200 border-l-2 border-white/20">
                  {bhutanItems.map(item => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={onClose}
                      className="text-sm font-medium text-white/60 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Tibet Group */}
            <div className="flex flex-col gap-3">
              <a
                href="/tibet"
                onMouseEnter={() => setActiveNestedSub('tibet')}
                onClick={onClose}
                className={`text-2xl font-medium transition-colors cursor-pointer ${activeNestedSub === 'tibet' ? 'text-white' : 'text-white/40 hover:text-white'}`}
              >
                Tibet
              </a>
              {activeNestedSub === 'tibet' && (
                <div className="flex flex-col gap-2 pl-4 animate-in fade-in slide-in-from-top-1 duration-200 border-l-2 border-white/20">
                  {tibetItems.map(item => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={onClose}
                      className="text-sm font-medium text-white/60 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Column 3: Visual / Images */}
        <div className="hidden md:flex flex-1 relative items-center justify-center bg-brand h-full overflow-hidden p-20">

          {activeSub === 'destination' ? (
            /* Feature Image Stack */
            <>
              {/* Image Container */}
              <div className="relative w-full max-w-sm aspect-[3/4] animate-in zoom-in-95 duration-700">
                {/* Front Main Photo */}
                <div className="absolute inset-0 shadow-2xl overflow-hidden group cursor-pointer transition-all duration-500">
                  <img
                    src={
                      activeNestedSub === 'nepal' ? "/images/Trekking/DSCN7275.jpg" :
                        activeNestedSub === 'bhutan' ? "/images/Spirituality Retreat/buddha-face.jpg" :
                          activeNestedSub === 'tibet' ? "/images/Trekking/PA120680.JPG" :
                            "/images/Trekking/DSCN7275.jpg" // default
                    }
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="Region Highlight"
                  />
                </div>
              </div>
            </>
          ) : (
            /* Default Scroll Images */
            <>
              <div className="flex flex-col animate-vertical-scroll w-full transition-all duration-700">
                {[...SCROLL_IMAGES, ...SCROLL_IMAGES].map((src, idx) => (
                  <div key={idx} className="relative w-full h-[50vh] shrink-0">
                    <img
                      src={src}
                      alt="Marga Experience"
                      className="w-full h-full object-cover shadow-lg"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

      </div>

      {/* Footer */}
      <div className="px-12 py-8 flex justify-start items-center gap-8 border-t border-white/10 relative z-20 bg-brand shrink-0">
        <div className="flex gap-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
            <span className="sr-only">Facebook</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
            <span className="sr-only">Instagram</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468.99c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.821-.049.975-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.059-1.37.059-4.041v-.08c0-2.597-.01-2.917-.058-3.821-.045-.975-.207-1.504-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
            <span className="sr-only">LinkedIn</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
