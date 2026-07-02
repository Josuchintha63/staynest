import React from 'react';

export const SearchFilters = ({ filters, onChange }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl grid grid-cols-2 gap-4 text-xs">
      <div className="flex flex-col gap-1">
        <label className="text-[10px] uppercase font-bold text-slate-400">Type</label>
        <select value={filters.propertyType || ''} onChange={(e) => onChange({ ...filters, propertyType: e.target.value })} className="bg-slate-800 border border-slate-700 rounded p-1.5 text-white">
          <option value="">Any</option>
          <option value="Apartment">Apartment</option>
          <option value="Cabin">Cabin</option>
          <option value="Villa">Villa</option>
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-[10px] uppercase font-bold text-slate-400">Max Price</label>
        <input type="number" value={filters.priceMax || ''} onChange={(e) => onChange({ ...filters, priceMax: e.target.value })} className="bg-slate-800 border border-slate-700 rounded p-1.5 text-white" />
      </div>
    </div>
  );
};