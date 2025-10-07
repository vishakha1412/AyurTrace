 

 import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaExclamationCircle } from 'react-icons/fa';

// 🌿 Expanded Mock Alerts
const mockAlerts = [
  {
    id: 1,
    herb: 'Ashwagandha',
    severity: 'high',
    message: 'Moisture content exceeds optimal range.',
    season: 'Oct–Feb',
    culturalNote: 'Known as Indian Ginseng, used for immunity and stress relief.',
  },
  {
    id: 2,
    herb: 'Brahmi',
    severity: 'medium',
    message: 'Drying method inconsistent with lab standards.',
    season: 'Jul–Oct',
    culturalNote: 'Sacred herb for memory enhancement and mental clarity.',
  },
  {
    id: 3,
    herb: 'Tulsi',
    severity: 'low',
    message: 'Minor discoloration detected during drying.',
    season: 'Aug–Nov',
    culturalNote: 'Used in teas and rituals, revered in Ayurvedic tradition.',
  },
  {
    id: 4,
    herb: 'Shatavari',
    severity: 'high',
    message: 'Root fragmentation detected during harvesting.',
    season: 'Jun–Sep',
    culturalNote: 'Supports female reproductive health and vitality.',
  },
  {
    id: 5,
    herb: 'Neem',
    severity: 'medium',
    message: 'Leaf samples show pest residue beyond safe limits.',
    season: 'Feb–May',
    culturalNote: 'Used for skin, immunity, and natural pest control.',
  },
  {
    id: 6,
    herb: 'Amla',
    severity: 'low',
    message: 'Packaging inconsistency noted during transport.',
    season: 'Nov–Feb',
    culturalNote: 'Rich in Vitamin C, used in Chyawanprash and hair oils.',
  },
];
const severityStyles = {
  high: 'bg-red-100 text-red-700 border-red-300',
  medium: 'bg-yellow-100 text-yellow-700 border-yellow-300',
  low: 'bg-green-100 text-green-700 border-green-300',
};

const HerbAlerts = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl font-bold text-green-800 flex justify-center items-center gap-2">
          <FaExclamationCircle /> Herb Intelligence Alerts
        </h2>
        <p className="text-sm text-gray-600">Real-time insights to protect quality and tradition</p>
      </motion.div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockAlerts.map((alert, index) => (
          <motion.div
            key={alert.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`border rounded-lg p-5 shadow-sm hover:shadow-md transition ${severityStyles[alert.severity]}`}
          >
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <FaLeaf /> {alert.herb}
            </h3>
            <p className="text-sm mb-1"><strong>Alert:</strong> {alert.message}</p>
            <p className="text-sm"><strong>Harvest Season:</strong> {alert.season}</p>
            <p className="text-sm italic text-gray-600 mt-2">{alert.culturalNote}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HerbAlerts;

