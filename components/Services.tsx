'use client';

import { motion } from 'motion/react';
import { Dumbbell, Flame, HeartPulse, Trophy, Users, Zap } from 'lucide-react';

const services = [
  {
    icon: Dumbbell,
    title: 'Strength Training',
    description: 'Build muscle and increase raw power with our comprehensive free weights and modern machines.',
  },
  {
    icon: Flame,
    title: 'Weight Loss Programs',
    description: 'Targeted high-intensity routines designed to burn fat effectively and sustainably.',
  },
  {
    icon: Trophy,
    title: 'Personal Training',
    description: '1-on-1 coaching customized to your exact body type, goals, and fitness level.',
  },
  {
    icon: HeartPulse,
    title: 'Functional Fitness',
    description: 'Improve your everyday movement, flexibility, and core strength.',
  },
  {
    icon: Users,
    title: 'Group Classes',
    description: 'High-energy group environments pushing you to your limits together.',
  },
  {
    icon: Zap,
    title: 'Transformation Programs',
    description: '90-day complete body overhaul with guided nutrition and intensive routines.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#0A0A0A] border-t border-white/5">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] font-black text-white/[0.02] leading-none select-none pointer-events-none md:block hidden">
            POWER
          </div>
          <h4 className="text-brand font-bold uppercase tracking-[0.2em] text-[10px] mb-2 relative z-10">Our Services</h4>
          <h2 className="text-4xl md:text-6xl font-black uppercase italic leading-none tracking-tighter relative z-10">How We Build <br/><span className="text-neutral-500">Champions</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 rounded-2xl border transition-colors group relative overflow-hidden flex flex-col justify-between ${idx === 0 ? 'bg-[#BCFB24] border-[#BCFB24] min-h-[220px]' : 'bg-[#141414] border-white/5 hover:bg-white/[0.03] min-h-[220px]'}`}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className={`text-2xl font-black italic uppercase leading-none tracking-tight ${idx === 0 ? 'text-black' : 'text-white'}`}>{service.title}</h3>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${idx === 0 ? 'bg-black text-white' : 'bg-white/5 text-gray-500 group-hover:text-[#BCFB24] transition-colors'}`}>
                    <service.icon size={20} />
                  </div>
                </div>
                <p className={`text-xs leading-relaxed max-w-[250px] ${idx === 0 ? 'text-black/70 font-medium' : 'text-gray-400'}`}>
                  {service.description}
                </p>
              </div>
              <div className={`text-[10px] uppercase font-bold tracking-widest mt-6 ${idx === 0 ? 'text-black/50' : 'text-gray-600'}`}>
                Explore &rarr;
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
