 import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaLeaf, FaUserCircle, FaCertificate } from 'react-icons/fa';

// 🌿 Mock Farmer Data
const farmer = {
  id: 'farmer001',
  name: 'Meera Chauhan',
  location: 'Barabanki, Uttar Pradesh',
  contact: '+91 98123 45678',
  age: 42,
  gender: 'Female',
  experienceYears: 12,
  herbSpecialty: 'Brahmi',
  farmingMethod: 'Organic shade drying with bamboo racks',
  trainingCompleted: 9,
  totalTraining: 10,
  avatarUrl: '', // fallback to icon
  certificates: [
    {
      title: 'Ayurvedic Herb Handling Certification',
      issuedBy: 'AyurTrace Institute',
      date: '2024-08-15',
      fileUrl: '#',
  },
    {
      title: 'Moisture Control & Lab Safety',
      issuedBy: 'GreenLabs India',
      date: '2023-11-02',
      fileUrl: '#',
    },
  ],
  overview: `Meera Chauhan is a seasoned herbal farmer specializing in Brahmi cultivation. She follows traditional Ayurvedic drying techniques using bamboo racks and shade-drying beds. Her practices are deeply rooted in seasonal rituals and local wisdom, ensuring high saponin content and minimal moisture loss. Meera mentors younger farmers and actively participates in community-led traceability programs.`,
};

const FarmerProfile = () => {
  const trainingPercent = Math.round((farmer.trainingCompleted / farmer.totalTraining) * 100);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl font-bold text-green-800">🌿 Farmer Profile</h2>
        <p className="text-sm text-gray-600">Empowering tradition through traceable tech</p>
      </motion.div>
  {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-lg p-6 md:flex md:items-start gap-8"
      >
        {/* Avatar */}
        <div className="flex-shrink-0 mb-6 md:mb-0">
          {farmer.avatarUrl ? (
            <img
              src={farmer.avatarUrl}
              alt={`${farmer.name}'s avatar`}
              className="w-28 h-28 rounded-full object-cover border-4 border-green-700"
            />
          ) : (
            <FaUserCircle className="text-7xl text-green-700" />
          )}
        </div>
{/* Info Section */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-green-900 mb-2">{farmer.name}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
            <p className="flex items-center gap-2"><FaMapMarkerAlt /> {farmer.location}</p>
            <p className="flex items-center gap-2"><FaPhoneAlt /> {farmer.contact}</p>
            <p><strong>Age:</strong> {farmer.age}</p>
            <p><strong>Gender:</strong> {farmer.gender}</p>
            <p><strong>Experience:</strong> {farmer.experienceYears} years</p>
            <p><FaLeaf className="inline text-green-600" /> <strong>Herb Specialty:</strong> {farmer.herbSpecialty}</p>
            <p><strong>Method:</strong> {farmer.farmingMethod}</p>
          </div>

          {/* Training Progress */}
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-1">Training Completion:</p>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-green-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${trainingPercent}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">{trainingPercent}% completed</p>
          </div>

{/* Overview */}
          <p className="mt-6 text-sm italic text-gray-600 leading-relaxed">{farmer.overview}</p>
        </div>
      </motion.div>

      {/* Certificates Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10"
      >
        <h4 className="text-xl font-semibold text-green-800 mb-4">📜 Certifications</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {farmer.certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white border border-green-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <h5 className="text-lg font-medium text-green-900 flex items-center gap-2">
                <FaCertificate /> {cert.title}
              </h5>
              <p className="text-sm text-gray-600">Issued by: {cert.issuedBy}</p>
              <p className="text-sm text-gray-500">Date: {cert.date}</p>
              <a
                href={cert.fileUrl}
                className="text-sm text-green-700 underline mt-2 inline-block"
              >
                View Certificate
 </a>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FarmerProfile;


