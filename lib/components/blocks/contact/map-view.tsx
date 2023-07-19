"use client";
import React, { useRef, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

// Types
import { Location } from "@/lib/functions/types";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "";

const MapView = ({ location }: { location: any }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const longitude = parseFloat(location.longitude);
  const latitude = parseFloat(location.latitude);

  useEffect(() => {
    if (mapContainerRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [longitude, latitude],
        zoom: 18,
      });

      // Create a marker at the center coordinates
      const marker = new mapboxgl.Marker()
        .setLngLat([longitude, latitude])
        .addTo(map);
    }
  }, []);

  return (
    <div
      className="flex ml-[200px] sm:-ml-[250px] h-[300px] w-full sm:h-[700px] sm:w-full bg-green-500"
      ref={mapContainerRef}
    />
  );
};

export default MapView;
