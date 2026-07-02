import React from 'react';

export const RecentBookings = ({ bookings }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
      <h4 className="font-bold text-white text-sm">Recent Reservations</h4>
      <div className="space-y-2 text-xs text-slate-350">
        {bookings?.map((b) => (
          <div key={b.id} className="flex justify-between border-b border-slate-850 pb-2">
            <span>{b.propertyTitle}</span>
            <span className="font-semibold text-white">${b.totalPrice}</span>
          </div>
        ))}
      </div>
    </div>
  );
};