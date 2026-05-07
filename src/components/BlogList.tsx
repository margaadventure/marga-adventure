import React from 'react';
import I18nShell from '../i18n/I18nShell';
import type { Locale } from '../i18n/i18n';
import PageHero from './PageHero';
import { useTranslation } from '../i18n/useTranslation';

// Import images
import schoolGroupImg from '../assets/images/Community/school-group.webp';
import buddhimanTamangImg from '../assets/images/team/buddhiman-tamang.webp';
import journalBg from '../assets/images/activities/journal_background.webp';
import silenceImg from '../assets/images/silence.webp';

const BlogListContent: React.FC<any> = (props) => {
    const { t, locale, getBaseUrl } = useTranslation();

    const BLOG_POSTS = [
        {
            slug: 'the-origin-story',
            category: t('blog.post1Category'),
            title: t('blog.post1Title'),
            excerpt: locale === 'en'
                ? "It started with a realization at 5,000 meters: the summit is not the point. Discover the psychology that birthed Marga Adventure."
                : "Tout a commencé par une révélation à 5 000 mètres : le sommet n'est pas le but. Découvrez la psychologie qui a donné naissance à Marga Adventure.",
            image: buddhimanTamangImg.src,
            readTime: t('blog.post1ReadTime'),
            date: t('blog.post1Date')
        },
        {
            slug: 'philosophy-of-silence',
            category: t('blog.post2Category'),
            title: t('blog.post2Title'),
            excerpt: locale === 'en'
                ? 'In a world screaming for attention, sitting in stillness is the most radical act you can commit. Here is why we prioritize silence over sightseeing.'
                : "Dans un monde qui crie pour attirer l'attention, rester immobile est l'acte le plus radical qui soit. Voici pourquoi nous privilégions le silence à la visite touristique.",
            image: silenceImg.src,
            readTime: t('blog.post2ReadTime'),
            date: t('blog.post2Date')
        },
        {
            slug: 'beyond-tourism',
            category: t('blog.post3Category'),
            title: t('blog.post3Title'),
            excerpt: locale === 'en'
                ? 'How your journey puts roofs over heads and books in hands. A look into our "Sharing Warmth" initiative in the remote villages of Nepal.'
                : 'Comment votre voyage met des toits au-dessus des têtes et des livres entre les mains. Un regard sur notre initiative « Partager la chaleur » dans les villages reculés du Népal.',
            image: schoolGroupImg.src,
            readTime: t('blog.post3ReadTime'),
            date: t('blog.post3Date'),
            authorImage: '/logo.webp'
        }
    ];

    return (
        <div className="bg-white">
            <PageHero
                title={t('blog.heroTitle')}
                subtitle={t('blog.heroSubtitle')}
                image={journalBg.src}
                parallax={true}
                className="pb-40"
            />

            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {BLOG_POSTS.map((post, idx) => (
                            <a
                                key={idx}
                                href={`${getBaseUrl()}/blog/${post.slug}`}
                                className="group flex flex-col gap-6 cursor-pointer"
                            >
                                <div className="relative overflow-hidden rounded-none h-[400px] w-full shadow-lg border border-gray-100">
                                    <img
                                        src={post.image}
                                        alt={`${post.title} - <span translate="no">Marga Adventure</span> Blog`}
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
                                        {t('blog.readArticle')} <span>→</span>
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
                    <h3 className="text-3xl font-bold mb-6">{t('blog.joinCircleHeading')}</h3>
                    <p className="text-gray-500 font-light mb-10">
                        {t('blog.joinCircleBody')}
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder={t('blog.emailPlaceholder')}
                            className="flex-1 px-6 py-4 rounded-none border border-gray-200 outline-none focus:border-brand focus:ring-1 focus:ring-brand font-light"
                        />
                        <button className="px-8 py-4 bg-brand text-white font-bold text-xs uppercase tracking-[0.2em] rounded-none hover:bg-brand-dark transition-colors">
                            {t('blog.subscribe')}
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};


const BlogList = (props: any) => (
  <I18nShell 
    initialLocale={props.initialLocale}
    initialDict={props.initialDict}
    initialFallbackDict={props.initialFallbackDict}
  >
    <BlogListContent {...props} />
  </I18nShell>
);
export default BlogList;

