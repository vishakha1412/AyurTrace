import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHome, FaUser, FaLeaf, FaChartLine, FaFlask, FaBan,
  FaMapMarkedAlt, FaStore, FaBell, FaInfoCircle, FaCamera
} from 'react-icons/fa';

const dashboardModules = [
   
  {
    label: 'Profile',
    icon: <FaUser />,
    insight: 'Manage your farmer identity, zones, and certifications.',
  },
  {
    label: 'Lifecycle Overview',
    icon: <FaLeaf />,
    insight: 'Track your herbs from harvest to market in real time.',
  },
  {
    label: 'Earnings',
    icon: <FaChartLine />,
    insight: 'See what you’ve earned per batch, zone, and season.',
  },
{
    label: 'Batch Tracker',
    icon: <FaFlask />,
    insight: 'Follow each batch through lab, storage, and manufacturing.',
  },
  {
    label: 'Lab Status',
    icon: <FaFlask />,
    insight: 'Check lab queue, test results, and processing times.',
  },
  {
    label: 'Rejected Insights',
    icon: <FaBan />,
    insight: 'Understand why batches were rejected and how to fix them.',
  },
  {
    label: 'Smart Analytics',
    icon: <FaChartLine />,
    insight: 'Get AI-powered suggestions on what to grow and when.',
  },
  {
    label: 'Zones',
    icon: <FaMapMarkedAlt />,
    insight: 'View availability and restrictions across your collection zones.',
  },
  {
     label: 'Market Prices',
    icon: <FaStore />,
    insight: 'Compare herb prices across mandis and direct channels.',
  },
  {
    label: 'Herb Alerts',
    icon: <FaBell />,
    insight: 'Stay informed about seasonal risks and lab warnings.',
  },
  {
    label: 'Herb Info',
    icon: <FaInfoCircle />,
    insight: 'Learn ideal conditions, cultural notes, and drying methods.',
  },
  {
    label: 'Quick Capture',
    icon: <FaCamera />,
    insight: 'Snap and submit herb batches instantly with voice or photo.',
  },
];

const myStyle = {
  backgroundImage: "url('/assets/herbs/back.jpg')",
  height: "full",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};


const Dashboard = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto h-full w-full "  style={myStyle}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
  >
        <h2 className="text-4xl font-bold text-green-800">🌿 AyurTrace Farmer Dashboard</h2>
        <p className="text-sm text-gray-600">Explore your tools, insights, and traceable journey</p>
      </motion.div>

      {/* Grid of Modules */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardModules.map((module, index) => (
          <motion.div
            key={module.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-2 text-green-700">
              <span className="text-xl">{module.icon}</span>
              <h3 className="text-lg font-semibold">{module.label}</h3>
            </div>
            <p className="text-sm text-gray-600 italic">{module.insight}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
