// "use client";
// import React, { useCallback, useState } from "react";
// import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

// const containerStyle = {
//   width: "60%",
//   height: "400px",
// };

// const center = {
//   lat: 37.7749, // Latitud de San Francisco
//   lng: -122.4194, // Longitud de San Francisco
// };

// interface MapInputComponentProps {
//   onLocationSelect: (location: { lat: number; lng: number }) => void;
// }

// const MapInputComponent: React.FC<MapInputComponentProps> = ({
//   onLocationSelect,
// }) => {
//   const { isLoaded, loadError } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
//   });
//   console.log(useJsApiLoader);

//   if (loadError) {
//     console.error("Error loading Google Maps API:", loadError);
//     return <div>Error loading map...</div>;
//   }

//   const [markerPosition, setMarkerPosition] = useState(center);

//   const onClickMap = useCallback(
//     (e: google.maps.MapMouseEvent) => {
//       const lat = e.latLng?.lat() || 0;
//       const lng = e.latLng?.lng() || 0;
//       const location = { lat, lng };
//       setMarkerPosition(location);
//       onLocationSelect(location);
//     },
//     [onLocationSelect]
//   );

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={markerPosition}
//       zoom={10}
//       onClick={onClickMap}>
//       <Marker position={markerPosition} />
//     </GoogleMap>
//   ) : (
//     <div>Loading...</div>
//   );
// };

// export default MapInputComponent;
"use client";

import React, { useState, useEffect, useRef } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface MapInputComponentProps {
  onLocationSelect: (plusCode: string) => void;
}

const MapInputComponent: React.FC<MapInputComponentProps> = ({
  onLocationSelect,
}) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [plusCode, setPlusCode] = useState<string>("");

  useEffect(() => {
    if (isLoaded && mapRef.current) {
      const initialMap = new google.maps.Map(mapRef.current as HTMLElement, {
        zoom: 8,
        center: { lat: 40.731, lng: -73.997 },
      });
      setMap(initialMap);
    }
  }, [isLoaded]);

  const handleSearch = () => {
    if (map && plusCode) {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: plusCode }, (results, status) => {
        if (status === "OK" && results && results[0]) {
          const location = results[0].geometry.location;
          map.setCenter(location);
          new google.maps.Marker({
            map: map,
            position: location,
          });
          onLocationSelect(plusCode);
        } else {
          alert("No se pudo encontrar la ubicación.");
        }
      });
    }
  };

  return (
    <div className="justify-center flex-col items-center w-full h-full p-4">
      <label className="text-lg text-slate mb-1">
        Copie y pegue un plus code de{" "}
        <Link
          href="https://www.google.com.ar/maps"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline">
          Google Maps
        </Link>
      </label>
      <div className="relative inline-block">
        <div
          className="ml-2 mb-2 w-8 h-8 bg-lime text-black rounded-full text-center text-2xl relative font-semibold"
          onMouseEnter={() => {
            const gifContainer = document.getElementById("gif-container");
            if (gifContainer) {
              gifContainer.classList.remove("hidden");
            }
          }}
          onMouseLeave={() => {
            const gifContainer = document.getElementById("gif-container");
            if (gifContainer) {
              gifContainer.classList.add("hidden");
            }
          }}>
          i
        </div>
        <div
          id="gif-container"
          className="absolute top-40 left-0 transform -translate-y-1/2 w-96 bg-white border border-gray-300 rounded-lg shadow-lg p-2 hidden z-50">
          <img
            src="/infoPlusCode.gif"
            alt="Información"
            className="w-full rounded-lg"
          />
        </div>
      </div>
      <input
        type="text"
        value={plusCode}
        onChange={(e) => setPlusCode(e.target.value)}
        placeholder="Ingrese el Plus Code"
        className="input-class p-2 mb-6 text-gray-800 rounded h-fit w-[100%]"
      />
      <button
        type="button"
        className="rounded-md w-[100%] h-fit p-2 mb-6  bg-lime text-xs text-black hover:shadow-lg hover:shadow-blue-700 radhiumz uppercase"
        onClick={handleSearch}>
        Buscar ubicación
      </button>
      <div
        ref={mapRef}
        className="w-full h-80 bg-gray-200 rounded-md shadow-md"
      />
    </div>
  );
};

export default MapInputComponent;
