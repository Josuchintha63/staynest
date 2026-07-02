import React from 'react';
import { PropertyTable } from './PropertyTable';

export const PropertyList = ({ properties }) => {
  return (
    <div className="space-y-4">
      <PropertyTable properties={properties} />
    </div>
  );
};