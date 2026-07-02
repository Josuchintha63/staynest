import React from 'react';
import { Link } from '@tanstack/react-router';
import { Compass, Calendar, LogIn, UserPlus, LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
          StayNest
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link to="/" className="flex items-center gap-1.5 text-slate-300 hover:text-teal-400 transition-colors">
            <Compass size={16} /> Explore
          </Link>
          {user && (
            <Link to="/trips" className="flex items-center gap-1.5 text-slate-300 hover:text-teal-400 transition-colors">
              <Calendar size={16} /> Trips
            </Link>
          )}
        </nav>
        <div className="flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-4 text-xs">
              <span className="text-slate-400">Welcome, {user.fullName}</span>
              <button onClick={logout} className="flex items-center gap-1.5 bg-slate-800 text-slate-200 border border-slate-700 px-3 py-1.5 rounded-lg hover:bg-slate-700">
                <LogOut size={12} /> Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/auth/login" className="flex items-center gap-1 text-xs text-slate-350 hover:text-white px-3 py-1.5">
                <LogIn size={12} /> Login
              </Link>
              <Link to="/auth/register" className="flex items-center gap-1 text-xs bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-bold px-4 py-1.5 rounded-lg">
                <UserPlus size={12} /> Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};