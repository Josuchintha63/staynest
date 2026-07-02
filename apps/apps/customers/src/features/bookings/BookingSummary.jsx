import React from 'react';

export const BookingSummary = ({ booking }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2 text-xs">
      <div className="flex justify-between"><span className="text-slate-400">Status:</span><span className="font-bold text-white">{booking.status}</span></div>
      <div className="flex justify-between"><span className="text-slate-400">Nights:</span><span className="text-white">{booking.numNights}</span></div>
      <div className="flex justify-between"><span className="text-slate-400">Total Price Paid:</span><span className="font-bold text-white">${booking.totalPrice}</span></div>
    </div>
  );
};