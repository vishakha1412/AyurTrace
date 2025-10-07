 import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const herbs = [
  { name: 'Tulsi   ', icon: '/assets/herbs/tulsi.png' },
  { name: 'Ashwagandha', icon: '/assets/herbs/ashwagandha.png' },
  { name: 'Brahmi', icon: '/assets/herbs/brahmi.png' },
  { name: 'Neem', icon: '/assets/herbs/neem.png' },
  { name: 'Shatavari', icon: '/assets/herbs/shatavari.png' }
    
];
const dupliateHerbs=[...herbs];
 

const HerbShowcase = () => {
//  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    
    <section className="relative  p-3 bg-[#e8e5d9] overflow-hidden">
      
      <h2 className="text-3xl font-semibold text-center mb-4 text-[#2f3e2f]">
        Explore Our Featured Herbs
      </h2>

      <motion.div
       // ref={ref}
        className="flex gap-12 px-6 overflow-hidden whitespace-nowrap w-full "
        initial={{ x: '100%' }}
        animate= {{x:['0%','-100%',]}}
        transition={ {duration: 5, ease: 'linear' ,  repeat:Infinity,}}
      >
        {herbs.map((herb, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center bg-white   p-3 rounded-xl shadow-md transition-all duration-300 
              'hover:shadow-[0_0_20px_#a3c9a3] z-50'  
            `}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={ { opacity: 1, scale: 1 } }
            transition={{ duration: 0.6}}
          >
            <img
              src={herb.icon}
              alt={herb.name}
              className=" h-full md:min-w-[200px]  max-md:min-w-[60px] "
            />
            <span className="text-lg font-semibold text-[#3f4f3f] tracking-wide">
              {herb.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HerbShowcase;



