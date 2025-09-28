import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

export default function Cta() {
  return (
    <section
      className='relative z-10 py-16 sm:py-24 px-4 sm:px-6
    bg-gradient-to-r from-gray-900/50 to-purple-900/20'
    >
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-4xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-8'>
          <span className='gradient-text-primary'>Ready to create?</span>
        </h2>
        <p className='text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto'>
          Join thousands of creators who are already building their audience and
          growing their business with our AI-powered platform.
        </p>

        <div className='flex flex-col sm:flex-row gap-6 justify-center'>
          <Link href='/dashboard'>
            <Button
              size='xl'
              variant='primary'
              className='rounded-full w-full sm:w-auto text-white'
            >
              Start Creating for Free
              <ArrowRight className='h-4 w-4' />
            </Button>
          </Link>
          <Link href='/feed'>
            <Button
              variant='outline'
              size='xl'
              className='rounded-full w-full sm:w-auto'
            >
              Explore the Feed
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
