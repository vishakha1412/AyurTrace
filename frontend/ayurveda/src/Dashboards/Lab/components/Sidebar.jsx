 import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import SideConfig from '../config/sideConfig';

const Sidebar = () => {
  const location = useLocation();
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-green-900 text-white p-4 w-full sm:w-64 min-h-screen overflow-y-auto"
    >
      <h2 className="text-xl font-bold mb-6 text-center">🌿 Farmer Panel</h2>

      {/* Navigation */}
      <nav className="space-y-2">
        {SideConfig.map(({ name, path, icon, description }, index) => {
          const isActive = location.pathname.includes(path);
          return (
            <motion.div
              key={name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
 <Link
                to={path}
                onMouseEnter={() => setHovered(name)}
                onMouseLeave={() => setHovered(null)}
                className={`flex flex-col sm:flex-row items-start sm:items-center gap-2 p-3 rounded-lg transition ${
                  isActive ? 'bg-green-700' : 'hover:bg-green-800'
                }`}
              >
                <span className="text-lg">{icon}</span>
                <div>
                  <span className="font-semibold">{name}</span>
                  {hovered === name && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-xs text-green-100 italic"
                    >
                      {description}
                    </motion.p>
                  )}
                </div>
              </Link>
            </motion.div>
          );
        })}
      </nav>
    </motion.div>
  );
};
export default Sidebar;
