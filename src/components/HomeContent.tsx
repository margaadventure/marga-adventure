
import React, { useState } from 'react';
import ContactModal from './ContactModal';
import { LogoIcon, TESTIMONIALS } from '../constants';
import JourneyBlock from './JourneyBlock';
import heroBg from '../assets/images/hero/hero-bg.webp';

interface JourneyImage {
    src: string;
    srcSet: string;
}

interface JourneyCategory {
    id: string;
    title: string;
    description: string;
    images: JourneyImage[];
    alignment: 'left' | 'right';
}

interface HomeContentProps {
    heroImageSrc?: string;
    heroImageSrcSet?: string;
    nepalMapSrc?: string;
    nepalMapSrcSet?: string;
    journeyCategories?: JourneyCategory[];
}

const HomeContent: React.FC<HomeContentProps> = ({ heroImageSrc, heroImageSrcSet, nepalMapSrc, nepalMapSrcSet, journeyCategories = [] }) => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [loadMap, setLoadMap] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const mapRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        let timeoutId: number;

        const handleScroll = () => {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = window.setTimeout(() => {
                setIsScrolled(window.scrollY > 50);
            }, 50); // 50ms debounce
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setLoadMap(true);
                observer.disconnect();
            }
        }, { rootMargin: '200px' });

        if (mapRef.current) {
            observer.observe(mapRef.current);
        }
        return () => observer.disconnect();
    }, []);

    const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

    return (
        <div className="bg-white overflow-hidden">
            {/* 1. Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
                <img
                    src={heroImageSrc || heroBg.src}
                    srcSet={heroImageSrcSet}
                    sizes="100vw"
                    className="absolute inset-0 w-full h-full object-cover scale-105 md:motion-safe:animate-slow-zoom opacity-80 pointer-events-none select-none"
                    alt="Mount Everest and Buddhist Chorten Landscape in Nepal"
                    width="2560"
                    height="1440"
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                />
                <div className="relative z-10 text-center text-white flex flex-col items-center px-6 max-w-6xl drop-shadow-[0_4px_3px_rgba(0,0,0,0.9)] -translate-y-16 md:translate-y-0">

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight leading-[0.9] mb-10 animate-fade-in-up text-white/90 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                        THE PATH<br />
                        <span className="font-sans font-normal italic text-white/80 tracking-widest uppercase text-2xl md:text-4xl lg:text-5xl block mt-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">IS INFINITE</span>
                    </h1>
                    <div className="flex items-center gap-6 animate-fade-in-delayed">
                        <p className="text-white tracking-[0.6em] text-[10px] md:text-xs uppercase font-bold font-sans drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                            Nepal — 28° 39′ N, 84°12′ E
                        </p>
                    </div>
                </div>

                <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="absolute bottom-20 md:bottom-24 flex flex-col items-center gap-4 text-white group cursor-pointer transition-all hover:text-white drop-shadow-md p-4"
                    aria-label="Follow the Marga - Open Contact Modal"
                >
                    <span className={`text-[10px] font-bold uppercase tracking-[0.4em] transition-opacity font-sans ${isScrolled ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'}`}>Follow the Marga</span>
                    <div className={`relative w-[1px] bg-white/50 transition-all duration-700 ease-in-out ${isScrolled ? 'h-24 opacity-100' : 'h-16 opacity-60 group-hover:h-24 group-hover:opacity-100'}`}></div>
                </button>
            </section>

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
                tripTitle="General Enquiry"
            />

            {/* 2. Tagline Section */}
            <section className="relative py-12 md:py-24 px-6 bg-gray-50 flex flex-col items-center text-center overflow-hidden">
                {/* Decorative SVG Prayer Flags */}
                {/* Decorative SVG Prayer Flags */}

                <div className="mb-6 md:mb-8 lg:mb-12 inline-flex items-center justify-center p-6 md:p-8 bg-gray-50 rounded-full shadow-inner border border-gray-100">
                    <LogoIcon className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 text-brand" />
                </div>
                <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 lg:mb-12 text-gray-900 tracking-tight max-w-5xl leading-tight">
                    Find your way<span className="italic font-light text-brand"> home </span>to yourself
                </h2>
                <div className="w-12 md:w-16 lg:w-24 h-0.5 bg-brand/30 mb-6 md:mb-8 lg:mb-12"></div>
                <p className="text-gray-800 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl font-light mb-8 md:mb-12 lg:mb-16 px-4">
                    Marga Adventure is not only an adventure company, it is a sanctuary for souls in the heart of the Himalayas. We craft unforgettable Treks,Cultural Immersions, Spiritual Retreats and Wildlife Encounters that bridge the gap between the world around you and the world within. We believe that travel is not just about reaching a destination; it is about who you become along the way. At Marga Adventure, we don’t just guide your steps; we guide your experience.
                </p>
                <a
                    href="/contact"
                    className="group relative px-8 md:px-10 lg:px-12 py-4 md:py-5 bg-brand text-white font-bold text-[10px] uppercase tracking-[0.4em] rounded-full overflow-hidden transition-all hover:shadow-2xl hover:shadow-brand/40 hover:-translate-y-1 flex items-center gap-4 md:gap-6"
                >
                    <span className="relative z-10">Start Your Marga</span>
                    <span className="text-lg group-hover:translate-x-2 transition-transform">→</span>
                </a>
            </section>

            <section className="py-8 md:py-16 lg:py-24 px-6 md:px-10 lg:px-24 bg-gray-50 border-y border-gray-100">
                <div className="w-full max-w-[1920px] mx-auto">
                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 md:gap-12 xl:gap-24 items-start">
                        <div className="xl:col-span-4 xl:sticky xl:top-24">
                            <span className="text-brand font-bold text-xs tracking-[0.5em] uppercase block mb-6 md:mb-8 font-sans">Marga Atlas</span>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">Mapping the <span className="italic font-light text-brand">Eternal</span></h3>
                            <p className="text-gray-800 text-base md:text-lg leading-relaxed font-light mb-8 md:mb-10">
                                Explore the sacred geography of Nepal. From the bone-chilling winds of high Himalayan passes to the velvet humidity of the Terai jungles, this land is a living fusion of spirit and earth.Here, crimson Hindu rituals and golden Buddhist traditions weave together in the fabric of daily life. We don't just guide your steps, we chart paths that lead beyond the physical. </p>
                            <a
                                href="/nepal"
                                className="flex items-center gap-4 group cursor-pointer w-fit"
                            >
                                <div className="w-2 h-2 rounded-full bg-brand/20 group-hover:bg-brand transition-colors"></div>
                                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.3em] group-hover:text-brand transition-colors">View Destination Guides</span>
                            </a>
                        </div>
                        <div className="xl:col-span-8 w-full">
                            <div className="relative rounded-none overflow-hidden shadow-2xl group border border-white/50 bg-white p-4 md:p-6 lg:p-8">
                                <div className="relative w-full overflow-hidden">
                                    {nepalMapSrc && (
                                        <img
                                            src={nepalMapSrc}
                                            srcSet={nepalMapSrcSet}
                                            sizes="(max-width: 480px) 100vw, (max-width: 640px) 100vw, (max-width: 767px) 100vw, (max-width: 1279px) 90vw, 66vw"
                                            alt="Interactive Map of Nepal Trekking Regions by Marga Adventure"
                                            width="1920"
                                            height="1080"
                                            className="w-full h-auto object-contain scale-100 group-hover:scale-105 transition-all duration-[2000ms]"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-brand/5 mix-blend-overlay pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Journey Blocks */}
            <div className="bg-white">
                {journeyCategories.map((cat) => (
                    <JourneyBlock
                        key={cat.id}
                        id={cat.id}
                        title={cat.title}
                        description={cat.description}
                        images={cat.images}
                        alignment={cat.alignment}
                    />
                ))}
            </div>

            {/* 5. Testimonial Section */}
            <section className="py-4 md:py-8 lg:py-12 px-6 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 md:h-10 bg-gradient-to-b from-gray-200 to-transparent"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="mb-2 text-brand/20 text-3xl md:text-4xl font-serif italic select-none">"</div>
                    <div className="min-h-[140px] md:min-h-[160px] flex items-center justify-center mb-6 md:mb-8">
                        <h4 className="text-lg md:text-2xl lg:text-3xl font-medium text-gray-900 leading-snug italic tracking-tight font-sans px-4 transition-all duration-500">
                            {TESTIMONIALS[currentTestimonial].text}
                        </h4>
                    </div>
                    <div className="flex flex-col items-center gap-2 mb-8 md:mb-10">
                        <p className="font-bold text-gray-900 text-base md:text-lg tracking-tight">{TESTIMONIALS[currentTestimonial].author}</p>
                        <p className="text-[10px] text-brand font-bold uppercase tracking-[0.4em]">{TESTIMONIALS[currentTestimonial].role}</p>
                    </div>

                    <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12">
                        <button
                            onClick={prevTestimonial}
                            className="w-10 h-10 md:w-12 md:h-12 border border-gray-200 rounded-full flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-all hover:scale-105 shadow-sm text-base md:text-lg text-gray-400"
                            aria-label="Previous Testimonial"
                        >
                            ←
                        </button>
                        <div className="flex gap-3">
                            {TESTIMONIALS.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentTestimonial(i)}
                                    className={`h-1.5 rounded-full transition-all duration-500 ${i === currentTestimonial ? 'bg-brand w-8' : 'bg-gray-200 w-2 hover:bg-gray-300'}`}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={nextTestimonial}
                            className="w-10 h-10 md:w-12 md:h-12 border border-gray-200 rounded-full flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-all hover:scale-105 shadow-sm text-base md:text-lg text-gray-400"
                            aria-label="Next Testimonial"
                        >
                            →
                        </button>
                    </div>
                </div>
            </section>

            {/* 7. Enquiry Banner */}
            <section className="px-6 md:px-10 lg:px-24 py-6 md:py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto bg-white rounded-none overflow-hidden grid xl:grid-cols-2 shadow-2xl border border-gray-100">
                    <div className="p-6 md:p-10 lg:p-12 border-r border-gray-50 flex flex-col justify-center bg-white min-w-0">
                        <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-12">
                            <span className="text-[10px] font-bold text-brand uppercase tracking-[0.5em]">Global HQ</span>
                            <div className="flex-1 h-px bg-gray-100"></div>
                        </div>
                        <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-8 leading-[1] tracking-tight">
                            Visit our sanctuary in <span className="italic font-light text-[10px] font-bold text-brand tracking-[0.5em]">Baneshwor, Kathmandu</span>
                        </h3>


                        <div className="w-full max-w-full h-48 md:h-64 rounded-none overflow-hidden shadow-lg mb-4 md:mb-8 border border-gray-100 relative group" ref={mapRef}>
                            <div className="relative w-full h-full">
                                {loadMap ? (
                                    <iframe
                                        className="w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                        src="https://maps.google.com/maps?q=Marga+Adventure,+Kathmandu&z=15&output=embed"
                                        title="Marga Adventure Location"
                                        loading="lazy"
                                    >
                                    </iframe>
                                ) : (
                                    <div className="w-full h-full bg-gray-50 flex items-center justify-center">
                                        <span className="text-gray-400 text-xs tracking-widest uppercase">Loading Map...</span>
                                    </div>
                                )}
                                <div className="absolute top-0 left-0 w-full h-full pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]"></div>
                            </div>
                        </div>

                        <a
                            href="/contact"
                            className="w-fit flex items-center gap-6 md:gap-8 px-8 md:px-10 py-3 md:py-4 bg-brand text-white rounded-full text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-brand-dark transition-all shadow-xl hover:-translate-y-1"
                        >
                            Contact our Experts <span>→</span>
                        </a>
                    </div>

                    <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center text-gray-900 bg-gray-50/80 backdrop-blur-sm min-w-0">
                        <div className="bg-white p-6 md:p-8 lg:p-10 rounded-none shadow-sm border border-gray-100 mb-8 md:mb-10 transform hover:scale-[1.02] transition-transform">
                            <p className="text-gray-900 text-base md:text-lg mb-4 md:mb-6 leading-relaxed font-light italic border-l-4 border-brand/20 pl-4 md:pl-6">
                                "The right path doesn't just lead to a summit, it leads you back to yourself. "
                            </p>
                            <div className="flex items-center gap-4 pl-4 md:pl-6">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand font-bold text-xs">B</div>
                                <div>
                                    <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-900">Buddhiman Tamang</span>
                                    <span className="block text-[10px] uppercase tracking-wider text-gray-600 mt-1">Founder & CEO</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 md:gap-6">
                            <a href="tel:+9779841008984" className="flex items-center gap-4 md:gap-6 group cursor-pointer flex-1 min-w-0">
                                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-lg md:text-xl group-hover:bg-brand group-hover:text-white transition-all shadow-sm shrink-0">
                                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[10px] text-gray-600 uppercase font-bold tracking-widest mb-1 truncate">Direct Line</p>
                                    <p className="text-base md:text-lg font-bold whitespace-nowrap">+977 9841008984</p>
                                </div>
                            </a>
                            <a href="mailto:margaadventure@gmail.com" className="flex items-center gap-4 md:gap-6 group cursor-pointer flex-1 min-w-0">
                                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-lg md:text-xl group-hover:bg-brand group-hover:text-white transition-all shadow-sm shrink-0">
                                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[9px] text-gray-600 uppercase font-bold tracking-widest mb-1 truncate">Email</p>
                                    <p className="text-sm md:text-lg font-bold tracking-tight truncate">margaadventure@gmail.com</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};
export default HomeContent;
