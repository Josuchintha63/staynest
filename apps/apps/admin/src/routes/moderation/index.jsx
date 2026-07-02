import { createRoute } from '@tanstack/react-router';
import React from 'react';
import { PropertyApproval } from '../../features/properties/PropertyApproval';
import { Route as rootRoute } from '../__root';

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/moderation',
  component: PropertyApproval,
});