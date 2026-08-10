import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot } from 'recharts';

import { useTranslation } from '../i18n/useTranslation';

interface ElevationGraphProps {
  data: { day: string; altitude: number }[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  const { t } = useTranslation();
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-100 shadow-xl shadow-blue-900/5 rounded-none ring-1 ring-black/5">
        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-2">{t('nav.days')} {label}</p>
        <div className="flex items-end gap-1">
          <p className="text-brand font-bold text-2xl leading-none">
            {payload[0].value.toLocaleString()}
          </p>
          <span className="text-gray-400 text-xs font-medium mb-0.5">m</span>
        </div>
      </div>
    );
  }
  return null;
};

const ElevationGraph: React.FC<ElevationGraphProps> = ({ data }) => {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!data || data.length === 0) return null;

  // Find max altitude for reference dot
  const maxAltitudePoint = data.reduce((prev, current) => (prev.altitude > current.altitude) ? prev : current, data[0]);

  if (!maxAltitudePoint || !isMounted) {
    return <div className="w-full h-[400px] bg-gray-50/50 animate-pulse mt-8"></div>;
  }

  return (
    <div className="w-full bg-white p-8 border border-gray-100 shadow-sm mt-8 relative overflow-hidden group hover:shadow-md transition-shadow duration-500">
      <div className="flex justify-between items-end mb-8 relative z-10">
        <div>
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-[0.2em]">{t('trip.altitudeProfile')}</h3>
          <p className="text-gray-400 text-xs mt-2 font-light">{t('trip.elevationDesc')}</p>
        </div>
        <div className="text-right">
          <span className="block text-brand font-bold text-lg">{maxAltitudePoint.altitude.toLocaleString()}m</span>
          <span className="text-[10px] text-gray-400 uppercase tracking-wider">{t('trip.maxElevation')}</span>
        </div>
      </div>

      <div className="h-[350px] w-full -ml-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 20,
              right: 20,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorAltitude" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1E73BE" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#1E73BE" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
            <XAxis
              dataKey="day"
              tick={{ fontSize: 11, fill: '#9CA3AF', fontWeight: 500 }}
              tickLine={false}
              axisLine={{ stroke: '#f3f4f6' }}
              interval={0}
              padding={{ left: 20, right: 20 }}
              dy={10}
            />
            <YAxis
              tick={{ fontSize: 11, fill: '#9CA3AF', fontWeight: 500 }}
              tickLine={false}
              axisLine={false}
              unit="m"
              dx={-10}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: '#1E73BE', strokeWidth: 1, strokeDasharray: '4 4' }}
            />
            <Area
              type="monotone"
              dataKey="altitude"
              stroke="#1E73BE"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorAltitude)"
              activeDot={{ r: 6, strokeWidth: 0, fill: '#1E73BE' }}
            />
            <ReferenceDot
              x={maxAltitudePoint.day}
              y={maxAltitudePoint.altitude}
              r={4}
              fill="#fff"
              stroke="#1E73BE"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ElevationGraph;