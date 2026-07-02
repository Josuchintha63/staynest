import { createRoute, Link } from '@tanstack/react-router';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../../utils/validators';
import { authApi } from '../../services/authApi';
import { Route as rootRoute } from '../__root';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { Shield } from 'lucide-react';

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/auth/register',
  component: RegisterPage,
});

function RegisterPage() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const registerMutation = useMutation({
    mutationFn: authApi.register,
    onSuccess: () => {
      setSuccess(true);
    },
    onError: (err) => setError(err.message),
  });

  const onSubmit = (data) => {
    registerMutation.mutate(data);
  };

  if (success) {
    return (
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-xl p-8 shadow-xl text-center space-y-4">
        <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
          <Shield size={24} />
        </div>
        <h2 className="text-xl font-bold text-white">Registration Successful!</h2>
        <p className="text-xs text-slate-400">Your administrative account has been created. You can now sign in using your credentials.</p>
        <Link to="/auth/login" className="inline-block mt-4 text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-500 px-6 py-2 rounded-lg transition-colors">
          Go to Sign In
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-xl p-8 shadow-xl space-y-6">
      <div className="flex flex-col items-center gap-2">
        <div className="w-12 h-12 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
          <Shield size={24} />
        </div>
        <h2 className="text-xl font-bold text-center text-white">Create Admin Account</h2>
        <p className="text-xs text-slate-400 text-center">Register a new staff/operator account on StayNest</p>
      </div>

      {error && <div className="text-rose-400 text-xs bg-rose-500/10 border border-rose-500/20 px-3 py-2 rounded-lg">{error}</div>}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input label="Full Name" name="fullName" type="text" register={register} error={errors.fullName} placeholder="Jane Doe" />
        <Input label="Email Address" name="email" type="email" register={register} error={errors.email} placeholder="jane@staynest.com" />
        <Input label="Password" name="password" type="password" register={register} error={errors.password} placeholder="••••••••" />
        
        <div className="flex flex-col gap-1.5 w-full">
          <label className="text-xs font-semibold uppercase text-slate-400">Staff Role</label>
          <select {...register('role')} className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none">
            <option value="SUPER_ADMIN">Super Administrator</option>
            <option value="PROPERTY_MANAGER">Property Moderation Manager</option>
            <option value="SUPPORT_AGENT">Customer Support Agent</option>
          </select>
        </div>

        <Button type="submit" disabled={registerMutation.isPending} className="w-full mt-2">
          {registerMutation.isPending ? 'Registering...' : 'Register'}
        </Button>
      </form>

      <div className="text-center text-xs text-slate-450 pt-2">
        Already have an account?{' '}
        <Link to="/auth/login" className="text-teal-400 hover:underline">
          Sign In
        </Link>
      </div>
    </div>
  );
}
