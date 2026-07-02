import React from 'react';

export const Sidebar = ({ children }) => {
  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6">
      {children}
    </aside>
  );
};