import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ✅ Import marker images properly for Vite
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix default marker icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapComponent = ({
  incidents = [],
  center = [20.5937, 78.9629],
  zoom = 5,
}) => {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      className="h-96 w-full rounded-lg shadow"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {incidents.length > 0 &&
        incidents.map((it) => {
          const lat = it?.location?.lat;
          const lng = it?.location?.lng;

          if (lat == null || lng == null) return null;

          return (
            <Marker key={it._id} position={[lat, lng]}>
              <Popup>
                <div>
                  <strong>{it.type}</strong>
                  <div className="text-sm text-gray-600">{it.description}</div>
                </div>
              </Popup>
            </Marker>
          );
        })}
    </MapContainer>
  );
};

export default MapComponent;
