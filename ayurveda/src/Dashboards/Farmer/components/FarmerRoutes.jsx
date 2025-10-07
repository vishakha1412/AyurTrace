import { Routes, Route } from 'react-router-dom';
import AccessibilityTools from '../farmer/AccessibilityTools';
import BatchJourney from '../farmer/BatchJourney';
import BatchTracker from '../farmer/BatchTracker';
import ConnectivityStatus from '../farmer/ConnectivityStatus';
import Earnings from '../farmer/Earnings';
import FarmerSummaryTable from '../farmer/FarmerSummaryTable';
import Header from '../farmer/Header';
import HerbAlerts from '../farmer/HerbAlerts';
import HerbInfo from '../farmer/HerbInfo';
import LabStatus from '../farmer/LabStatus';
import LifecycleOverview from '../farmer/LifecycleOverview';
import MarketPrices from '../farmer/MarketPrices';
import Profile from '../farmer/Profile';
import QuickCapture from '../farmer/QuickCapture';
import RejectedInsights from '../farmer/RejectedInsights';
import SmartAnalytics from '../farmer/SmartAnalytics';
import Zones from '../farmer/Zones';
import FarmerDashboard from '../FarmerDashboard';
 


export default function FarmerRoutes() {
  return (
    <Routes>
      <Route path='/dashboard/farmer/' element={<FarmerDashboard/>}>
      <Route path="/profile" element={<Profile />} />
      <Route path="/batch-tracker" element={<BatchTracker />} />
      <Route path="/batch-journey" element={<BatchJourney />} />
      <Route path="/earnings" element={<Earnings />} />
      <Route path="/lab-status" element={<LabStatus />} />
      <Route path="/rejected-insights" element={<RejectedInsights />}   />
      <Route path="/smart-analytics" element={<SmartAnalytics />} />
      <Route path="/zones" element={<Zones />} />
      <Route path="/market-prices" element={<MarketPrices />} />
      <Route path="/herb-info" element={<HerbInfo />} />
      <Route path="/herb-alerts" element={<HerbAlerts />} />
      <Route path="/connectivity" element={<ConnectivityStatus />} />
      <Route path="/accessibility" element={<AccessibilityTools />} />
      <Route path="/quick-capture" element={<QuickCapture />} />
 
      <Route path="/lifecycle" element={<LifecycleOverview />} />
      <Route path="/header" element={<Header />} />
      </Route>
    </Routes>
  );
}
