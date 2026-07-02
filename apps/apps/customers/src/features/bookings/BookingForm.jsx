import React from 'react';

export const BookingForm = ({ checkIn, setCheckIn, checkOut, setCheckOut, guests, setGuests, onSubmit, priceBreakdown }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="flex flex-col gap-1">
          <label className="text-[9px] uppercase font-bold text-slate-500">Check In</label>
          <input type="date" required value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="bg-slate-800 border border-slate-700 rounded p-1.5 text-white" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[9px] uppercase font-bold text-slate-500">Check Out</label>
          <input type="date" required value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="bg-slate-800 border border-slate-700 rounded p-1.5 text-white" />
        </div>
      </div>
      <div className="flex flex-col gap-1 text-xs">
        <label className="text-[9px] uppercase font-bold text-slate-500">Guests</label>
        <input type="number" min={1} required value={guests} onChange={(e) => setGuests(e.target.value)} className="bg-slate-800 border border-slate-700 rounded p-1.5 text-white" />
      </div>
      {priceBreakdown}
      <button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold py-2 rounded text-xs">
        Request Stay Reservation
      </button>
    </form>
  );
};