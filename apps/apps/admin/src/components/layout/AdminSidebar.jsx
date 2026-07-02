import React from 'react';
import { Link } from '@tanstack/react-router';
import { LayoutDashboard, CheckSquare, Users, LineChart, Activity, LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export const AdminSidebar = () => {
  const { user, logout } = useAuth();

  return (
    <aside className="w-64 bg-[#131419] flex flex-col justify-between shrink-0 border-r border-[#1c1d24]">
      <div className="space-y-6">
        {/* Logo block */}
        <div className="p-6 pb-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-xl font-black shadow-md shadow-orange-500/10">
              S
            </div>
            <div>
              <div className="text-md font-bold tracking-wide text-white leading-tight">StayNest</div>
              <div className="text-[9px] font-black tracking-widest text-amber-500 uppercase leading-none">Admin Desk</div>
            </div>
          </div>
        </div>

        {/* Navigation Categories */}
        <div className="px-4 space-y-6">
          {/* Operations Category */}
          <div className="space-y-1.5">
            <div className="px-3 text-[10px] font-bold tracking-wider text-slate-500 uppercase">Operations</div>
            <nav className="flex flex-col gap-1">
              <Link
                to="/"
                className="flex items-center gap-3 text-slate-400 hover:text-white px-3 py-2 rounded-lg text-xs font-semibold transition-colors hover:bg-slate-800/40 [&.active]:bg-slate-800 [&.active]:text-white [&.active_svg]:text-amber-500"
              >
                <LayoutDashboard size={16} /> Dashboard
              </Link>
              <Link
                to="/moderation"
                className="flex items-center justify-between text-slate-400 hover:text-white px-3 py-2 rounded-lg text-xs font-semibold transition-colors hover:bg-slate-800/40 [&.active]:bg-slate-800 [&.active]:text-white [&.active_svg]:text-amber-500"
              >
                <div className="flex items-center gap-3">
                  <CheckSquare size={16} /> Moderation
                </div>
                <span className="bg-rose-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                  7
                </span>
              </Link>
              <Link
                to="/users"
                className="flex items-center gap-3 text-slate-400 hover:text-white px-3 py-2 rounded-lg text-xs font-semibold transition-colors hover:bg-slate-800/40 [&.active]:bg-slate-800 [&.active]:text-white [&.active_svg]:text-amber-500"
              >
                <Users size={16} /> Users
              </Link>
            </nav>
          </div>

          {/* Insights Category */}
          <div className="space-y-1.5">
            <div className="px-3 text-[10px] font-bold tracking-wider text-slate-500 uppercase">Insights</div>
            <nav className="flex flex-col gap-1">
              <Link
                to="/revenue"
                className="flex items-center gap-3 text-slate-400 hover:text-white px-3 py-2 rounded-lg text-xs font-semibold transition-colors hover:bg-slate-800/40 [&.active]:bg-slate-800 [&.active]:text-white [&.active_svg]:text-amber-500"
              >
                <LineChart size={16} /> Revenue
              </Link>
              <Link
                to="/activity-log"
                className="flex items-center gap-3 text-slate-400 hover:text-white px-3 py-2 rounded-lg text-xs font-semibold transition-colors hover:bg-slate-800/40 [&.active]:bg-slate-800 [&.active]:text-white [&.active_svg]:text-amber-500"
              >
                <Activity size={16} /> Activity Log
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Footer Profile & Logout */}
      <div className="p-4 border-t border-[#1c1d24] bg-[#0c0d11]/50 space-y-3">
        <div className="flex flex-col px-2">
          <span className="text-[10px] text-slate-500 font-bold uppercase">Logged in as</span>
          <span className="text-xs font-bold text-white truncate">{user?.fullName || 'Administrator'}</span>
          <span className="text-[9px] text-amber-500 font-semibold tracking-wider uppercase mt-0.5">
            {user?.role?.replace('_', ' ') || 'Admin Staff'}
          </span>
        </div>
        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-2 bg-slate-800/50 hover:bg-slate-850 hover:text-rose-400 text-slate-350 text-xs py-2 rounded-lg border border-slate-750/30 transition-all font-semibold"
        >
          <LogOut size={12} /> Logout
        </button>
      </div>
    </aside>
  );
};