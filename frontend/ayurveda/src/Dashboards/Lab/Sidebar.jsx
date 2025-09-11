import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md p-6 space-y-4">
      <h2 className="text-xl font-bold text-green-700">🌿 AyurTrace</h2>
      <nav className="space-y-2 font-serif font-bold bg-green-50 h-screen p-2">
        <Link to="" className="block text-gray-700 hover:text-green-600 hover:border-b-2">Dashboard</Link>
        <Link to="samples" className="block text-gray-700 hover:text-green-600 hover:border-b-2">Herb Samples</Link>
        <Link to="results" className="block text-gray-700 hover:text-green-600 hover:border-b-2">Testing Results</Link>
        <Link to="inventory" className="block text-gray-700 hover:text-green-600 hover:border-b-2">Inventory Management</Link>
        <Link to="quality" className="block text-gray-700 hover:text-green-600 hover:border-b-2">Quality Control</Link>
        <Link to="settings" className="block text-gray-700 hover:text-green-600 hover:border-b-2">Settings</Link>
      </nav>
    </aside>
  );
}
