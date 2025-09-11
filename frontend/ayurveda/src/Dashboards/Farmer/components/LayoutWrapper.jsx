import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa';

const LayoutWrapper = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Topbar */}
      <div className="sticky top-0 z-40">
        <Topbar />
      </div>

      {/* Mobile Sidebar Toggle */}
      <div className="sm:hidden flex justify-between items-center px-4 py-2 bg-green-800 text-white">
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-xl focus:outline-none"
        >
          <FaBars />
 </button>
        <span className="text-sm font-semibold">AyurTrace Dashboard</span>
      </div>

      {/* Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar for desktop */}
        <aside className="hidden sm:block w-64 bg-green-900 text-white p-4">
          <Sidebar />
        </aside>

        {/* Sidebar for mobile (overlay) */}
        {sidebarOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 left-0 w-64 bg-green-900 text-white p-4 z-50 shadow-lg"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Navigation</h3>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-white text-xl"
              >
                ✕
              </button>
 </div>
            <Sidebar />
          </motion.div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LayoutWrapper;
