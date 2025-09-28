import Image from 'next/image';
import Link from 'next/link';
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaDiscord,
  FaGithub,
} from 'react-icons/fa';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/#features' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Feeds', href: '/#feeds' },
  { name: 'Dashboard', href: '/dashboard' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' }, // optional
];

const socials = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/yourusername',
    icon: FaTwitter,
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/',
    icon: FaFacebook,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/',
    icon: FaInstagram,
  },
  {
    name: 'Discord',
    href: 'https://instagram.com/',
    icon: FaDiscord,
  },
  {
    name: 'github',
    href: 'https://github.com/in/yourusername',
    icon: FaGithub,
  },
];

export default function Footer() {
  return (
    <footer className='w-full border-t relative z-10'>
      <div className='max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-400'>
        {/* Logo + Tagline */}
        <div className='flex flex-col items-start'>
          <Image
            src='/logo.png'
            alt='Muse logo'
            width={120}
            height={40}
            className='mb-3'
          />
          <p className='text-gray-500'>Muse — Your ideas, amplified.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-white text-lg font-semibold mb-3'>Quick Links</h3>
          <ul className='space-y-2'>
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className='hover:text-white transition'>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className='text-white text-lg font-semibold mb-3'>Legal</h3>
          <ul className='space-y-2'>
            {legalLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className='hover:text-white transition'>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className='text-white text-lg font-semibold mb-3'>
            Follow Us On
          </h3>
          <div className='flex space-x-4'>
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-white transition'
              >
                <social.icon className='w-5 h-5' />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className='border-t mt-8 py-4 text-center text-xs text-gray-400'>
        © {new Date().getFullYear()} Muse. All rights reserved.
      </div>
    </footer>
  );
}
