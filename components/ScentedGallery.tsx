import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
  { src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1026&auto=format&fit=crop', note: 'Morning Light' },
  { src: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1080&auto=format&fit=crop', note: 'Dense Bite' },
  { src: 'https://images.unsplash.com/photo-1505253758473-96b701d2cd03?q=80&w=1032&auto=format&fit=crop', note: 'Steam Rise' },
  { src: 'https://images.unsplash.com/photo-1483695028939-5bb13f86d780?q=80&w=2669&auto=format&fit=crop', note: 'Open Crumb' },
];

const ScentedGallery: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="py-24 bg-espresso text-linen relative overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Side */}
        <div className="sticky top-24">
          <h2 className="text-4xl lg:text-6xl font-serif mb-6 leading-tight">
            Atmosphere of<br />
            <span className="text-burntsugar italic">Pure Comfort</span>
          </h2>
          <p className="text-linen/60 font-sans text-lg max-w-sm mb-8">
            A slow study in texture. Every bake is a result of time, temperature, and temperament.
          </p>
          <div className="h-px w-24 bg-white/20" />
        </div>

        {/* Parallax Gallery */}
        <div className="relative space-y-24">
          <motion.div 
            style={{ y }}
            className="flex flex-col gap-24 relative z-10"
          >
            {images.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="group relative"
              >
                <div className="overflow-hidden rounded-sm aspect-[3/4] lg:aspect-[4/5] opacity-80 group-hover:opacity-100 transition-opacity duration-700">
                  <img src={img.src} alt={img.note} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                </div>
                
                {/* Fog Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-espresso/80" />
                
                {/* Note Label */}
                <motion.div 
                  className="absolute bottom-6 left-6 overflow-hidden"
                  initial={{ width: 0 }}
                  whileInView={{ width: 'auto' }}
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-white bg-black/40 backdrop-blur px-2 py-1">
                    {img.note}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Vertical Light Band Effect */}
          <div className="absolute top-0 right-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent blur-[1px]" />
        </div>
      </div>
    </section>
  );
};

export default ScentedGallery;