import React from 'react';
import { motion } from 'framer-motion';
 
 

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AboutSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="space-y-10 text-lg leading-relaxed font-serif"
    >
      <section>
        <p>
          AyurTrace is a blockchain-powered traceability platform rooted in Ayurvedic tradition. We believe that every herb, every farmer, and every healing product deserves a transparent journey — from soil to soul.
        </p>
      </section>

      <section className="flex items-center gap-4">
        <img src='/assets/herbs/tulsi.png' alt="Tulsi Icon" className="w-12 h-12" />
        <p>
          🌱 Our system begins with farmers creating digital blocks that record the origin, harvest date, and eco-tag of each commodity. These blocks are immutable and linked to every step of the supply chain.
        </p>
      </section>
<section className="flex items-center gap-4">
        <img src='/assets/herbs/ashwagandha.png ' alt="Ashwagandha Icon" className="w-12 h-12" />
        <p>
          🧪 Lab testing and packaging are recorded on-chain. Only verified transporters can update the trace block, ensuring authenticity and preventing adulteration.
        </p>
      </section>

      <section>
        <p>
          📜 Consumers receive a digital ledger — a scroll of trust — that shows the full journey of their product. Each block is cryptographically linked, rejecting tampering and ensuring quality.
        </p>
      </section>

      <section>
        <p>
          🌍 AyurTrace supports international exports, simplifies audits, and builds consumer confidence through smart traceability. Our vision is to make Ayurvedic supply chains emotionally engaging, culturally authentic, and technologically transparent.
        </p>
      </section>

      <section>
        <p>
          🔗 Every product is a story. Every story is a block. And every block is a promise — of purity, sustainability, and trust.
        </p>
      </section>

      <motion.img
        src='/assets/leaf1.png'
        alt="Floating Leaf"
        className="w-16 h-16 mx-auto mt-10 animate-bounce"
      />
    </motion.div>
  );
  };

export default AboutSection;
