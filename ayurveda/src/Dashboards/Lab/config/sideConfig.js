 
import LabDashboard from '../labComponents/LabDashboard';
import SampleTracker from '../labComponents/SampleTracker';
import TestEntry from '../labComponents/TestEntry';
import QualityReports from '../labComponents/QualityReports';
import Inventory from '../labComponents/Inventory';
import Alerts from '../labComponents/Alerts';
import Profile from '../labComponents/Profile';

const SideConfig = [
  {
    name: 'Dashboard',
    path: ' ',
    component: LabDashboard,
    icon: '📊',
    exact: true,
  },
  {
    name: 'Sample Tracker',
    path: ' samples',
    component: SampleTracker,
    icon: '🧪',
    exact: false,
  },
   {
    name: 'Test Entry',
    path: 'tests',
    component: TestEntry,
    icon: '📝',
    exact: false,
  },
  {
    name: 'Quality Reports',
    path: ' reports',
    component: QualityReports,
    icon: '📄',
    exact: false,
  },
  {
    name: 'Inventory',
    path: ' inventory',
    component: Inventory,
    icon: '📦',
    exact: false,
  },
  {
    name: 'Alerts & Flags',
    path: ' alerts',
    component: Alerts,
    icon: '🚨',
    exact: false,
  },
  {
    name: 'Profile',
 path: ' profile',
    component: Profile,
    icon: '👤',
    exact: false,
  },
];

export default SideConfig;
