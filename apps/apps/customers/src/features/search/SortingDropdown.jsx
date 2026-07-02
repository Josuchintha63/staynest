import React from 'react';

export const SortingDropdown = ({ value, onChange }) => {
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="text-slate-500">Sort by</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="bg-slate-800 border border-slate-700 rounded p-1.5 text-white">
        <option value="id,desc">Newest</option>
        <option value="pricePerNight,asc">Price: Low to High</option>
        <option value="pricePerNight,desc">Price: High to Low</option>
      </select>
    </div>
  );
};