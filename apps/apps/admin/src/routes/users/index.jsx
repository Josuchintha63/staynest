import { createRoute } from '@tanstack/react-router';
import React from 'react';
import { UserList } from '../../features/users/UserList';
import { Route as rootRoute } from '../__root';

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/users',
  component: UserList,
});