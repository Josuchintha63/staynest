import { createRoute } from '@tanstack/react-router';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { authApi } from '../../services/authApi';
import { LoginForm } from '../../features/auth/LoginForm';
import { useAuth } from '../../hooks/useAuth';
import { Route as rootRoute } from '../__root';

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/auth/login',
  component: LoginPage,
});

function LoginPage() {
  const { login } = useAuth();
  const [error, setError] = useState('');

  const loginMutation = useMutation({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      login({ id: data.id, email: data.email, fullName: data.fullName, role: data.role }, data.accessToken, data.refreshToken);
      window.location.href = '/';
    },
    onError: (err) => setError(err.message),
  });

  return (
    <div className="max-w-md mx-auto my-12 bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-md space-y-4">
      <h2 className="text-xl font-bold text-center text-white">Sign In</h2>
      {error && <div className="text-rose-400 text-xs">{error}</div>}
      <LoginForm onSubmit={(data) => loginMutation.mutate(data)} isLoading={loginMutation.isPending} />
    </div>
  );
}