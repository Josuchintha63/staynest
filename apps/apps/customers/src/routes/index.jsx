import { createRoute } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { propertyApi } from '../services/propertyApi';
import { SearchBar } from '../features/search/SearchBar';
import { SearchFilters } from '../features/search/SearchFilters';
import { SortingDropdown } from '../features/search/SortingDropdown';
import { PropertyGrid } from '../features/search/PropertyGrid';
import { PropertyMap } from '../components/map/PropertyMap';
import { Route as rootRoute } from './__root';

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: SearchPage,
});

function SearchPage() {
  const [city, setCity] = useState('');
  const [filters, setFilters] = useState({ priceMax: '', propertyType: '' });
  const [sort, setSort] = useState('id,desc');

  const { data, isLoading } = useQuery({
    queryKey: ['properties', city, filters, sort],
    queryFn: () => {
      const params = { sort };
      if (city) params.city = city;
      if (filters.priceMax) params.priceMax = filters.priceMax;
      if (filters.propertyType) params.propertyType = filters.propertyType;
      return propertyApi.search(params);
    },
  });

  const properties = Array.isArray(data) ? data : (data?.content || []);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2">
          <SearchBar value={city} onChange={setCity} />
        </div>
        <SortingDropdown value={sort} onChange={setSort} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="space-y-6">
          <SearchFilters filters={filters} onChange={setFilters} />
          <div className="h-[250px]"><PropertyMap properties={properties} /></div>
        </div>
        <div className="lg:col-span-3">
          {isLoading ? (
            <div className="text-slate-500 text-center py-12">Loading properties...</div>
          ) : (
            <PropertyGrid properties={properties} />
          )}
        </div>
      </div>
    </div>
  );
}