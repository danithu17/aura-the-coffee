import { motion } from 'framer-motion';

export default function PageLoader() {
  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-coffee-espresso"
    >
      <div className="overflow-hidden">
        <motion.h1 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-serif text-coffee-cream tracking-widest uppercase"
        >
          Aura
        </motion.h1>
      </div>
    </motion.div>
  );
}
