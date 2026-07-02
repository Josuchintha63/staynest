import { createRoute, useParams } from '@tanstack/react-router';
import { useQuery, useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { propertyApi } from '../../services/propertyApi';
import { bookingApi } from '../../services/bookingApi';
import { reviewApi } from '../../services/reviewApi';
import { PropertyGallery } from '../../features/properties/PropertyGallery';
import { PropertyDetails } from '../../features/properties/PropertyDetails';
import { PropertyAmenities } from '../../features/properties/PropertyAmenities';
import { PropertyHost } from '../../features/properties/PropertyHost';
import { BookingForm } from '../../features/bookings/BookingForm';
import { PriceBreakdown } from '../../features/bookings/PriceBreakdown';
import { ReviewList } from '../../features/reviews/ReviewList';
import { ReviewForm } from '../../features/reviews/ReviewForm';
import { Route as rootRoute } from '../__root';

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/properties/$propertyId',
  component: PropertyDetailPage,
});

function PropertyDetailPage() {
  const { propertyId } = useParams({ from: '/properties/$propertyId' });
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const { data: property, isLoading } = useQuery({
    queryKey: ['property', propertyId],
    queryFn: () => propertyApi.getById(propertyId),
  });

  const { data: reviews } = useQuery({
    queryKey: ['reviews', propertyId],
    queryFn: () => reviewApi.getByPropertyId(propertyId).catch(() => []),
  });

  const bookingMutation = useMutation({
    mutationFn: bookingApi.create,
    onSuccess: () => alert('Booking created successfully!'),
  });

  const reviewMutation = useMutation({
    mutationFn: (reviewData) => reviewApi.create({ propertyId: Number(propertyId), ...reviewData }),
  });

  if (isLoading) return <div className="text-center py-12 text-slate-400">Loading stays details...</div>;

  const nights = checkIn && checkOut ? Math.max(0, Math.floor((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24))) : 0;
  const baseCost = property.pricePerNight * nights;
  const serviceFee = Math.round(baseCost * 0.05 * 100) / 100;
  const tax = Math.round((baseCost + property.cleaningFee + serviceFee) * 0.12 * 100) / 100;
  const totalCost = baseCost + property.cleaningFee + serviceFee + tax;

  const handleBookSubmit = (e) => {
    e.preventDefault();
    bookingMutation.mutate({ propertyId: Number(propertyId), checkIn, checkOut, totalGuests: Number(guests) });
  };

  return (
    <div className="space-y-6">
      <PropertyGallery photoUrls={property.photoUrls} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <PropertyDetails title={property.title} description={property.description} />
          <PropertyAmenities amenities={property.amenities} />
          <PropertyHost hostName={property.hostName} />
          
          {/* Reviews list */}
          <div className="space-y-4 pt-6 border-t border-slate-800">
            <h3 className="text-lg font-bold text-white">Stays Reviews</h3>
            <ReviewForm onSubmit={(data) => reviewMutation.mutate(data)} />
            <ReviewList reviews={reviews || []} />
          </div>
        </div>

        <div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <BookingForm
              checkIn={checkIn} setCheckIn={setCheckIn}
              checkOut={checkOut} setCheckOut={setCheckOut}
              guests={guests} setGuests={setGuests}
              onSubmit={handleBookSubmit}
              priceBreakdown={
                nights > 0 ? (
                  <PriceBreakdown
                    pricePerNight={property.pricePerNight}
                    nights={nights}
                    cleaningFee={property.cleaningFee}
                    serviceFee={serviceFee}
                    tax={tax}
                    total={totalCost}
                  />
                ) : null
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}