 import React, { useEffect, useState } from 'react';
 
import { motion } from 'framer-motion';
import { FaSeedling, FaVial, FaWarehouse, FaTruck, FaStore } from 'react-icons/fa';

// 🌿 Mock Lifecycle Data
const mockData = {
  harvested: 120,
  testing: 85,
  stored: 60,
  manufactured: 45,
  market: 30,
};

const stages = [
  {
    key: 'harvested',
    label: 'Harvested',
    icon: <FaSeedling className="text-green-600 text-xl" />,
    color: 'bg-green-100 text-green-800',
    description: 'Fresh herbs collected from approved zones.',
  },
  {
    key: 'testing',
    label: 'In Testing Lab',
    icon: <FaVial className="text-yellow-600 text-xl" />,
    color: 'bg-yellow-100 text-yellow-800',
    description: 'Lab analysis for moisture, alkaloids, and safety.',
  },
 {
    key: 'stored',
    label: 'Stored',
    icon: <FaWarehouse className="text-blue-600 text-xl" />,
    color: 'bg-blue-100 text-blue-800',
    description: 'Batch stored in traceable, temperature-controlled units.',
  },
  {
    key: 'manufactured',
    label: 'Sent to Manufacturer',
    icon: <FaTruck className="text-purple-600 text-xl" />,
    color: 'bg-purple-100 text-purple-800',
    description: 'Transferred to Ayurvedic product manufacturers.',
  },
  {
    key: 'market',
    label: 'Ready for Market',
    icon: <FaStore className="text-pink-600 text-xl" />,
    color: 'bg-pink-100 text-pink-800',
    description: 'Certified batches available for sale and export.',
  },
];

const LifecycleOverview = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(mockData);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!data) {
    return (
      <div className="p-6 max-w-4xl mx-auto animate-pulse">
        <div className="h-6 bg-green-200 rounded w-1/2 mb-4"></div>
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-24 bg-green-100 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

   return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl font-bold text-green-800">🌿 Lifecycle Overview</h2>
        <p className="text-sm text-gray-600">Track your herbs from harvest to market</p>
      </motion.div>

  {/* Stage Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stages.map((stage, index) => (
          <motion.div
            key={stage.key}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`rounded-xl shadow-md p-6 hover:shadow-lg transition ${stage.color}`}
          >
            <div className="flex items-center gap-3 mb-2">
              {stage.icon}
              <h3 className="text-xl font-semibold">{stage.label}</h3>
            </div>
            <p className="text-sm text-gray-700 mb-2">{stage.description}</p>
            <div className="text-2xl font-bold">{data[stage.key]} batches</div>
            <div className="mt-2 h-2 bg-white rounded-full overflow-hidden">
              <div
                className="h-2 bg-green-600 rounded-full transition-all duration-500"
                style={{ width: `${Math.min((data[stage.key] / 120) * 100, 100)}%` }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LifecycleOverview;


