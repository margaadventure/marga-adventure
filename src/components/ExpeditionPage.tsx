import React, { useState } from 'react';
import PageHero from './PageHero';
import ContactModal from './ContactModal';

interface ExpeditionPageProps {
    title: string;
    subtitle?: string;
    heroImage: string;
    overview: string;
    highlights: { title: string; description: string }[];
    features?: { title: string; description: string }[]; // New prop for additional sections
    tripStats?: {
        duration: string;
        maxAltitude: string;
        maxAltitudeLabel?: string;
        difficulty: string;
        groupSize: string;
    };
    price?: string;
    packingList?: { category: string; items: string[] }[];
}

const ExpeditionPage: React.FC<ExpeditionPageProps> = ({
    title,
    subtitle,
    heroImage,
    overview,
    highlights,
    features = [],
    tripStats = {
        duration: "12 Days",
        maxAltitude: "4,773m",
        difficulty: "Moderate",
        groupSize: "2-12 People"
    },
    price = "On Request",
    packingList,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="bg-white font-sans text-gray-800">
            {/* Hero Section */}
            <div className="relative h-[85vh] min-h-[700px]">
                <div className="absolute inset-0">
                    <img src={heroImage} alt={title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80"></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-24 pb-40">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="animate-fade-in-up">
                            <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-white/90 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-6 backdrop-blur-sm">
                                {subtitle || "The Himalayas Await"}
                            </span>
                            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-6 leading-[0.9] tracking-tight">
                                {title}
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Quick Stats Bar - Floating */}
                <div className="absolute -bottom-16 left-0 right-0 px-6 md:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md shadow-2xl shadow-black/10 border border-white/20 px-8 py-8 grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-20 rounded-none transform transition-transform hover:-translate-y-1 duration-500">
                        <div className="flex items-center gap-5 border-r border-gray-100 last:border-0 pr-4">
                            <div className="p-3.5 bg-brand text-white shadow-lg shadow-brand/30 rounded-none shrink-0">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Duration</p>
                                <p className="font-bold text-gray-900 text-lg leading-none font-serif italic">{tripStats.duration}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 border-r border-gray-100 last:border-0 pr-4">
                            <div className="p-3.5 bg-brand text-white shadow-lg shadow-brand/30 rounded-none shrink-0">
                                {tripStats.maxAltitudeLabel ? (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                ) : (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                )}
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">{tripStats.maxAltitudeLabel || "Max Altitude"}</p>
                                <p className="font-bold text-gray-900 text-lg leading-none font-serif italic">{tripStats.maxAltitude}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 border-r border-gray-100 last:border-0 pr-4">
                            <div className="p-3.5 bg-brand text-white shadow-lg shadow-brand/30 rounded-none shrink-0">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Difficulty</p>
                                <p className="font-bold text-gray-900 text-lg leading-none font-serif italic">{tripStats.difficulty}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 border-r border-gray-100 last:border-0 pr-4">
                            <div className="p-3.5 bg-brand text-white shadow-lg shadow-brand/30 rounded-none shrink-0">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Group Size</p>
                                <p className="font-bold text-gray-900 text-lg leading-none font-serif italic">{tripStats.groupSize}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32 grid lg:grid-cols-3 gap-20">

                {/* Left Column (Content) */}
                <div className="lg:col-span-2 space-y-24">

                    {/* Overview */}
                    <section id="overview">
                        <div className="inline-flex items-center gap-3 text-brand font-bold text-xs uppercase tracking-[0.3em] mb-8">
                            <span className="w-12 h-[1px] bg-brand"></span>
                            <span>The Experience</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            Expedition <span className="text-brand italic font-serif">Overview</span>
                        </h2>
                        <div className="prose prose-lg prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-500 prose-p:leading-loose prose-p:font-light max-w-none">
                            <p className="whitespace-pre-line text-lg">{overview}</p>
                        </div>

                        {/* Extra Features / Sections */}
                        {features.length > 0 && (
                            <div className="mt-16 space-y-12">
                                {features.map((feature, idx) => (
                                    <div key={idx}>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light text-lg">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="bg-gray-50 p-10 border-l-4 border-brand mt-12 hover:bg-gray-50/80 transition-colors">
                            <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363 1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                                Highlight Experiences
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12">
                                {highlights.map((highlight, index) => (
                                    <div key={index} className="flex gap-4 items-start group">
                                        <div className="mt-1.5 w-5 h-5 rounded-full border border-gray-200 bg-white flex items-center justify-center shrink-0 group-hover:border-brand transition-colors">
                                            <div className="w-2 h-2 rounded-full bg-brand group-hover:scale-125 transition-transform"></div>
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-900 block text-base mb-1 group-hover:text-brand transition-colors">{highlight.title}</span>
                                            <span className="text-sm text-gray-500 font-light leading-relaxed">{highlight.description}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Packing/Gear List Section */}
                    {packingList && (
                        <section>
                            <div className="inline-flex items-center gap-3 text-brand font-bold text-xs uppercase tracking-[0.3em] mb-4">
                                <span className="w-12 h-[1px] bg-brand"></span>
                                <span>Essentials</span>
                            </div>
                            <h3 className="text-4xl font-bold text-gray-900 mb-12">Recommended <span className="text-brand italic font-serif">Gear</span></h3>

                            <div className="grid md:grid-cols-2 gap-12">
                                {packingList.map((category, idx) => (
                                    <div key={idx} className="bg-gray-50 p-8 border border-gray-100">
                                        <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-2">{category.category}</h4>
                                        <ul className="space-y-3">
                                            {category.items.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-gray-600 font-light">
                                                    <svg className="w-5 h-5 text-brand shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                </div>

                {/* Right Column (Sticky Sidebar) */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 space-y-8">
                        {/* Booking Card */}
                        <div className="bg-white p-10 border border-gray-100 shadow-2xl shadow-gray-200/50 relative overflow-hidden group hover:shadow-brand/10 transition-shadow duration-500">
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand to-brand-light"></div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Book This Expedition</h3>
                            <p className="text-gray-500 text-sm mb-8 font-light">Join a rare citizen science initiative.</p>

                            <div className="space-y-4 mb-8">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="block w-full bg-brand text-white text-center py-5 font-bold uppercase tracking-[0.2em] text-xs hover:bg-brand-dark transition-all transform hover:-translate-y-1 shadow-xl shadow-brand/20"
                                >
                                    Enquire Now
                                </button>
                            </div>

                            <div className="border-t border-gray-100 pt-6 text-center">
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">Have Questions?</p>
                                <a href="tel:+9779841008984" className="text-brand font-bold text-lg hover:underline decoration-2 underline-offset-4">+977 9841008984</a>
                            </div>
                        </div>

                        {/* Why Choose Us */}
                        <div className="bg-brand-dark text-white p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                            <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 bg-brand/20 rounded-full blur-2xl"></div>

                            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs relative z-10">Expedition Features</h4>
                            <ul className="space-y-4 relative z-10">
                                <li className="flex gap-4 items-start">
                                    <div className="p-1 rounded-full bg-white/20 shrink-0 mt-0.5">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <span className="text-sm text-white/90 font-light">Led by <strong className="text-white font-bold">Wildlife Biologists</strong></span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="p-1 rounded-full bg-white/20 shrink-0 mt-0.5">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <span className="text-sm text-white/90 font-light">Support <strong className="text-white font-bold">Conservation</strong></span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="p-1 rounded-full bg-white/20 shrink-0 mt-0.5">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <span className="text-sm text-white/90 font-light">Small Group <strong className="text-white font-bold">Exclusive</strong></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                tripTitle={title}
            />
        </div>
    );
};

export default ExpeditionPage;
