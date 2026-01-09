import type { ElevationPoint } from './types';

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
  everest: 'https://images.unsplash.com/photo-1582231243171-86f784e8f192?auto=format&fit=crop&q=80&w=400',
  annapurna: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=400',
  manaslu: 'https://images.unsplash.com/photo-1544120962-d958223652c4?auto=format&fit=crop&q=80&w=400',
  kanchenjunga: 'https://images.unsplash.com/photo-15814321243171-86f784e8f192?auto=format&fit=crop&q=80&w=400',
  langtang: 'https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&q=80&w=400',
  mustang: 'https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&q=80&w=400',

  pokhara: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=400',
  lumbini: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=400',
  chitwan: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&q=80&w=400',
  ktm: 'https://images.unsplash.com/photo-1544120962-d958223652c4?auto=format&fit=crop&q=80&w=400',

  // Graph destinations
  'lukla': 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&q=80&w=400',
  'namche bazaar': 'https://images.unsplash.com/photo-1585802298628-97a760c44169?auto=format&fit=crop&q=80&w=400',
  'tengboche': 'https://images.unsplash.com/photo-1623492701902-47dc207df5b5?auto=format&fit=crop&q=80&w=400',
  'dingboche': 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&q=80&w=400',
  'lobuche': 'https://images.unsplash.com/photo-1610996884666-41484cb63943?auto=format&fit=crop&q=80&w=400',
  'gorak shep': 'https://images.unsplash.com/photo-1596541223263-8d07011d8717?auto=format&fit=crop&q=80&w=400',
  'base camp': 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&q=80&w=400',
};

export const JOURNEY_CATEGORIES = [
  {
    id: 'spiritual',
    title: 'Awakening Inner Compass',
    description: 'Spirituality is the profound journey of connecting with your true self and the universe. It transcends religious dogmas, focusing instead on personal growth, mindfulness, and the pursuit of inner peace. Nepal is a profound sanctuary where the peaks of the Himalayas meet ancient wisdom.',
    images: [
      '/images/Spirituality Retreat/buddha-face.webp',
      '/images/Spirituality Retreat/healing-bowl.webp',
      '/images/Spirituality Retreat/buddha-with-flower.webp',
      '/images/Spirituality Retreat/statue-of-man.webp',
      '/images/Spirituality Retreat/room-with-asent.webp'
    ],
    alignment: 'right' as const
  },
  {
    id: 'photography',
    title: 'Capture The Soul',
    description: 'Chase the light where earth meets heaven. From whispering prayer flags to the silence of snow-crowned giants, Nepal invites you to frame its eternal beauty. Wander through timeless villages and vibrant festivals, capturing stories etched in stone and spirit.',
    images: [
      '/images/Capture/Nepal-RBR_097_13_50-R62_0755.webp',
      '/images/Capture/Nepal-RBR_060_15_52-EV0A0678.webp',
      '/images/Capture/Nepal-RBR_094_09_46-R62_5603-Avec accentuation-Bruit.webp',
      '/images/Capture/92570968_1379412265583631_8140677813087764480_n.webp',
      '/images/Capture/Nepal-RBR_060_16_15-EV0A0692.webp'
    ],
    alignment: 'left' as const
  },
  {
    id: 'wildlife',
    title: 'Wild Secrets',
    description: 'Wander where the jungle breathes in time with nature. Track the majestic tiger through golden grasslands and watch the armored rhino emerge from the morning mist. This is a journey into the heart of the wild, where every rustle reveals a new, untamed story.',
    images: [
      '/images/Wildlife/Nepal-RBR_067_08_47-IMGL2917.webp',
      '/images/Wildlife/getty-images-FmsP_fMI5Ms-unsplash.webp',
      '/images/Wildlife/getty-images-qqI0q5UCQEY-unsplash.webp',
      '/images/Wildlife/abhijit-sinha-obc49be0-co-unsplash.webp',
      '/images/Wildlife/abhijit-sinha-bAt2ZzaOCXo-unsplash.webp'
    ],
    alignment: 'right' as const
  },
  {
    id: 'trekking',
    title: 'Trails of Timeless Spirit',
    description: 'Traverse ancient trails where the majesty of the Himalayas meets deep-rooted traditions. In Nepal, trekking is more than a hike; it is a journey through sacred landscapes. You will encounter colorful prayer flags, mani walls, and remote monasteries.',
    images: [
      '/images/Trekking/DSC09904.webp',
      '/images/Trekking/DSCN7142.webp',
      '/images/Trekking/DSCN7275.webp',
      '/images/Trekking/PA120680.webp',
      '/images/Trekking/DSCN2541.webp'
    ],
    alignment: 'left' as const
  }
];

export const TESTIMONIALS = [
  {
    text: '"The infinity path of Marga isn\'t just a logo; it\'s the philosophy they live by. Every step felt like part of a timeless journey."',
    author: 'Elena R.',
    role: 'Wellness Guide, Switzerland'
  },
  {
    text: '"Finding Marga in the heart of Kathmandu was the beginning of my transformation. Their Baneshwor team handles every detail with spiritual care."',
    author: 'Marcus J.',
    role: 'Explorer, Australia'
  }
];

export const LogoIcon = ({ className = "w-10 h-10" }: { className?: string }) => (
  <img src="/logo.png" alt="Marga Adventure" className={className} />
);
