import React from 'react';
import { ReviewCard } from './ReviewCard';

export const ReviewList = ({ reviews }) => {
  return (
    <div className="space-y-4">
      {reviews.map((r, idx) => (
        <ReviewCard
          key={idx}
          reviewerName={r.reviewerName || 'Guest'}
          reviewText={r.reviewText}
          overallRating={r.overallRating}
          createdAt={r.createdAt}
        />
      ))}
    </div>
  );
};