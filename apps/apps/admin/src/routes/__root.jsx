import React, { useEffect } from 'react';
import { createRootRoute, Outlet, useNavigate, useLocation } from '@tanstack/react-router';
import { AuthProvider } from '../context/AuthContext';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { useAuth } from '../hooks/useAuth';

const AppContent = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isAuthRoute = location.pathname.startsWith('/auth');
    if (!user && !isAuthRoute) {
      navigate({ to: '/auth/login' });
    } else if (user && isAuthRoute) {
      navigate({ to: '/' });
    }
  }, [user, location.pathname]);

  const isAuthRoute = location.pathname.startsWith('/auth');

  if (isAuthRoute) {
    return (
      <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans justify-center items-center py-12 px-4">
        <Outlet />
      </div>
    );
  }

  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};

const AppWrapper = () => (
  <AuthProvider>
    <AppContent />
  </AuthProvider>
);

export const Route = createRootRoute({
  component: AppWrapper,
});