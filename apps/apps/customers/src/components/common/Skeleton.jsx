import React from 'react';

export const Skeleton = ({ className = '' }) => {
  return (
    <div className={`bg-slate-850 animate-pulse rounded-lg ${className}`}></div>
  );
};