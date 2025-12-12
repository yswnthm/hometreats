import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-espresso text-linen relative pt-32 pb-12 overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Heat Lamp CTA */}
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="w-full max-w-2xl mb-20 relative group cursor-pointer"
        >
            <div className="absolute inset-0 bg-burntsugar/20 blur-[60px] rounded-full group-hover:bg-burntsugar/40 transition-colors duration-500" />
            <div className="relative border border-white/10 bg-white/5 backdrop-blur-md px-12 py-8 rounded-full text-center hover:border-burntsugar/50 transition-colors">
                <span className="font-serif text-3xl md:text-5xl text-burntsugar group-hover:text-white transition-colors duration-300">Place Your Order</span>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-32 h-1 bg-burntsugar shadow-[0_0_20px_rgba(170,110,66,0.8)]" />
            </div>
        </motion.div>

        {/* Cooling Rack Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-white/10 pt-12 text-sm font-sans text-linen/60">
            <div className="md:col-span-1">
                <span className="font-serif text-2xl text-white block mb-4">HomeTreats</span>
                <p className="mb-2">123 Baker Street, Sweet Town</p>
                <p className="font-mono text-xs">Lat: 40.7128° N, Long: 74.0060° W</p>
            </div>
            
            <div className="md:col-span-1">
                 <h4 className="font-mono text-xs uppercase text-burntsugar mb-4">Bake Window</h4>
                 <p>Daily: 07:00 - 15:00</p>
                 <p>Closed Mondays for R&D</p>
            </div>

            <div className="md:col-span-1">
                 <h4 className="font-mono text-xs uppercase text-burntsugar mb-4">Connect</h4>
                 <div className="flex gap-4">
                    <a href="#" className="hover:text-burntsugar transition-colors"><Instagram size={20} /></a>
                    <a href="#" className="hover:text-burntsugar transition-colors"><Facebook size={20} /></a>
                    <a href="#" className="hover:text-burntsugar transition-colors"><Mail size={20} /></a>
                 </div>
            </div>

            <div className="md:col-span-1 flex flex-col items-end justify-end">
                <p>© 2024 Sensory Bake-Lab.</p>
                
                {/* Steam Animation */}
                <div className="mt-4 relative w-8 h-8 opacity-30">
                     <motion.div 
                        className="absolute bottom-0 left-1/2 w-2 h-4 bg-white blur-md rounded-full"
                        animate={{ y: -20, opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                     />
                     <motion.div 
                        className="absolute bottom-0 left-1/4 w-2 h-3 bg-white blur-md rounded-full"
                        animate={{ y: -15, opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
                     />
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;