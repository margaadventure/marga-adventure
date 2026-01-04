
import React, { useState } from 'react';
import { LogoIcon, JOURNEY_CATEGORIES, TESTIMONIALS } from '../constants';
import JourneyBlock from './JourneyBlock';
import ElevationGraph from './ElevationGraph';
interface HomeContentProps {
    heroImageSrc?: string;
}

const HomeContent: React.FC<HomeContentProps> = ({ heroImageSrc }) => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

    return (
        <div className="bg-white overflow-hidden">
            {/* 1. Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
                <img
                    src={heroImageSrc || "/images/hero-bg.jpg"}
                    className="absolute inset-0 w-full h-full object-cover scale-105 animate-slow-zoom opacity-80"
                    alt="Everest and Chorten"
                    fetchPriority="high"
                    decoding="async"
                />
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative z-10 text-center text-white flex flex-col items-center px-6 max-w-6xl">

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-10 animate-fade-in-up text-white/90">
                        THE PATH<br />
                        <span className="font-light italic text-white/60 tracking-widest uppercase text-2xl md:text-4xl lg:text-5xl block mt-6">IS INFINITE</span>
                    </h1>
                    <div className="flex items-center gap-6 animate-fade-in-delayed">
                        <p className="text-white/80 tracking-[0.6em] text-[10px] md:text-xs uppercase font-bold">
                            Nepal — 27°42′ N, 85°19′ E
                        </p>
                    </div>
                </div>

                <a href="/contact" className="absolute bottom-12 flex flex-col items-center gap-4 text-white/40 group cursor-pointer transition-all hover:text-white">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Follow the Marga</span>
                    <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent group-hover:h-24 transition-all duration-700"></div>
                </a>
            </section>

            {/* 2. Tagline Section */}
            <section className="relative py-24 px-6 bg-gray-50 flex flex-col items-center text-center overflow-hidden">
                {/* Decorative SVG Prayer Flags */}
                {/* Decorative SVG Prayer Flags */}
                <svg
                    className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-60"
                    viewBox="0 0 1440 600"
                    fill="none"
                    preserveAspectRatio="xMidYMin slice"
                >
                    <defs>
                        {/* Wind/Fabric Texture */}
                        <filter id="fabric-texture" x="0%" y="0%" width="100%" height="100%">
                            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="4" result="noise" />
                            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
                            <feBlend in="SourceGraphic" mode="multiply" />
                        </filter>

                        {/* Drop Shadow for depth */}
                        <filter id="flag-shadow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
                            <feOffset in="blur" dx="1" dy="1" result="offsetBlur" />
                            <feComponentTransfer>
                                <feFuncA type="linear" slope="0.3" />
                            </feComponentTransfer>
                            <feMerge>
                                <feMergeNode in="offsetBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>

                        {/* Mantra Pattern - Sutra Text */}
                        <pattern id="mantra-text" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(15)">
                            <path d="M2,2 L8,2 M2,5 L10,5 M2,8 L6,8" stroke="black" strokeWidth="0.5" opacity="0.2" strokeLinecap="round" />
                        </pattern>

                        {/* Sun-bleached Gradients for Realism */}
                        <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#0078BA" />
                            <stop offset="100%" stopColor="#005a8c" />
                        </linearGradient>
                        <linearGradient id="grad-white" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ffffff" />
                            <stop offset="100%" stopColor="#e2e8f0" />
                        </linearGradient>
                        <linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FF4E00" />
                            <stop offset="100%" stopColor="#cc3e00" />
                        </linearGradient>
                        <linearGradient id="grad-green" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00A86B" />
                            <stop offset="100%" stopColor="#007a4d" />
                        </linearGradient>
                        <linearGradient id="grad-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FFD700" />
                            <stop offset="100%" stopColor="#dbb400" />
                        </linearGradient>
                    </defs>

                    {/* Desktop Drapes (Wide) */}
                    <g className="hidden md:block">
                        {/* Left Drape */}
                        {/* Rope Shadow */}
                        <path
                            d="M-50 -18 C 150 202, 450 222, 600 82"
                            stroke="black"
                            strokeWidth="2"
                            className="opacity-10 blur-sm"
                            fill="none"
                        />
                        {/* Main Rope - Twisted appearance */}
                        <path
                            d="M-50 -20 C 150 200, 450 220, 600 80"
                            stroke="#5d4037"
                            strokeWidth="1.5"
                            fill="none"
                            strokeDasharray="4 2"
                        />

                        <g className="drop-shadow-sm">
                            {/* Flags following the left curve */}
                            {/* Blue (Space) - Flutter A */}
                            <g transform="translate(80, 75) rotate(45)">
                                <path d="M0,0 H38 L42,42 C30,48 10,36 0,44 Z" fill="url(#grad-blue)" filter="url(#fabric-texture)" />
                                <path d="M2,2 H6" stroke="white" strokeWidth="1" opacity="0.5" /> {/* Rope tie */}
                                <rect width="40" height="44" fill="url(#mantra-text)" className="mix-blend-multiply opacity-40" />
                            </g>
                            {/* White (Air) - Flutter B */}
                            <g transform="translate(140, 115) rotate(35)">
                                <path d="M0,0 H38 L36,44 C20,38 10,48 0,44 Z" fill="url(#grad-white)" stroke="#cbd5e1" strokeWidth="0.5" filter="url(#fabric-texture)" />
                                <path d="M2,2 H6" stroke="#333" strokeWidth="1" opacity="0.2" />
                                <rect width="40" height="44" fill="url(#mantra-text)" className="opacity-20" />
                            </g>
                            {/* Red (Fire) - Flutter C */}
                            <g transform="translate(205, 145) rotate(25)">
                                <path d="M0,0 H38 L40,40 C35,48 5,38 0,44 Z" fill="url(#grad-red)" filter="url(#fabric-texture)" />
                                <path d="M2,2 H6" stroke="white" strokeWidth="1" opacity="0.5" />
                                <rect width="40" height="44" fill="url(#mantra-text)" className="mix-blend-multiply opacity-40" />
                            </g>
                            {/* Green (Water) - Flutter A */}
                            <g transform="translate(270, 160) rotate(15)">
                                <path d="M0,0 H38 L42,42 C30,48 10,36 0,44 Z" fill="url(#grad-green)" filter="url(#fabric-texture)" />
                                <path d="M2,2 H6" stroke="white" strokeWidth="1" opacity="0.5" />
                                <rect width="40" height="44" fill="url(#mantra-text)" className="mix-blend-multiply opacity-40" />
                            </g>
                            {/* Yellow (Earth) - Flutter B */}
                            <g transform="translate(335, 165) rotate(8)">
                                <path d="M0,0 H38 L36,44 C20,38 10,48 0,44 Z" fill="url(#grad-yellow)" filter="url(#fabric-texture)" />
                                <path d="M2,2 H6" stroke="white" strokeWidth="1" opacity="0.5" />
                                <rect width="40" height="44" fill="url(#mantra-text)" className="mix-blend-multiply opacity-30" />
                            </g>
                            {/* Blue - Flutter C */}
                            <g transform="translate(400, 160) rotate(0)">
                                <path d="M0,0 H38 L40,40 C35,48 5,38 0,44 Z" fill="url(#grad-blue)" filter="url(#fabric-texture)" />
                                <path d="M2,2 H6" stroke="white" strokeWidth="1" opacity="0.5" />
                                <rect width="40" height="44" fill="url(#mantra-text)" className="mix-blend-multiply opacity-40" />
                            </g>
                            {/* White - Flutter A */}
                            <g transform="translate(465, 145) rotate(-10)">
                                <path d="M0,0 H38 L42,42 C30,48 10,36 0,44 Z" fill="url(#grad-white)" stroke="#cbd5e1" strokeWidth="0.5" filter="url(#fabric-texture)" />
                                <path d="M2,2 H6" stroke="#333" strokeWidth="1" opacity="0.2" />
                                <rect width="40" height="44" fill="url(#mantra-text)" className="opacity-20" />
                            </g>
                        </g>


                        {/* Right Drape */}
                        {/* Shadow rope */}
                        <path
                            d="M840 82 C 990 222, 1290 202, 1490 -18"
                            stroke="black"
                            strokeWidth="2"
                            className="opacity-10 blur-sm"
                            fill="none"
                        />
                        {/* Main rope */}
                        <path
                            d="M840 80 C 990 220, 1290 200, 1490 -20"
                            stroke="#5d4037"
                            strokeWidth="1.5"
                            fill="none"
                            strokeDasharray="4 2"
                        />

                        <g className="drop-shadow-sm">
                            {/* Yellow - Flutter A */}
                            <g transform="translate(880, 110) rotate(20)">
                                <path d="M0,0 H38 L42,42 C30,48 10,36 0,44 Z" fill="url(#grad-yellow)" filter="url(#fabric-texture)" />
                                <path d="M2,2 H6" stroke="white" strokeWidth="1" opacity="0.5" />
                                <rect width="40" height="44" fill="url(#mantra-text)" className="mix-blend-multiply opacity-30" />
                            </g>
                            {/* Green - Flutter C */}
                            <g transform="translate(945, 140) rotate(10)">
                                <path d="M0,0 H38 L40,40 C35,48 5,38 0,44 Z" fill="url(#grad-green)" filter="url(#fabric-texture)" />
                                <path d="M2,2 H6" stroke="white" strokeWidth="1" opacity="0.5" />
                                <rect width="40" height="44" fill="url(#mantra-text)" className="mix-blend-multiply opacity-40" />
                            </g>
                            {/* Red - Flutter B */}
                            <g transform="translate(1010, 155) rotate(0)">
                                <path d="M0,0 H38 L36,44 C20,38 10,48 0,44 Z" fill="url(#grad-red)" filter="url(#fabric-texture)" />
                                <path d="M2,2 H6" stroke="white" strokeWidth="1" opacity="0.5" />
                                <rect width="40" height="44" fill="url(#mantra-text)" className="mix-blend-multiply opacity-40" />
                            </g>
                            {/* White - Flutter A */}
                            <g transform="translate(1075, 160) rotate(-10)">
                                <path d="M0,0 H38 L42,42 C30,48 10,36 0,44 Z" fill="url(#grad-white)" stroke="#cbd5e1" strokeWidth="0.5" filter="url(#fabric-texture)" />
                                <path d="M2,2 H6" stroke="#333" strokeWidth="1" opacity="0.2" />
                                <rect width="40" height="44" fill="url(#mantra-text)" className="opacity-20" />
                            </g>
                            {/* Blue - Flutter C */}
                            <g transform="translate(1140, 150) rotate(-20)">
                                <path d="M0,0 H38 L40,40 C35,48 5,38 0,44 Z" fill="url(#grad-blue)" filter="url(#fabric-texture)" />
                                <path d="M2,2 H6" stroke="white" strokeWidth="1" opacity="0.5" />
                                <rect width="40" height="44" fill="url(#mantra-text)" className="mix-blend-multiply opacity-40" />
                            </g>
                            {/* Yellow - Flutter B */}
                            <g transform="translate(1205, 130) rotate(-30)">
                                <path d="M0,0 H38 L36,44 C20,38 10,48 0,44 Z" fill="url(#grad-yellow)" filter="url(#fabric-texture)" />
                                <path d="M2,2 H6" stroke="white" strokeWidth="1" opacity="0.5" />
                                <rect width="40" height="44" fill="url(#mantra-text)" className="mix-blend-multiply opacity-30" />
                            </g>
                            {/* Green - Flutter A */}
                            <g transform="translate(1270, 95) rotate(-40)">
                                <path d="M0,0 H38 L42,42 C30,48 10,36 0,44 Z" fill="url(#grad-green)" filter="url(#fabric-texture)" />
                                <path d="M2,2 H6" stroke="white" strokeWidth="1" opacity="0.5" />
                                <rect width="40" height="44" fill="url(#mantra-text)" className="mix-blend-multiply opacity-40" />
                            </g>
                        </g>
                    </g>

                    {/* Mobile Drape (Central) */}
                    <g className="md:hidden">
                        {/* Rope Shadow */}
                        <path
                            d="M-50 0 C 100 120, 300 120, 500 20"
                            stroke="black"
                            strokeWidth="2"
                            className="opacity-10 blur-sm"
                            fill="none"
                        />
                        {/* Main Rope */}
                        <path
                            d="M-50 0 C 100 120, 300 120, 500 20"
                            stroke="#5d4037"
                            strokeWidth="1.5"
                            fill="none"
                            strokeDasharray="4 2"
                        />

                        <g className="drop-shadow-sm scale-75 origin-top-left md:scale-100">
                            {/* Blue */}
                            <g transform="translate(50, 40) rotate(20)">
                                <path d="M0,0 H38 L42,42 C30,48 10,36 0,44 Z" fill="url(#grad-blue)" filter="url(#fabric-texture)" />
                                <path d="M2,2 H6" stroke="white" strokeWidth="1" opacity="0.5" />
                                <rect width="40" height="44" fill="url(#mantra-text)" className="mix-blend-multiply opacity-30" />
                            </g>
                            {/* White */}
                            <g transform="translate(100, 60) rotate(15)">
                                <path d="M0,0 H38 L36,44 C20,38 10,48 0,44 Z" fill="url(#grad-white)" stroke="#cbd5e1" strokeWidth="0.5" filter="url(#fabric-texture)" />
                                <path d="M2,2 H6" stroke="#333" strokeWidth="1" opacity="0.2" />
                                <rect width="40" height="44" fill="url(#mantra-text)" className="opacity-15" />
                            </g>
                            {/* Red (Center) */}
                            <g transform="translate(150, 75) rotate(5)">
                                <path d="M0,0 H38 L40,40 C35,48 5,38 0,44 Z" fill="url(#grad-red)" filter="url(#fabric-texture)" />
                                <path d="M2,2 H6" stroke="white" strokeWidth="1" opacity="0.5" />
                                <rect width="40" height="44" fill="url(#mantra-text)" className="mix-blend-multiply opacity-30" />
                            </g>
                            {/* Green */}
                            <g transform="translate(200, 75) rotate(-5)">
                                <path d="M0,0 H38 L42,42 C30,48 10,36 0,44 Z" fill="url(#grad-green)" filter="url(#fabric-texture)" />
                                <path d="M2,2 H6" stroke="white" strokeWidth="1" opacity="0.5" />
                                <rect width="40" height="44" fill="url(#mantra-text)" className="mix-blend-multiply opacity-30" />
                            </g>
                            {/* Yellow */}
                            <g transform="translate(250, 60) rotate(-15)">
                                <path d="M0,0 H38 L36,44 C20,38 10,48 0,44 Z" fill="url(#grad-yellow)" filter="url(#fabric-texture)" />
                                <path d="M2,2 H6" stroke="white" strokeWidth="1" opacity="0.5" />
                                <rect width="40" height="44" fill="url(#mantra-text)" className="mix-blend-multiply opacity-25" />
                            </g>
                        </g>
                    </g>
                </svg>
                <div className="mb-12 inline-flex items-center justify-center p-8 bg-gray-50 rounded-full shadow-inner border border-gray-100">
                    <LogoIcon className="w-32 h-32 text-brand" />
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-gray-900 tracking-tight max-w-5xl leading-tight">
                    Find your way <span className="italic font-light text-brand">home</span> to yourself.
                </h2>
                <div className="w-24 h-0.5 bg-brand/30 mb-12"></div>
                <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-3xl font-light mb-16 px-4">
                    Marga Adventure is born from the intersection of nature and divinity. Located in Baneshwor, Kathmandu, we serve as the gateway for those who seek to lose themselves in the mountains and find themselves in the silence.
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
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50 border-y border-gray-100">
                <div className="w-full max-w-[1920px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                        <div className="lg:col-span-4">
                            <span className="text-brand font-bold text-xs tracking-[0.5em] uppercase block mb-8">Marga Atlas</span>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">Mapping the <span className="italic font-light text-brand">Eternal</span></h3>
                            <p className="text-gray-500 text-lg leading-relaxed font-light mb-10">
                                Explore the sacred geography of Nepal. From the high passes of the Khumbu to the lush conservation zones of the Terai, we chart paths that lead beyond the physical.
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
                                    src="/images/nepal-map.webp"
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
            <section className="py-24 px-6 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-gray-200 to-transparent"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="mb-12 text-brand/20 text-7xl font-serif italic select-none">“</div>
                    <h4 className="text-3xl md:text-5xl font-bold text-gray-900 leading-[1.2] mb-16 italic tracking-tight font-serif px-4">
                        {TESTIMONIALS[currentTestimonial].text}
                    </h4>
                    <div className="flex flex-col items-center gap-6 mb-16">
                        <div className="w-14 h-14 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center text-brand font-bold text-lg overflow-hidden transition-transform hover:rotate-3">
                            <LogoIcon className="w-10 h-10" />
                        </div>
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
            <section className="px-6 md:px-12 lg:px-24 py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto bg-white rounded-none overflow-hidden grid lg:grid-cols-2 shadow-2xl border border-gray-100">
                    <div className="p-8 md:p-12 border-r border-gray-50 flex flex-col justify-center bg-white">
                        <div className="flex items-center gap-6 mb-12">
                            <span className="text-[10px] font-bold text-brand uppercase tracking-[0.5em]">Global HQ</span>
                            <div className="flex-1 h-px bg-gray-100"></div>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-[1] tracking-tight">
                            Visit our sanctuary in <span className="italic font-light">Baneshwor, Kathmandu</span>.
                        </h3>
                        <p className="text-gray-400 mb-10 max-w-md font-light leading-relaxed text-lg">
                            We are located at Baneshwor. Walk with us to create a journey that transcends the physical realm.
                        </p>

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
                                "Baneshwor is where the planning begins. The mountains are where the soul awakens. Join Marga for an infinite experience."
                            </p>
                            <div className="flex items-center gap-4 pl-6">
                                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand font-bold text-xs">B</div>
                                <div>
                                    <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-900">Buddhiman Tamang</span>
                                    <span className="block text-[10px] uppercase tracking-wider text-gray-400 mt-1">Founder, 18+ Years Exp.</span>
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
