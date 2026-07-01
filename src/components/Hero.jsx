import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 1000], [0, 200]);
  const yFloating = useTransform(scrollY, [0, 1000], [0, -100]);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 1.8 } // Wait for loader
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-coffee-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Content */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start pt-12 lg:pt-0"
        >
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-coffee-charcoal/10 bg-coffee-charcoal/5 mb-8">
            <Star size={14} className="text-coffee-espresso fill-coffee-espresso" />
            <span className="text-xs font-medium tracking-widest uppercase text-coffee-charcoal">Est. 1998</span>
          </motion.div>
          
          <div className="overflow-hidden mb-2">
            <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-serif text-coffee-espresso leading-[1.1] tracking-[-0.02em]">
              The Art of
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-serif text-coffee-espresso leading-[1.1] tracking-[-0.02em]">
              <span className="italic text-coffee-charcoal/80">Refined</span> Coffee.
            </motion.h1>
          </div>
          
          <motion.p variants={item} className="text-lg md:text-xl text-coffee-charcoal/70 max-w-md leading-relaxed mb-10 font-light">
            Meticulously sourced, precisely roasted. Experience the deepest flavors born from dedication and craft.
          </motion.p>
          
          <motion.div variants={item} className="flex flex-wrap gap-4 items-center">
            <Link to="/menu" className="group flex items-center gap-3 bg-coffee-espresso text-coffee-cream px-8 py-4 rounded-full font-medium hover:bg-coffee-charcoal transition-colors">
              Explore Our Roasts
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/about" className="px-8 py-4 rounded-full font-medium text-coffee-espresso border border-coffee-espresso/20 hover:bg-coffee-espresso/5 transition-colors">
              Our Philosophy
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
          className="relative h-[600px] w-full mt-12 lg:mt-0"
        >
          {/* Main Image Placeholder */}
          <div className="absolute inset-0 bg-coffee-oat/30 rounded-t-full overflow-hidden shadow-2xl z-0">
            <motion.img 
              style={{ y: yImage }}
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1200" 
              alt="Artisanal Coffee" 
              className="w-full h-[120%] object-cover object-center -mt-[10%]"
            />
            <div className="absolute inset-0 bg-coffee-espresso/10 mix-blend-multiply"></div>
          </div>
          
          {/* Floating Decorative Badge */}
          <motion.div 
            style={{ y: yFloating }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.6, duration: 0.8 }}
            className="absolute bottom-12 -left-8 md:left-[-10%] bg-coffee-cream p-5 shadow-xl rounded-2xl flex items-center gap-4 border border-coffee-charcoal/5 z-20"
          >
            <div className="w-12 h-12 bg-coffee-espresso rounded-full flex items-center justify-center text-coffee-cream font-serif font-bold text-lg">
              4.9
            </div>
            <div>
              <p className="font-serif font-semibold text-coffee-espresso">Top Rated Roasts</p>
              <p className="text-xs text-coffee-charcoal/60">Over 10,000 satisfied lovers.</p>
            </div>
          </motion.div>
          
          {/* Abstract Shape */}
          <div className="absolute -z-10 top-1/4 -right-12 w-64 h-64 bg-coffee-oat/40 rounded-full blur-3xl mix-blend-multiply"></div>
        </motion.div>

      </div>
    </section>
  );
}
