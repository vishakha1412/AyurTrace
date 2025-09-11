 
 import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaLeaf, FaSun, FaTint, FaSeedling } from 'react-icons/fa';

// 🌿 Mock Herb Analytics Data
const herbAnalytics = [
  {
    name: 'Ashwagandha',
    idealSeason: 'October – February',
    soilType: 'Sandy loam, well-drained',
    moisture: 'Shade drying, 8–10% moisture',
    growthTime: '150–180 days',
    culturalNote: 'Known as Indian Ginseng, used for stress relief and immunity',
  },
  {
    name: 'Brahmi',
    idealSeason: 'July – October',
    soilType: 'Moist clay, semi-aquatic beds',
    moisture: '60–70%, shade drying',
    growthTime: '90–120 days',
    culturalNote: 'Memory enhancer, sacred in Ayurvedic rituals',
  },
  {
    name: 'Tulsi',
    idealSeason: 'August – November',
    soilType: 'Loamy, slightly alkaline',
    moisture: 'Sun drying, 10–12%',
    growthTime: '60–90 days',
    culturalNote: 'Used in teas, rituals, and respiratory treatments',
  },
   {
    name: 'Shatavari',
    idealSeason: 'June – September',
    soilType: 'Sandy loam with organic compost',
    moisture: 'Moderate drying, 12–15%',
    growthTime: '180–210 days',
    culturalNote: 'Supports female reproductive health and vitality',
  },
  {
    name: 'Neem',
    idealSeason: 'February – May',
    soilType: 'Dry, well-drained red soil',
    moisture: 'Sun drying, 10%',
    growthTime: '120–150 days',
    culturalNote: 'Used for skin, immunity, and pest control',
  },
  {
    name: 'Amla',
    idealSeason: 'November – February',
    soilType: 'Black cotton soil, rich in minerals',
    moisture: 'Low moisture, 6–8%',
    growthTime: '210–240 days',
    culturalNote: 'Rich in Vitamin C, used in Chyawanprash and hair oils',
  },
  {
    name: 'Guduchi (Giloy)',
    idealSeason: 'March – June',
    soilType: 'Loamy soil with good drainage',
    moisture: 'Shade drying, 10–12%',
    growthTime: '90–120 days',
    culturalNote: 'Boosts immunity and detoxification',
  },
    {
    name: 'Haritaki',
    idealSeason: 'October – January',
    soilType: 'Sandy clay, slightly acidic',
    moisture: 'Sun drying, 8–10%',
    growthTime: '180–200 days',
    culturalNote: 'One of the Triphala trio, supports digestion and longevity',
  },


];

const SmartAnalytics = () => {
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
          <FaChartLine /> Smart Analytics Overview
        </h2>
        <p className="text-sm text-gray-600">Grow the right herb, at the right time, in the right way</p>
      </motion.div>

      {/* Herb Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {herbAnalytics.map((herb, index) => (
          <motion.div
            key={herb.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
         <h3 className="text-xl font-semibold text-green-900 mb-2 flex items-center gap-2">
              <FaLeaf /> {herb.name}
            </h3>

            <ul className="text-sm text-gray-700 space-y-2">
              <li><FaSun className="inline text-yellow-500 mr-2" /> <strong>Ideal Season:</strong> {herb.idealSeason}</li>
              <li><FaSeedling className="inline text-green-600 mr-2" /> <strong>Soil Type:</strong> {herb.soilType}</li>
              <li><FaTint className="inline text-blue-500 mr-2" /> <strong>Moisture:</strong> {herb.moisture}</li>
              <li><strong>Growth Time:</strong> {herb.growthTime}</li>
              <li className="italic text-gray-600 mt-2">{herb.culturalNote}</li>
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SmartAnalytics;
