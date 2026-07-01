import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutPreview() {
  return (
    <section className="py-24 md:py-32 bg-coffee-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left: Collage */}
        <div className="relative h-[600px] w-full flex justify-center items-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 left-0 w-2/3 h-2/3 bg-coffee-oat rounded-xl overflow-hidden shadow-lg z-10"
          >
            <img 
              src="/images/about_collage.png" 
              alt="Barista pouring coffee" 
              className="w-full h-full object-cover grayscale-[20%]"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-0 right-0 w-[60%] h-[55%] bg-coffee-charcoal rounded-xl overflow-hidden shadow-2xl z-20"
          >
            <img 
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800" 
              alt="Coffee beans roasting" 
              className="w-full h-full object-cover opacity-90"
            />
          </motion.div>
          
          {/* Decorative element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-coffee-espresso/10 rounded-3xl -z-10 rotate-3"></div>
        </div>

        {/* Right: Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start"
        >
          <h2 className="text-sm font-medium tracking-widest uppercase text-coffee-charcoal/60 mb-4">Our Philosophy</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-coffee-espresso leading-tight mb-8">
            Purity in Every Pour. <br/> Respect for the Bean.
          </h3>
          <p className="text-coffee-charcoal/70 leading-relaxed mb-6 font-light text-lg">
            We believe that extraordinary coffee shouldn't be complicated. It starts with farmers who care, soil that's rich, and roasting methods passed down through generations.
          </p>
          <p className="text-coffee-charcoal/70 leading-relaxed mb-10 font-light text-lg">
            Every cup we serve is a testament to the journey from the highlands of origin directly to your hands. No shortcuts, just pure, honest craft.
          </p>
          
          <Link to="/about" className="inline-flex items-center gap-2 text-coffee-espresso font-semibold border-b border-coffee-espresso pb-1 hover:text-coffee-charcoal hover:border-coffee-charcoal transition-colors">
            Discover Our Story <ArrowRight size={16} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
