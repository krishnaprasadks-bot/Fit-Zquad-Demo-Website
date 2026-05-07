'use client';

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const benefits = [
  'Certified Elite Trainers',
  'Modern High-End Equipment',
  'Personalized Diet & Workout Plans',
  'Unbeatable Community Atmosphere',
  'Strict Hygiene & Safety Protocols',
  'Flexible 24/7 Access For Members',
];

export function WhyUs() {
  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-white/5">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden grayscale opacity-80 border border-white/10">
                  <Image 
                    src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop" 
                    alt="Equipment"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden grayscale opacity-80 border border-white/10">
                  <Image 
                    src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1470&auto=format&fit=crop" 
                    alt="Training"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
            {/* Overlay badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/[0.02] backdrop-blur-xl border border-white/10 p-6 rounded-2xl w-32 h-32 flex flex-col items-center justify-center text-center shadow-2xl">
              <span className="text-4xl font-black italic text-[#BCFB24] leading-none mb-1">10+</span>
              <span className="text-[9px] uppercase tracking-widest font-bold text-gray-400">Years<br/>Experience</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div>
              <h4 className="text-brand font-bold uppercase tracking-[0.2em] text-[10px] mb-2">Why Choose Us</h4>
              <h2 className="text-4xl md:text-5xl font-black uppercase italic leading-none tracking-tighter">
                The Ultimate <br/>
                <span className="text-neutral-500">Training Experience</span>
              </h2>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              We separate ourselves from standard gyms by delivering a cohesive, results-driven experience. From the iron to the community, everything is built for your success.
            </p>

            <ul className="space-y-4 pt-4">
              {benefits.map((benefit, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 text-gray-300 font-medium text-sm"
                >
                  <div className="w-1.5 h-1.5 bg-[#BCFB24] rotate-45 shrink-0"></div>
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
