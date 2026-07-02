import React from 'react';

export const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-6 text-center text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4">
        © {new Date().getFullYear()} StayNest. All rights reserved.
      </div>
    </footer>
  );
};