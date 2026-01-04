
import React, { useEffect, useState } from 'react';

const ImageModal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        const handleOpen = (e: CustomEvent<string>) => {
            setImageSrc(e.detail);
            setIsOpen(true);
        };

        window.addEventListener('open-image-modal', handleOpen as EventListener);
        return () => {
            window.removeEventListener('open-image-modal', handleOpen as EventListener);
        };
    }, []);

    const close = () => setIsOpen(false);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300 animate-fade-in"
            onClick={close}
        >
            <button
                onClick={close}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
            >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <img
                src={imageSrc}
                alt="Fullscreen view"
                className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl rounded-none animate-slow-zoom"
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    );
};

export default ImageModal;
