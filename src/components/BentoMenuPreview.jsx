import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const items = [
  {
    id: 1,
    title: "Signature Espresso",
    desc: "Rich crema, dark chocolate notes.",
    price: "$4.50",
    img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=800",
    className: "col-span-1 md:col-span-2 row-span-2 h-[400px] md:h-auto",
  },
  {
    id: 2,
    title: "Pour Over",
    desc: "Ethiopian Yirgacheffe, floral & bright.",
    price: "$5.50",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600",
    className: "col-span-1 row-span-1 h-[250px]",
  },
  {
    id: 3,
    title: "Artisan Pastry",
    desc: "Butter croissant, baked daily.",
    price: "$4.00",
    img: "https://images.unsplash.com/photo-1509365465994-3e50b7b12d1b?auto=format&fit=crop&q=80&w=600",
    className: "col-span-1 row-span-1 h-[250px]",
  }
];

function TiltCard({ item, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-xl ${item.className}`}
    >
      <div className="absolute inset-0 bg-coffee-charcoal/20 group-hover:bg-coffee-charcoal/40 transition-colors duration-500 z-10"></div>
      <motion.img 
        src={item.img} 
        alt={item.title} 
        style={{ translateZ: "20px" }}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      
      <div className="absolute inset-0 p-8 flex flex-col justify-end z-20" style={{ transform: "translateZ(40px)" }}>
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex justify-between items-end mb-2">
            <h4 className="text-2xl font-serif text-coffee-cream">{item.title}</h4>
            <span className="text-coffee-cream font-medium">{item.price}</span>
          </div>
          <p className="text-coffee-oat/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {item.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function BentoMenuPreview() {
  return (
    <section className="py-24 md:py-32 bg-coffee-oat/20" style={{ perspective: 1000 }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-medium tracking-widest uppercase text-coffee-charcoal/60 mb-4">Curated Offerings</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-coffee-espresso">Best Sellers</h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link to="/menu" className="group inline-flex items-center gap-2 text-coffee-espresso font-semibold">
              View Full Menu 
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {items.map((item, index) => (
            <TiltCard key={item.id} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
