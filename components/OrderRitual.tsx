import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ShoppingBag, Calendar } from 'lucide-react';

const steps = [
  {
    icon: <MessageCircle size={28} />,
    title: 'Direct Message',
    desc: 'For specials',
    action: 'Start Chat'
  },
  {
    icon: <ShoppingBag size={28} />,
    title: 'Pre-Order',
    desc: 'Secure your box',
    action: 'Shop Now'
  },
  {
    icon: <Calendar size={28} />,
    title: 'Bulk Events',
    desc: 'Weddings & more',
    action: 'Inquire'
  }
];

const OrderRitual: React.FC = () => {
  return (
    <section className="py-24 bg-almond/10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-serif text-espresso mb-16 text-center">
          The Ritual
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-linen p-8 rounded-xl shadow-lg border border-chalk relative overflow-hidden group cursor-pointer"
            >
              {/* Ripple Effect Origin */}
              <div className="absolute top-0 left-0 w-full h-full bg-burntsugar/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-espresso mb-6 shadow-sm group-hover:bg-burntsugar group-hover:text-linen transition-colors duration-300">
                  {step.icon}
                </div>
                
                <h3 className="text-2xl font-serif text-espresso mb-2">{step.title}</h3>
                <p className="font-sans text-espresso/60 mb-8">{step.desc}</p>
                
                <div className="w-full h-px bg-chalk mb-6 group-hover:bg-burntsugar/20 transition-colors" />
                
                <span className="font-mono text-xs uppercase tracking-widest text-burntsugar font-bold group-hover:text-espresso transition-colors">
                  {step.action} &rarr;
                </span>
              </div>
              
              {/* Glow Edge */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-burntsugar/20 rounded-xl transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderRitual;