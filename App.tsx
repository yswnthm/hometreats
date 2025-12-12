import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SignatureSpectrum from './components/SignatureSpectrum';
import CraftLab from './components/CraftLab';
import ScentedGallery from './components/ScentedGallery';
import OriginsFilmstrip from './components/OriginsFilmstrip';
import OrderRitual from './components/OrderRitual';
import ReviewHive from './components/ReviewHive';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-linen text-espresso selection:bg-burntsugar selection:text-linen">
      {/* Global Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[60] opacity-[0.04] bg-noise mix-blend-multiply"></div>
      
      <Header />
      
      <main>
        <Hero />
        <SignatureSpectrum />
        <CraftLab />
        <ScentedGallery />
        <OriginsFilmstrip />
        <OrderRitual />
        <ReviewHive />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;