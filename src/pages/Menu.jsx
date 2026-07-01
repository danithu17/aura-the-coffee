import { motion } from 'framer-motion';

const menuCategories = [
  {
    name: "Espresso Bar",
    items: [
      { name: "Signature Espresso", desc: "Our house blend with notes of dark chocolate and cherry.", price: "$4.00" },
      { name: "Macchiato", desc: "Espresso marked with a dollop of steamed milk.", price: "$4.50" },
      { name: "Cortado", desc: "Equal parts espresso and perfectly textured milk.", price: "$4.75" },
      { name: "Flat White", desc: "Velvety microfoam over a double ristretto.", price: "$5.00" },
      { name: "Latte", desc: "Espresso with creamy steamed milk and light foam.", price: "$5.50" }
    ]
  },
  {
    name: "Filter & Pour Over",
    items: [
      { name: "Batch Brew", desc: "Rotating selection of single-origin filter coffees.", price: "$3.50" },
      { name: "Chemex", desc: "Clean, bright, and nuanced pour-over for two.", price: "$8.00" },
      { name: "V60 Pour Over", desc: "Precision brewed single-origin of your choice.", price: "$6.00" },
      { name: "Kyoto Cold Brew", desc: "Slow-dripped for 12 hours, smooth and low acidity.", price: "$5.50" }
    ]
  },
  {
    name: "Artisan Pastries",
    items: [
      { name: "Butter Croissant", desc: "Flaky, layered perfection baked fresh daily.", price: "$4.50" },
      { name: "Almond Croissant", desc: "Filled with frangipane and topped with toasted almonds.", price: "$5.50" },
      { name: "Morning Bun", desc: "Laminated dough with cinnamon and orange zest.", price: "$5.00" },
      { name: "Seasonal Tart", desc: "Fresh fruit and vanilla custard in a buttery shell.", price: "$6.50" }
    ]
  }
];

export default function Menu() {
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
          Our Menu
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-coffee-charcoal/70 font-light max-w-2xl mx-auto"
        >
          Curated selections highlighting the natural characteristics of our ethically sourced beans, paired with artisanal pastries.
        </motion.p>
      </section>

      {/* Menu List */}
      <section className="max-w-5xl mx-auto px-6 md:px-12">
        {menuCategories.map((category, catIndex) => (
          <motion.div 
            key={category.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20 last:mb-0"
          >
            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-3xl font-serif text-coffee-espresso">{category.name}</h2>
              <div className="flex-grow h-px bg-coffee-charcoal/10"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="group">
                  <div className="flex justify-between items-baseline mb-2 border-b border-coffee-charcoal/5 pb-2">
                    <h3 className="text-lg font-serif text-coffee-charcoal group-hover:text-coffee-espresso transition-colors">{item.name}</h3>
                    <span className="text-coffee-espresso font-medium">{item.price}</span>
                  </div>
                  <p className="text-sm text-coffee-charcoal/60 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>
      
    </div>
  );
}
