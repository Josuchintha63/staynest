import React from 'react';
import { Link } from '@tanstack/react-router';
import { MapPin } from 'lucide-react';

export const PropertyCard = ({ property }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-md hover:border-slate-700 transition-colors">
      <div className="aspect-video bg-slate-800 relative">
        {property.photoUrls?.[0] && <img src={property.photoUrls[0]} alt={property.title} className="object-cover w-full h-full" />}
      </div>
      <div className="p-4 space-y-2">
        <span className="text-[9px] bg-slate-800 border border-slate-700 px-1.5 py-0.5 rounded text-teal-400 font-bold uppercase">{property.propertyType}</span>
        <h4 className="font-bold text-white line-clamp-1"><Link to={`/properties/${property.id}`}>{property.title}</Link></h4>
        <div className="text-xs text-slate-400 flex items-center gap-1"><MapPin size={12} /> {property.city}</div>
        <div className="flex justify-between items-center border-t border-slate-850 pt-2 text-xs">
          <span className="text-slate-500">rate per night</span>
          <span className="font-bold text-white">${property.pricePerNight}</span>
        </div>
      </div>
    </div>
  );
};