import { createRoute } from '@tanstack/react-router';
import React from 'react';
import { Route as rootRoute } from '../__root';

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: () => <div>Dashboard index</div>,
});