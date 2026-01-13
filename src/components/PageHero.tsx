
import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
}

const PageHero: React.FC<PageHeroProps & { parallax?: boolean; overlayOpacity?: string }> = ({
  title,
  subtitle,
  image,
  parallax = false,
  overlayOpacity = "bg-black/40"
}) => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900 group">
      <div className="absolute inset-0 overflow-hidden">
        {parallax ? (
          <div className="absolute inset-0 clip-path-inset">
            <img
              src={image}
              className="fixed inset-0 w-full h-full object-cover opacity-80 z-0 pointer-events-none"
              alt="Hero Background"
              decoding="async"
              style={{ height: '100vh' }}
            />
          </div>
        ) : (
          <img
            src={image}
            className="w-full h-full object-cover opacity-80 scale-100 group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
            alt={title}
            fetchPriority="high"
            decoding="async"
          />
        )}
      </div>
      <div className={`absolute inset-0 ${overlayOpacity}`}></div>

      <div className="relative z-10 text-center flex flex-col items-center px-6 max-w-5xl pt-20">
        <div className="w-px h-16 bg-white/40 mb-8 animate-fade-in"></div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter text-white/90 mb-6 animate-fade-in-up drop-shadow-sm">
          {title}
        </h1>
        <p className="text-white/80 text-lg md:text-2xl font-light italic tracking-wide max-w-2xl animate-fade-in-delayed">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHero;
