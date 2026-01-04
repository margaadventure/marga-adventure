
export interface Destination {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'birdwatching' | 'photography' | 'spiritual' | 'trek';
  location: {
    lat: number;
    lng: number;
    name: string;
  };
}

export interface ElevationPoint {
  day: string;
  elevation: number;
  location: string;
  coord: [number, number]; // [x, y] percentage for map simplified visualization
}

export type ViewState = 
  | 'home'
  | 'nepal'
  | 'birdwatching'
  | 'photography'
  | 'spiritual'
  | 'trekking'
  | 'bhutan'
  | 'tibet'
  | 'community'
  | 'about'
  | 'contact';
