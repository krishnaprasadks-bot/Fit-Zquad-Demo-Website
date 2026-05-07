'use client';

import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '₹3,999',
    period: '/mo',
    description: 'Perfect for beginners looking to get started.',
    features: [
      'Access to Gym Floor',
      'Standard Equipment',
      'Locker Room Access',
      'Free WiFi',
    ],
  },
  {
    name: 'Advanced',
    price: '₹5,999',
    period: '/mo',
    description: 'For those serious about their fitness journey.',
    isPopular: true,
    features: [
      'Everything in Basic',
      'Group Fitness Classes',
      '1 Personal Training Session/mo',
      'Nutrition Guide',
      'Sauna Access',
    ],
  },
  {
    name: 'Elite',
    price: '₹9,999',
    period: '/mo',
    description: 'The ultimate fitness and coaching experience.',
    features: [
      'Everything in Advanced',
      'Unlimited Group Classes',
      '4 Personal Training Sessions/mo',
      'Advanced Body Metrics',
      'Guest Pass (2/mo)',
    ],
  },
];

export function Memberships() {
  return (
    <section id="plans" className="py-24 bg-[#0A0A0A] relative border-t border-white/5">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] font-black text-white/[0.02] leading-none select-none pointer-events-none md:block hidden">
            ACCESS
          </div>
          <h4 className="text-brand font-bold uppercase tracking-[0.2em] text-[10px] mb-2 relative z-10">Pricing</h4>
          <h2 className="text-4xl md:text-6xl font-black uppercase italic leading-none tracking-tighter relative z-10">Choose Your <span className="text-neutral-500">Plan</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-2xl p-8 border hover:bg-white/[0.02] transition-colors ${plan.isPopular ? 'bg-white/[0.02] backdrop-blur-xl border-white/10 md:-translate-y-4 shadow-[0_10px_40px_rgba(188,251,36,0.1)]' : 'bg-[#141414] border-white/5'}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 p-4">
                  <div className="bg-brand text-black text-[9px] font-black px-3 py-1 rounded-full uppercase italic">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="mb-6 border-b border-white/5 pb-6">
                <h3 className="text-xl font-black italic uppercase mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-xs h-10 max-w-[200px] leading-relaxed">{plan.description}</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-black italic">{plan.price}</span>
                  <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand rotate-45 shrink-0"></div>
                    <span className="text-gray-300 text-xs font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 text-[10px] font-black uppercase tracking-widest transition-all ${plan.isPopular ? 'bg-brand text-black hover:translate-y-[-2px] shadow-[0_5px_20px_rgba(188,251,36,0.2)]' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}`}>
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
