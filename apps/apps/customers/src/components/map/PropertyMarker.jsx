import React from 'react';

export const PropertyMarker = ({ property }) => {
  return (
    <div className="bg-teal-500 text-slate-950 font-bold px-2 py-1 rounded shadow-md text-xs">
      ${property.pricePerNight}
    </div>
  );
};