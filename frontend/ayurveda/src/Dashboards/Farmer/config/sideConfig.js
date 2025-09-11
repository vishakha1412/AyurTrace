import {
  FaChartLine, FaLeaf, FaBell, FaUser, FaTable, FaNetworkWired,
  FaCamera, FaGlobe, FaAccessibleIcon
} from 'react-icons/fa';
import Dashboard from '../farmer/Dashboard';
import FarmerProfile from '../farmer/Profile';
import Earnings from '../farmer/Earnings';
import BatchTracker from '../farmer/BatchTracker';
import LabStatus from '../farmer/LabStatus';
import RejectionInsights from '../farmer/RejectedInsights';
import SmartAnalytics from '../farmer/SmartAnalytics';
import Zones from '../farmer/Zones';
import MarketPrices from '../farmer/MarketPrices';
import HerbAlerts from '../farmer/HerbAlerts';
import HerbInfo from '../farmer/HerbInfo';
import ConnectivityStatus from '../farmer/ConnectivityStatus';
import AccessibilityTools from '../farmer/AccessibilityTools';
import QuickCapture from '../farmer/QuickCapture';
import FarmerSummaryTable from '../farmer/FarmerSummaryTable';
import LifecycleOverview from '../farmer/LifecycleOverview';

export const sidebarConfig = [
  { name: 'Dashboard', path: '',  component:Dashboard ,icon: FaChartLine },
  { name: 'Profile', path: 'profile',  component:FarmerProfile, icon: FaUser,  },
  { name: 'Lifecycle Overview', path: 'lifecycle',  component:LifecycleOverview, icon: FaLeaf },
  { name: 'Earnings', path: 'earnings',  component:Earnings, icon: FaChartLine },
  { name: 'Batch Tracker', path: 'batch',  component:BatchTracker, icon: FaLeaf },
  { name: 'Lab Status', path: 'lab-status',  component:LabStatus, icon: FaTable },
  { name: 'Rejected Insights', path: 'rejected-insights',  component:RejectionInsights, icon: FaBell },
  { name: 'Smart Analytics', path: 'smart-analytics',  component:SmartAnalytics, icon: FaChartLine },
  { name: 'Zones', path: 'zones',  component:Zones, icon: FaGlobe },
  { name: 'Market Prices', path: 'market-prices',  component:MarketPrices, icon: FaChartLine },
  { name: 'Herb Alerts', path: 'herb-alerts',  component:HerbAlerts, icon: FaBell },
  { name: 'Herb Info', path: 'herb-info',  component:HerbInfo, icon: FaLeaf },
 
  { name: 'Quick Capture', path: 'quick-capture',  component:QuickCapture, icon: FaCamera },
  { name: 'Summary Table', path: 'summary',  component:FarmerSummaryTable, icon: FaTable },
  
];
