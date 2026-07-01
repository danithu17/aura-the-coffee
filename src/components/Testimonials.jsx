import { motion, useAnimationFrame } from 'framer-motion';
import { useRef, useState } from 'react';

const testimonials = [
  { quote: "The attention to detail in every cup is simply unmatched. It's not just coffee; it's a daily ritual I deeply cherish.", author: "Elena R.", role: "Local Artist" },
  { quote: "Aura has elevated my standard for what espresso should taste like. The richness and depth are consistently perfect.", author: "Marcus T.", role: "Coffee Enthusiast" },
  { quote: "A beautifully curated space with roasts that tell a story. I've never tasted a pour-over this clean and vibrant.", author: "Sarah L.", role: "Food Critic" },
  { quote: "Their commitment to direct trade and sustainable sourcing makes every sip even better. Absolutely highly recommended.", author: "James W.", role: "Creative Director" },
];

export default function Testimonials() {
  const baseVelocity = -0.5;
  const x = useRef(0);
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useAnimationFrame((t, delta) => {
    if (isHovered) return;
    
    x.current += baseVelocity * (delta / 16);
    if (x.current <= -50) {
      x.current = 0;
    }
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${x.current}%)`;
    }
  });

  return (
    <section className="py-32 bg-coffee-espresso text-coffee-cream relative overflow-hidden">
      <div className="absolute top-0 left-10 md:left-20 text-[20rem] font-serif leading-none text-coffee-charcoal/40 opacity-10 select-none">"</div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 relative z-10">
        <h2 className="text-3xl font-serif">What our patrons say</h2>
      </div>

      <div 
        className="w-full overflow-hidden relative z-10 cursor-ew-resize"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          ref={containerRef}
          className="flex w-[400%] md:w-[200%] gap-8 px-6"
        >
          {/* We duplicate the array to create a seamless loop */}
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85vw] md:w-[400px] flex flex-col border-l border-coffee-oat/20 pl-8 md:pl-12 py-4 hover:border-coffee-cream transition-colors duration-500"
            >
              <p className="text-xl md:text-2xl font-serif leading-relaxed mb-8 text-coffee-oat">
                "{item.quote}"
              </p>
              <div className="mt-auto">
                <p className="font-semibold tracking-wide">{item.author}</p>
                <p className="text-coffee-oat/60 text-sm font-light">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
