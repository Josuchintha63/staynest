import React from 'react';

export const Spinner = ({ size = 20, className = '' }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`border-2 border-slate-800 border-t-teal-500 rounded-full animate-spin ${className}`}
    />
  );
};