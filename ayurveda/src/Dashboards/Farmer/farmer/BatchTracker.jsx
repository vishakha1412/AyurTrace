
 
import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

// 🌿 Mock Batch Data
const mockBatches = [
  {
    id: 'A4103',
    herb: 'Ashwagandha',
    weight: 1.12,
    harvestDate: '2023-09-05',
    zone: 'A1 Approved',
    moisture: 9.2,
    labTestDate: '2023-09-18',
    status: 'Passed',
  },
 {
    id: 'B5120',
    herb: 'Tulsi',
    weight: 0.85,
    harvestDate: '2023-09-10',
    zone: 'B2 Pending',
    moisture: 11.4,
    labTestDate: '2023-09-22',
    status: 'Pending',
  },
  {
    id: 'C3099',
    herb: 'Brahmi',
    weight: 1.45,
    harvestDate: '2023-09-02',
    zone: 'C1 Rejected',
    moisture: 13.1,
    labTestDate: '2023-09-15',
    status: 'Rejected',
  },
];

// 📊 Moisture Trend Graph Data
const graphData = {
  labels: mockBatches.map((b) => b.id),
  datasets: [
    {
 label: 'Moisture (%)',
      data: mockBatches.map((b) => b.moisture),
      borderColor: '#16a34a',
      backgroundColor: 'rgba(22, 163, 74, 0.2)',
      tension: 0.4,
    },
  ],
};

const BatchTracker = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-green-800">📦 Batch Tracker</h2>
        <p className="text-sm text-gray-600">Monitor your harvests, lab tests, and traceability</p>
      </motion.div>

      {/* Moisture Graph */}
  <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-md p-4 mb-8"
      >
        <h3 className="text-lg font-semibold text-green-700 mb-2">Moisture Trend</h3>
        <Line data={graphData} />
      </motion.div>

      {/* Batch Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockBatches.map((batch, index) => (
          <motion.div
            key={batch.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h4 className="text-xl font-semibold text-green-900 mb-2">
              {batch.herb} <span className="text-sm text-gray-500">({batch.weight}kg)</span>
            </h4>
            <p className="text-sm text-gray-700 mb-1"><strong>Batch ID:</strong> {batch.id}</p>
            <p className="text-sm text-gray-700 mb-1"><strong>Harvest Date:</strong> {batch.harvestDate}</p>
            <p className="text-sm text-gray-700 mb-1"><strong>Lab Test Date:</strong> {batch.labTestDate}</p>
            <p className="text-sm text-gray-700 mb-1"><strong>Moisture:</strong> {batch.moisture}%</p>

            {/* Zone Tag */}
            <span className="inline-block mt-2 px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
              {batch.zone}
            </span>
 {/* Status Badge */}
            <div className="mt-4 flex items-center gap-2 text-sm font-medium">
              {batch.status === 'Passed' && (
                <span className="text-green-600 flex items-center gap-1">
                  <FaCheckCircle /> Passed
                </span>
              )}
              {batch.status === 'Pending' && (
                <span className="text-yellow-600 flex items-center gap-1">
                  ⏳ Pending
                </span>
              )}
              {batch.status === 'Rejected' && (
                <span className="text-red-600 flex items-center gap-1">
                  <FaTimesCircle /> Rejected
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BatchTracker;

