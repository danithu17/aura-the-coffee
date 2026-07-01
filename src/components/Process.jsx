import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: "01",
    title: "Sourcing",
    desc: "We travel globally to build relationships with small-lot farmers, ensuring fair trade and exceptional quality."
  },
  {
    number: "02",
    title: "Roasting",
    desc: "Our master roasters meticulously profile each batch to highlight the bean's inherent terroir and natural sweetness."
  },
  {
    number: "03",
    title: "Brewing",
    desc: "Precision extraction meets artistry. Every cup is weighed, timed, and tasted to guarantee perfection."
  }
];

export default function Process() {
  const targetRef = useRef(null);
  
  // By using a tall container and a sticky inner container, 
  // we can map the entire vertical scroll of this section to horizontal movement.
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Map progress from 0 to 1 to x position from 0% to -65% 
  // (adjust based on how many items there are so the last item stops on screen)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[250vh] bg-coffee-charcoal text-coffee-cream">
      {/* Sticky container stays on screen while we scroll through the 250vh height */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-12">
          <h2 className="text-sm font-medium tracking-widest uppercase text-coffee-cream/60 mb-4">Our Method</h2>
          <h3 className="text-4xl md:text-6xl font-serif text-coffee-cream">The Journey of the Bean</h3>
        </div>
        
        <div className="px-6 md:px-12 w-full">
          <motion.div style={{ x }} className="flex gap-16 md:gap-32 w-max">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="flex gap-8 items-start w-[85vw] md:w-[500px]"
              >
                <div className="text-6xl md:text-8xl font-serif text-coffee-espresso/80 font-bold leading-none">
                  {step.number}
                </div>
                <div className="pt-2 md:pt-4">
                  <h4 className="text-2xl md:text-4xl font-serif mb-4">{step.title}</h4>
                  <p className="text-coffee-cream/70 font-light text-lg leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
            {/* Empty space at the end so the last item isn't pushed against the edge */}
            <div className="w-[10vw] md:w-[100px]"></div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
