import React from 'react';

export const Table = ({ headers, children }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-md">
      <table className="w-full text-left text-xs border-collapse">
        <thead className="bg-slate-850 border-b border-slate-800 text-slate-400 uppercase font-bold text-[9px]">
          <tr>
            {headers.map((h, idx) => <th key={idx} className="px-5 py-3">{h}</th>)}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-850 text-slate-300">
          {children}
        </tbody>
      </table>
    </div>
  );
};