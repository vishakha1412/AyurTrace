
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
 
import useFetch from "../../hooks/useFetch";
import { fetchHarvestData } from "../../services/harvestAPI";
import { motion } from "framer-motion";
import { useState } from 'react';





export default function HarvestMap() {
    const { data: harvestData, loading } = useFetch(fetchHarvestData);
    const [filter, setFilter] = useState("All");
    const [showDocs, setShowDocs] = useState(false);




  const filteredData = harvestData.filter((point) =>
  filter === "All" ? true : point.herb === filter
);



  return (
    <>
    <div className="p-6   rounded-xl shadow-md space-y-4 bg-[#fdf6e3]">
      <h2 className="text-xl font-bold text-emerald-700">🌍 Harvest Map</h2>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="All">All Herbs</option>
        {[...new Set(harvestData.map((d) => d.herb))].map((herb) => (
          <option key={herb} value={herb}>{herb}</option>
        ))}
      </select>
      {loading ? (
        <p className="text-gray-500">Loading map...</p>
      ) : (
        <MapContainer center={[28.6692, 77.4538]} zoom={7} className="h-[500px] w-full rounded-lg shadow-lg">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {filteredData.map((point) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Marker position={[point.lat, point.lng]}>
                <Popup>
                  <strong>{point.herb}</strong><br />
                  Harvested on: {point.date}
                </Popup>
              </Marker>
            </motion.div>
          ))}
        </MapContainer>
      )}
       <button onClick={() => setShowDocs(!showDocs)} className="text-blue-600 underline">
        What does this map show?
      </button>
      {showDocs && (
        <div className="mt-2 text-sm bg-blue-50 p-4 rounded">
          This map displays GPS-tagged harvest locations for Ayurvedic herbs. Each marker shows the herb name and harvest date.
        </div>
      )}
    </div>



    </>
    
  );
}