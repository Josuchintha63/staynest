import React from 'react';

export const RatingBreakdown = ({ overall, categories }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl flex items-center justify-between text-xs">
      <div>
        <div className="text-3xl font-black text-white">{overall}</div>
        <span className="text-slate-500">Average review rating</span>
      </div>
    </div>
  );
};