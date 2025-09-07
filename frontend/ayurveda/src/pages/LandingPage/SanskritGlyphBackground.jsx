import { motion } from 'framer-motion'

const glyphs = [
  { char: 'ॐ', top: '15%', left: '10%', delay: 0 },
  { char: 'श', top: '40%', left: '70%', delay: 1 },
  { char: 'ध', top: '65%', left: '25%', delay: 2 },
  { char: 'व', top: '80%', left: '60%', delay: 3 },
]

export default function SanskritGlyphBackground() {
  return (
    <div className="fixed inset-0  pointer-events-none overflow-hidden">
      {glyphs.map((glyph, index) => (
        <motion.div
          key={index}
          className="absolute text-[5rem] lg:text-[7rem] font-serif text-[#3b2f2f]/10 select-none"
          style={{ top: glyph.top, left: glyph.left }}
          initial={{ opacity: 0.05, scale: 1 }}
          animate={{ opacity: [0.05, 0.1, 0.05], scale: [1, 1.1, 1] }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: 'easeInOut',
            delay: glyph.delay,
          }}
        >
          {glyph.char}
        </motion.div>
      ))}
    </div>
  )
}
