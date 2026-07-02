import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: 'Aug', revenue: 6000, highlight: false },
  { name: 'Sep', revenue: 5000, highlight: false },
  { name: 'Oct', revenue: 7000, highlight: false },
  { name: 'Nov', revenue: 4500, highlight: false },
  { name: 'Dec', revenue: 9000, highlight: false },
  { name: 'Jan', revenue: 3800, highlight: false },
  { name: 'Feb', revenue: 5500, highlight: false },
  { name: 'Mar', revenue: 7200, highlight: false },
  { name: 'Apr', revenue: 6200, highlight: false },
  { name: 'May', revenue: 8800, highlight: false },
  { name: 'Jun', revenue: 8000, highlight: false },
  { name: 'Jul', revenue: 10500, highlight: true },
];

export const DashboardCharts = () => {
  return (
    <div className="bg-white border border-[#dcdde2] rounded-2xl p-6 shadow-sm space-y-4">
      {/* Header section with subtitle and legend */}
      <div className="flex justify-between items-start">
        <div className="space-y-0.5">
          <h3 className="font-black text-slate-800 text-sm">Monthly Platform Earnings</h3>
          <p className="text-[10px] font-bold text-[#7c838e]">Fee revenue collected, last 12 months</p>
        </div>

        {/* Legend block */}
        <div className="flex items-center gap-6 text-right">
          <div className="flex items-center gap-4 text-[9px] font-extrabold text-[#7c838e] uppercase">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-[#1f4a47] rounded-sm" /> Earnings
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-[#9e7f64] rounded-sm" /> Past period
            </span>
          </div>
          <div>
            <div className="text-lg font-black text-slate-800 leading-none">$142,910</div>
            <span className="text-[8px] font-extrabold text-[#7c838e] uppercase tracking-wider">Total year-to-date</span>
          </div>
        </div>
      </div>

      {/* Chart container */}
      <div className="h-[240px] pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e9eaee" vertical={false} />
            <XAxis dataKey="name" stroke="#7c838e" axisLine={false} tickLine={false} style={{ fontSize: 9, fontWeight: 700 }} />
            <YAxis stroke="#7c838e" axisLine={false} tickLine={false} style={{ fontSize: 9, fontWeight: 700 }} />
            <Tooltip
              cursor={{ fill: '#f3f4f6' }}
              contentStyle={{ backgroundColor: '#ffffff', borderColor: '#dcdde2', borderRadius: '8px', fontSize: 11 }}
            />
            <Bar dataKey="revenue" radius={[3, 3, 0, 0]} barSize={28}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.highlight ? '#9e7f64' : '#1f4a47'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};