import React from 'react';
import { BookingSummary } from './BookingSummary';

export const BookingHistory = ({ bookings }) => {
  return (
    <div className="space-y-4">
      {bookings.map((b) => <BookingSummary key={b.id} booking={b} />)}
    </div>
  );
};