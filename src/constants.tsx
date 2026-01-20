import type { ElevationPoint } from './types';

// Carousel Images
import spiritual1 from './assets/images/activities/spiritual/plant-spiritual_3.jpg';
import spiritual2 from './assets/images/activities/spiritual/sunlight-spiritual_5.jpg';
import spiritual3 from './assets/images/activities/spiritual/yoga-spiritual_1.jpeg';
import spiritual4 from './assets/images/activities/spiritual/healing-bowl_spritual_4.jpg';
import spiritual5 from './assets/images/activities/spiritual/meditation-spiritual_2.png';

import photo1 from './assets/images/activities/photography/Sadhu-photography_1.jpg';
import photo2 from './assets/images/activities/photography/potrait-photography_2.jpg';
import photo3 from './assets/images/activities/photography/machhapuchare-photography_3.jpg';
import photo4 from './assets/images/activities/photography/tiger-photography_4.jpg';
import photo5 from './assets/images/activities/photography/tshechu-photography_5.jpg';

import wildlife1 from './assets/images/activities/wildlife/rhino-wildlife_1.jpg';
import wildlife2 from './assets/images/activities/wildlife/tiger.jpg';
import wildlife3 from './assets/images/activities/wildlife/monkey.jpg';
import wildlife4 from './assets/images/activities/wildlife/eagle-wildlife_4.jpg';
import wildlife5 from './assets/images/activities/wildlife/deer-wildlife_5.jpg';

import trekking1 from './assets/images/activities/trekking/congde-tekking_1.jpg';
import trekking2 from './assets/images/activities/trekking/Thamserku-trekiking_2.jpg';
import trekking3 from './assets/images/activities/trekking/manewall-trekking_3.jpg';
import trekking4 from './assets/images/activities/trekking/ABC-trekking_4.jpg';
import trekking5 from './assets/images/activities/trekking/nepalihouse-trekking_5.jpg';

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
    description: 'Spirituality is the quiet conversation between your true self and the universe. It is a profound stillness that transcends religious dogmas. Nepal is a sanctuary where the peaks of the Himalayas meet ancient wisdom. Marga carves the route to self through these monumental experiences.',
    images: [
      spiritual1,
      spiritual2,
      spiritual3,
      spiritual4,
      spiritual5
    ],
    alignment: 'right' as const
  },
  {
    id: 'photography',
    title: 'Capture The Soul Of Himalayas',
    description: 'Chase the shifting light  where earth meets heaven. From the fluttering dance of prayer flags to the ringing silence of the snow-crowned giants, We invite you to frame stories etched in stone and spirit.',
    images: [
      photo1,
      photo2,
      photo3,
      photo4,
      photo5
    ],
    alignment: 'left' as const
  },
  {
    id: 'wildlife',
    title: 'Wild Secrets',
    description: 'Wander where the jungle breathes. Feel the vibration of the tiger’s prowl in golden grassland and watch the armored rhino emerge from the silver morning mist. This is a true Marga(path) into the heart of the wild. Every rustle reveals a new, untamed story.',
    images: [
      wildlife1,
      wildlife2,
      wildlife3,
      wildlife4,
      wildlife5
    ],
    alignment: 'right' as const
  },
  {
    id: 'trekking',
    title: 'Trails of Timeless Spirit',
    description: 'Traverse ancient trails where the majesty of the Himalayas meets deep-rooted traditions.Trekking here is a physical prayer. Marga would walk along with you in every encounter with vivid mani walls and the soft hum of remote monasteries',
    images: [
      trekking1,
      trekking2,
      trekking3,
      trekking4,
      trekking5
    ],
    alignment: 'left' as const
  }
];

export const TESTIMONIALS = [
  {
    text: '“Having traveled for over 30 years and worked with many guides, I can confidently say Buddhiman is the best. He is organized, punctual, knowledgeable about Nepal, and a reassuring guide with genuine values. Flexible, attentive, discreet, and responsive, Boudhiman ensures the most wonderful adventures. Trust his agency to make your Nepalese dreams a reality.”',
    author: 'Pierre-Etienne Vincent',
    role: 'France, Publisher and Editor-in-Chief Le Temps d’un Voyage'
  },
  {
    text: '“Buddhimnan is an exceptional, long-time acquaintance. He is serious, professional, attentive, and speaks perfect French, simplifying communication during our Nepal trips. Cultured and passionate, he cheerfully and kindly shares his country\'s beauty. His extensive skills allow him to guide us on both mountain treks and sightseeing tours. I highly recommend him; he will make you love Nepal and ensure an unforgettable trip.”',
    author: 'Nelly Guigue',
    role: 'France'
  },
  {
    text: '“Since 2014, Buddhiman Tamang has provided exceptional trekking experiences to me and my groups in Nepal. A warm, competent, and multilingual tour leader (French and English), he expertly tailors trips to client wishes. Highly recommended for his efficiency and positive spirit, Buddhiman ensures every journey through Nepal’s stunning regions is professional and truly unforgettable.”',
    author: 'Yvonne Decrey',
    role: 'Switzerland'
  },

];

import logoImage from './assets/logo.png';

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
  { name: 'Nepal', href: '/nepal' },
  { name: 'Wildlife', href: '/wildlife' },
  { name: 'Trekking', href: '/trekking' },
  { name: 'Photography', href: '/photography' },
  { name: 'Spiritual Retreat', href: '/spiritual' },
];

export const BHUTAN_NAV_ITEMS = [
  { name: 'Kingdom of Bhutan', href: '/bhutan' }
];

export const TIBET_NAV_ITEMS = [
  { name: 'Roof of the World', href: '/tibet' }
];

export const MAIN_NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Community', href: '/community' },
  { name: 'About Us', href: '/about' },
  { name: 'The Journal', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];
