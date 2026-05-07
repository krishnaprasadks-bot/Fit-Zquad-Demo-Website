'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center pt-20 overflow-hidden bg-[#0A0A0A]">
      {/* Background Accent Elements */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-brand opacity-[0.05] blur-[100px] rounded-full pointer-events-none z-10"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-brand opacity-[0.03] blur-[80px] rounded-full pointer-events-none z-10"></div>

      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Gym Training"
          className="w-full h-full object-cover origin-center transform scale-105 animate-slow-zoom opacity-40 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto max-w-7xl h-full flex flex-col justify-center pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black italic uppercase leading-[0.85] tracking-tighter mb-6 relative z-10">
              Transform <br />
              Your <span className="text-brand">Body.</span><br />
              <span className="text-neutral-500">Transform</span> <br />
              Your Life.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed"
          >
            Premium strength training, elite personal coaching, and a community driven by results. Your fitness journey starts right here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="#contact"
              className="bg-brand text-black font-black uppercase tracking-widest text-sm px-8 py-4 hover:-translate-y-0.5 transition-transform shadow-[0_10px_30px_rgba(188,251,36,0.3)] flex items-center gap-2"
            >
              Start Free Trial
            </Link>
            <Link
              href="#about"
              className="bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-sm px-8 py-4 hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-neutral-800 relative overflow-hidden">
          <motion.div 
            className="w-full h-1/2 bg-brand absolute top-0"
            animate={{ top: ['-50%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
