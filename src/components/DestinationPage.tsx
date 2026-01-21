
import React from 'react';
import PageHero from './PageHero';

interface DestinationPageProps {
  country: string;
  heroImage: string;
  description: string;
  features: { title: string; text: string; image: string }[];
  mainTitle?: string;
  activeMonths?: string[];
  seasonNote?: string;
}

const DestinationPage: React.FC<DestinationPageProps> = ({
  country,
  heroImage,
  description,
  features,
  mainTitle,
  activeMonths = ['MAR', 'APR', 'MAY', 'SEP', 'OCT', 'NOV'],
  seasonNote = "Spring and Autumn offer the clearest views and most comfortable temperatures for cultural tours and trekking."
}) => {
  return (
    <div className="bg-white">
      <PageHero title={`Explore ${country}`} subtitle="Beyond the mountains, a new culture awaits." image={heroImage} />

      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 text-brand font-bold text-xs uppercase tracking-[0.4em] mb-6">
            <div className="w-8 h-px bg-brand"></div>
            <span>Marga Destinations</span>
            <div className="w-8 h-px bg-brand"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
            {mainTitle ? (
              <span dangerouslySetInnerHTML={{ __html: mainTitle }} />
            ) : (
              <>The Land of <span className="text-brand italic font-serif">{country}</span></>
            )}
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">{description}</p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 mb-24">
          {features.map((feature, i) => (
            <div key={i} className="bg-white rounded-none overflow-hidden group shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-transform duration-500 border border-gray-100">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img
                  src={feature.image}
                  alt={`${feature.title} - Highlight - Marga Adventure`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto bg-gray-50 rounded-none p-12 md:p-16 border border-gray-100 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Best Time to Visit</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV'].map(m => (
              <div
                key={m}
                className={`w-20 h-20 rounded-none flex items-center justify-center font-bold transition-colors ${activeMonths.includes(m)
                  ? 'bg-brand text-white shadow-lg shadow-brand/20'
                  : 'border-2 border-gray-200 text-gray-300'
                  }`}
              >
                {m}
              </div>
            ))}
          </div>
          <p className="mt-8 text-gray-500 text-sm font-light">{seasonNote}</p>
          <div className="mt-12">
            <a
              href="/contact"
              className="inline-block px-10 py-4 bg-brand text-white font-bold uppercase tracking-widest hover:bg-brand-dark transition-colors duration-300"
            >
              Plan Your Journey
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationPage;
