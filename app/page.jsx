import CursorAnimation from '@/components/cursor-effect';
import Features from '@/components/sections/features';
import Hero from '@/components/sections/hero';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className='min-h-screen bg-black text-white overflow-hidden relative'>
      <div className='fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-green-900/20 animate-pulse' />
      <CursorAnimation />
      <Hero />
      <Features />
    </div>
  );
}
