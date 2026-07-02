import React from 'react';
import { Star } from 'lucide-react';

export const ReviewCard = ({ reviewerName, reviewText, overallRating, createdAt }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3 shadow">
      <div className="flex justify-between items-center text-xs">
        <span className="font-bold text-white">{reviewerName}</span>
        <div className="flex items-center gap-1 text-teal-400 font-semibold"><Star size={12} fill="currentColor" /> {overallRating}</div>
      </div>
      <p className="text-xs text-slate-300 leading-relaxed">{reviewText}</p>
    </div>
  );
};