import { createRoute, useParams } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { bookingApi } from '../../services/bookingApi';
import { BookingSummary } from '../../features/bookings/BookingSummary';
import { Route as rootRoute } from '../__root';

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/trips/$bookingId',
  component: BookingDetailPage,
});

function BookingDetailPage() {
  const { bookingId } = useParams({ from: '/trips/$bookingId' });

  const { data: booking, isLoading } = useQuery({
    queryKey: ['booking', bookingId],
    queryFn: () => bookingApi.getById(bookingId),
  });

  if (isLoading) return <div className="text-slate-400 text-center py-12">Loading details...</div>;

  return (
    <div className="max-w-md mx-auto my-12 bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4">
      <h3 className="text-lg font-bold text-white">Booking Invoice #{bookingId}</h3>
      <BookingSummary booking={booking} />
    </div>
  );
}