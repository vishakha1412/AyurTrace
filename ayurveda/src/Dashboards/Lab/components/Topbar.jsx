export default function Topbar() {
  return (
    <header className="bg-white shadow flex justify-between items-center px-6 py-4">
      <h1 className="text-xl font-semibold text-green-700">Lab Technician Dashboard</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-700">Name</span>
        <img src="https://via.placeholder.com/32" alt="Profile" className="rounded-full" />
        <button className="text-gray-500 hover:text-red-600">🔔</button>
        <button className="text-sm text-red-600 font-medium">Logout</button>
      </div>
    </header>
  );
}
