import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, ArrowRight, Beaker } from 'lucide-react';

const Header: React.FC = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [bg, setBg] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setBg(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-500 border-b ${bg ? 'bg-linen/90 backdrop-blur-md border-chalk shadow-sm' : 'bg-transparent border-transparent'}`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border border-espresso/20 flex items-center justify-center text-espresso rounded-sm">
            <Beaker size={16} />
          </div>
          <span className="font-serif font-bold text-lg text-espresso tracking-tight">AMTAMS <span className="font-mono text-[10px] font-normal text-burntsugar uppercase">Lab</span></span>
        </div>

        <nav className="hidden md:flex gap-8 items-center font-mono text-xs uppercase tracking-widest text-espresso/70">
          <a href="#" className="hover:text-burntsugar transition-colors">Signature</a>
          <a href="#" className="hover:text-burntsugar transition-colors">Craft</a>
          <a href="#" className="hover:text-burntsugar transition-colors">Process</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-espresso/5 rounded-sm transition-colors md:hidden">
            <Menu className="text-espresso" />
          </button>
          <button className="bg-espresso text-linen px-5 py-2 rounded-sm font-mono text-xs uppercase tracking-widest hover:bg-burntsugar transition-colors flex items-center gap-2">
            GET TO KNOW <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;