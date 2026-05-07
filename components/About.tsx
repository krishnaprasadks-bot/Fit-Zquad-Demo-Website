'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const stats = [
  { value: '500+', label: 'Happy Members' },
  { value: '5+', label: 'Expert Trainers' },
  { value: '1000+', label: 'Transformations' },
  { value: '24/7', label: 'Gym Access' },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-brand font-bold uppercase tracking-[0.2em] text-[10px] mb-2">About Us</h4>
              <h2 className="text-5xl md:text-6xl font-black uppercase italic leading-none tracking-tighter">
                More Than Just A Gym, <br />
                <span className="text-neutral-500">It's A Lifestyle</span>
              </h2>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              At FIT ZQUAD, we believe that fitness is the foundation of a great life. We provide a supportive, high-energy environment built exclusively for individuals ready to transform their bodies and mindsets.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Equipped with state-of-the-art facilities, expert personal coaching, and a community-driven culture, we are here to help you shatter your limits.
            </p>

            <div className="pt-6 grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-[#141414] border border-white/5 p-6 flex flex-col justify-center rounded-xl h-[120px]">
                  <div className="text-4xl font-black italic text-brand mb-1 leading-none">{stat.value}</div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl grayscale opacity-80 border border-white/10">
              <Image 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop"
                alt="Gym Interior"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Element */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 bg-white/[0.02] backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl hidden md:block"
            >
              <div className="flex gap-4 items-center">
                <div className="w-14 h-14 rounded-sm bg-[#BCFB24] flex items-center justify-center -rotate-6">
                   <span className="text-black font-black italic text-xl">100%</span>
                </div>
                <div>
                  <div className="font-black uppercase italic tracking-wide">Results Guaranteed</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">With consistent effort</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
