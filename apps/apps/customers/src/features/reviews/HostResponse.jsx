import React from 'react';

export const HostResponse = ({ responseText }) => {
  if (!responseText) return null;
  return (
    <div className="bg-slate-950 border border-slate-850 p-3 rounded-lg ml-6 text-xs mt-2">
      <span className="font-bold text-teal-400 block mb-1">Host Response</span>
      <p className="text-slate-400">{responseText}</p>
    </div>
  );
};