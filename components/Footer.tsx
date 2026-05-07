'use client';

import { Dumbbell, Instagram, Youtube, Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
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
              <span className="text-2xl font-black tracking-tighter italic text-white uppercase">
                FIT ZQUAD
              </span>
            </Link>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs font-medium">
              Premium strength training, elite personal coaching, and a community driven by results. Transform your body and life today.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/fit_zquad/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-black hover:bg-brand transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-black hover:bg-brand transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-black hover:bg-brand transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-black hover:bg-brand transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Pricing', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-brand transition-colors text-xs font-bold uppercase tracking-widest">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-6">Services</h4>
            <ul className="space-y-4">
              {['Personal Training', 'Strength Training', 'Group Classes', 'Nutrition Guide', 'Transformation'].map((service) => (
                <li key={service}>
                  <Link href="#services" className="text-gray-400 hover:text-brand transition-colors text-xs font-bold uppercase tracking-widest">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-6">Newsletter</h4>
            <p className="text-gray-400 text-xs mb-4 font-medium leading-relaxed">Subscribe for the latest fitness tips and gym updates.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-[#141414] border border-white/5 rounded-sm px-4 py-3 text-white text-xs font-medium focus:outline-none focus:border-brand transition-colors pr-24"
              />
              <button 
                type="submit"
                className="absolute right-1 top-1 bottom-1 bg-brand text-black font-black uppercase tracking-widest text-[10px] px-4 rounded-[2px] hover:bg-brand-hover transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">
            &copy; {new Date().getFullYear()} FIT ZQUAD. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
