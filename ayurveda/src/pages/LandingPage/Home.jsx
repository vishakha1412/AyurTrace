 import { motion } from 'framer-motion';
 
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import HerbShowcase from './HerbShowcase';
import AyurTraceLanding from './AyurTraceLanding';
import FloatingBotanicalBackground from './FloatingBotanicalBackground';
import SanskritGlyphBackground from './SanskritGlyphBackground';
import HarvestMap from '../../features/HarvestMap/HarvestMap';
import AyurTraceAbouts from './AyurTraceAbout';

 

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="relative min-h-screen   bg- overflow-hidden text-[#2f3e2f] font-sans bg-[#fdf6e3]">

      {/* Parchment Texture Background */}
      <img
        src="/assets/herbs/neem.png"
        alt="Parchment texture"
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none z-20"
      />
 
       

      
      <SanskritGlyphBackground/>
      <AyurTraceLanding/>
      
     <HerbShowcase/>
      <AyurTraceAbouts/>
     <HarvestMap/>
    
{/* Scroll Reveal Section */}
      <section className="py-20 px-6 space-y-16 relative z-40">
        {[
          { title: 'Seeded with Care', desc: 'Each herb begins its journey in organic soil, nurtured by trusted producers.' },
          { title: 'Harvested with Ritual', desc: 'Collected at peak potency, following Ayurvedic harvesting cycles.' },
          { title: 'Verified with Technology', desc: 'QR codes link every batch to its origin, ensuring full traceability.' },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
            <p className="text-[#4f5f4f]">{item.desc}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Home;





