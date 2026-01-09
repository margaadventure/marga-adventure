
import React from 'react';
import { LogoIcon } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white pt-32 pb-16 px-6 md:px-12 lg:px-24 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 lg:grid-cols-12 gap-12 lg:gap-20 mb-32">
                    {/* Brand Column */}
                    <div className="lg:col-span-5 space-y-12">
                        <a href="/" className="flex items-center gap-4 group cursor-pointer w-fit">
                            <LogoIcon className="w-14 h-14 text-brand group-hover:rotate-12 transition-transform duration-500" />
                            <h4 className="text-2xl font-bold tracking-tighter text-gray-900">Marga <span className="font-light text-brand">Adventure</span></h4>
                        </a>
                        <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] mb-4">Sanctuary HQ</p>
                            <p className="text-sm text-gray-600 font-light leading-relaxed">Baneshwor, Kathmandu, Nepal</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] mb-6">Social Marga</p>
                            <div className="flex gap-4">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-brand transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-brand transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468.99c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.821-.049.975-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.059-1.37.059-4.041v-.08c0-2.597-.01-2.917-.058-3.821-.045-.975-.207-1.504-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-brand transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] mb-6">Associations</p>
                            <div className="grid grid-cols-3 gap-6 items-center">
                                <img
                                    src="/images/Association Logo/Nepal-Tourism-Board_Logo-full.jpg"
                                    alt="Nepal Tourism Board"
                                    className="h-10 md:h-14 w-auto object-contain hover:scale-105 transition-transform duration-300"
                                />
                                <img
                                    src="/images/Association Logo/taan-logo.jpg"
                                    alt="TAAN"
                                    className="h-10 md:h-14 w-auto object-contain hover:scale-105 transition-transform duration-300"
                                />
                                <img
                                    src="/images/Association Logo/NMA-Logo-removebg-preview.png"
                                    alt="NMA"
                                    className="h-10 md:h-14 w-auto object-contain hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Nepal Links Column */}
                    <div className="lg:col-span-3 space-y-6 pt-4">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] mb-10">Nepal Collection</p>
                        {[
                            { label: 'Nepal', href: '/nepal' },
                            { label: 'Wildlife', href: '/wildlife' },
                            { label: 'Trekking', href: '/trekking' },
                            { label: 'Spiritual Retreats', href: '/spiritual' },
                            { label: 'Photography Tours', href: '/photography' }
                        ].map(link => (
                            <a key={link.label} href={link.href} className="block text-sm font-semibold text-gray-600 hover:text-brand transition-colors tracking-tight text-left">{link.label}</a>
                        ))}
                    </div>

                    {/* Other Links Column */}
                    <div className="lg:col-span-3 lg:col-start-10 space-y-6 pt-4">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] mb-10">Marga World</p>
                        {[
                            { label: 'Kingdom of Bhutan', href: '/bhutan' },
                            { label: 'Roof of the World', href: '/tibet' },
                            { label: 'Community', href: '/community' },
                            { label: 'About Us', href: '/about' },
                            { label: 'Contact', href: '/contact' }
                        ].map(link => (
                            <a key={link.label} href={link.href} className="block text-sm font-semibold text-gray-600 hover:text-brand transition-colors tracking-tight text-left">{link.label}</a>
                        ))}
                    </div>
                </div>

                <div className="pt-16 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-10">
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.6em]">© 2026 Marga Adventure</p>
                    <div className="flex gap-12 text-[9px] font-bold text-gray-400 uppercase tracking-[0.6em]">
                        <a href="#" className="hover:text-brand transition-colors">Privacy</a>
                        <a href="#" className="hover:text-brand transition-colors">Terms</a>
                        <a href="#" className="hover:text-brand transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
