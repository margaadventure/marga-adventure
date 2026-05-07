import type { ElevationPoint } from './types';

// Carousel Images
import spiritual1 from './assets/images/activities/spiritual/plant-spiritual_3.webp';
import spiritual2 from './assets/images/activities/spiritual/sunlight-spiritual_5.webp';
import spiritual3 from './assets/images/activities/spiritual/yoga-spiritual_1.webp';
import spiritual4 from './assets/images/activities/spiritual/healing-bowl_spritual_4.webp';
import spiritual5 from './assets/images/activities/spiritual/meditation-spiritual_2.webp';

import photo1 from './assets/images/activities/photography/Sadhu-photography_1.webp';
import photo2 from './assets/images/activities/photography/potrait-photography_2.webp';
import photo3 from './assets/images/activities/photography/machhapuchare-photography_3.webp';
import photo4 from './assets/images/activities/photography/tiger-photography_4.webp';
import photo5 from './assets/images/activities/photography/tshechu-photography_5.webp';

import wildlife1 from './assets/images/activities/wildlife/rhino-wildlife_1.webp';
import wildlife2 from './assets/images/activities/wildlife/tiger.webp';
import wildlife3 from './assets/images/activities/wildlife/monkey.webp';
import wildlife4 from './assets/images/activities/wildlife/eagle-wildlife_4.webp';
import wildlife5 from './assets/images/activities/wildlife/deer-wildlife_5.webp';

import trekking1 from './assets/images/activities/trekking/congde-tekking_1.webp';
import trekking2 from './assets/images/activities/trekking/Thamserku-trekiking_2.webp';
import trekking3 from './assets/images/activities/trekking/manewall-trekking_3.webp';
import trekking4 from './assets/images/activities/trekking/ABC-trekking_4.webp';
import trekking5 from './assets/images/activities/trekking/nepalihouse-trekking_5.webp';

// Everest Base Camp Trek elevation profile data (14-day summit timeline)
export const EVEREST_ELEVATION_DATA: ElevationPoint[] = [
  { day: 'Day 1', elevation: 2860, location: 'Lukla', coord: [78, 32] },
  { day: 'Day 3', elevation: 3440, location: 'Namche Bazaar', coord: [76, 30] },
  { day: 'Day 6', elevation: 3867, location: 'Tengboche', coord: [77, 28] },
  { day: 'Day 8', elevation: 4410, location: 'Dingboche', coord: [78, 26] },
  { day: 'Day 11', elevation: 4940, location: 'Lobuche', coord: [79, 24] },
  { day: 'Day 13', elevation: 5164, location: 'Gorak Shep', coord: [80, 23] },
  { day: 'Day 14', elevation: 5364, location: 'Base Camp', coord: [80, 22] },
];

export const MAP_LOCATION_IMAGES: Record<string, string> = {
  // Popular Mountains & Destinations
  everest: '/images/activities/trekking/DSCN7275.webp',
  annapurna: '/images/activities/trekking/DSC09904.webp',
  manaslu: '/images/activities/trekking/PA120680.webp',
  kanchenjunga: '/images/activities/trekking/DSCN2541.webp',
  langtang: '/images/activities/trekking/DSCN7142.webp',
  mustang: '/images/activities/trekking/IMG_4796.webp',

  pokhara: '/images/activities/photography/gallery/Nepal-RBR_097_13_50-R62_0755.webp',
  lumbini: '/images/activities/spiritual/buddha-face.webp',
  chitwan: '/images/activities/wildlife/Nepal-RBR_067_08_47-IMGL2917.webp',
  ktm: '/images/activities/spiritual/statue-of-man.webp',

  // Graph destinations
  'lukla': '/images/activities/trekking/DSC09904.webp',
  'namche bazaar': '/images/activities/trekking/DSCN7275.webp',
  'tengboche': '/images/activities/spiritual/room-with-asent.webp',
  'dingboche': '/images/activities/trekking/DSCN7142.webp',
  'lobuche': '/images/activities/trekking/PA120680.webp',
  'gorak shep': '/images/activities/trekking/DSCN2541.webp',
  'base camp': '/images/activities/trekking/DSCN7275.webp',
};

