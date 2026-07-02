import React from 'react';
import { DashboardStats } from './DashboardStats';
import { DashboardCharts } from './DashboardCharts';

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Page Title & Welcome Caption */}
      <div className="space-y-1">
        <h1 className="text-2xl font-black text-slate-800 tracking-tight">Control Station Desk</h1>
        <p className="text-xs text-[#7c838e]">
          Good afternoon, <span className="font-bold text-slate-800">Administrator</span> — here's how the platform is doing this month.
        </p>
      </div>

      <DashboardStats />
      <DashboardCharts />
    </div>
  );
};