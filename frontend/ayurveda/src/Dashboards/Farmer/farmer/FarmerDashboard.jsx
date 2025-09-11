 import React from 'react';
import Header from './farmer/Header';
import LifecycleOverview from './farmer/LifecycleOverview';
import BatchTracker from './farmer/BatchTracker';
import Earnings from './farmer/Earnings';
import Zones from './farmer/Zones';
import QuickCapture from './farmer/QuickCapture';
import LabStatus from './farmer/LabStatus';
import RejectedInsights from './farmer/RejectedInsights';
import Profile from './farmer/Profile';
 
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import HerbInfo from './farmer/HerbInfo';
import ConnectivityStatus from './farmer/ConnectivityStatus';
import MarketPrices from './farmer/MarketPrices';
import HerbAlerts from './farmer/HerbAlerts';
import  SmartAnalytics from './farmer/SmartAnalytics';
import farmerData from '../../services/farmerData';
import AccessibilityTools from './farmer/AccessibilityTools';
import BatchJourney from './farmer/BatchJourney';
 
import { useFarmerData } from '../../hooks/useFarmerData';

import batches from '../../services/batches';
import labTests from '../../services/labTests';
import rejections from '../../services/rejections';
import analytics from '../../services/analytics';
//import FarmerSummaryTable from './farmer/FarmerSummaryTable';
import HarvestMap from '../../features/HarvestMap/HarvestMap';
import LayoutWrapper from './components/LayoutWrapper';
import FarmerRoutes from './components/FarmerRoutes';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import { Routes,Route, Router } from 'react-router-dom';
import { sidebarConfig } from './config/sideConfig';

 


function FarmerDashboard() {
    const { i18n } = useTranslation();
      const farmer = useFarmerData('farmer001', true); // flip to false for live API

 
  useEffect(() => {
    const rtlLanguages = ['ur', 'ar', 'fa'];
    document.body.dir = rtlLanguages.includes(i18n.language) ? 'rtl' : 'ltr';
  }, [i18n.language]);

  if (!farmer) return <p>Loading...</p>;

  return (
    <>
    <div className="flex">
    <Sidebar />
    <div className="flex-1 flex flex-col min-h-screen bg-gray-50 ml-64">
      <Topbar />
      <main className="p-6">
        <Outlet /> {/* This is where nested routes will render */}
      </main>
    </div>
  </div>

  

    </>
   

  );
}

export default FarmerDashboard;

/* <div className="bg-green-50 min-h-screen p-6 space-y-8">
  <Header name={farmer.profile.name} language={farmer.profile.language} />

 
  <div >
    
    <ConnectivityStatus status={farmer.connectivityStatus} />
    <AccessibilityTools settings={farmer.accessibilityTools} />
  </div>

 
  <div className="space-y-6">
    <LifecycleOverview lifecycle={farmer.lifecycle} />
     
    <div  >
      <BatchTracker data={farmer.batchTracker} />
      <BatchJourney journey={farmer.batchJourney.journey} />
    </div>
    <Zones data={farmer.zones} />
  </div>
 
  <div  >
    <LabStatus tests={labTests} />
    
    <RejectedInsights rejections={rejections} />
    <SmartAnalytics analytics={analytics} />
    <MarketPrices price={farmer.marketPrices} />
  </div>

 
  <div  >
    <Earnings data={farmer.earnings} />
    <HerbInfo data={farmer.herbInfo} />
  </div>
  <HerbAlerts data={farmer.herbAlerts} />
  <HarvestMap herbs={farmer.herbInfo}/>

 
  <QuickCapture data={farmer.quickCapture} />
  <Profile farmer={farmer.profile} />
</div> */