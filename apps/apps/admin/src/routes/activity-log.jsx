import { createRoute } from '@tanstack/react-router';
import React from 'react';
import { Route as rootRoute } from './__root';

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/activity-log',
  component: () => (
    <div className="bg-white border border-slate-200 p-6 rounded-xl text-slate-800 shadow-sm space-y-4">
      <h2 className="text-xl font-bold">Activity Log</h2>
      <p className="text-sm text-slate-500">Security audits and platform event logs (scaffolded).</p>
    </div>
  ),
});
