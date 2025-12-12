import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ProcessFrame } from '../types';

const frames: ProcessFrame[] = [
  { id: 'f1', image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop', note: 'Weighing Flour', timestamp: '04:00 AM' },
  { id: 'f2', image: 'https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?q=80&w=2069&auto=format&fit=crop', note: 'First Fold', timestamp: '04:45 AM' },
  { id: 'f3', image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=2070&auto=format&fit=crop', note: 'Shaping', timestamp: '06:30 AM' },
  { id: 'f4', image: 'https://images.unsplash.com/photo-1549590143-d5855148a9f5?q=80&w=2070&auto=format&fit=crop', note: 'Oven Spring', timestamp: '07:15 AM' },
  { id: 'f5', image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=2070&auto=format&fit=crop', note: 'Cooling Rack', timestamp: '08:00 AM' },
];

const OriginsFilmstrip: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={containerRef} className="h-[300vh] bg-linen relative">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        
        <div className="absolute top-12 left-6 z-10">
          <h2 className="text-3xl font-serif text-espresso">Process Timeline</h2>
          <p className="font-mono text-xs text-burntsugar uppercase mt-1">Scrub to play documentary</p>
        </div>

        <motion.div style={{ x }} className="flex gap-0 pl-6 lg:pl-24 items-center">
          {frames.map((frame, index) => (
            <div key={frame.id} className="relative flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[40vw] aspect-video group -ml-4 first:ml-0">
               {/* Filmstrip Sprockets (Decorative) */}
               <div className="absolute -top-4 left-0 w-full h-4 bg-espresso flex justify-between px-2">
                 {[...Array(20)].map((_, i) => <div key={i} className="w-2 h-2 bg-linen rounded-sm mt-1" />)}
               </div>
               <div className="absolute -bottom-4 left-0 w-full h-4 bg-espresso flex justify-between px-2">
                 {[...Array(20)].map((_, i) => <div key={i} className="w-2 h-2 bg-linen rounded-sm mt-1" />)}
               </div>

               <img 
                 src={frame.image} 
                 alt={frame.note} 
                 className="w-full h-full object-cover sepia-[20%] contrast-110 border-l-4 border-espresso shadow-2xl"
               />
               
               {/* Overlay Data */}
               <div className="absolute top-4 right-4 bg-espresso/80 text-linen px-3 py-1 font-mono text-sm backdrop-blur">
                 {frame.timestamp}
               </div>

               <div className="absolute bottom-8 left-8 text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-serif italic text-2xl drop-shadow-md">{frame.note}</p>
               </div>
            </div>
          ))}
          {/* End Cap */}
          <div className="w-[20vw] flex-shrink-0 flex items-center justify-center">
             <span className="font-serif text-espresso text-xl italic">Ready to Serve</span>
          </div>
        </motion.div>
        
        {/* Playhead Line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-raspberry/50 z-20 pointer-events-none mix-blend-multiply"></div>
      </div>
    </section>
  );
};

export default OriginsFilmstrip;