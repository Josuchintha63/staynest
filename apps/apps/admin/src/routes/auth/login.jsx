import { createRoute, Link } from '@tanstack/react-router';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../utils/validators';
import { authApi } from '../../services/authApi';
import { useAuth } from '../../hooks/useAuth';
import { Route as rootRoute } from '../__root';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { Shield } from 'lucide-react';

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/auth/login',
  component: LoginPage,
});

function LoginPage() {
  const { login } = useAuth();
  const [error, setError] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const loginMutation = useMutation({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      login({ id: data.id, email: data.email, fullName: data.fullName, role: data.role }, data.accessToken);
      window.location.href = '/';
    },
    onError: (err) => setError(err.message),
  });

  const onSubmit = (data) => {
    loginMutation.mutate(data);
  };

  return (
    <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-xl p-8 shadow-xl space-y-6">
      <div className="flex flex-col items-center gap-2">
        <div className="w-12 h-12 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
          <Shield size={24} />
        </div>
        <h2 className="text-xl font-bold text-center text-white">StayNest Admin Desk</h2>
        <p className="text-xs text-slate-400 text-center">Sign in to access your administrative operations panel</p>
      </div>

      {error && <div className="text-rose-400 text-xs bg-rose-500/10 border border-rose-500/20 px-3 py-2 rounded-lg">{error}</div>}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input label="Email Address" name="email" type="email" register={register} error={errors.email} placeholder="admin@staynest.com" />
        <Input label="Password" name="password" type="password" register={register} error={errors.password} placeholder="••••••••" />
        
        <Button type="submit" disabled={loginMutation.isPending} className="w-full mt-2">
          {loginMutation.isPending ? 'Authenticating...' : 'Sign In'}
        </Button>
      </form>

      <div className="text-center text-xs text-slate-450 pt-2">
        Need an administrative account?{' '}
        <Link to="/auth/register" className="text-teal-400 hover:underline">
          Register here
        </Link>
      </div>
    </div>
  );
}