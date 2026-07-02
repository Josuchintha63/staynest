import React from 'react';
import { PropertyCard } from '../properties/PropertyCard';

export const SearchResults = ({ properties }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {properties.map((p) => <PropertyCard key={p.id} property={p} />)}
    </div>
  );
};