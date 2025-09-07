  import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const herbs = [
  { name: 'Ashwagandha', image: '/assets/herbs/ashwagandha.png' },
  { name: 'Brahmi', image: '/assets/herbs/brahmi.png' },
  { name: 'Neem', image: '/assets/herbs/neem.png' },
  { name: 'Shatavari', image: '/assets/herbs/shatavari.png' },
  { name: 'Tulsi', image: '/assets/herbs/tulsi.png' },
]

export default function AyurTraceAbouts() {
    const navigate=useNavigate();
  return (
    <section className="relative w-full min-h-screen bg-[#fdf6e3]   flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden">
        <div className='flex md:flex-row max-md:flex-col justify-between items-center'>
      <div className='flex flex-col items-center justify-center text-center overflow-hidden' >
      {/* Leaf Icon */}
      <motion.img
        src="/assets/leaf1.png"
        alt="AyurTrace Leaf"
        className="w-12 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />

     
      <motion.h1
        className="text-5xl font-serif text-[#3b2f2f] mb-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        AyurTrace
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="max-w-2xl text-lg text-[#4f3d3d] font-medium font-serif mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
         AyurTrace bridges ancient wisdom with modern transparency. By using blockchain technology, we ensure every herb’s journey—from seed to supplement—is traceable, tamper-proof, and trustworthy. Whether in agriculture or Ayurveda, our platform empowers producers and consumers with verified data, geo-tagged sourcing, and smart contracts that honor tradition while embracing innovation.

      </motion.p>

      {/* Herb Cards */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 mb-10 z-50"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
  staggerChildren: 0.2,
            },
          },
        }}
      >
        {herbs.map((herb, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={herb.image}
              alt={herb.name}
              className="w-20 h-20 object-cover rounded-md mb-2 z-50"
            />
            <p className="text-sm font-semibold text-[#3b2f2f]">{herb.name}</p>
          </motion.div>
        ))}
      </motion.div>

     
       </div>
       <motion.div className='z-40  '>
        <img src='/assets/main-logo.png' alt='logo'
        className='mt-10 rounded-full lg:h-115 md:h-85  max-md:h-78 shadow-2xl'
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}/>
       </motion.div>
       </div>
    </section>
  )
}
