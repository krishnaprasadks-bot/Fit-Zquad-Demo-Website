'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { navLinks } from '@/lib/constants';
import { Menu, X, Dumbbell } from 'lucide-react';
import Link from 'next/link';

import Image from 'next/image';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'
      }`}
    >
      <div className="container px-4 mx-auto max-w-7xl flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 group">
          <div className="relative w-12 h-12 flex-shrink-0 bg-white rounded-full p-1 overflow-hidden">
            <Image 
              src="https://instagram.fcjb3-2.fna.fbcdn.net/v/t51.2885-19/457200779_989494392924939_194292289396421165_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4zODAuYzIifQ&_nc_ht=instagram.fcjb3-2.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2gEZuYjeQk_tYQga4zI3d0wuQPPXzYmIDRUJcLoeJUsBK_hbCNA-4nB9CMYSkt8AXrLeWUVkV4SIePX24_EpZimd&_nc_ohc=AQ5oB5u6kPwQ7kNvwHsu2be&_nc_gid=M9EdI5GqAUeCohXSBRqaeA&edm=APoiHPcBAAAA&ccb=7-5&oh=00_Af4Wdn6QMFoSg2odvhBmeI3WfCztLZzcbcu4evDE3jSYyw&oe=6A01C6D7&_nc_sid=22de04" 
              alt="FIT ZQUAD Logo" 
              fill
              className="object-contain rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-2xl font-black tracking-tighter italic text-white uppercase hidden sm:block">
            FIT ZQUAD
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
               <li key={link.label}>
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            className="px-6 py-2 border border-brand text-brand hover:bg-brand hover:text-black transition-all"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-white/10 shadow-2xl py-6 px-4 md:hidden"
          >
            <ul className="flex flex-col gap-4 text-center">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-[0.2em] py-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block mt-4 border border-brand text-brand hover:bg-brand hover:text-black font-bold uppercase tracking-[0.2em] text-sm px-6 py-3 transition-colors w-full"
                >
                  Join Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
