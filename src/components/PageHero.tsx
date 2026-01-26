
import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  imageSrcSet?: string;
}

const PageHero: React.FC<PageHeroProps & { parallax?: boolean; overlayOpacity?: string; className?: string }> = ({
  title,
  subtitle,
  image,
  imageSrcSet,
  parallax = false,
  overlayOpacity = "bg-black/40",
  className = ""
}) => {
  return (
    <section className={`relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900 group ${className}`}>
      <div className="absolute inset-0 overflow-hidden">
        {parallax ? (
          <div className="absolute inset-0 clip-path-inset">
            <img
              src={image}
              srcSet={imageSrcSet}
              sizes="100vw"
              className="fixed inset-0 w-full h-full object-cover opacity-80 z-0 pointer-events-none"
              alt="Hero Background"
              width="2560"
              height="1440"
              decoding="async"
              style={{ height: '100vh' }}
            />
          </div>
        ) : (
          <img
            src={image}
            srcSet={imageSrcSet}
            sizes="100vw"
            className="w-full h-full object-cover opacity-80 scale-100 group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
            alt={title}
            width="2560"
            height="1440"
            fetchPriority="high"
            decoding="async"
          />
        )}
      </div>
      <div className={`absolute inset-0 bg-black/0 md:bg-black/0 lg:bg-black/0 xl:${overlayOpacity}`}></div>

      <div className="relative z-10 text-center flex flex-col items-center px-6 max-w-5xl pb-16">
        <div className="w-px h-16 bg-white/40 mb-8 animate-fade-in"></div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter text-white/90 mb-6 animate-fade-in-up drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
          {title}
        </h1>
        <p className="text-white/80 text-lg md:text-2xl font-light italic tracking-wide max-w-2xl animate-fade-in-delayed drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHero;
