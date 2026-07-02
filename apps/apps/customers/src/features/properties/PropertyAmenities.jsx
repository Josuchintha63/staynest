import React from 'react';
import { Check } from 'lucide-react';

export const PropertyAmenities = ({ amenities }) => {
  return (
    <div className="space-y-3">
      <h4 className="font-bold text-white text-sm">Amenities Offered</h4>
      <div className="grid grid-cols-2 gap-2 text-xs text-slate-350">
        {amenities?.map((amenity, idx) => (
          <div key={idx} className="flex items-center gap-1.5">
            <Check size={14} className="text-teal-400" />
            {amenity}
          </div>
        ))}
      </div>
    </div>
  );
};