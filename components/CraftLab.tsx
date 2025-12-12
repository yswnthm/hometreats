import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LabModule } from '../types';
import { Microscope, Activity, Droplet } from 'lucide-react';

const modules: LabModule[] = [
  {
    id: 'lab1',
    title: 'The Layer Studio',
    code: 'LYR-84',
    description: 'Hundreds of micro-layers of butter and dough, folded by hand every morning.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop', // Dough layers
    microStudy: ['Butterfat: 84%', 'Fold Count: 27', 'Temp: 16°C']
  },
  {
    id: 'lab2',
    title: 'Cocoa Cellar',
    code: 'COC-70',
    description: 'Chocolate melted slowly. Berries reduced to jam. Nothing rushed.',
    image: 'https://images.unsplash.com/photo-1606312619070-d48b7065e1b4?q=80&w=2072&auto=format&fit=crop', // Melting chocolate
    microStudy: ['Origin: Ecuador', 'Roast: Dark', 'Notes: Smoke']
  },
  {
    id: 'lab3',
    title: 'Dough Matrix',
    code: 'FMT-48',
    description: 'Our mother dough is 7 years old. Ferments slowly for complex flavor.',
    image: 'https://images.unsplash.com/photo-1585476985392-23c50979848b?q=80&w=2072&auto=format&fit=crop', // Sourdough texture
    microStudy: ['Age: 7 Years', 'Hydration: 78%', 'Rest: 48h']
  }
];

const CraftLab: React.FC = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 bg-almond/20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16">
           <div>
             <span className="font-mono text-burntsugar text-xs tracking-widest block mb-2">// INGREDIENT INTELLIGENCE</span>
             <h2 className="text-4xl lg:text-6xl font-serif text-espresso">The Craft Lab</h2>
           </div>
           <div className="hidden md:block">
             <Activity className="text-raspberry opacity-50" />
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {modules.map((mod) => (
            <motion.div
              key={mod.id}
              className={`bg-white relative overflow-hidden transition-all duration-500 ease-out border border-chalk ${activeModule === mod.id ? 'lg:col-span-2' : 'col-span-1'}`}
              onClick={() => setActiveModule(activeModule === mod.id ? null : mod.id)}
              style={{ minHeight: '500px' }}
            >
              {/* Image Layer */}
              <div className="absolute inset-0">
                <img src={mod.image} alt={mod.title} className="w-full h-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-espresso/20 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent opacity-80" />
              </div>

              {/* Lab Interface Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-linen">
                <div className="absolute top-8 left-8 border border-white/30 px-2 py-1 bg-black/20 backdrop-blur-sm">
                  <span className="font-mono text-xs">{mod.code}</span>
                </div>

                <h3 className="text-3xl font-serif mb-2 relative z-10">{mod.title}</h3>
                
                <AnimatePresence>
                  {activeModule === mod.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-linen/90 mb-6 leading-relaxed max-w-lg border-l-2 border-raspberry pl-4 mt-4">
                        {mod.description}
                      </p>
                      
                      {/* Diagrammatic Data */}
                      <div className="grid grid-cols-3 gap-4 border-t border-white/20 pt-4">
                        {mod.microStudy.map((stat, idx) => (
                          <div key={idx} className="flex flex-col">
                            <span className="w-2 h-2 rounded-full bg-raspberry mb-2"></span>
                            <span className="font-mono text-xs uppercase tracking-tight text-white/70">{stat.split(':')[0]}</span>
                            <span className="font-mono text-lg font-bold">{stat.split(':')[1]}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {!activeModule && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="absolute bottom-8 right-8"
                  >
                    <Microscope className="text-white/50" size={24} />
                  </motion.div>
                )}
              </div>

              {/* Grid Overlay for Lab Effect */}
              {activeModule === mod.id && (
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CraftLab;