import React from 'react';

export const PriceBreakdown = ({ pricePerNight, nights, cleaningFee, serviceFee, tax, total }) => {
  return (
    <div className="text-xs space-y-2 border-t border-slate-850 pt-3 text-slate-400">
      <div className="flex justify-between"><span>${pricePerNight} x {nights} nights</span><span className="text-white">${pricePerNight * nights}</span></div>
      <div className="flex justify-between"><span>Cleaning fee</span><span className="text-white">${cleaningFee}</span></div>
      <div className="flex justify-between"><span>Service fee</span><span className="text-white">${serviceFee}</span></div>
      <div className="flex justify-between"><span>Tax</span><span className="text-white">${tax}</span></div>
      <div className="flex justify-between font-bold text-white border-t border-slate-800 pt-2"><span>Total</span><span>${total}</span></div>
    </div>
  );
};