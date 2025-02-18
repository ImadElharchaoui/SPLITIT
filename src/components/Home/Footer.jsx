import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-accent text-white py-6 mt-auto'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          {/* Logo and Brand Name */}
          <div className='flex items-center mb-4 md:mb-0'>
            <span className='text-xl font-bold'>Split It</span>
          </div>

          {/* Navigation Links */}
          <nav className='flex flex-wrap justify-center gap-4 mb-4 md:mb-0'>
            <Link href='/about' className='hover:text-primary transition-colors'>
              About
            </Link>
            <Link href='/contact' className='hover:text-primary transition-colors'>
              Contact
            </Link>
            <Link href='/privacy' className='hover:text-primary transition-colors'>
              Privacy Policy
            </Link>
            <Link href='/terms' className='hover:text-primary transition-colors'>
              Terms of Service
            </Link>
          </nav>

          {/* Social Media Links */}
          <div className='flex gap-4'>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-primary transition-colors'
            >
              Twitter
            </a>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-primary transition-colors'
            >
              Facebook
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-primary transition-colors'
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className='text-center mt-6 border-t border-gray-700 pt-4'>
          <p className='text-sm'>
            &copy; {new Date().getFullYear()} Split It. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;