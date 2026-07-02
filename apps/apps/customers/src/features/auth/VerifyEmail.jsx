import React from 'react';
import { Link } from '@tanstack/react-router';

export const VerifyEmail = ({ success, error }) => {
  return (
    <div className="text-center space-y-4">
      <h3 className="text-xl font-bold text-white">Email Verification</h3>
      <p className="text-sm text-slate-400">
        {success ? 'Your email was successfully verified!' : error ? error : 'Verifying token...'}
      </p>
      {success && <Link to="/auth/login" className="text-xs text-teal-400 underline">Proceed to Log In</Link>}
    </div>
  );
};