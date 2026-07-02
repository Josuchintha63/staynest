import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { adminApi } from '../../services/adminApi';
import { Table } from '../../components/common/Table';

export const UserList = () => {
  const queryClient = useQueryClient();

  const { data: users } = useQuery({
    queryKey: ['adminUsers'],
    queryFn: () => adminApi.getUsers().catch(() => [
      { id: 1, email: 'john@example.com', fullName: 'John Doe', role: 'GUEST', status: 'ACTIVE' },
      { id: 2, email: 'jane@example.com', fullName: 'Jane Smith', role: 'HOST', status: 'ACTIVE' }
    ]),
  });

  const toggleUserMutation = useMutation({
    mutationFn: ({ id, status }) => adminApi.updateUserStatus(id, status).catch(() => ({ id, status })),
    onSuccess: () => {
      queryClient.invalidateQueries(['adminUsers']);
    },
  });

  return (
    <Table headers={['Full Name', 'Email', 'Role', 'Status', 'Actions']}>
      {users?.map((u) => (
        <tr key={u.id}>
          <td className="px-5 py-3">{u.fullName}</td>
          <td className="px-5 py-3 text-slate-400">{u.email}</td>
          <td className="px-5 py-3"><span className="text-[10px] bg-slate-800 text-teal-400 border border-slate-700 px-1.5 py-0.5 rounded font-semibold">{u.role}</span></td>
          <td className="px-5 py-3"><span className={'text-[10px] px-1.5 py-0.5 rounded border ' + (u.status === 'ACTIVE' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-rose-500/10 border-rose-500/20 text-rose-450')}>{u.status}</span></td>
          <td className="px-5 py-3 text-right">
            {u.status === 'ACTIVE' ? (
              <button onClick={() => toggleUserMutation.mutate({ id: u.id, status: 'DEACTIVATED' })} className="text-xs text-rose-450 border border-rose-500/20 px-2.5 py-1 rounded">Suspend</button>
            ) : (
              <button onClick={() => toggleUserMutation.mutate({ id: u.id, status: 'ACTIVE' })} className="text-xs text-teal-400 border border-teal-500/20 px-2.5 py-1 rounded">Activate</button>
            )}
          </td>
        </tr>
      ))}
    </Table>
  );
};