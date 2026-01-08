import React from 'react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    tripTitle?: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, tripTitle }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-lg shadow-2xl animate-fade-in-up max-h-[90vh] overflow-y-auto">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                <div className="p-8 md:p-10">
                    <div className="text-center mb-8">
                        <span className="text-brand font-bold text-xs uppercase tracking-[0.2em] block mb-3">Start your journey</span>
                        <h3 className="text-3xl font-bold text-gray-900">Enquire <span className="text-brand italic font-serif">Now</span></h3>
                        {tripTitle && <p className="text-gray-500 text-sm mt-2">for {tripTitle}</p>}
                    </div>

                    <form className="space-y-5">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">Full Name *</label>
                            <input type="text" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-none focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/20 transition-all font-light text-sm" placeholder="Your Name" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">Phone *</label>
                                <input type="tel" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-none focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/20 transition-all font-light text-sm" placeholder="+123..." />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">Email *</label>
                                <input type="email" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-none focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/20 transition-all font-light text-sm" placeholder="email@..." />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">Message *</label>
                            <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 p-3 rounded-none focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/20 transition-all font-light text-sm" placeholder={`I'm interested in ${tripTitle || 'a trip'}...`}></textarea>
                        </div>

                        <button type="submit" className="w-full bg-brand text-white text-[10px] font-bold uppercase tracking-[0.4em] py-4 rounded-none hover:bg-brand-dark transition-all shadow-lg hover:shadow-brand/20 hover:-translate-y-0.5 mt-2">
                            Send Enquiry
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
