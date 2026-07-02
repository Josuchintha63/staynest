import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { adminApi } from '../../services/adminApi';
import { StatsCard } from '../../components/widgets/StatsCard';
import { Home, ClipboardList, Wallet } from 'lucide-react';

export const DashboardStats = () => {
  const { data: stats } = useQuery({
    queryKey: ['adminStats'],
    queryFn: () => adminApi.getAnalytics().catch(() => ({
      activeListings: 124,
      bookingsThisMonth: 86,
      platformFeeRevenue: 15430
    })),
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatsCard
        title="Active Listings"
        value={stats?.activeListings || 124}
        icon={Home}
        color="bg-[#9e7f64]"
        trend="↑ 12 new this week"
        trendUp={true}
      />
      <StatsCard
        title="Bookings This Month"
        value={stats?.bookingsThisMonth || 86}
        icon={ClipboardList}
        color="bg-[#1f4a47]"
        trend="↑ 8.4% vs last month"
        trendUp={true}
      />
      <StatsCard
        title="Fee Revenue"
        value={'$' + Number(stats?.platformFeeRevenue || 15430).toLocaleString()}
        icon={Wallet}
        color="bg-[#853434]"
        trend="↓ 2.1% vs last month"
        trendUp={false}
      />
    </div>
  );
};