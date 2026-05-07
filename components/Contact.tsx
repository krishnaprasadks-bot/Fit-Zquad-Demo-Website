'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, handle form submission
    alert('Thank you for reaching out! We will contact you soon.');
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0A0A] border-t border-white/5">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="relative">
              <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[120px] font-black text-white/[0.02] leading-none select-none pointer-events-none md:block hidden">
                JOIN
              </div>
              <h4 className="text-brand font-bold uppercase tracking-[0.2em] text-[10px] mb-2 relative z-10">Contact Us</h4>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic leading-none tracking-tighter mb-6 relative z-10">Ready To <span className="text-neutral-500">Transform?</span></h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm relative z-10">Drop us a message or visit us directly. Your future self will thank you.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-[#141414] border border-white/5 flex items-center justify-center text-brand shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 uppercase tracking-[0.2em] text-[10px]">Location</h4>
                  <p className="text-gray-400 text-xs font-medium">123 Fitness Ave, Iron District<br />New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-[#141414] border border-white/5 flex items-center justify-center text-brand shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 uppercase tracking-[0.2em] text-[10px]">Call Us</h4>
                  <p className="text-gray-400 text-xs font-medium">+1 (212) 555-0199</p>
                  <p className="text-gray-400 text-xs font-medium">+1 (212) 555-0198</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-[#141414] border border-white/5 flex items-center justify-center text-brand shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 uppercase tracking-[0.2em] text-[10px]">Hours</h4>
                  <p className="text-gray-400 text-xs font-medium">Mon-Fri: 5:00 AM - 11:00 PM</p>
                  <p className="text-gray-400 text-xs font-medium">Sat-Sun: 7:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
            
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white text-[10px] uppercase font-black tracking-widest bg-[#25D366] hover:bg-[#1ebd5a] px-8 py-4 rounded-sm transition-transform hover:-translate-y-0.5">
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#141414] rounded-2xl p-8 md:p-12 border border-white/5"
          >
            <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-8">Send A Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-2">Your Name</label>
                  <input type="text" required className="w-full bg-[#0A0A0A] border border-white/5 text-sm rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-2">Phone Number</label>
                  <input type="tel" required className="w-full bg-[#0A0A0A] border border-white/5 text-sm rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors" placeholder="(555) 000-0000" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-2">Fitness Goal</label>
                  <select required className="w-full bg-[#0A0A0A] border border-white/5 text-sm rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors appearance-none">
                    <option value="">Select Goal</option>
                    <option value="weight_loss">Weight Loss</option>
                    <option value="muscle_gain">Muscle Gain</option>
                    <option value="endurance">Endurance</option>
                    <option value="general">General Fitness</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-2">Membership Plan</label>
                  <select className="w-full bg-[#0A0A0A] border border-white/5 text-sm rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors appearance-none">
                    <option value="">Select Plan (Optional)</option>
                    <option value="basic">Basic (₹3,999/mo)</option>
                    <option value="advanced">Advanced (₹5,999/mo)</option>
                    <option value="elite">Elite (₹9,999/mo)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-2">Message</label>
                <textarea rows={4} required className="w-full bg-[#0A0A0A] border border-white/5 text-sm rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors resize-none" placeholder="Tell us more about how we can help you..."></textarea>
              </div>

              <button type="submit" className="w-full bg-brand text-black font-black uppercase tracking-widest text-xs px-8 py-4 hover:-translate-y-0.5 transition-transform shadow-[0_10px_30px_rgba(188,251,36,0.2)]">
                Book Free Trial
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
