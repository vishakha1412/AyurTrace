 import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaRupeeSign, FaStore } from 'react-icons/fa';

// 🌿 Mock Market Price Data
const mockPrices = [
  { market: 'Ghaziabad Herbal Mandi', herb: 'Ashwagandha', price: 320 },
  { market: 'Lucknow Ayur Bazaar', herb: 'Tulsi', price: 180 },
  { market: 'Varanasi Wellness Hub', herb: 'Brahmi', price: 250 },
  { market: 'Kanpur Green Market', herb: 'Shatavari', price: 400 },
  { market: 'AyurTrace Direct', herb: 'Neem', price: 150 },
];

const MarketPrices = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setPrices(mockPrices);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (prices.length === 0) {
 return (
      <div className="p-6 max-w-4xl mx-auto animate-pulse">
        <div className="h-6 bg-green-200 rounded w-1/2 mb-4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-green-100 rounded w-full"></div>
          <div className="h-4 bg-green-100 rounded w-3/4"></div>
          <div className="h-4 bg-green-100 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-green-800 flex justify-center items-center gap-2">
          <FaStore /> Market Prices Overview
        </h2>
        <p className="text-sm text-gray-600">Latest herbal rates across regional mandis</p>
      </motion.div>


  {/* Price Table */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-x-auto bg-white rounded-xl shadow-md"
      >
        <table className="min-w-full table-auto text-sm text-left">
          <thead className="bg-green-100 text-green-800">
            <tr>
              <th className="px-4 py-3">Market</th>
              <th className="px-4 py-3">Herb</th>
              <th className="px-4 py-3">Price (₹/kg)</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((item, index) => (
              <tr key={index} className="border-b hover:bg-green-50 transition">
                <td className="px-4 py-3 font-medium">{item.market}</td>
                <td className="px-4 py-3 flex items-center gap-2 text-green-700">
                  <FaLeaf /> {item.herb}
                </td>
                <td className="px-4 py-3 text-green-900 font-semibold flex items-center gap-1">
                  <FaRupeeSign /> {item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
);
};

export default MarketPrices;
