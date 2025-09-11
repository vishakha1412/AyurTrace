 import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaFileAlt, FaVial, FaMapMarkerAlt } from 'react-icons/fa';

// 🌿 Mock Farmer Journey Data
const farmerJourney = [
  {
    herb: 'Ashwagandha',
    batchId: 'A4103',
    zone: 'Zone A',
    testStatus: 'Passed',
    certificate: 'Ayurvedic Herb Handling Cert.pdf',
    inputs: ['Organic compost', 'Shade drying', 'Bamboo racks'],
  },
  {
    herb: 'Tulsi',
    batchId: 'B5120',
    zone: 'Zone B',
    testStatus: 'Pending',
    certificate: 'Essential Oil Profile Report.pdf',
    inputs: ['Loamy soil', 'Sun drying', 'Manual sorting'],
  },
 {
    herb: 'Brahmi',
    batchId: 'C3099',
    zone: 'Zone C',
    testStatus: 'Rejected',
    certificate: 'Moisture Control Report.pdf',
    inputs: ['Semi-aquatic beds', 'Shade drying', 'Seasonal rituals'],
  },
];

// ✅ Modal Component
const Modal = ({ herb, certificate, inputs, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl"
    >
      <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center gap-2">
        <FaLeaf /> {herb} Details
      </h3>
      <p className="text-sm text-gray-700 mb-2"><strong>Certificate:</strong> {certificate}</p>
      <p className="text-sm text-gray-700 mb-2"><strong>Inputs Used:</strong></p>
      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
        {inputs.map((input, i) => <li key={i}>{input}</li>)}
      </ul>
 <button
        onClick={onClose}
        className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Close
      </button>
    </motion.div>
  </div>
);

const FarmerSummary = () => {
  const [selectedHerb, setSelectedHerb] = useState(null);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl font-bold text-green-800">🌿 Farmer Journey Summary</h2>
        <p className="text-sm text-gray-600">Track herbs, batches, zones, and lab status</p>
      </motion.div>

{/* Table */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-x-auto bg-white rounded-xl shadow-md"
      >
        <table className="min-w-full table-auto text-sm text-left">
          <thead className="bg-green-100 text-green-800">
            <tr>
              <th className="px-4 py-3">Herb</th>
              <th className="px-4 py-3">Batch ID</th>
              <th className="px-4 py-3">Zone</th>
              <th className="px-4 py-3">Test Status</th>
              <th className="px-4 py-3">Details</th>
            </tr>
          </thead>
          <tbody>
            {farmerJourney.map((item, index) => (
              <tr key={index} className="border-b hover:bg-green-50 transition">
                <td className="px-4 py-3 flex items-center gap-2 text-green-700 font-medium">
                  <FaLeaf /> {item.herb}
                </td>
                <td className="px-4 py-3">{item.batchId}</td>
                <td className="px-4 py-3 flex items-center gap-2 text-gray-700">
                  <FaMapMarkerAlt /> {item.zone}
                </td>
        <td className={`px-4 py-3 font-semibold ${
                  item.testStatus === 'Passed' ? 'text-green-600' :
                  item.testStatus === 'Pending' ? 'text-yellow-600' :
                  'text-red-600'
                }`}>
                  {item.testStatus}
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => setSelectedHerb(item)}
                    className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition text-sm"
                  >
                    View Info
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

 {/* Modal */}
      {selectedHerb && (
        <Modal
          herb={selectedHerb.herb}
          certificate={selectedHerb.certificate}
          inputs={selectedHerb.inputs}
          onClose={() => setSelectedHerb(null)}
        />
      )}
    </div>
  );
};

export default FarmerSummary;

