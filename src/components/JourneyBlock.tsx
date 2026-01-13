
import React, { useState, useEffect, useCallback } from 'react';

interface JourneyBlockProps {
  id: string; // Add ID
  title: string;
  description: string;
  images: string[];
  alignment: 'left' | 'right';
}

const JourneyBlock: React.FC<JourneyBlockProps> = ({ id, title, description, images, alignment }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(nextImage, 3000);
    return () => clearInterval(timer);
  }, [nextImage]);

  const textContent = (
    <div className={`flex flex-col justify-center px-6 md:px-12 lg:px-28 py-12 md:py-28 ${alignment === 'left' ? 'order-1 md:order-2' : 'order-1'}`}>
      <div className="w-16 h-px bg-brand/30 mb-8 md:mb-12"></div>
      <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-10 text-gray-900 tracking-tighter leading-[0.9]">{title}</h3>
      <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light mb-8 md:mb-16 max-w-xl italic">
        {description}
      </p>
      <a
        href={`/${id}`}
        className="flex items-center gap-8 group w-fit transition-all bg-brand hover:bg-brand-dark text-white px-8 py-4 md:px-10 md:py-5 rounded-full shadow-lg hover:shadow-brand/40 hover:-translate-y-1"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Explore Path</span>
        <div className="w-10 h-px bg-white/50 group-hover:w-16 group-hover:bg-white transition-all duration-500"></div>
      </a>
    </div>
  );

  const imageContent = (
    <div className={`h-[400px] md:h-[70vh] lg:h-[80vh] min-h-[400px] w-full p-4 md:p-8 ${alignment === 'left' ? 'order-2 md:order-1' : 'order-2'}`}>
      <div className="relative w-full h-full rounded-none overflow-hidden shadow-xl">
        <div className="absolute inset-0 bg-gray-900">
          {images.map((img, idx) => (
            <div key={idx} className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${idx === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-100 z-0'}`}>
              <a href={`/${id}`} className="block w-full h-full cursor-pointer">
                <img
                  src={img}
                  alt={`${title} ${idx}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
              </a>
            </div>
          ))}
        </div>

        <div className="absolute top-12 right-12 z-20 flex gap-4">
          <button
            onClick={prevImage}
            className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-brand transition-all hover:scale-110"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={nextImage}
            className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-brand transition-all hover:scale-110"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        <div className="absolute bottom-12 left-12 z-20 flex flex-col gap-6 w-full pr-24">
          <div className="flex items-center gap-4">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-2xl text-[10px] font-bold text-white uppercase tracking-[0.3em] shadow-2xl">
              Series — 0{currentIndex + 1}
            </div>
            <div className="h-px flex-1 bg-white/20"></div>
          </div>
          <div className="flex gap-3">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1 rounded-full transition-all duration-700 ${idx === currentIndex ? 'w-16 bg-white' : 'w-6 bg-white/20 hover:bg-white/40'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="grid md:grid-cols-2 items-stretch overflow-hidden">
      {alignment === 'right' ? (
        <>
          {imageContent}
          {textContent}
        </>
      ) : (
        <>
          {textContent}
          {imageContent}
        </>
      )}
    </section>
  );
};

export default JourneyBlock;
