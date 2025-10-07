 import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkedAlt, FaLeaf, FaExclamationCircle } from 'react-icons/fa';

// 🌿 Mock Zone Data
const zoneData = [
  {
    name: 'Zone A',
    status: 'Available',
    quantity: '450kg',
    color: 'bg-green-100 text-green-800',
    description: 'Fully approved for Ashwagandha and Tulsi collection. Ideal drying conditions.',
  },
  {
    name: 'Zone B',
    status: 'Limited',
    quantity: '80kg',
    color: 'bg-yellow-100 text-yellow-800',
    description: 'Partial approval due to seasonal moisture. Brahmi allowed with caution.',
  },
  {
    name: 'Zone C',
    status: 'Restricted',
    quantity: '0kg',
    color: 'bg-red-100 text-red-800',
    description: 'Collection halted due to lab rejection and transport issues.',
  },
  {
    name: 'Zone D',
    status: 'Pending',
    quantity: '—',
    color: 'bg-gray-100 text-gray-700',
    description: 'Awaiting lab clearance. No active batches yet.',
  },
];

const Zones = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-green-800 flex justify-center items-center gap-2">
          <FaMapMarkedAlt /> Collection Zones 🗺️🌿
        </h2>
        <p className="text-sm text-gray-600">Real-time availability across traceable zones</p>
      </motion.div>
      {/* Zone Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {zoneData.map((zone, index) => (
          <motion.div
            key={zone.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`rounded-xl shadow-md p-6 hover:shadow-lg transition ${zone.color}`}
          >
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <FaLeaf /> {zone.name}
            </h3>
            <p className="text-sm font-medium mb-1">
              Status: <span className="font-bold">{zone.status}</span>
            </p>
            <p className="text-sm mb-2">Available Quantity: <strong>{zone.quantity}</strong></p>
            <p className="text-sm italic text-gray-700">{zone.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Zones;

