import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -15 },
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.5,
};

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-coffee-cream">
      <Navbar />
      <motion.main 
        className="flex-grow pt-20" // Padding for fixed navbar
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
}
