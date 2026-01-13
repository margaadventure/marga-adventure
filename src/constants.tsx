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
    title: 'Awakening Inner Compass',
    description: 'Spirituality is the profound journey of connecting with your true self and the universe. It transcends religious dogmas, focusing instead on personal growth, mindfulness, and the pursuit of inner peace. Nepal is a profound sanctuary where the peaks of the Himalayas meet ancient wisdom.',
    images: [
      spiritual1.src,
      spiritual2.src,
      spiritual3.src,
      spiritual4.src,
      spiritual5.src
    ],
    alignment: 'right' as const
  },
  {
    id: 'photography',
    title: 'Capture The Soul',
    description: 'Chase the light where earth meets heaven. From whispering prayer flags to the silence of snow-crowned giants, Nepal invites you to frame its eternal beauty. Wander through timeless villages and vibrant festivals, capturing stories etched in stone and spirit.',
    images: [
      photo1.src,
      photo2.src,
      photo3.src,
      photo4.src,
      photo5.src
    ],
    alignment: 'left' as const
  },
  {
    id: 'wildlife',
    title: 'Wild Secrets',
    description: 'Wander where the jungle breathes in time with nature. Track the majestic tiger through golden grasslands and watch the armored rhino emerge from the morning mist. This is a journey into the heart of the wild, where every rustle reveals a new, untamed story.',
    images: [
      wildlife1.src,
      wildlife2.src,
      wildlife3.src,
      wildlife4.src,
      wildlife5.src
    ],
    alignment: 'right' as const
  },
  {
    id: 'trekking',
    title: 'Trails of Timeless Spirit',
    description: 'Traverse ancient trails where the majesty of the Himalayas meets deep-rooted traditions. In Nepal, trekking is more than a hike; it is a journey through sacred landscapes. You will encounter colorful prayer flags, mani walls, and remote monasteries.',
    images: [
      trekking1.src,
      trekking2.src,
      trekking3.src,
      trekking4.src,
      trekking5.src
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

];

export const LogoIcon = ({ className = "w-10 h-10" }: { className?: string }) => (
  <img src="/logo.png" alt="Marga Adventure" className={className} />
);

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
