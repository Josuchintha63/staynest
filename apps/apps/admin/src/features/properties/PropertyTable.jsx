import React from 'react';
import { Table } from '../../components/common/Table';

export const PropertyTable = ({ properties }) => {
  return (
    <Table headers={['Property Title', 'City', 'Nightly Price', 'Status']}>
      {properties?.map((p) => (
        <tr key={p.id}>
          <td className="px-5 py-3.5 font-semibold text-white">{p.title}</td>
          <td className="px-5 py-3.5">{p.city}</td>
          <td className="px-5 py-3.5">${p.pricePerNight}</td>
          <td className="px-5 py-3.5"><span className="text-[10px] px-1.5 py-0.5 rounded border border-slate-700 bg-slate-800 text-teal-400 font-bold">{p.status}</span></td>
        </tr>
      ))}
    </Table>
  );
};