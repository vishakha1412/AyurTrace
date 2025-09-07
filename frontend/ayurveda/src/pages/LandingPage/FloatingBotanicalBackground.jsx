 
import { motion } from 'framer-motion'

const leaves = [
  { src: '/assets/leaf1.png', top: '10%', left: '5%', delay: 0 },
  { src: '/assets/leaf2.png', top: '30%', left: '80%', delay: 1 },
  { src: '/assets/leaf3.png', top: '60%', left: '20%', delay: 2 },
  { src: '/assets/leaf4.png', top: '75%', left: '65%', delay: 3 },
 
]

export default function FloatingBotanicalBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {leaves.map((leaf, index) => (
        <motion.img
          key={index}
          src={leaf.src}
          alt={`Floating Leaf ${index}`}
          className="absolute w-16 opacity-60 z-20 rounded-4xl"
          style={{ top: leaf.top, left: leaf.left }}
          initial={{ y: 0, rotate: 0 }}
          animate={{ y: [0, 30, 0], rotate: [0, 15, -15, 0] }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: 'easeInOut',
  delay: leaf.delay,
          }}
        />
      ))}
    </div>
  )
}
