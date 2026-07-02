import React, { useState } from 'react';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';

export const ResetPassword = ({ onSubmit, isLoading }) => {
  const [password, setPassword] = useState('');

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(password); }} className="space-y-4">
      <Input label="New Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
      <Button type="submit" disabled={isLoading} className="w-full">
        Reset Password
      </Button>
    </form>
  );
};