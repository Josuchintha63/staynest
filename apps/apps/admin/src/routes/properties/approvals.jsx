import { createRoute } from '@tanstack/react-router';
import React from 'react';
import { Route as rootRoute } from '../__root';

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/properties/approvals',
  component: () => <div>Moderation approvals page</div>,
});