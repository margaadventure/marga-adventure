import React from 'react';

export type BlockImage = {
    src: string;
    caption: string;
    alt: string;
    subtitle?: string;
    width?: number;
    height?: number;
    location?: 'overview' | 'highlights' | 'day-5' | string;
};

interface BlockImageCardProps {
    image: BlockImage;
    className?: string;
}

const BlockImageCard: React.FC<BlockImageCardProps> = ({ image, className = '' }) => {
    if (!image || !image.src) return null;

    return (
        <figure className={`my-8 bg-white p-3 sm:p-5 md:p-6 rounded-2xl border border-gray-200/80 shadow-xl shadow-gray-200/40 overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:border-brand/30 ${className}`}>
            <div className="relative overflow-hidden rounded-xl bg-gray-100 max-h-[320px] sm:max-h-[440px] md:max-h-[560px] flex items-center justify-center">
                <img
                    src={image.src}
                    alt={image.alt || image.caption}
                    loading="lazy"
                    decoding="async"
                    width={image.width || 768}
                    height={image.height || 1024}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
            </div>
            <figcaption className="pt-3 md:pt-5 px-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-gray-100 mt-3 md:mt-4">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-brand">
                            {image.subtitle || 'Photography Expedition'}
                        </span>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900 tracking-wide uppercase font-serif">
                        {image.caption}
                    </p>
                </div>
            </figcaption>
        </figure>
    );
};

export default BlockImageCard;
