import CursorAnimation from '@/components/cursor-effect';
import Cta from '@/components/sections/cta';
import Features from '@/components/sections/features';
import Footer from '@/components/sections/footer';
import GlobalStats from '@/components/sections/globalstats';
import Hero from '@/components/sections/hero';
import PlatformTabs from '@/components/sections/platform-tabs';
import Testimonials from '@/components/sections/testimonials';

export default function Home() {
  return (
    <div className='min-h-screen bg-black text-white overflow-hidden relative'>
      <div className='fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-green-900/20 animate-pulse' />
      <CursorAnimation />
      <Hero />
      <Features />
      <PlatformTabs />
      <GlobalStats />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  );
}
