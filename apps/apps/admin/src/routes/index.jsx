import { createRoute } from '@tanstack/react-router';
import React from 'react';
import { Dashboard } from '../features/dashboard/Dashboard';
import { Route as rootRoute } from './__root';

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Dashboard,
});