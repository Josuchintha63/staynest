import { createRoute } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { bookingApi } from '../../services/bookingApi';
import { BookingHistory } from '../../features/bookings/BookingHistory';
import { Route as rootRoute } from '../__root';

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/trips',
  component: TripsPage,
});

function TripsPage() {
  const { data: bookings, isLoading } = useQuery({
    queryKey: ['trips'],
    queryFn: bookingApi.getMyTrips,
  });

  if (isLoading) return <div className="text-slate-400 text-center py-12">Loading stays...</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Your Stays</h1>
      <BookingHistory bookings={bookings || []} />
    </div>
  );
}