import React from 'react';

export const PropertyGallery = ({ photoUrls }) => {
  return (
    <div className="grid grid-cols-3 gap-2 rounded-xl overflow-hidden aspect-[21/9]">
      <div className="col-span-2 bg-slate-900">
        {photoUrls?.[0] && <img src={photoUrls[0]} alt="Main" className="object-cover w-full h-full" />}
      </div>
      <div className="grid grid-rows-2 gap-2">
        <div className="bg-slate-900">
          {photoUrls?.[1] && <img src={photoUrls[1]} alt="Gallery 1" className="object-cover w-full h-full" />}
        </div>
        <div className="bg-slate-900">
          {photoUrls?.[2] && <img src={photoUrls[2]} alt="Gallery 2" className="object-cover w-full h-full" />}
        </div>
      </div>
    </div>
  );
};