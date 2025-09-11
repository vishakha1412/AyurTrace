 import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import DashboardHome from './DashboardHome';
import HerbSamples from './HerbSamples';
import TestingResults from  './TestingResults';
import Inventory from './Inventory';
import QualityControl from './QualityControl';
import Settings from './Settings';

export default function LabDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <main className="p-6">
          <Routes>
            <Route path="" element={<DashboardHome />} />
            <Route path="samples" element={<HerbSamples />} />
            <Route path="results" element={<TestingResults />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="quality" element={<QualityControl />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
