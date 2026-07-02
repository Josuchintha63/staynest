import React from 'react';

export const PropertyHost = ({ hostName }) => {
  return (
    <div className="flex items-center gap-3 bg-slate-900/40 p-4 border border-slate-800 rounded-lg">
      <div className="w-10 h-10 rounded-full bg-teal-500/20 text-teal-400 font-bold flex items-center justify-center">
        {hostName?.[0]}
      </div>
      <div>
        <div className="text-xs text-slate-400">Hosted by</div>
        <div className="text-sm font-bold text-white">{hostName}</div>
      </div>
    </div>
  );
};