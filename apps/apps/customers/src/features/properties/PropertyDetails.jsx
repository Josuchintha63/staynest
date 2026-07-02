import React from 'react';

export const PropertyDetails = ({ title, description }) => {
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">{description}</p>
    </div>
  );
};