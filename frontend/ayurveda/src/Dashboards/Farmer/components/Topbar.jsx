 import React from 'react';

const Topbar = () => (
  <div className="w-full bg-white shadow flex justify-between items-center px-6 py-4">
    <h1 className="text-xl font-semibold text-green-800">Farmer Dashboard</h1>
    <div className="flex gap-4 items-center">
      <span className="text-gray-700 font-medium">Farmer</span>
      <button className="text-green-700 hover:text-green-900">Profile</button>
      <button className="text-red-600 hover:text-red-800">Logout</button>
    </div>
  </div>
);

export default Topbar;
