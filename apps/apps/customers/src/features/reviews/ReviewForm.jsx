import React, { useState } from 'react';
import { Button } from '../../components/common/Button';

export const ReviewForm = ({ onSubmit, isLoading }) => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ reviewText: text, overallRating: Number(rating) });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border border-slate-800 p-4 rounded-xl bg-slate-900/50">
      <h4 className="font-bold text-sm text-white">Write a review</h4>
      <div className="flex flex-col gap-1 text-xs">
        <label className="text-slate-400">Overall Rating (1 - 5)</label>
        <input type="number" min={1} max={5} value={rating} onChange={(e) => setRating(e.target.value)} className="bg-slate-800 border border-slate-700 rounded p-1.5 text-white" />
      </div>
      <div className="flex flex-col gap-1 text-xs">
        <label className="text-slate-400">Review Text</label>
        <textarea rows={3} value={text} onChange={(e) => setText(e.target.value)} className="bg-slate-800 border border-slate-700 rounded p-1.5 text-white" placeholder="Tell us about your experience..." />
      </div>
      <Button type="submit" disabled={isLoading} className="w-full">Submit Review</Button>
    </form>
  );
};