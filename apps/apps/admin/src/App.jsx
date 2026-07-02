import React from 'react';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Route as rootRoute } from './routes/__root';
import { Route as indexRoute } from './routes/index';
import { Route as loginRoute } from './routes/auth/login';
import { Route as registerRoute } from './routes/auth/register';
import { Route as bookingsIndexRoute } from './routes/bookings/index';
import { Route as bookingsDetailsRoute } from './routes/bookings/details';
import { Route as moderationRoute } from './routes/moderation/index';
import { Route as propertiesIndexRoute } from './routes/properties/index';
import { Route as propertiesCreateRoute } from './routes/properties/create';
import { Route as propertiesEditRoute } from './routes/properties/edit';
import { Route as propertiesApprovalsRoute } from './routes/properties/approvals';
import { Route as reviewsRoute } from './routes/reviews/index';
import { Route as usersRoute } from './routes/users/index';
import { Route as hostApplicationsRoute } from './routes/host/applications';
import { Route as hostListingBuilderRoute } from './routes/host/listing-builder';
import { Route as revenueRoute } from './routes/revenue';
import { Route as activityLogRoute } from './routes/activity-log';

// Build the route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  registerRoute,
  bookingsIndexRoute,
  bookingsDetailsRoute,
  moderationRoute,
  propertiesIndexRoute,
  propertiesCreateRoute,
  propertiesEditRoute,
  propertiesApprovalsRoute,
  reviewsRoute,
  usersRoute,
  hostApplicationsRoute,
  hostListingBuilderRoute,
  revenueRoute,
  activityLogRoute,
]);

// Instantiate the router
const router = createRouter({ routeTree });

// Create React Query Client
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}