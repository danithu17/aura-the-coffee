import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="pt-24 pb-32 min-h-screen">
      
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif text-coffee-espresso mb-6"
        >
          Visit Us
        </motion.h1>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-serif text-coffee-espresso mb-8">The Flagship Roastery</h2>
            
            <div className="mb-10 space-y-4">
              <h3 className="text-sm uppercase tracking-widest text-coffee-charcoal/50">Location</h3>
              <p className="text-lg text-coffee-charcoal/80">
                123 Artisan Alley<br/>
                Coffee District, NY 10001
              </p>
            </div>
            
            <div className="mb-10 space-y-4">
              <h3 className="text-sm uppercase tracking-widest text-coffee-charcoal/50">Hours</h3>
              <p className="text-lg text-coffee-charcoal/80 flex justify-between max-w-xs">
                <span>Mon - Fri</span> <span>7:00 am - 7:00 pm</span>
              </p>
              <p className="text-lg text-coffee-charcoal/80 flex justify-between max-w-xs">
                <span>Sat - Sun</span> <span>8:00 am - 6:00 pm</span>
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-widest text-coffee-charcoal/50">Contact</h3>
              <p className="text-lg text-coffee-charcoal/80">hello@auraroasters.com</p>
              <p className="text-lg text-coffee-charcoal/80">+1 (555) 123-4567</p>
            </div>
          </motion.div>
          
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-coffee-oat/10 p-8 md:p-12 rounded-2xl"
          >
            <h2 className="text-2xl font-serif text-coffee-espresso mb-8">Send an Inquiry</h2>
            <form className="space-y-6 flex flex-col">
              <div>
                <label className="block text-sm text-coffee-charcoal/60 mb-2">Name</label>
                <input type="text" className="w-full bg-transparent border-b border-coffee-charcoal/20 py-3 focus:outline-none focus:border-coffee-espresso transition-colors text-coffee-charcoal" />
              </div>
              <div>
                <label className="block text-sm text-coffee-charcoal/60 mb-2">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-coffee-charcoal/20 py-3 focus:outline-none focus:border-coffee-espresso transition-colors text-coffee-charcoal" />
              </div>
              <div>
                <label className="block text-sm text-coffee-charcoal/60 mb-2">Message</label>
                <textarea rows="4" className="w-full bg-transparent border-b border-coffee-charcoal/20 py-3 focus:outline-none focus:border-coffee-espresso transition-colors text-coffee-charcoal resize-none"></textarea>
              </div>
              <button type="button" className="self-start mt-4 bg-coffee-espresso text-coffee-cream px-8 py-3 rounded-full font-medium hover:bg-coffee-charcoal transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>
          
        </div>
      </section>
      
    </div>
  );
}