export const JOURNEY_CATEGORIES = [
  {
    id: 'spiritual',
    title: 'Awakening Your Inner Compass',
    titleKey: 'home.spiritualTitle',
    description: 'Spirituality is the quiet conversation between your true self and the universe. It is a profound stillness that transcends religious dogmas. Nepal is a sanctuary where the peaks of the Himalayas meet ancient wisdom. Marga carves the route to self through these monumental experiences.',
    descriptionKey: 'home.spiritualDesc',
    images: [spiritual1, spiritual2, spiritual3, spiritual4, spiritual5],
    alignment: 'right' as const
  },
  {
    id: 'photography',
    title: 'Capture The Soul Of Himalayas',
    titleKey: 'home.photographyTitle',
    description: 'Chase the shifting light  where earth meets heaven. From the fluttering dance of prayer flags to the ringing silence of the snow-crowned giants, We invite you to frame stories etched in stone and spirit.',
    descriptionKey: 'home.photographyDesc',
    images: [photo1, photo2, photo3, photo4, photo5],
    alignment: 'left' as const
  },
  {
    id: 'wildlife',
    title: 'Wild Moments',
    titleKey: 'home.wildlifeTitle',
    description: 'Wander where the jungle breathes. Feel the vibration of the tiger’s prowl in golden grassland and watch the armored rhino emerge from the silver morning mist. This is a true Marga(path) into the heart of the wild. Every rustle reveals a new, untamed story.',
    descriptionKey: 'home.wildlifeDesc',
    images: [wildlife1, wildlife2, wildlife3, wildlife4, wildlife5],
    alignment: 'right' as const
  },
  {
    id: 'trekking',
    title: 'Trails of Timeless Spirit',
    titleKey: 'home.trekkingTitle',
    description: 'Traverse ancient trails where the majesty of the Himalayas meets deep-rooted traditions.Trekking here is a physical prayer. Marga would walk along with you in every encounter with vivid mani walls and the soft hum of remote monasteries',
    descriptionKey: 'home.trekkingDesc',
    images: [trekking1, trekking2, trekking3, trekking4, trekking5],
    alignment: 'left' as const
  }
];

export const TESTIMONIALS = [
  {
    text: '“Having traveled for over 30 years and worked with many guides, I can confidently say Buddhiman is the best. He is organized, punctual, knowledgeable about Nepal, and a reassuring guide with genuine values. Flexible, attentive, discreet, and responsive, Boudhiman ensures the most wonderful adventures. Trust his agency to make your Nepalese dreams a reality.”',
    textKey: 'home.testimonial1Text',
    author: 'Pierre-Etienne Vincent',
    authorKey: 'home.testimonial1Author',
    role: 'France, Publisher and Editor-in-Chief Le Temps d’un Voyage',
    roleKey: 'home.testimonial1Role'
  },
  {
    text: '“Buddhimnan is an exceptional, long-time acquaintance. He is serious, professional, attentive, and speaks perfect French, simplifying communication during our Nepal trips. Cultured and passionate, he cheerfully and kindly shares his country\'s beauty. His extensive skills allow him to guide us on both mountain treks and sightseeing tours. I highly recommend him; he will make you love Nepal and ensure an unforgettable trip.”',
    textKey: 'home.testimonial2Text',
    author: 'Nelly Guigue',
    authorKey: 'home.testimonial2Author',
    role: 'France',
    roleKey: 'home.testimonial2Role'
  },
  {
    text: '“Since 2014, Buddhiman Tamang has provided exceptional trekking experiences to me and my groups in Nepal. A warm, competent, and multilingual tour leader (French and English), he expertly tailors trips to client wishes. Highly recommended for his efficiency and positive spirit, Buddhiman ensures every journey through Nepal’s stunning regions is professional and truly unforgettable.”',
    textKey: 'home.testimonial3Text',
    author: 'Yvonne Decrey',
    authorKey: 'home.testimonial3Author',
    role: 'Switzerland',
    roleKey: 'home.testimonial3Role'
  },
];

import logoImage from './assets/logo.webp';

export const LogoIcon = ({ className = "w-10 h-10" }: { className?: string }) => {
  const logoSrc = typeof logoImage === 'string' ? logoImage : logoImage.src;
  return (
    <img
      src={logoSrc}
      alt="Marga Adventure"
      className={className}
      width="140"
      height="140"
      loading="eager"
      decoding="sync"
      // @ts-ignore
      fetchPriority="high"
    />
  );
};

export const NEPAL_NAV_ITEMS = [
  { name: 'Nepal', nameKey: 'destinations.nepal', href: '/nepal' },
  { name: 'Wildlife', nameKey: 'destinations.wildlife', href: '/wildlife' },
  { name: 'Trekking', nameKey: 'destinations.trekking', href: '/trekking' },
  { name: 'Photography', nameKey: 'destinations.photography', href: '/photography' },
  { name: 'Spiritual Retreat', nameKey: 'destinations.spiritualRetreat', href: '/spiritual' },
];

export const BHUTAN_NAV_ITEMS = [
  { name: 'Kingdom of Bhutan', nameKey: 'destinations.kingdomOfBhutan', href: '/bhutan' }
];

export const TIBET_NAV_ITEMS = [
  { name: 'Roof of the World', nameKey: 'destinations.roofOfTheWorld', href: '/tibet' }
];

export const MAIN_NAV_ITEMS = [
  { name: 'Home', nameKey: 'nav.home', href: '/' },
  { name: 'Community', nameKey: 'nav.community', href: '/community' },
  { name: 'About Us', nameKey: 'nav.about', href: '/about' },
  { name: 'The Journal', nameKey: 'nav.journal', href: '/blog' },
  { name: 'Contact', nameKey: 'nav.contact', href: '/contact' },
];
