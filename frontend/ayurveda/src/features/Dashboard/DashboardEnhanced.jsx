 import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { motion, AnimatePresence } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import HarvestMap from '../HarvestMap/HarvestMap';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

// Fix default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});
const DashboardEnhancedStyled = () => {
  const [selectedHerb, setSelectedHerb] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const metrics = [
    { label: 'Active Batches', value: 24, color: 'from-green-400 to-green-600' },
    { label: 'Quality Issues', value: 3, color: 'from-red-400 to-red-600' },
    { label: 'Pending Tests', value: 10, color: 'from-yellow-400 to-yellow-600' },
    { label: 'Batch Recalls', value: 0, color: 'from-gray-400 to-gray-600' },
  ];

  const transactions = [
    { id: 'HRB001', herb: 'Ashwagandha', location: 'Rajasthan', status: 'Quality Tested ✅', badge: 'bg-green-100 text-green-800' },
    { id: 'HRB002', herb: 'Turmeric', location: 'Kerala', status: 'Processing 🔄', badge: 'bg-yellow-100 text-yellow-800' },
    { id: 'HRB003', herb: 'Neem', location: 'Gujarat', status: 'Collected 📍', badge: 'bg-blue-100 text-blue-800' },
  ];

  const filteredTransactions = transactions.filter(t =>
    (selectedHerb === 'All' || t.herb === selectedHerb) &&
    (selectedLocation === 'All' || t.location === selectedLocation)
  );

const chartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Quality Score',
        data: [85, 78, 92, 88],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16,185,129,0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const mapPoints = [
    { herb: 'Ashwagandha', location: 'Rajasthan', lat: 26.9124, lng: 75.7873,date:'2025-03-12' },
    { herb: 'Turmeric', location: 'Kerala', lat: 10.8505, lng: 76.2711,date:'2024-12-25' },
    { herb: 'Neem', location: 'Gujarat', lat: 22.2587, lng: 71.1924,date:'2025-05-24' },
  ];

return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="p-6 space-y-8 bg-gradient-to-br from-white via-green-100 to-white rounded-lg shadow-xl"
    >
      <h2 className="text-3xl font-extrabold text-green-700 tracking-wide">🌿 Ayurvedic Herb Supply Chain Dashboard</h2>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-4 mb-4"
      >
        <select
          value={selectedHerb}
          onChange={e => setSelectedHerb(e.target.value)}
          className="p-2 border rounded bg-green-100 text-green-900 font-medium shadow"
        >
          <option>All</option>
          <option>Ashwagandha</option>
          <option>Turmeric</option>
          <option>Neem</option>
        </select>
 <select
          value={selectedLocation}
          onChange={e => setSelectedLocation(e.target.value)}
          className="p-2 border rounded bg-green-100 text-green-900 font-medium shadow"
        >
          <option>All</option>
          <option>Rajasthan</option>
          <option>Kerala</option>
          <option>Gujarat</option>
        </select>
      </motion.div>

      {/* Metric Cards */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-gray-800">📊 Real-time Metrics</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className={`bg-gradient-to-br ${m.color} p-4 rounded-xl shadow-lg text-center text-white`}
            >
              <p className="text-sm font-medium">{m.label}</p>
              <p className="text-3xl font-bold">{m.value}</p>
            </motion.div>
          ))}
        </div>
 </section>

      {/* Leaflet Map */}
   <HarvestMap/>

      {/* Quality Trends Chart */}
      <section className='flex flex-col justify-center items-center'>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">📈 Quality Trends</h3>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-4 rounded-xl shadow-2xl w-[500px] h-[300px] lg:w-[600px] lg:h-[400px] flex flex-col justify-center items-center"
        >
          <Line data={chartData} />
        </motion.div>
 </section>

      {/* Transactions */}
      <section>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">🔄 Recent Transactions</h3>
        <table className="w-full text-left border border-gray-200 rounded-xl overflow-hidden shadow-lg">
          <thead className="bg-green-300 text-green-900">
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">Herb</th>
              <th className="p-2">Location</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((t, i) => (
              <tr key={i} className="border-t bg-white hover:bg-green-50 transition">
                <td className="p-2">{t.id}</td>
                <td className="p-2">{t.herb}</td>
                <td className="p-2">{t.location}</td>
                <td className="p-2">
                  <span className={`px-2 py-1 rounded-full text-sm font-semibold ${t.badge}`}>
                    {t.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </motion.div>
  );
};
export default DashboardEnhancedStyled;








