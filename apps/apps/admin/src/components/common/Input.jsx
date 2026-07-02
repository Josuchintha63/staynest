import React from 'react';

export const Input = ({ label, type = 'text', placeholder, error, register, name, ...props }) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && <label className="text-xs font-semibold uppercase text-slate-400">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        {...(register ? register(name) : {})}
        {...props}
        className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-505 focus:outline-none focus:border-teal-500"
      />
      {error && <span className="text-xs text-rose-400">{error.message}</span>}
    </div>
  );
};