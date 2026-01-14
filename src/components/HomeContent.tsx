
import React, { useState } from 'react';
import ContactModal from './ContactModal';
import { LogoIcon, JOURNEY_CATEGORIES, TESTIMONIALS } from '../constants';
import JourneyBlock from './JourneyBlock';
import ElevationGraph from './ElevationGraph';

import heroBg from '../assets/images/hero/hero-bg.webp';
import nepalMap from '../assets/images/maps/nepal-map.webp';

interface HomeContentProps {
    heroImageSrc?: string;
}

const HomeContent: React.FC<HomeContentProps> = ({ heroImageSrc }) => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

    return (
        <div className="bg-white overflow-hidden">
            {/* 1. Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
                <img
                    src={heroImageSrc || heroBg.src}
                    className="absolute inset-0 w-full h-full object-cover scale-105 animate-slow-zoom opacity-80 pointer-events-none select-none"
                    alt="Everest and Chorten"
                    fetchPriority="high"
                    decoding="async"
                />
                <div className="relative z-10 text-center text-white flex flex-col items-center px-6 max-w-6xl drop-shadow-[0_4px_3px_rgba(0,0,0,0.9)]">

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-10 animate-fade-in-up text-white/90">
                        THE PATH<br />
                        <span className="font-light italic text-white/80 tracking-widest uppercase text-2xl md:text-4xl lg:text-5xl block mt-6">IS INFINITE</span>
                    </h1>
                    <div className="flex items-center gap-6 animate-fade-in-delayed">
                        <p className="text-white tracking-[0.6em] text-[10px] md:text-xs uppercase font-bold">
                            Nepal — 27°42′ N, 85°19′ E
                        </p>
                    </div>
                </div>

                <button onClick={() => setIsContactModalOpen(true)} className="absolute bottom-12 md:bottom-24 flex flex-col items-center gap-4 text-white group cursor-pointer transition-all hover:text-white drop-shadow-md">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-80 group-hover:opacity-100 transition-opacity">Follow the Marga</span>
                    <div className="w-px h-16 bg-gradient-to-b from-white to-transparent group-hover:h-24 transition-all duration-700 shadow-sm"></div>
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

                <div className="mb-8 md:mb-12 inline-flex items-center justify-center p-8 bg-gray-50 rounded-full shadow-inner border border-gray-100">
                    <LogoIcon className="w-20 h-20 md:w-32 md:h-32 text-brand" />
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 text-gray-900 tracking-tight max-w-5xl leading-tight">
                    Find your way <span className="italic font-light text-brand">home</span> to yourself.
                </h2>
                <div className="w-16 md:w-24 h-0.5 bg-brand/30 mb-8 md:mb-12"></div>
                <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-3xl font-light mb-10 md:mb-16 px-4">

                    Marga Adventure is an adventure company in Nepal where we craft unforgetable Treks, Cultural Immersions, Spiritual Retreats, Photography and Wildlife trips that connects you to the heart of Himalayas and yourself. We believe that travel is not just about reaching a destination; it is about who you become along the way. At Marga Adventure, we don’t just guide your steps; we guide your experience.

                </p>
                <a
                    href="/contact"
                    className="group relative px-12 py-5 bg-brand text-white font-bold text-[10px] uppercase tracking-[0.4em] rounded-full overflow-hidden transition-all hover:shadow-2xl hover:shadow-brand/40 hover:-translate-y-1 flex items-center gap-6"
                >
                    <span className="relative z-10">Start Your Marga</span>
                    <span className="text-lg group-hover:translate-x-2 transition-transform">→</span>
                </a>
            </section>

            {/* 3. Nepal Map Photo Section (Replaced Interactive Map) */}
            <section className="py-12 md:py-24 px-6 md:px-12 lg:px-24 bg-gray-50 border-y border-gray-100">
                <div className="w-full max-w-[1920px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                        <div className="lg:col-span-4">
                            <span className="text-brand font-bold text-xs tracking-[0.5em] uppercase block mb-8">Marga Atlas</span>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">Mapping the <span className="italic font-light text-brand">Eternal</span></h3>
                            <p className="text-gray-500 text-lg leading-relaxed font-light mb-10">
                                Explore the sacred geography of Nepal. From the high passes of the Himalayas to the lush green conservation zones of the Terai. This sacred land thrives as a vibrant fusion, where ancient Hindu rituals and profound Buddhist traditions weave together in daily life. We chart paths that lead beyond the physical.
                            </p>
                            <a
                                href="/nepal"
                                className="flex items-center gap-4 group cursor-pointer w-fit"
                            >
                                <div className="w-2 h-2 rounded-full bg-brand/20 group-hover:bg-brand transition-colors"></div>
                                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] group-hover:text-brand transition-colors">View Destination Guides</span>
                            </a>
                        </div>
                        <div className="lg:col-span-8 w-full">
                            <div className="relative rounded-none overflow-hidden shadow-2xl group border border-white/50 bg-white p-6 md:p-8">
                                <img
                                    src={nepalMap.src}
                                    alt="Detailed Map of Nepal"
                                    className="w-full h-full object-contain scale-100 group-hover:scale-105 transition-all duration-[2000ms]"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute inset-0 bg-brand/5 mix-blend-overlay pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Journey Blocks */}
            <div className="bg-white">
                {JOURNEY_CATEGORIES.map((cat) => (
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
            <section className="py-12 md:py-24 px-6 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-gray-200 to-transparent"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="mb-12 text-brand/20 text-7xl font-serif italic select-none">“</div>
                    <h4 className="text-lg md:text-2xl font-medium text-gray-900 leading-relaxed mb-12 italic tracking-tight font-serif px-4">
                        {TESTIMONIALS[currentTestimonial].text}
                    </h4>
                    <div className="flex flex-col items-center gap-6 mb-16">
                        <div>
                            <p className="font-bold text-gray-900 text-lg tracking-tight">{TESTIMONIALS[currentTestimonial].author}</p>
                            <p className="text-[10px] text-brand font-bold uppercase tracking-[0.4em] mt-1">{TESTIMONIALS[currentTestimonial].role}</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-12">
                        <button onClick={prevTestimonial} className="w-14 h-14 border border-gray-100 rounded-full flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-all hover:scale-105 shadow-sm text-lg">
                            ←
                        </button>
                        <div className="flex gap-4">
                            {TESTIMONIALS.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentTestimonial(i)}
                                    className={`h-1.5 rounded-full transition-all duration-700 ${i === currentTestimonial ? 'bg-brand w-12' : 'bg-gray-200 w-4 hover:bg-gray-300'}`}
                                />
                            ))}
                        </div>
                        <button onClick={nextTestimonial} className="w-14 h-14 border border-gray-100 rounded-full flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-all hover:scale-105 shadow-sm text-lg">
                            →
                        </button>
                    </div>
                </div>
            </section>

            {/* 6. Elevation Dynamics Section - Removed */}

            {/* 7. Enquiry Banner */}
            <section className="px-6 md:px-12 lg:px-24 py-12 md:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto bg-white rounded-none overflow-hidden grid lg:grid-cols-2 shadow-2xl border border-gray-100">
                    <div className="p-8 md:p-12 border-r border-gray-50 flex flex-col justify-center bg-white">
                        <div className="flex items-center gap-6 mb-12">
                            <span className="text-[10px] font-bold text-brand uppercase tracking-[0.5em]">Global HQ</span>
                            <div className="flex-1 h-px bg-gray-100"></div>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-[1] tracking-tight">
                            Visit our sanctuary in <span className="italic font-light text-[10px] font-bold text-brand tracking-[0.5em]">Baneshwor, Kathmandu</span>
                        </h3>


                        <div className="w-full h-64 rounded-none overflow-hidden shadow-lg mb-10 border border-gray-100 relative group">
                            <iframe
                                className="w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                src="https://maps.google.com/maps?q=27.686333,85.335167&z=15&output=embed"
                                title="Marga Adventure Location"
                            >
                            </iframe>
                            <div className="absolute top-0 left-0 w-full h-full pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]"></div>
                        </div>

                        <a
                            href="/contact"
                            className="w-fit flex items-center gap-8 px-10 py-4 bg-brand text-white rounded-full text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-brand-dark transition-all shadow-xl hover:-translate-y-1"
                        >
                            Contact our Experts <span>→</span>
                        </a>
                    </div>

                    <div className="p-8 md:p-12 flex flex-col justify-center text-gray-900 bg-gray-50/80 backdrop-blur-sm">
                        <div className="bg-white p-10 rounded-none shadow-sm border border-gray-100 mb-10 transform hover:scale-[1.02] transition-transform">
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed font-light italic border-l-4 border-brand/20 pl-6">
                                "The right path doesn't just lead to a summit, it leads you back to yourself."
                            </p>
                            <div className="flex items-center gap-4 pl-6">
                                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand font-bold text-xs">B</div>
                                <div>
                                    <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-900">Buddhiman Tamang</span>
                                    <span className="block text-[10px] uppercase tracking-wider text-gray-400 mt-1">Founder & CEO</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <a href="tel:+9779841008984" className="flex items-center gap-6 group cursor-pointer flex-1 min-w-0">
                                <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-xl group-hover:bg-brand group-hover:text-white transition-all shadow-sm shrink-0">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1 truncate">Direct Line</p>
                                    <p className="text-lg font-bold whitespace-nowrap">+977 9841008984</p>
                                </div>
                            </a>
                            <a href="mailto:margaadventure@gmail.com" className="flex items-center gap-6 group cursor-pointer flex-1 min-w-0">
                                <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-xl group-hover:bg-brand group-hover:text-white transition-all shadow-sm shrink-0">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[9px] text-gray-400 uppercase font-bold tracking-widest mb-1 truncate">Email</p>
                                    <p className="text-lg font-bold tracking-tight truncate">margaadventure@gmail.com</p>
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
