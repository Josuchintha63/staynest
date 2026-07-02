import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon issue in Leaflet with webpack/vite
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

export const PropertyMap = ({ properties = [] }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Initialize map if not already initialized
    if (!mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current).setView([20.5937, 78.9629], 5); // default center on India
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(mapRef.current);
    }

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Add new markers for properties
    if (properties.length > 0) {
      const bounds = [];
      properties.forEach(prop => {
        if (prop.latitude && prop.longitude) {
          const lat = Number(prop.latitude);
          const lng = Number(prop.longitude);
          const marker = L.marker([lat, lng])
            .addTo(mapRef.current)
            .bindPopup(`<b>${prop.title}</b><br/>${prop.city}<br/>₹${prop.pricePerNight}/night`);
          markersRef.current.push(marker);
          bounds.push([lat, lng]);
        }
      });

      // Fit map to bounds if we have markers
      if (bounds.length > 0) {
        mapRef.current.fitBounds(bounds, { padding: [30, 30] });
      }
    }
  }, [properties]);

  return (
    <div className="w-full h-full rounded-xl overflow-hidden border border-slate-800" ref={mapContainerRef} style={{ minHeight: '250px' }} />
  );
};