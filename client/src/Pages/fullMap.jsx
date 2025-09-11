import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ✅ Import marker images for Vite
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix default marker path for Leaflet in Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const FullMap = () => {
  const mapRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("full-map").setView([20.5937, 78.9629], 5);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(mapRef.current);

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const { latitude, longitude } = pos.coords;
            const userMarker = L.marker([latitude, longitude]).addTo(mapRef.current);
            userMarker.bindPopup("📍 You are here").openPopup();
            mapRef.current.setView([latitude, longitude], 13);
          },
          (err) => {
            console.error("Geolocation error:", err);
          }
        );
      }
    }
  }, []);

  return (
    <div className="relative">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-5 left-5 z-[1000] px-4 py-2 rounded-md bg-blue-700 text-white shadow hover:bg-blue-800 transition"
      >
        ← Back
      </button>

      {/* Map Container */}
      <div id="full-map" className="h-screen w-full"></div>
    </div>
  );
};

export default FullMap;
