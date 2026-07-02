import React from 'react';
import { AdminSidebar } from './AdminSidebar';
import { AdminNavbar } from './AdminNavbar';

export const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#eaebe8] text-slate-800 flex font-sans">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminNavbar />
        <main className="flex-1 overflow-y-auto px-8 pb-8 pt-2">{children}</main>
      </div>
    </div>
  );
};