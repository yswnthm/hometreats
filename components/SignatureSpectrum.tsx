import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from '../types';

const items: MenuItem[] = [
  { id: '1', name: 'Fudge Lasagne', scentProfile: 'Molten layers', price: '8.00', heatLevel: 'rich', image: 'https://loremflickr.com/800/600/fudge,cake?random=40' },
  { id: '2', name: 'Salted Cookie', scentProfile: 'Crisp edges', price: '4.50', heatLevel: 'warm', image: 'https://loremflickr.com/800/600/cookie,chocolatechip?random=41' },
  { id: '3', name: 'Lemon Tea Cake', scentProfile: 'Zest & steam', price: '6.00', heatLevel: 'sweet', image: 'https://loremflickr.com/800/600/lemoncake,tea?random=42' },
  { id: '4', name: 'Warm Pita', scentProfile: 'Yeast & fire', price: '5.00', heatLevel: 'warm', image: 'https://loremflickr.com/800/600/pita,bread?random=43' },
  { id: '5', name: 'Berry Jam', scentProfile: 'Reduction', price: '9.00', heatLevel: 'sweet', image: 'https://loremflickr.com/800/600/jam,berry?random=44' },
];

const heatColors = {
  warm: 'from-gold/40 to-burntsugar/20',
  rich: 'from-espresso/40 to-raspberry/20',
  sweet: 'from-raspberry/30 to-sage/20',
};

const SignatureSpectrum: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="py-32 bg-linen relative overflow-hidden">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ECE5D8_1px,transparent_1px),linear-gradient(to_bottom,#ECE5D8_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-chalk pb-6">
          <h2 className="text-4xl lg:text-5xl font-serif text-espresso">
            Signature <span className="italic text-burntsugar">Spectrum</span>
          </h2>
          <div className="flex items-center gap-2 text-espresso/50 font-mono text-xs uppercase tracking-widest mt-4 md:mt-0">
            <span className="w-2 h-2 rounded-full bg-burntsugar animate-pulse"></span>
            Current Heat Levels
          </div>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-between gap-8 md:gap-4">
          {items.map((item) => (
            <motion.div
              key={item.id}
              className="relative group cursor-pointer flex flex-col items-center"
              onHoverStart={() => setHovered(item.id)}
              onHoverEnd={() => setHovered(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Heatmap Aura */}
              <div className={`absolute inset-0 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-radial ${heatColors[item.heatLevel]}`} />

              <motion.div
                className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden relative z-10 border-4 border-linen shadow-xl"
                whileHover={{ scale: 1.14 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }} // Buttery elastic ease
              >
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                {/* Thermal Overlay */}
                <div className="absolute inset-0 bg-burntsugar/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              <div className="mt-8 text-center relative z-20">
                <h3 className="text-xl font-serif text-espresso mb-1">{item.name}</h3>
                <p className="font-mono text-sm text-burntsugar">${item.price}</p>

                {/* Scent Note Reveal */}
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: hovered === item.id ? 1 : 0, y: hovered === item.id ? 0 : -5 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max"
                >
                  <span className="bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-mono text-espresso border border-chalk tracking-tight">
                    Note: {item.scentProfile}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureSpectrum;