 
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { FaFlask, FaClock, FaCheckCircle, FaSyncAlt, FaVial } from 'react-icons/fa';

ChartJS.register(BarElement, CategoryScale, LinearScale);

// 🌿 Expanded Mock Lab Data
const mockLabs = [
  {
    labName: 'AyurTrace Lab – Ghaziabad',
    batchesInQueue: 18,
    avgProcessingTime: '3h 45m',
    lastUpdated: '2025-09-11 18:30 IST',
    queueTrend: [12, 15, 18, 14, 20, 17, 18],
  },
  {
    labName: 'GreenHerb Lab – Lucknow',
    batchesInQueue: 9,
    avgProcessingTime: '2h 20m',
    lastUpdated: '2025-09-11 17:50 IST',
    queueTrend: [8, 7, 9, 10, 9, 8, 9],
  },
 {
    labName: 'Swasthya Lab – Varanasi',
    batchesInQueue: 22,
    avgProcessingTime: '4h 10m',
    lastUpdated: '2025-09-11 19:10 IST',
    queueTrend: [20, 21, 19, 23, 22, 21, 22],
  },
];

// ✅ Common Tests Performed
const labTests = [
  'Moisture Content Analysis',
  'Alkaloid Quantification',
  'Saponin Content Evaluation',
  'Essential Oil Profiling',
  'Ash Value Determination',
  'Extractive Value Assessment',
  'Microbial Load Detection',
  'Heavy Metal Screening',
  'Pesticide Residue Analysis',
  'Color & Texture Analysis',
  'DNA Barcoding (Advanced)',
];
const LabStatusDashboard = () => {
  const [labs, setLabs] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLabs(mockLabs);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (labs.length === 0) {
    return (
      <div className="p-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 animate-pulse">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="bg-green-100 rounded-xl p-6 shadow-md space-y-4">
            <div className="h-6 bg-green-200 rounded w-2/3"></div>
            <div className="h-4 bg-green-200 rounded w-full"></div>
            <div className="h-4 bg-green-200 rounded w-3/4"></div>
            <div className="h-4 bg-green-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }
 return (
    <div className="p-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl font-bold text-green-800">🧪 Lab Status Overview</h2>
        <p className="text-sm text-gray-600">Real-time insights into herbal batch processing</p>
      </motion.div>

      {/* Lab Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {labs.map((lab, index) => {
          const chartData = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Today'],
            datasets: [
              {
                label: 'Queue',
                data: lab.queueTrend,
                backgroundColor: '#16a34a',
              },
            ],
          };
  return (
            <motion.div
              key={lab.labName}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: index * 0.2 }}
              className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-green-900 mb-2 flex items-center gap-2">
                <FaFlask /> {lab.labName}
              </h3>
              <div className="text-sm text-gray-700 space-y-1 mb-4">
                <p><FaSyncAlt className="inline text-green-600" /> Batches in Queue: <strong>{lab.batchesInQueue}</strong></p>
                <p><FaClock className="inline text-green-600" /> Avg Processing Time: <strong>{lab.avgProcessingTime}</strong></p>
                <p><FaCheckCircle className="inline text-green-600" /> Last Updated: <strong>{lab.lastUpdated}</strong></p>
              </div>

              {/* Chart */}
              <div className="bg-white rounded-lg p-3 shadow-sm mb-4">
                <h4 className="text-sm font-medium text-green-700 mb-2">📊 Queue Trend</h4>
                <Bar data={chartData} />
              </div>

              {/* Tests Performed */}
              <div className="bg-green-50 rounded-lg p-4 shadow-sm">
                <h4 className="text-sm font-semibold text-green-700 mb-2 flex items-center gap-2">
                  <FaVial /> Tests Performed
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {labTests.map((test, i) => (
                    <li key={i}>{test}</li>
                  ))}
</ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default LabStatusDashboard;

