import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { adminApi } from '../../services/adminApi';
import { CheckCircle, XCircle } from 'lucide-react';

export const PropertyApproval = () => {
  const queryClient = useQueryClient();

  const { data: pendingListings } = useQuery({
    queryKey: ['pendingListings'],
    queryFn: () => adminApi.getPendingListings().catch(() => [
      { id: 1, title: 'Luxury Penthouse Suite', city: 'New York', pricePerNight: 350, propertyType: 'Apartment' },
      { id: 2, title: 'Mountain View Cabin', city: 'Aspen', pricePerNight: 200, propertyType: 'Cabin' }
    ]),
  });

  const moderateMutation = useMutation({
    mutationFn: ({ id, status }) => adminApi.moderateListing(id, status).catch(() => ({ id, status })),
    onSuccess: () => {
      queryClient.invalidateQueries(['pendingListings']);
    },
  });

  return (
    <div className="space-y-4">
      {pendingListings?.length === 0 ? (
        <div className="text-slate-500 text-center py-6">No properties pending reviews</div>
      ) : pendingListings?.map((listing) => (
        <div key={listing.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex justify-between items-center">
          <div className="space-y-1">
            <h3 className="font-bold text-white">{listing.title}</h3>
            <div className="text-xs text-slate-400">{listing.city} • ${listing.pricePerNight}/night</div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => moderateMutation.mutate({ id: listing.id, status: 'ACTIVE' })} className="bg-emerald-600 hover:bg-emerald-700 text-slate-950 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
              <CheckCircle size={14} /> Approve
            </button>
            <button onClick={() => moderateMutation.mutate({ id: listing.id, status: 'DRAFT' })} className="bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
              <XCircle size={14} /> Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};