
import React, { useState } from 'react';
import { MAP_LOCATION_IMAGES } from '../constants';

const NepalMap: React.FC<{ showDetails?: boolean }> = ({ showDetails }) => {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const activeImage = hoveredLocation ? MAP_LOCATION_IMAGES[hoveredLocation] || MAP_LOCATION_IMAGES['default'] : null;

  // Mapping the SVG IDs to readable display names for the tooltip
  const locationNames: Record<string, string> = {
    everest: 'Mt. Everest (8,848m)',
    annapurna: 'Annapurna (8,091m)',
    manaslu: 'Manaslu (8,163m)',
    mustang: 'Upper Mustang',
    makalu: 'Makalu (8,481m)',
    dhaulagiri: 'Dhaulagiri (8,167m)',
    kanchenjunga: 'Kanchenjunga (8,586m)',
    chitwan: 'Chitwan National Park',
    lumbini: 'Lumbini (Birthplace of Buddha)',
    kathmandu: 'Kathmandu Valley',
    bardiya: 'Bardiya National Park',
    koshitappu: 'Koshi Tappu Wildlife',
    ganesh_himal: 'Ganesh Himal (7,422m)'
  };

  const displayName = hoveredLocation ? locationNames[hoveredLocation] : null;

  return (
    <div
      className="relative w-full aspect-[1027/556] bg-brand/5 rounded-none border border-gray-100 overflow-hidden group cursor-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredLocation(null)}
    >
      <div className="relative w-full h-full">
        <img
          src="/images/maps/nepal-map-v2.webp"
          alt="Map of Nepal"
          className="w-full h-full object-contain"
        />

        {/* Interactive Hotspots - Approximated visually based on the new map image */}
        {/* Mustang (Top Center) */}
        <div
          className="absolute top-[20%] left-[38%] w-[12%] h-[15%] cursor-pointer z-10 hover:bg-white/10 rounded-full"
          onMouseEnter={() => setHoveredLocation('mustang')}
        ></div>

        {/* Annapurna (Center) */}
        <div
          className="absolute top-[40%] left-[40%] w-[10%] h-[12%] cursor-pointer z-10 hover:bg-white/10 rounded-full"
          onMouseEnter={() => setHoveredLocation('annapurna')}
        ></div>

        {/* Manaslu (Center Right) */}
        <div
          className="absolute top-[38%] left-[52%] w-[8%] h-[10%] cursor-pointer z-10 hover:bg-white/10 rounded-full"
          onMouseEnter={() => setHoveredLocation('manaslu')}
        ></div>

        {/* Kathmandu (Valley) */}
        <div
          className="absolute top-[55%] left-[58%] w-[8%] h-[8%] cursor-pointer z-10 hover:bg-white/10 rounded-full"
          onMouseEnter={() => setHoveredLocation('kathmandu')}
        ></div>

        {/* Everest (East) */}
        <div
          className="absolute top-[50%] left-[75%] w-[10%] h-[12%] cursor-pointer z-10 hover:bg-white/10 rounded-full"
          onMouseEnter={() => setHoveredLocation('everest')}
        ></div>

        {/* Chitwan (Bottom Center) */}
        <div
          className="absolute top-[70%] left-[50%] w-[10%] h-[10%] cursor-pointer z-10 hover:bg-white/10 rounded-full"
          onMouseEnter={() => setHoveredLocation('chitwan')}
        ></div>

        {/* Lumbini (Bottom Left) */}
        <div
          className="absolute top-[72%] left-[32%] w-[8%] h-[8%] cursor-pointer z-10 hover:bg-white/10 rounded-full"
          onMouseEnter={() => setHoveredLocation('lumbini')}
        ></div>

        {/* Dhaulagiri (West) */}
        <div
          className="absolute top-[35%] left-[30%] w-[8%] h-[10%] cursor-pointer z-10 hover:bg-white/10 rounded-full"
          onMouseEnter={() => setHoveredLocation('dhaulagiri')}
        ></div>

        {/* Kanchenjunga (Far East) */}
        <div
          className="absolute top-[50%] left-[88%] w-[10%] h-[12%] cursor-pointer z-10 hover:bg-white/10 rounded-full"
          onMouseEnter={() => setHoveredLocation('kanchenjunga')}
        ></div>
      </div>

      {/* Custom Cursor */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference hidden group-hover:block"
        style={{ left: cursorPos.x + (typeof window !== 'undefined' ? window.scrollX : 0), top: cursorPos.y + (typeof window !== 'undefined' ? window.scrollY : 0), transform: 'translate(-50%, -50%)' }}
      >
        <div className="w-6 h-6 rounded-full border border-white opacity-40 scale-150 transition-transform"></div>
      </div>

      {/* Popup */}
      {hoveredLocation && showDetails && (
        <div
          className="absolute z-20 w-64 bg-white/95 backdrop-blur-xl p-4 rounded-none shadow-2xl pointer-events-none transition-all duration-500 animate-in fade-in zoom-in-95 border border-brand/10"
          style={{
            left: Math.min(Math.max(cursorPos.x, 150), 850),
            top: cursorPos.y,
            transform: 'translate(-50%, -115%)'
          }}
        >
          {activeImage ? (
            <img src={activeImage} className="w-full h-36 object-cover rounded-none mb-4 shadow-sm" alt={displayName || ''} />
          ) : (
            <div className="w-full h-36 bg-brand/5 rounded-none mb-4 flex items-center justify-center text-brand/40 text-xs font-bold uppercase tracking-widest">Discovery</div>
          )}
          <div className="px-1">
            <p className="font-bold text-[9px] uppercase tracking-[0.4em] text-brand mb-1">
              {hoveredLocation.includes('Park') || hoveredLocation === 'chitwan' || hoveredLocation === 'bardiya' ? 'Wildlife Zone' : 'Summit Path'}
            </p>
            <p className="font-bold text-lg text-gray-900 leading-tight">{displayName}</p>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Explore Region</span>
              <div className="flex-1 h-px bg-gray-100"></div>
              <span className="text-brand">→</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Info Legend */}
      <div className="absolute bottom-8 left-10 flex gap-4">
        <div className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-sm flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-brand"></div>
          <p className="text-[9px] font-bold text-gray-500 uppercase tracking-[0.4em]">Mountaineering</p>
        </div>
        <div className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-sm flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-accent"></div>
          <p className="text-[9px] font-bold text-gray-500 uppercase tracking-[0.4em]">Cultural HQ</p>
        </div>
      </div>
    </div>
  )
}

export default NepalMap;
