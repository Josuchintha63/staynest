import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../../utils/validators';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';

export const RegisterForm = ({ onSubmit, isLoading }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input label="Full Name" name="fullName" type="text" register={register} error={errors.fullName} placeholder="John Doe" />
      <Input label="Email Address" name="email" type="email" register={register} error={errors.email} placeholder="john@example.com" />
      <Input label="Password" name="password" type="password" register={register} error={errors.password} placeholder="••••••••" />
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold uppercase text-slate-400">Role</label>
        <select {...register('role')} className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none">
          <option value="GUEST">Guest</option>
          <option value="HOST">Host</option>
        </select>
      </div>
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? 'Creating Account...' : 'Sign Up'}
      </Button>
    </form>
  );
};