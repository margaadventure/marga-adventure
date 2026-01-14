import React from 'react';
import PageHero from './PageHero';

// Import images
import schoolGroupImg from '../assets/images/Community/school-group.webp';
import buddhimanTamangImg from '../assets/images/team/buddhiman-tamang.webp';

const BLOG_POSTS = [
    {
        slug: 'the-origin-story',
        category: 'Founders Journal',
        title: 'Why We Left the Guidebook Behind',
        excerpt: 'It started with a realization at 5,000 meters: the summit is not the point. Discover the psychology that birthed Marga Adventure.',
        image: buddhimanTamangImg.src,
        readTime: '4 min read',
        date: 'Dec 31, 2025'
    },
    {
        slug: 'philosophy-of-silence',
        category: 'Philosophy',
        title: 'The Rebellion of Silence',
        excerpt: 'In a world screaming for attention, sitting in stillness is the most radical act you can commit. Here is why we prioritize silence over sightseeing.',
        image: '/images/activities/spiritual/buddha-face.jpg',
        readTime: '6 min read',
        date: 'Dec 31, 2025'
    },
    {
        slug: 'beyond-tourism',
        category: 'Community',
        title: 'Tourism that Heals',
        excerpt: 'How your journey puts roofs over heads and books in hands. A look into our "Sharing Warmth" initiative in the remote villages of Nepal.',
        image: schoolGroupImg.src,
        readTime: '3 min read',
        date: 'Dec 31, 2025',
        authorImage: '/logo.png'
    }
];

const BlogList: React.FC = () => {
    return (
        <div className="bg-white">
            <PageHero
                title="The Journal"
                subtitle="Stories of path, purpose, and people."
                image="/images/activities/spiritual/buddha-with-flower.webp"
                parallax={true}
            />

            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {BLOG_POSTS.map((post, idx) => (
                            <a
                                key={idx}
                                href={`/blog/${post.slug}`}
                                className="group flex flex-col gap-6 cursor-pointer"
                            >
                                <div className="relative overflow-hidden rounded-none h-[400px] w-full shadow-lg border border-gray-100">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0 grayscale"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-none text-[10px] font-bold uppercase tracking-[0.2em] text-brand border border-gray-100">
                                        {post.category}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3 px-2">
                                    <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                                        <span>{post.date}</span>
                                        <div className="w-1 h-1 rounded-none bg-brand"></div>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900 leading-tight group-hover:text-brand transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-500 font-light leading-relaxed line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center gap-2 mt-2 text-[10px] font-bold uppercase tracking-[0.3em] text-brand group-hover:text-brand-dark transition-colors">
                                        Read Article <span>→</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter / CTA */}
            <section className="py-24 bg-gray-50 border-t border-gray-100">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h3 className="text-3xl font-bold mb-6">Join the Inner Circle</h3>
                    <p className="text-gray-500 font-light mb-10">
                        Receive stories from the Himalayas, early access to retreat dates, and notes on mindful living directly to your inbox.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-1 px-6 py-4 rounded-none border border-gray-200 outline-none focus:border-brand focus:ring-1 focus:ring-brand font-light"
                        />
                        <button className="px-8 py-4 bg-brand text-white font-bold text-xs uppercase tracking-[0.2em] rounded-none hover:bg-brand-dark transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogList;
