import React from 'react';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Import Route instances from all route files
import { Route as rootRoute } from './routes/__root';
import { Route as indexRoute } from './routes/index';
import { Route as loginRoute } from './routes/auth/login';
import { Route as registerRoute } from './routes/auth/register';
import { Route as forgotPasswordRoute } from './routes/auth/forgot-password';
import { Route as verifyRoute } from './routes/auth/verify';
import { Route as propertyDetailRoute } from './routes/properties/$propertyId';
import { Route as tripsIndexRoute } from './routes/trips/index';
import { Route as tripsBookingIdRoute } from './routes/trips/$bookingId';

// Build the route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  registerRoute,
  forgotPasswordRoute,
  verifyRoute,
  propertyDetailRoute,
  tripsIndexRoute,
  tripsBookingIdRoute,
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