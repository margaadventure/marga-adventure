
import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { EVEREST_ELEVATION_DATA } from '../constants';

const ElevationGraph: React.FC = () => {
  return (
    <section className="py-32 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-brand font-bold tracking-[0.5em] text-[10px] uppercase mb-4 block">Vertical Progression</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Altitude Profile: <span className="font-light italic">Summit Path</span></h2>
            <p className="text-gray-400 font-light leading-relaxed">Chart your trajectory across the Khumbu valley. Reach the absolute peak within 14 days of acclimatization and ascent.</p>
          </div>
          <div className="hidden md:flex items-center gap-10 text-right bg-white px-10 py-6 rounded-3xl border border-gray-100 shadow-sm">
            <div>
              <div className="text-4xl font-bold text-brand tracking-tighter">14</div>
              <div className="text-[8px] text-gray-400 tracking-[0.3em] uppercase font-bold mt-1">Days Total</div>
            </div>
            <div className="w-px h-10 bg-gray-100"></div>
            <div>
              <div className="text-4xl font-bold text-gray-900 tracking-tighter">5,364</div>
              <div className="text-[8px] text-gray-400 tracking-[0.3em] uppercase font-bold mt-1">Peak (m)</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 md:p-14 rounded-[3.5rem] shadow-2xl shadow-gray-200/40 border border-gray-100 h-[550px] w-full relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <svg className="w-48 h-48 text-brand" fill="currentColor" viewBox="0 0 24 24"><path d="M14 6l-1-2H5v17h2v-7h5l1 2h7V6h-6z" /></svg>
          </div>

          <ResponsiveContainer width="100%" height="100%" minWidth={0}>
            <AreaChart
              data={EVEREST_ELEVATION_DATA}
              margin={{ top: 30, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorElevation" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1E73BE" stopOpacity={0.4} />
                  <stop offset="50%" stopColor="#1E73BE" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#1E73BE" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="6 6" vertical={false} stroke="#f5f5f5" />
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9ca3af', fontSize: 9, fontWeight: 700, letterSpacing: '0.1em' }}
                dy={25}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9ca3af', fontSize: 9, fontWeight: 700 }}
                unit="m"
                domain={['dataMin - 1000', 'dataMax + 500']}
                dx={-15}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-2xl border border-gray-100 animate-in slide-in-from-bottom-2 duration-300">
                        <p className="text-[8px] font-bold text-brand uppercase tracking-[0.4em] mb-1">{data.day}</p>
                        <p className="font-bold text-gray-900 text-sm mb-1">{data.location}</p>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-brand"></div>
                          <p className="font-mono text-gray-500 text-xs">{data.elevation.toLocaleString()} meters</p>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
                cursor={{ stroke: '#1E73BE', strokeWidth: 1, strokeDasharray: '4 4' }}
              />
              <Area
                type="monotone"
                dataKey="elevation"
                stroke="#1E73BE"
                strokeWidth={4}
                fillOpacity={1}
                fill="url(#colorElevation)"
                // Removed invalid 'shadow' property to fix TypeScript error in recharts activeDot config
                activeDot={{ r: 8, strokeWidth: 4, stroke: '#fff', fill: '#1E73BE' }}
                animationDuration={2000}
                animationEasing="ease-in-out"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default ElevationGraph;