'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Instagram, Twitter } from 'lucide-react';

const trainers = [
  {
    name: 'David Carter',
    specialty: 'Head Coach / Strength',
    image: 'https://images.unsplash.com/photo-1567013127596-62ce651f466b?q=80&w=1470&auto=format&fit=crop',
  },
  {
    name: 'Elena Rostova',
    specialty: 'HIIT & Functional',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1470&auto=format&fit=crop',
  },
  {
    name: 'James Wilson',
    specialty: 'Bodybuilding Expert',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1470&auto=format&fit=crop',
  },
];

export function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-[#0A0A0A] border-t border-white/5">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 relative">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[120px] font-black text-white/[0.02] leading-none select-none pointer-events-none md:block hidden">
            ELITE
          </div>
          <div className="relative z-10">
            <h4 className="text-brand font-bold uppercase tracking-[0.2em] text-[10px] mb-2">Our Team</h4>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic leading-none tracking-tighter">Meet The <span className="text-neutral-500">Experts</span></h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm leading-relaxed relative z-10">Our elite trainers are dedicated to pushing you to your absolute limits safely and effectively.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((trainer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-xl border border-white/5 overflow-hidden aspect-[3/4] bg-[#141414]"
            >
              <Image 
                src={trainer.image} 
                alt={trainer.name} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-1 text-white">{trainer.name}</h3>
                <p className="text-brand font-bold uppercase tracking-[0.2em] text-[10px] mb-4">{trainer.specialty}</p>
                
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <a href="#" className="w-10 h-10 rounded-sm bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand hover:text-black transition-colors border border-white/10">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-sm bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand hover:text-black transition-colors border border-white/10">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
