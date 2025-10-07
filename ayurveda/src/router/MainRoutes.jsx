import { Routes, Route } from 'react-router-dom';
import Home from '../pages/LandingPage/Home';
import NotFound from '../pages/NotFound';
 
import About from '../pages/About';
 
import RegisterForm from '../pages/Registerform';
import LayoutWrappers from '../Dashboards/Lab/components/LayoutWrapper';
import LabDashboard from '../Dashboards/Lab/labComponents/LabDashboard';
import { sidebarConfig } from '../Dashboards/Farmer/config/sideConfig';
import LayoutWrapper from '../Dashboards/Farmer/components/LayoutWrapper';
import Dashboard from '../Dashboards/Farmer/farmer/Dashboard';
import Login from '../pages/Login';
import SidebarConfig from '../Dashboards/Lab/config/sideConfig';

const MainRoutes = () => (
 
    <Routes>
      <Route path="/" element={<Home />} />
 
      <Route path='/about' element={<About/>}/>
      <Route path="*" element={<NotFound />} />
      <Route path='dashboard' element={<Dashboard/>}/>
      
     
      <Route path='/dashboard/lab/*' element={<LayoutWrapper/>}>
      {SidebarConfig.map(({path,component:Component}) =>
      Component ? <Route key={path} path={path} element={<Component/>}/>:null)}
      </Route>
      <Route path='/register' element={<RegisterForm/>}/>
      <Route path='/login' element={<Login/>}/>
       <Route path="/dashboard/farmer" element={<LayoutWrapper />}>
          {sidebarConfig.map(({ path, component: Component }) =>
            Component ? <Route key={path} path={path} element={<Component />} /> : null
          )}
        </Route>
      
    </Routes>
  
);

export default MainRoutes;

