 import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaArrowUp } from 'react-icons/fa';

// 🌿 Mock Earnings Data
const earningsData = [
  {
    period: 'Today',
    earnings: 1200,
    bonus: 15,
    rating: 5,
  },
  {
    period: 'This Week',
    earnings: 12350,
    bonus: 10,
    rating: 4.5,
  },
  {
    period: 'This Month',
    earnings: 41230,
    bonus: 18,
    rating: 5,
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  return (
    <div className="flex gap-1 text-yellow-500">
      {[...Array(fullStars)].map((_, i) => <FaStar key={i} />)}
      {halfStar && <FaStar className="opacity-50" />}
    </div>
  );
};

const Earnings = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-green-800">💰 Earnings & Incentives</h2>
        <p className="text-sm text-gray-600">Track your growth and impact with AyurTrace</p>
      </motion.div>

  {/* Earnings Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {earningsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-green-900 mb-2">{item.period}</h3>
            <p className="text-sm text-gray-600 mb-1">Earnings</p>
            <p className="text-2xl font-bold text-green-700">₹{item.earnings.toLocaleString()}</p>

            <div className="mt-4 flex items-center gap-2 text-sm text-green-600">
              <FaArrowUp className="text-green-500" />
              <span className="font-medium">+{item.bonus}% Bonus</span>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-1">Rating</p>
              {renderStars(item.rating)}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Earnings;
