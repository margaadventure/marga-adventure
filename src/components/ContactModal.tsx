import React, { useEffect, useState } from 'react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    tripTitle?: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, tripTitle }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [captchaVerified, setCaptchaVerified] = useState(false);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) onClose();
        };
        window.addEventListener('keydown', handleEsc);

        // Dynamically load Web3Forms script when modal opens to ensure hCaptcha renders
        if (isOpen) {
            const scriptId = 'web3forms-script';
            if (!document.getElementById(scriptId)) {
                const script = document.createElement('script');
                script.id = scriptId;
                script.src = "https://web3forms.com/client/script.js";
                script.async = true;
                script.defer = true;
                document.body.appendChild(script);
            }
        } else {
            // Reset captcha when modal closes
            setCaptchaVerified(false);
        }

        // Listen for captcha verification from Web3Forms
        const handleCaptchaSuccess = () => {
            setCaptchaVerified(true);
        };

        window.addEventListener('web3forms-captcha-success', handleCaptchaSuccess);

        return () => {
            window.removeEventListener('keydown', handleEsc);
            window.removeEventListener('web3forms-captcha-success', handleCaptchaSuccess);
        };
    }, [isOpen, onClose]);

    const validateForm = (formData: FormData) => {
        const newErrors: Record<string, string> = {};
        const name = formData.get('name') as string;
        const phone = formData.get('phone') as string;
        const email = formData.get('email') as string;
        const msg = formData.get('message') as string;

        if (!name || name.length < 2) newErrors.name = 'Name must be at least 2 characters.';
        if (!phone || phone.length < 7) newErrors.phone = 'Please enter a valid phone number.';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) newErrors.email = 'Please enter a valid email address.';
        if (!msg || msg.length < 10) newErrors.message = 'Message must be at least 10 characters.';

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage('');
        setErrors({});

        // Check captcha first
        if (!captchaVerified) {
            setMessage('Please complete the captcha verification before submitting.');
            return;
        }

        const formData = new FormData(e.currentTarget);
        const validationErrors = validateForm(formData);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setIsSuccess(true);
                setCaptchaVerified(false); // Reset for next use
            } else {
                setMessage(data.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setMessage("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInput = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name } = e.currentTarget;
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

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
                    {isSuccess ? (
                        <div className="text-center py-12 animate-fade-in-up">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
                            <p className="text-gray-600 mb-8">
                                We have received your enquiry for <span className="font-bold text-brand">{tripTitle || 'your adventure'}</span>.
                                <br />Our team will get back to you shortly.
                            </p>
                            <button
                                onClick={onClose}
                                className="inline-block bg-brand text-white px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-brand-dark transition-all"
                            >
                                Close
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="text-center mb-8">
                                <span className="text-brand font-bold text-xs uppercase tracking-[0.2em] block mb-3">Start your journey</span>
                                <h3 className="text-3xl font-bold text-gray-900">Enquire <span className="text-brand italic font-serif">Now</span></h3>
                                {tripTitle && <p className="text-gray-500 text-sm mt-2">for {tripTitle}</p>}
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                                <input type="hidden" name="access_key" value="33ad888f-94c9-434b-8f55-54b98c72d921" />
                                <input type="hidden" name="subject" value={`New Enquiry for ${tripTitle || 'Marga Adventure'}`} />
                                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                                {/* Web3Forms hCaptcha Widget Container moved to bottom */}

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className={`w-full bg-gray-50 border p-3 rounded-none focus:outline-none focus:ring-1 transition-all font-light text-sm ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-brand focus:ring-brand/20'}`}
                                        placeholder="Your Name"
                                        onInput={handleInput}
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">Phone *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            className={`w-full bg-gray-50 border p-3 rounded-none focus:outline-none focus:ring-1 transition-all font-light text-sm ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-brand focus:ring-brand/20'}`}
                                            placeholder="+123..."
                                            onInput={handleInput}
                                        />
                                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className={`w-full bg-gray-50 border p-3 rounded-none focus:outline-none focus:ring-1 transition-all font-light text-sm ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-brand focus:ring-brand/20'}`}
                                            placeholder="email@..."
                                            onInput={handleInput}
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">Message *</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        className={`w-full bg-gray-50 border p-3 rounded-none focus:outline-none focus:ring-1 transition-all font-light text-sm ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-brand focus:ring-brand/20'}`}
                                        placeholder={`I'm interested in ${tripTitle || 'a trip'}...`}
                                        onInput={handleInput}
                                    ></textarea>
                                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                                </div>

                                <div className="my-4">
                                    {/* hCaptcha handled by Web3Forms */}
                                </div>

                                {message && <p className={`text-xs text-center ${message.includes('Thank') ? 'text-green-600' : 'text-red-500'}`}>{message}</p>}

                                <div className="h-captcha mb-4" data-captcha="true"></div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-brand text-white text-[10px] font-bold uppercase tracking-[0.4em] py-4 rounded-none hover:bg-brand-dark transition-all shadow-lg hover:shadow-brand/20 hover:-translate-y-0.5 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
