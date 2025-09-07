import { Routes, Route } from 'react-router-dom';
import Home from '../pages/LandingPage/Home';
import NotFound from '../pages/NotFound';
import DashboardEnhancedStyled from '../features/Dashboard/DashboardEnhanced';
import About from '../pages/About';

const MainRoutes = () => (
 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<DashboardEnhancedStyled />} />
      <Route path='/about' element={<About/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  
);

export default MainRoutes;

