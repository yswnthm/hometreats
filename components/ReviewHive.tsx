import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  { id: 't1', name: 'Sarah L.', quote: "The fudge lasagne changed my life. Seriously.", image: 'https://loremflickr.com/200/200/woman,portrait?random=20' },
  { id: 't2', name: 'James P.', quote: "Tastes exactly like my grandmother's kitchen smells.", image: 'https://loremflickr.com/200/200/man,portrait?random=21' },
  { id: 't3', name: 'Elena R.', quote: "Best morning ritual in the city.", image: 'https://loremflickr.com/200/200/woman,smiling?random=22' },
  { id: 't4', name: 'Marc D.', quote: "A masterclass in texture.", image: 'https://loremflickr.com/200/200/man,beard?random=23' },
];

const ReviewHive: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-linen">
      <div className="container mx-auto">
        <h2 className="text-4xl font-serif text-espresso mb-12 text-center">Emotional Data</h2>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.8,
                scale: { repeat: Infinity, duration: 4 + i, ease: "easeInOut" }
              }}
              whileHover={{ scale: 1.02 }}
              animate={{ scale: [1, 1.01, 1] }}
              className="break-inside-avoid bg-white p-6 rounded-sm shadow-sm border border-chalk"
            >
              <Quote className="text-burntsugar/20 mb-4" size={32} />
              <p className="font-serif text-lg text-espresso mb-6 leading-relaxed">"{t.quote}"</p>

              <div className="flex items-center gap-3 border-t border-linen pt-4">
                <img src={t.image} alt={t.name} className="w-8 h-8 rounded-full grayscale opacity-70" />
                <div>
                  <p className="font-mono text-xs font-bold text-espresso uppercase">{t.name}</p>
                  <p className="font-mono text-[10px] text-espresso/50">Verified Taste</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Aesthetic filler blocks for masonry feel */}
          <motion.div className="break-inside-avoid bg-burntsugar/10 h-64 rounded-sm flex items-center justify-center p-8 text-center">
            <p className="font-serif italic text-burntsugar text-2xl">"Sensory bliss."</p>
          </motion.div>
          <motion.div className="break-inside-avoid h-48 rounded-sm overflow-hidden">
            <img src="https://loremflickr.com/1000/1000/bakery,texture?random=24" className="w-full h-full object-cover grayscale contrast-125" alt="texture" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReviewHive;