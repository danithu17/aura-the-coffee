import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-24 pb-32">
      
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 text-center mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif text-coffee-espresso mb-6"
        >
          Our Story
        </motion.h1>
      </section>

      {/* Editorial Content */}
      <section className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-serif text-coffee-espresso leading-relaxed mb-6">
              It started with a simple belief: coffee is an agricultural product that deserves reverence.
            </h2>
            <p className="text-coffee-charcoal/70 font-light leading-relaxed mb-6">
              Founded in 1998, Aura began as a small roasting operation in a retrofitted garage. We spent our early days obsessing over temperature curves, origin profiles, and the subtle chemistry of extraction. 
            </p>
            <p className="text-coffee-charcoal/70 font-light leading-relaxed">
              We travel directly to the farms, forming lasting relationships with the families who cultivate the beans. This direct trade model ensures fair compensation for farmers and the highest quality for our patrons.
            </p>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative h-[500px]"
          >
             <img 
               src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800"
               alt="Pouring coffee"
               className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
             />
          </motion.div>
        </div>
      </section>
      
    </div>
  );
}
