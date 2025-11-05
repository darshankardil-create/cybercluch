'use client';


import Header from './component/Header';
import HeroSection from './component/HeroSection';
import TrustedBySection from './component/TrustedBySection';
import ZeroTrustSection from './component/ZeroTrustSection';
import LandscapeSection from './component/LandscapeSection';
import IntroducingSection from './component/IntroducingSection';
import ApproachSection from './component/ApproachSection';
import SetupSection from './component/SetupSection';
import TestimonialsSection from './component/TestimonialsSection';
import Footer from './component/Footer';



const App: React.FC = () => {
  return (
    <div className="global-wrapper relative flex min-h-screen flex-col justify-between bg-white">
      <Header />
      <main className="relative z-5">
        <HeroSection />
        <TrustedBySection />
        <ZeroTrustSection />
        <LandscapeSection />
        <IntroducingSection />
        <ApproachSection />
        <SetupSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};


export default App;