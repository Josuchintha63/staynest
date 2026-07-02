import React, { useState } from 'react';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';

export const ForgotPassword = ({ onSubmit, isLoading }) => {
  const [email, setEmail] = useState('');

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(email); }} className="space-y-4">
      <Input label="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" />
      <Button type="submit" disabled={isLoading} className="w-full">
        Send Reset Link
      </Button>
    </form>
  );
};