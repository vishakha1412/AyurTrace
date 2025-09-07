import { motion } from 'framer-motion';

const Loader = () => (
  <motion.div
    className="h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-yellow-200"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.img
      src="/assets/main-logo.png"
      alt="Ayurveda Logo"
      initial={{ scale: 0 }}
      animate={{ scale: 1.2 }}
      transition={{ duration: 1.5 }}
      className="h-[50%] rounded-full opacity-65"
    />
  </motion.div>
);

export default Loader;

