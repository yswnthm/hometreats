import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const blur = useTransform(scrollY, [0, 300], ["0px", "10px"]);

  return (
    <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden px-6 lg:px-24 bg-linen">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-linen via-linen to-almond/30 pointer-events-none" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left: Typography (Editorial + Scientific) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-burntsugar/50"></span>
              <span className="font-mono text-xs tracking-widest text-burntsugar uppercase">Est. 2024 • Lab No. 04</span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-serif text-espresso leading-[0.9] tracking-tight mb-8">
              Home<br />
              <span className="italic font-light text-burntsugar">Treats</span>
            </h1>

            <motion.p
              className="text-xl text-espresso/80 font-sans max-w-md leading-relaxed border-l-2 border-raspberry/30 pl-6"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Comfort bakes engineered with intuition.<br />
              <span className="font-mono text-sm text-raspberry mt-2 block">TasteFully Yours.</span>
            </motion.p>
          </motion.div>
        </div>

        {/* Right: The Sensory Object */}
        <motion.div
          className="lg:col-span-5 relative h-[500px] w-full flex items-center justify-center"
          style={{ y: y1, opacity, filter: `blur(${blur})` }}
        >
          {/* Steam/Haze Effect */}
          <motion.div
            className="absolute inset-0 bg-white/40 blur-[80px] rounded-full mix-blend-soft-light"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.img
            src="https://loremflickr.com/800/600/cake,chocolate?random=1"
            alt="Macro texture of artisan chocolate cake"
            className="relative z-10 w-full h-[120%] object-cover rounded-none shadow-2xl"
            initial={{ scale: 1.1, filter: "blur(10px)", opacity: 0 }}
            animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 2, ease: "circOut" }}
            style={{
              clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)" // Slightly geometric/angular clip
            }}
          />

          {/* Floating Data Point */}
          <motion.div
            className="absolute -right-4 bottom-12 bg-white/90 backdrop-blur border border-chalk p-4 shadow-lg z-20 max-w-[150px]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5 }}
          >
            <p className="font-mono text-[10px] text-espresso uppercase mb-1">Internal Temp</p>
            <p className="font-serif text-2xl text-burntsugar">42°C</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Rising Steam Mask Overlay for reveal */}
      <motion.div
        className="absolute inset-0 bg-linen pointer-events-none z-50"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }} // Custom easing for "steam" feel
      />
    </section>
  );
};

export default Hero;