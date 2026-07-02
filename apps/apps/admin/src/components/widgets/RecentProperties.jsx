import React from 'react';

export const RecentProperties = ({ properties }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
      <h4 className="font-bold text-white text-sm">Recently Added Properties</h4>
      <div className="space-y-2 text-xs text-slate-350">
        {properties?.map((p) => (
          <div key={p.id} className="flex justify-between border-b border-slate-850 pb-2">
            <span>{p.title}</span>
            <span className="text-teal-400 font-semibold">{p.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};