import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../i18n/useTranslation';

export type GalleryImage = {
    src: string;
    caption?: string;
    alt?: string;
    width?: number;
    height?: number;
};

interface CollapsibleGalleryProps {
    images: GalleryImage[];
    title?: string;
    subtitle?: string;
}

const CollapsibleGallery: React.FC<CollapsibleGalleryProps> = ({
    images,
    title,
    subtitle
}) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isNearViewport, setIsNearViewport] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const containerRef = useRef<HTMLDivElement>(null);
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    // Lazy load observer: detect when gallery is approaching viewport
    useEffect(() => {
        if (!containerRef.current) return;
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsNearViewport(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '300px' }
        );
        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    const handlePrev = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    };

    const handleNext = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    };

    // Touch swipe handlers for mobile
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        const diffX = touchStartX.current - touchEndX.current;
        const minSwipeDistance = 40; // minimum 40px swipe

        if (diffX > minSwipeDistance) {
            handleNext(); // Swiped left -> next
        } else if (diffX < -minSwipeDistance) {
            handlePrev(); // Swiped right -> prev
        }

        touchStartX.current = null;
        touchEndX.current = null;
    };

    // Keyboard controls for Lightbox (Esc, Left, Right)
    useEffect(() => {
        if (lightboxIndex === null) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setLightboxIndex(null);
            } else if (e.key === 'ArrowLeft') {
                setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
            } else if (e.key === 'ArrowRight') {
                setLightboxIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [lightboxIndex, images.length]);

    if (!images || images.length === 0) return null;

    const displayTitle = title || t('trip.viewGalleryRelated') || 'View Gallery Related Pictures';
    const displaySubtitle = subtitle || t('trip.gallerySubtitle') || 'Photography Collection';

    return (
        <div 
            ref={containerRef}
            id="gallery-section" 
            className="scroll-mt-32 border-t border-gray-200/80 pt-6 sm:pt-10 mt-8 sm:mt-12 w-full max-w-full overflow-hidden box-border"
        >
            {/* Light Version Header & Toggle Card */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 text-gray-900 shadow-lg shadow-gray-200/50 border border-gray-200 transition-all duration-300 w-full max-w-full overflow-hidden box-border">
                <div 
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen(!isOpen)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setIsOpen(!isOpen);
                        }
                    }}
                    className="flex flex-row items-center justify-between gap-3 sm:gap-6 cursor-pointer group select-none focus:outline-none rounded-xl"
                >
                    <div className="flex items-center gap-3 sm:gap-5 min-w-0 flex-1">
                        <div className="p-2.5 sm:p-3.5 bg-brand/10 border border-brand/20 text-brand rounded-xl group-hover:bg-brand group-hover:text-white transition-all duration-300 shrink-0 shadow-xs">
                            <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 mb-0.5">
                                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-brand truncate">
                                    {isOpen ? (t('trip.clickToHide') || 'Click to Hide') : (t('trip.clickToExpand') || 'Click to View')}
                                </span>
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand/10 text-brand border border-brand/20 shrink-0">
                                    {images.length} {t('trip.photos') || 'Photos'}
                                </span>
                            </div>
                            <h3 className="text-base sm:text-2xl font-bold text-gray-900 tracking-tight group-hover:text-brand transition-colors font-serif leading-tight truncate">
                                {displayTitle}
                            </h3>
                            <p className="text-[11px] sm:text-sm text-gray-500 font-light mt-0.5 truncate hidden sm:block">
                                {displaySubtitle}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        <span className="hidden sm:inline-block text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-lg bg-gray-100 group-hover:bg-brand text-gray-700 group-hover:text-white transition-all border border-gray-200">
                            {isOpen ? (t('trip.hideGallery') || 'Hide Gallery') : (t('trip.viewGallery') || 'View Gallery')}
                        </span>
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 group-hover:bg-brand flex items-center justify-center text-gray-600 group-hover:text-white transition-transform duration-500 border border-gray-200 ${isOpen ? 'rotate-180 bg-brand text-white' : ''}`}>
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Collapsible Content: State-Driven Bulletproof 1-Image Showcase */}
                <div 
                    className={`transition-all duration-700 ease-in-out overflow-hidden w-full max-w-full ${
                        isOpen ? 'max-h-[3500px] opacity-100 mt-4 sm:mt-8 pt-4 sm:pt-8 border-t border-gray-100' : 'max-h-0 opacity-0'
                    }`}
                    style={{
                        contentVisibility: isOpen ? 'visible' : 'auto',
                        containIntrinsicSize: 'auto none auto 500px'
                    }}
                >
                    {(isOpen || isNearViewport) && (
                        <div className="space-y-4 w-full max-w-full overflow-hidden box-border">
                            {/* Main Active Image Showcase Frame */}
                            <div className="relative w-full max-w-full bg-gray-50 rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-gray-200 shadow-xs overflow-hidden box-border">
                                
                                {/* Slide Display */}
                                <div 
                                    onTouchStart={handleTouchStart}
                                    onTouchMove={handleTouchMove}
                                    onTouchEnd={handleTouchEnd}
                                    className="w-full max-w-full overflow-hidden rounded-xl"
                                >
                                    {images.map((img, idx) => {
                                        if (idx !== currentIndex) return null;
                                        return (
                                            <div
                                                key={idx}
                                                className="w-full max-w-full flex flex-col items-center justify-center p-1 sm:p-3 bg-white rounded-xl animate-fade-in"
                                            >
                                                {/* Image Container */}
                                                <div 
                                                    onClick={() => setLightboxIndex(idx)}
                                                    className="relative w-full max-w-full h-[260px] xs:h-[300px] sm:h-[420px] md:h-[500px] rounded-xl overflow-hidden bg-gray-100 border border-gray-200/80 cursor-pointer group/item flex items-center justify-center"
                                                >
                                                    <img
                                                        src={img.src}
                                                        alt={img.alt || img.caption || `Gallery photo ${idx + 1}`}
                                                        loading="lazy"
                                                        decoding="async"
                                                        fetchPriority="high"
                                                        className="max-h-full max-w-full w-auto h-auto object-contain rounded-lg transition-transform duration-500 ease-out group-hover/item:scale-[1.01]"
                                                    />
                                                    <div className="absolute top-3 right-3 p-2 rounded-full bg-white/90 shadow-md border border-gray-200 text-gray-700 opacity-80 sm:opacity-0 group-hover/item:opacity-100 transition-opacity">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                                        </svg>
                                                    </div>
                                                </div>

                                                {/* Caption Box */}
                                                {img.caption && (
                                                    <div className="pt-3 pb-1 px-2 text-center max-w-xl">
                                                        <p className="text-xs sm:text-base md:text-lg font-bold text-gray-900 font-serif uppercase tracking-wide leading-tight">
                                                            {img.caption}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Controls Row (Prev / Next Buttons & Counter) */}
                                <div className="flex items-center justify-between w-full pt-3 pb-1 px-1 sm:px-2 shrink-0">
                                    <button 
                                        type="button"
                                        onClick={handlePrev} 
                                        className="px-2 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white hover:bg-brand hover:text-white border border-gray-200 text-[10px] sm:text-xs font-bold text-gray-800 transition-all flex items-center gap-1 sm:gap-1.5 active:scale-95 cursor-pointer shadow-xs shrink-0"
                                        aria-label="Previous photo"
                                    >
                                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
                                        <span>Prev</span>
                                    </button>

                                    <div className="flex items-center gap-1.5 shrink-0 px-2">
                                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand"></span>
                                        <span className="text-[9px] sm:text-[11px] md:text-xs font-bold uppercase tracking-wider text-brand bg-brand/10 px-2 sm:px-3 py-1 rounded-full border border-brand/20">
                                            {currentIndex + 1} / {images.length}
                                        </span>
                                    </div>

                                    <button 
                                        type="button"
                                        onClick={handleNext} 
                                        className="px-2 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white hover:bg-brand hover:text-white border border-gray-200 text-[10px] sm:text-xs font-bold text-gray-800 transition-all flex items-center gap-1 sm:gap-1.5 active:scale-95 cursor-pointer shadow-xs shrink-0"
                                        aria-label="Next photo"
                                    >
                                        <span>Next</span>
                                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
                                    </button>
                                </div>

                                {/* Thumbnail Strip Navigation */}
                                <div className="mt-3 pt-3 border-t border-gray-200/80 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto py-1.5 w-full max-w-full scrollbar-none">
                                    {images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            type="button"
                                            onClick={() => setCurrentIndex(idx)}
                                            className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                                                currentIndex === idx 
                                                    ? 'border-brand scale-105 shadow-md ring-2 ring-brand/30' 
                                                    : 'border-gray-200 opacity-60 hover:opacity-100'
                                            }`}
                                        >
                                            <img 
                                                src={img.src} 
                                                alt={`Thumbnail ${idx + 1}`} 
                                                className="w-full h-full object-cover" 
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Lightbox Modal */}
            {lightboxIndex !== null && (
                <div 
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-3 sm:p-6 select-none overflow-hidden"
                    onClick={() => setLightboxIndex(null)}
                >
                    {/* Top Bar */}
                    <div className="flex items-center justify-between z-10 w-full" onClick={(e) => e.stopPropagation()}>
                        <div className="text-white/80 text-[10px] sm:text-xs font-bold uppercase tracking-widest flex items-center gap-2 truncate pr-2">
                            <span className="w-2 h-2 rounded-full bg-brand shrink-0"></span>
                            <span className="truncate">{displayTitle}</span>
                            <span className="text-white/40">|</span>
                            <span className="text-white/60 shrink-0">{lightboxIndex + 1} / {images.length}</span>
                        </div>
                        <button
                            type="button"
                            onClick={() => setLightboxIndex(null)}
                            className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0"
                            aria-label="Close Lightbox"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Main Image Display */}
                    <div 
                        className="relative flex-1 flex items-center justify-center my-2 overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Prev Button */}
                        <button
                            type="button"
                            onClick={() => setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1))}
                            className="absolute left-1 sm:left-4 z-20 p-2 sm:p-3 rounded-full bg-black/50 hover:bg-brand text-white border border-white/20 transition-all backdrop-blur-md cursor-pointer transform hover:scale-110"
                            aria-label="Previous image"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <img
                            src={images[lightboxIndex].src}
                            alt={images[lightboxIndex].alt || images[lightboxIndex].caption || 'Gallery Image'}
                            className="max-h-[65vh] sm:max-h-[75vh] max-w-[92vw] object-contain rounded-lg shadow-2xl transition-all duration-300 border border-white/10"
                        />

                        {/* Next Button */}
                        <button
                            type="button"
                            onClick={() => setLightboxIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0))}
                            className="absolute right-1 sm:right-4 z-20 p-3 rounded-full bg-black/50 hover:bg-brand text-white border border-white/20 transition-all backdrop-blur-md cursor-pointer transform hover:scale-110"
                            aria-label="Next image"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Bottom Caption Bar */}
                    <div className="text-center z-10 max-w-2xl mx-auto px-2" onClick={(e) => e.stopPropagation()}>
                        {images[lightboxIndex].caption && (
                            <p className="text-white text-xs sm:text-base md:text-xl font-bold uppercase tracking-wider drop-shadow-md line-clamp-2">
                                {images[lightboxIndex].caption}
                            </p>
                        )}
                        <p className="text-[10px] text-gray-400 font-light mt-0.5">
                            {t('trip.lightboxHint') || 'Use ← and → arrow keys to navigate, Esc to close'}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CollapsibleGallery;
