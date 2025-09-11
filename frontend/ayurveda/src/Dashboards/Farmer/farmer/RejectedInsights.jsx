 import React from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaFlask, FaIndustry, FaTruck } from 'react-icons/fa';

// 🌿 Mock Rejection Data
const rejectedInsights = [
  {
    batchId: 'A4103',
    stage: 'Testing',
    species: 'Ashwagandha',
    lab: 'AyurTrace Lab – Ghaziabad',
    reason: 'Moisture content exceeded safe threshold',
    remedy: 'Use shade drying and re-submit after 48h',
  },
  {
    batchId: 'B5120',
    stage: 'Manufacturing',
    species: 'Tulsi',
    lab: 'GreenHerb Processing Unit',
    reason: 'Contamination detected during grinding',
    remedy: 'Clean equipment and resubmit batch',
  },
  {
    batchId: 'C3099',
    stage: 'Transporting',
    species: 'Brahmi',
    lab: 'Swasthya Logistics',
    reason: 'Packaging damaged during transit',
    remedy: 'Repack securely and re-dispatch',
  },
];

// 🎨 Stage Badge Colors
const stageStyles = {
  Testing: 'bg-red-100 text-red-700',
  Manufacturing: 'bg-yellow-100 text-yellow-700',
  Transporting: 'bg-blue-100 text-blue-700',
};

const stageIcons = {
  Testing: <FaFlask />,
  Manufacturing: <FaIndustry />,
  Transporting: <FaTruck />,
};
const RejectionInsights = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-red-700 flex justify-center items-center gap-2">
          <FaExclamationTriangle /> Rejection Insights
        </h2>
        <p className="text-sm text-gray-600">Understand and resolve issues across the supply chain</p>
      </motion.div>

      {/* Rejection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rejectedInsights.map((item, index) => (
          <motion.div
            key={item.batchId}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gradient-to-br from-red-50 to-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
       {/* Stage Badge */}
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-4 ${stageStyles[item.stage]}`}>
              {stageIcons[item.stage]} {item.stage}
            </div>

            {/* Batch Info */}
            <h3 className="text-lg font-semibold text-red-800 mb-1">Batch ID: {item.batchId}</h3>
            <p className="text-sm text-gray-700 mb-1"><strong>Species:</strong> {item.species}</p>
            <p className="text-sm text-gray-700 mb-1"><strong>Lab/Unit:</strong> {item.lab}</p>

            {/* Rejection Reason */}
            <div className="mt-3">
              <p className="text-sm text-red-600 font-medium mb-1">🚫 Reason:</p>
              <p className="text-sm text-gray-700">{item.reason}</p>
            </div>

            {/* Remedy */}
            <div className="mt-3">
              <p className="text-sm text-green-600 font-medium mb-1">✅ Remedy:</p>
              <p className="text-sm text-gray-700">{item.remedy}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RejectionInsights;

