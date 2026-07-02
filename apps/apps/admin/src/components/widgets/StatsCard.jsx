import React from 'react';

export const StatsCard = ({ title, value, icon: Icon, color, trend, trendUp }) => {
  return (
    <div className="bg-white border border-[#dcdde2] rounded-2xl flex items-stretch shadow-sm h-24 overflow-hidden">
      {/* Icon block (Left colored section) */}
      <div className={`w-20 ${color || 'bg-teal-600'} text-white flex items-center justify-center relative shrink-0`}>
        {Icon && <Icon size={22} />}
        {/* Decorative connecting white dot */}
        <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#eaebe8] border-2 border-white flex items-center justify-center">
          <div className="w-1 h-1 rounded-full bg-white" />
        </div>
      </div>

      {/* Information text (Right section) */}
      <div className="flex-1 p-4 flex flex-col justify-center gap-0.5">
        <span className="text-[9px] text-[#7c838e] font-extrabold uppercase tracking-wider">{title}</span>
        <div className="text-2xl font-black text-slate-800 tracking-tight leading-none">{value}</div>
        {trend && (
          <div className={`text-[9px] font-bold mt-1 ${trendUp ? 'text-emerald-600' : 'text-rose-500'}`}>
            {trend}
          </div>
        )}
      </div>
    </div>
  );
};