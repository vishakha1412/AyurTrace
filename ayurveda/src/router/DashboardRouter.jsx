import { Navigate } from 'react-router-dom';

export default function DashboardRouter({ role }) {
  switch (role) {
    case 'Farmer':
      return <Navigate to="/dashboard/farmer" />;
    case 'Lab Technician':
      return <Navigate to="/dashboard/lab" />;
    case 'Processor':
      return <Navigate to="/dashboard/processor" />;
    case 'Retailer':
      return <Navigate to="/dashboard/retailer" />;
    case 'Ayurvedic Expert':
      return <Navigate to="/dashboard/expert" />;
    case 'Admin':
      return <Navigate to="/dashboard/admin" />;
    default:
      return <Navigate to="/dashboard/default" />;
  }
}
