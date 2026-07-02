import React from 'react';

export const Button = ({ children, onClick, type = 'button', variant = 'primary', disabled = false, className = '' }) => {
  const baseStyle = 'px-4 py-2 rounded-lg font-semibold text-sm transition-all focus:outline-none disabled:opacity-50';
  const variants = {
    primary: 'bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-slate-950',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700',
    danger: 'bg-rose-500/10 hover:bg-rose-500/20 text-rose-450 border border-rose-500/20',
  };

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseStyle + ' ' + variants[variant] + ' ' + className}>
      {children}
    </button>
  );
};