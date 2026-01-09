import React, { useState, useEffect } from 'react';
import ContactModal from './ContactModal';

interface ExpeditionSpecialLayoutProps {
    title: string;
    overview: string;
    images: string[];
    highlights: { title: string; description: string }[];
    tripStats: {
        destination?: string;
        duration?: string;
        maxAltitude?: string;
        difficulty: string;
        groupSize: string;
        season?: string;
    };
    features: { title: string; description: string }[];
    itinerary?: { day: string; title: string; description: string }[];
}

const ExpeditionSpecialLayout: React.FC<ExpeditionSpecialLayoutProps> = ({
    title,
    overview,
    images,
    highlights,
    tripStats,
    features,
    itinerary
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedImage(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    // Default icon style
    const IconCircle = ({ children }: { children: React.ReactNode }) => (
        <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white mb-3 mx-auto group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
            {children}
        </div>
    );

    return (
        <div className="font-sans antialiased text-gray-900 bg-white">

            {/* Hero Section - Custom Background with Gradient */}
            {/* Navbar Gradient Overlay for Visibility */}
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/80 to-transparent z-40 pointer-events-none"></div>

            {/* Hero Section - Custom Background with Gradient */}
            <div className="text-white relative overflow-hidden pb-32" style={{ background: 'linear-gradient(135deg, #1E73BE 0%, #165a94 100%)', paddingTop: '220px' }}>
                {/* Background Elements */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute -top-48 -left-48 w-96 h-96 bg-white rounded-full blur-[128px]"></div>
                    <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#5a9dc9] rounded-full blur-[128px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

                    {/* Eyebrow Label */}
                    <p className="text-blue-200 tracking-[0.3em] uppercase text-sm font-bold mb-6 animate-fade-in-up">Marga Expedition</p>

                    {/* Title */}
                    <h1 className="text-6xl md:text-8xl font-serif font-bold uppercase tracking-widest mb-16 animate-fade-in-up drop-shadow-xl">
                        {title}
                    </h1>

                    {/* Two Images Side by Side - Before Description - Enhanced UI */}
                    <div className="grid md:grid-cols-2 gap-12 mb-20 max-w-6xl mx-auto relative">
                        {/* Decorative connecting line */}


                        {images.map((img, idx) => (
                            <div
                                key={idx}
                                onClick={() => setSelectedImage(img)}
                                className="aspect-[4/3] rounded-lg overflow-hidden border-[8px] border-white/5 shadow-2xl relative group transform transition-all duration-700 hover:scale-[1.02] hover:border-white/10 cursor-zoom-in"
                            >
                                <img
                                    src={img}
                                    alt={`Expedition ${idx + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>
                            </div>
                        ))}
                    </div>

                    {/* Centered Overview Description */}
                    <div className="max-w-4xl mx-auto mb-20">
                        <p className="text-lg md:text-2xl leading-relaxed text-blue-100 font-light drop-shadow-sm">
                            {overview}
                        </p>
                    </div>

                    {/* Stats Row - Updated Layout with Glassmorphism */}
                    <div className="max-w-6xl mb-8 mx-auto backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-lg">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

                            {/* Destination */}
                            <div className="text-center group flex flex-col items-center p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
                                <IconCircle>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </IconCircle>
                                <p className="text-blue-200 text-[11px] uppercase tracking-[0.25em] font-bold mb-2">Destination</p>
                                <p className="text-white font-serif italic text-xl tracking-wide">{tripStats.destination || "Nepal"}</p>
                            </div>

                            {/* Group Size */}
                            <div className="text-center group flex flex-col items-center p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
                                <IconCircle>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                </IconCircle>
                                <p className="text-blue-200 text-[11px] uppercase tracking-[0.25em] font-bold mb-2">Group Size</p>
                                <p className="text-white font-serif italic text-xl tracking-wide">{tripStats.groupSize}</p>
                            </div>

                            {/* Season */}
                            <div className="text-center group flex flex-col items-center p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
                                <IconCircle>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                </IconCircle>
                                <p className="text-blue-200 text-[11px] uppercase tracking-[0.25em] font-bold mb-2">Season</p>
                                <p className="text-white font-serif italic text-xl tracking-wide">{tripStats.season}</p>
                            </div>

                            {/* Level (Difficulty) */}
                            <div className="text-center group flex flex-col items-center p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
                                <IconCircle>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </IconCircle>
                                <p className="text-blue-200 text-[11px] uppercase tracking-[0.25em] font-bold mb-2">Level</p>
                                <p className="text-white font-serif italic text-xl tracking-wide">{tripStats.difficulty}</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* Highlights & Features Section */}
            <div className="py-32 max-w-7xl mx-auto px-6">

                {/* Features (Citizen Science) - Special Feature Block */}
                <div className="mb-32">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-gradient-to-r from-gray-50 to-white border-l-8 border-brand p-10 md:p-16 shadow-xl rounded-r-2xl transform hover:-translate-y-1 transition-transform duration-300">
                            <h2 className="text-4xl font-serif font-bold text-brand mb-8">{feature.title}</h2>
                            <p className="text-xl text-gray-600 leading-relaxed font-light">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Highlights Grid */}
                <div className="mb-32">
                    <p className="text-center text-brand font-bold uppercase tracking-[0.3em] font-sans text-xs mb-4">Discover</p>
                    <h2 className="text-center text-4xl font-bold uppercase tracking-widest mb-20 relative">
                        <span className="relative z-10 bg-white px-12 text-brand">Expedition Highlights</span>
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent -z-0"></div>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {highlights.map((highlight, index) => (
                            <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-100 to-white group-hover:from-brand group-hover:to-brand-light transition-colors duration-500"></div>
                                <div className="w-20 h-20 rounded-full bg-brand/5 group-hover:bg-brand text-brand group-hover:text-white flex items-center justify-center mx-auto mb-8 transition-all duration-500 transform group-hover:scale-110 shadow-inner">
                                    <span className="font-serif italic text-3xl font-bold">{index + 1}</span>
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 group-hover:text-brand transition-colors text-center">{highlight.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-light text-center text-lg">{highlight.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Itinerary Section */}
                {itinerary && itinerary.length > 0 && (
                    <div className="mb-32">
                        <p className="text-center text-brand font-bold uppercase tracking-[0.3em] font-sans text-xs mb-4">The Journey</p>
                        <h2 className="text-center text-4xl font-bold uppercase tracking-widest mb-20 relative">
                            <span className="relative z-10 bg-white px-12 text-brand">Detailed Itinerary</span>
                            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent -z-0"></div>
                        </h2>

                        <div className="max-w-4xl mx-auto border-l-2 border-brand/20 pl-8 md:pl-12 space-y-16">
                            {itinerary.map((item, idx) => (
                                <div key={idx} className="relative">
                                    <div className="absolute -left-[45px] md:-left-[61px] top-0 w-8 h-8 rounded-full bg-brand border-4 border-white shadow-lg flex items-center justify-center z-10"></div>
                                    <span className="text-brand font-bold uppercase tracking-widest text-xs mb-2 block">{item.day}</span>
                                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-6">{item.title}</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed font-light">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* CTA */}
                <div className="text-center">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-brand to-brand-light hover:from-brand-dark hover:to-brand text-white px-10 py-5 rounded-full uppercase tracking-[0.2em] font-bold text-sm shadow-xl shadow-brand/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand/40 border border-white/10"
                    >
                        <span>Request Detailed Itinerary</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </button>
                </div>


            </div>

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                tripTitle={title}
            />

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-7xl max-h-screen w-full h-full flex items-center justify-center">
                        <img
                            src={selectedImage}
                            alt="Full Screen View"
                            className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
                        />
                        <button
                            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default ExpeditionSpecialLayout;
