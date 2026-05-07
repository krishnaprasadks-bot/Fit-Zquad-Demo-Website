'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1469&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1911&auto=format&fit=crop',
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#0A0A0A] border-t border-white/5">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h4 className="text-brand font-bold uppercase tracking-[0.2em] text-[10px] mb-2">Our Space</h4>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic leading-none tracking-tighter">Gallery & <span className="text-neutral-500">Vibe</span></h2>
          </div>
          <a href="https://www.instagram.com/fit_zquad/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
            <span className="uppercase tracking-[0.2em] text-[10px] font-bold">Follow Our Instagram</span>
            <Instagram className="group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-square md:aspect-[4/3] group overflow-hidden bg-[#141414] rounded-xl border border-white/5"
            >
              <Image 
                src={src}
                alt="Gym Image"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 mix-blend-lighten"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="text-white w-10 h-10 transform scale-50 group-hover:scale-100 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
