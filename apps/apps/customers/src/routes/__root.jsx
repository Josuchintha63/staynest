import React from 'react';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { AuthProvider } from '../context/AuthProvider';

// Provide custom provider wrapper
const AppWrapper = () => (
  <AuthProvider>
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  </AuthProvider>
);

export const Route = createRootRoute({
  component: AppWrapper,
});