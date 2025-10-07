 import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import DashboardRouter from '../../router/DashboardRouter';

const herbs = [
  { name: 'Ashwagandha', image: '/assets/herbs/ashwagandha.png' },
  { name: 'Brahmi', image: '/assets/herbs/brahmi.png' },
  { name: 'Neem', image: '/assets/herbs/neem.png' },
  { name: 'Shatavari', image: '/assets/herbs/shatavari.png' },
  { name: 'Tulsi', image: '/assets/herbs/tulsi.png' },
]

export default function AyurTraceLanding() {
    const navigate=useNavigate();
  return (
    <section className="relative w-full min-h-screen bg-[#fdf6e3] bg-[url('/assets/parchment-texture.png')] bg-cover flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden">
      
      {/* Leaf Icon */}
      <motion.img
        src="/assets/leaf1.png"
        alt="AyurTrace Leaf"
        className="w-12 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />

      {/* Title */}
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
        className="max-w-2xl text-lg text-[#4f3d3d] font-medium mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        Trace the journey of every herb — from seed to supplement — with full transparency, trust, and tradition.
      </motion.p>

      {/* Herb Cards */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 mb-10"
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
            className="bg-white rounded-xl shadow-md p-4 w-32 flex flex-col items-center z-40"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={herb.image}
              alt={herb.name}
              className="w-20 h-20 object-cover rounded-md mb-2 z-40"
            />
            <p className="text-sm font-semibold text-[#3b2f2f] ">{herb.name}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button */}
<motion.button
        className="px-6 py-3 bg-[#3ac09c] text-white rounded-full shadow-lg hover:bg-[#2ea07e] transition-all font-semibold z-40"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.5 }}  onClick={() => navigate( '/register')}
      >
        Explore Dashboard
      </motion.button>
    </section>
  )
}
