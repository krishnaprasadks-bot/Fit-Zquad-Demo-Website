'use client';

import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useCallback, useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Member for 1 year',
    content: 'Joining FIT ZQUAD was the best decision of my life. The trainers actually care about your progress and the community keeps me coming back. I lost 30lbs and gained so much confidence.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop'
  },
  {
    name: 'Marcus Chen',
    role: 'Elite Athlete',
    content: 'The equipment here is top-notch. Finding a gym that caters to heavy lifting while maintaining a premium, clean environment is rare. This place has it all.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop'
  },
  {
    name: 'Emily Davis',
    role: 'Beginner',
    content: 'I was intimidated to join a gym, but the staff and members here are incredibly welcoming. The 90-day transformation program literally changed my life.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop'
  }
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-[#0A0A0A] overflow-hidden whitespace-nowrap border-t border-white/5">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
         <div className="text-center max-w-3xl mx-auto mb-16 whitespace-normal relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] font-black text-white/[0.02] leading-none select-none pointer-events-none md:block hidden">
            PROVEN
          </div>
          <h4 className="text-brand font-bold uppercase tracking-[0.2em] text-[10px] mb-2 relative z-10">Testimonials</h4>
          <h2 className="text-4xl md:text-6xl font-black uppercase italic leading-none tracking-tighter relative z-10">Real <span className="text-neutral-500">Results</span></h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative whitespace-normal"
        >
          <div className="overflow-hidden cursor-grab active:cursor-grabbing pb-8" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {testimonials.map((t, idx) => (
                <div key={idx} className="flex-[0_0_100%] md:flex-[0_0_80%] min-w-0 pl-4 md:pl-8 first:pl-0">
                  <div className="bg-[#141414] border border-white/5 p-8 md:p-12 rounded-2xl relative">
                    <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 rotate-180" />
                    
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 bg-brand rotate-45"></div>
                      ))}
                    </div>
                    
                    <p className="text-sm md:text-base text-gray-400 font-medium leading-relaxed mb-8 relative z-10 italic">
                      "{t.content}"
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl overflow-hidden relative grayscale opacity-90">
                        <Image src={t.avatar} alt={t.name} fill className="object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <div className="font-black italic text-white uppercase tracking-wide">{t.name}</div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center gap-2 mt-4 flex-wrap">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => emblaApi?.scrollTo(idx)}
                className={`w-12 h-1.5 rounded-full transition-colors ${idx === selectedIndex ? 'bg-brand' : 'bg-neutral-800 hover:bg-neutral-700'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
