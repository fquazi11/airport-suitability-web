"use client";
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });


export default function LeafletMap() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // workaround for leaflet default icon issue
    import("leaflet").then((L) => {
      // Remove type error by avoiding prototype access
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: '/leaflet/images/marker-icon-2x.png',
        iconUrl: '/leaflet/images/marker-icon.png',
        shadowUrl: '/leaflet/images/marker-shadow.png',
      });
    });
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <MapContainer center={[51.505, -0.09]} zoom={6} className="w-full h-[600px] rounded-xl shadow-xl">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />
    </MapContainer>
  );
}