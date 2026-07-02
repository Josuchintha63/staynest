import { createRoute } from '@tanstack/react-router';
import React from 'react';
import { Route as rootRoute } from '../__root';

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/auth/verify',
  component: () => (
    <div className="max-w-md mx-auto my-12 text-center text-white bg-slate-900 border border-slate-800 p-6 rounded-xl">
      Email verified successfully!
    </div>
  ),
});