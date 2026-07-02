import { createRoute } from '@tanstack/react-router';
import React from 'react';
import { Route as rootRoute } from '../__root';

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/reviews',
  component: () => <div>Reviews moderation controls</div>,
});