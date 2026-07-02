import { createRoute, useNavigate } from '@tanstack/react-router';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { apiRequest } from '../../services/api';
import { Route as rootRoute } from '../__root';
import { Check, ArrowRight, ArrowLeft, Image, DollarSign, List, Shield, MapPin } from 'lucide-react';

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/host/listing-builder',
  component: ListingBuilderPage,
});

function ListingBuilderPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  
  // Form State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [propertyType, setPropertyType] = useState('Apartment');
  const [pricePerNight, setPricePerNight] = useState('');
  const [cleaningFee, setCleaningFee] = useState('');
  const [photoUrls, setPhotoUrls] = useState(['', '', '']);
  const [amenities, setAmenities] = useState([]);

  const createMutation = useMutation({
    mutationFn: (data) => apiRequest('/host/properties', { method: 'POST', body: JSON.stringify(data) }),
    onSuccess: (res) => {
      alert('Listing created as DRAFT! Submitting for moderation...');
      // Auto submit for approval
      apiRequest(`/host/properties/${res.id}/submit`, { method: 'POST' })
        .then(() => {
          alert('Listing submitted successfully!');
          navigate({ to: '/' });
        });
    },
  });

  const availableAmenities = ['Wifi', 'Air Conditioning', 'Kitchen', 'Pool', 'Free Parking', 'Gym', 'Washing Machine'];

  const handleAmenityToggle = (name) => {
    if (amenities.includes(name)) {
      setAmenities(amenities.filter((a) => a !== name));
    } else {
      setAmenities([...amenities, name]);
    }
  };

  const handleNext = () => setStep((s) => Math.min(s + 1, 4));
  const handleBack = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    createMutation.mutate({
      title,
      description,
      address,
      city,
      country,
      latitude: 40.7128, // mock coords
      longitude: -74.0060,
      propertyType,
      pricePerNight: Number(pricePerNight),
      cleaningFee: Number(cleaningFee || 0),
      photoUrls: photoUrls.filter((url) => url !== ''),
      amenities
    });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 bg-slate-900 border border-slate-800 rounded-xl p-8 shadow-xl">
      <div className="space-y-2">
        <h1 className="text-2xl font-black text-white">Create a New Listing</h1>
        <p className="text-xs text-slate-400">Step {step} of 4: Fill in property details</p>
        
        {/* Progress Bar */}
        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
          <div className="bg-teal-500 h-full transition-all duration-300" style={{ width: `${(step / 4) * 100}%` }} />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="font-bold text-white flex items-center gap-1.5"><List size={16} className="text-teal-400" /> Basic Details</h3>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-slate-450 uppercase font-bold">Property Title</label>
              <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500" placeholder="e.g. Modern Beachfront Villa" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-slate-450 uppercase font-bold">Description</label>
              <textarea rows={4} required value={description} onChange={(e) => setDescription(e.target.value)} className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500" placeholder="Describe the space..." />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-slate-450 uppercase font-bold">Property Type</label>
                <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)} className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none">
                  <option value="Apartment">Apartment</option>
                  <option value="Cabin">Cabin</option>
                  <option value="Villa">Villa</option>
                  <option value="House">House</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="font-bold text-white flex items-center gap-1.5"><MapPin size={16} className="text-teal-400" /> Location Details</h3>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-slate-450 uppercase font-bold">Address</label>
              <input type="text" required value={address} onChange={(e) => setAddress(e.target.value)} className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none" placeholder="123 Main St" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-slate-450 uppercase font-bold">City</label>
                <input type="text" required value={city} onChange={(e) => setCity(e.target.value)} className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-505" placeholder="Paris" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-slate-450 uppercase font-bold">Country</label>
                <input type="text" required value={country} onChange={(e) => setCountry(e.target.value)} className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-505" placeholder="France" />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h3 className="font-bold text-white flex items-center gap-1.5"><Image size={16} className="text-teal-400" /> Photos & Amenities</h3>
            
            {/* Photos Url */}
            <div className="space-y-3">
              <label className="text-xs text-slate-450 uppercase font-bold block">Photo URLs</label>
              {photoUrls.map((url, idx) => (
                <input key={idx} type="url" value={url} onChange={(e) => {
                  const copy = [...photoUrls];
                  copy[idx] = e.target.value;
                  setPhotoUrls(copy);
                }} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none" placeholder={`Image URL #${idx + 1}`} />
              ))}
            </div>

            <hr className="border-slate-800 my-4" />

            {/* Amenities Grid */}
            <div className="space-y-2">
              <label className="text-xs text-slate-450 uppercase font-bold block">Amenities</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {availableAmenities.map((amenity) => (
                  <button key={amenity} type="button" onClick={() => handleAmenityToggle(amenity)} className={`border px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                    amenities.includes(amenity) ? 'bg-teal-500/10 border-teal-500/35 text-teal-400' : 'bg-slate-850 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}>
                    {amenities.includes(amenity) && <Check size={12} />}
                    {amenity}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <h3 className="font-bold text-white flex items-center gap-1.5"><DollarSign size={16} className="text-teal-400" /> Rates & Fees</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-slate-450 uppercase font-bold">Price Per Night ($)</label>
                <input type="number" required value={pricePerNight} onChange={(e) => setPricePerNight(e.target.value)} className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none" placeholder="150" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-slate-450 uppercase font-bold">Cleaning Fee ($)</label>
                <input type="number" value={cleaningFee} onChange={(e) => setCleaningFee(e.target.value)} className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none" placeholder="50" />
              </div>
            </div>
          </div>
        )}

        {/* Form controls */}
        <div className="flex justify-between items-center border-t border-slate-800 pt-6">
          {step > 1 ? (
            <button type="button" onClick={handleBack} className="bg-slate-850 hover:bg-slate-800 text-slate-300 border border-slate-850 hover:border-slate-700 rounded-lg px-4 py-2 text-xs font-semibold flex items-center gap-1">
              <ArrowLeft size={14} /> Back
            </button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <button type="button" onClick={handleNext} className="bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold rounded-lg px-4 py-2 text-xs flex items-center gap-1">
              Next <ArrowRight size={14} />
            </button>
          ) : (
            <button type="submit" disabled={createMutation.isPending} className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-slate-950 font-bold rounded-lg px-5 py-2.5 text-xs shadow-lg shadow-teal-500/20">
              {createMutation.isPending ? 'Saving...' : 'Submit Listing'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
