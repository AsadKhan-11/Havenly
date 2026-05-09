"use client";

import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-obsidian px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-20">
        {/* Left — Info */}
        <div className="lg:w-[45%]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-6"
          >
            Connect With Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-pearl mb-8 leading-[1.1]"
          >
            Start Your <br />
            <span className="italic text-gold/90">Journey</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-pearl/40 font-sans text-lg leading-relaxed mb-12 max-w-md"
          >
            Whether you're seeking your next residence or exploring investment
            opportunities, we'd love to hear from you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                <MapPin size={16} className="text-gold" />
              </div>
              <div>
                <p className="text-pearl/30 text-[10px] uppercase tracking-[0.2em] font-semibold mb-1">
                  Global Headquarters
                </p>
                <p className="text-pearl/70 font-sans text-sm">
                  One Vanderbilt Avenue, New York, NY 10017
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                <Phone size={16} className="text-gold" />
              </div>
              <div>
                <p className="text-pearl/30 text-[10px] uppercase tracking-[0.2em] font-semibold mb-1">
                  Direct Line
                </p>
                <p className="text-pearl/70 font-sans text-sm">
                  +1 (212) 555-0198
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                <Mail size={16} className="text-gold" />
              </div>
              <div>
                <p className="text-pearl/30 text-[10px] uppercase tracking-[0.2em] font-semibold mb-1">
                  Email
                </p>
                <p className="text-pearl/70 font-sans text-sm">
                  inquiries@havenly.com
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-[55%]"
        >
          <div className="relative bg-white/[0.03] border border-white/[0.06] rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            {/* Gold accent corner */}
            <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-3xl pointer-events-none">
              <div className="absolute top-0 right-0 w-[1px] h-16 bg-gradient-to-b from-gold/40 to-transparent" />
              <div className="absolute top-0 right-0 h-[1px] w-16 bg-gradient-to-l from-gold/40 to-transparent" />
            </div>

            <h3 className="text-2xl font-serif text-pearl mb-2">
              Private Consultation
            </h3>
            <p className="text-pearl/30 font-sans text-sm mb-10">
              All inquiries are handled with complete discretion.
            </p>

            <form className="space-y-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-4 text-sm text-pearl focus:outline-none focus:border-gold/40 transition-colors placeholder:text-white/20"
                  />
                </div>
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-4 text-sm text-pearl focus:outline-none focus:border-gold/40 transition-colors placeholder:text-white/20"
                  />
                </div>
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-4 text-sm text-pearl focus:outline-none focus:border-gold/40 transition-colors placeholder:text-white/20"
              />
              <input
                type="tel"
                placeholder="Phone Number (Optional)"
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-4 text-sm text-pearl focus:outline-none focus:border-gold/40 transition-colors placeholder:text-white/20"
              />
              <textarea
                placeholder="Tell us about your ideal property..."
                rows={4}
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-4 text-sm text-pearl focus:outline-none focus:border-gold/40 transition-colors placeholder:text-white/20 resize-none"
              />
              <button
                type="submit"
                className="group w-full relative py-4 rounded-full bg-gold text-obsidian font-semibold tracking-[0.15em] text-[11px] uppercase overflow-hidden transition-all duration-500 hover:bg-gold-light hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Submit Inquiry <Send size={13} />
                </span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
