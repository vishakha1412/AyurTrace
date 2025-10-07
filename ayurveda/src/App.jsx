 
 import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import MainRoutes from './router/MainRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : <div  >
    <Navbar/>
    <MainRoutes />
    <Footer/>
    </div>;
}

export default App;

