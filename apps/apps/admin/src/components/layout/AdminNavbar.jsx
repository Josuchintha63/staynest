import React from 'react';
import { useLocation } from '@tanstack/react-router';
import { Search } from 'lucide-react';

export const AdminNavbar = () => {
  const location = useLocation();
  
  // Dynamic breadcrumb matching based on pathname
  let category = 'Operations';
  let pageName = 'Overview';
  
  if (location.pathname === '/moderation') {
    category = 'Operations';
    pageName = 'Moderation';
  } else if (location.pathname === '/users') {
    category = 'Operations';
    pageName = 'Users';
  } else if (location.pathname === '/revenue') {
    category = 'Insights';
    pageName = 'Revenue';
  } else if (location.pathname === '/activity-log') {
    category = 'Insights';
    pageName = 'Activity Log';
  }

  return (
    <header className="h-20 flex items-center justify-between px-8 shrink-0 bg-transparent">
      {/* Breadcrumb path */}
      <div className="flex flex-col">
        <span className="text-[10px] font-black tracking-widest text-[#7c838e] uppercase">
          {category} / {pageName}
        </span>
      </div>

      {/* Search Input Box */}
      <div className="relative w-80">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#7c838e]">
          <Search size={14} />
        </span>
        <input
          type="text"
          placeholder="Search listings, hosts, bookings..."
          className="w-full bg-[#e1e2e6] border border-[#d1d2d6] rounded-xl pl-9 pr-4 py-2 text-xs text-slate-800 placeholder-[#7c838e] focus:outline-none focus:border-amber-500 focus:bg-white transition-all shadow-inner"
        />
      </div>
    </header>
  );
};