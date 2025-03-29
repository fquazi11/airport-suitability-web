"use client";
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });
const ZoomControl = dynamic(() => import('react-leaflet').then(mod => mod.ZoomControl), { ssr: false });

interface LeafletMapProps {
  className?: string;
}

const LeafletMap = ({ className }: LeafletMapProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // workaround for leaflet default icon issue
    import("leaflet").then((L) => {
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: '/leaflet/images/marker-icon-2x.png',
        iconUrl: '/leaflet/images/marker-icon.png',
        shadowUrl: '/leaflet/images/marker-shadow.png',
      });
    });
    setIsClient(true);
  }, []);

  const airports = [
    { name: "Heathrow", position: [51.4700, -0.4543], traffic: "High" },
    { name: "Charles de Gaulle", position: [49.0097, 2.5479], traffic: "Medium" },
    { name: "Frankfurt", position: [50.0379, 8.5622], traffic: "High" },
  ];

  if (!isClient) {
    return (
      <div className="w-full h-[600px] bg-gray-900 rounded-xl shadow-xl flex items-center justify-center">
        <div className="text-gray-400">Loading map...</div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="absolute top-4 right-4 z-[1000] bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
        <h3 className="text-sm font-semibold mb-2">Traffic Levels</h3>
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>Low</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span>Medium</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span>High</span>
          </div>
        </div>
      </div>

      <MapContainer 
        center={[51.505, -0.09]} 
        zoom={5} 
        minZoom={3}
        maxZoom={18}
        className={`w-full h-[600px] rounded-xl shadow-xl ${className || ''}`}
        style={{ background: '#1a1a1a' }}
        zoomControl={false}
      >
        <ZoomControl position="bottomright" />
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {airports.map((airport, index) => (
          <Marker 
            key={index} 
            position={airport.position as [number, number]}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold">{airport.name}</h3>
                <p className="text-sm">Traffic: {airport.traffic}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <div className="absolute bottom-4 left-4 z-[1000] bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
        <p className="text-xs text-gray-600">
          Real-time airport data visualization
        </p>
      </div>
    </motion.div>
  );
};

export default LeafletMap;